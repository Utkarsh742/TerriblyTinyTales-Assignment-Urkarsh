import { useState, useEffect } from 'react';
import { WordCountType, fetchData, totalWordsObj } from '../../utils/fetchData';
import {Histogram} from '../'
import './wordAnalyzer.css';
import { exportCSV } from '../../utils/exportCSV';

const WordAnalyzer = () => {
  const [histogramData, setHistogramData] = useState<WordCountType>();

  useEffect(() => {
    const fetchDataAndSetData = async () => {
      const topOccuringWords = await fetchData();
      topOccuringWords && setHistogramData(topOccuringWords);
    };
    fetchDataAndSetData();
  }, []);

  if (!histogramData) return <></>;

  return (
    <div className='word-analyzer-outer-container'>
      <div className='word-analyzer-container'>
        <h1>Word Frequency Histogram</h1>
        <div className='words'>
          {Object.entries(totalWordsObj).map(([word, count]) => (
            <div className='word-frequency-item' key={word}>
              <span className='word'>{word}: </span>
              <span className='frequency'>{count}</span>
            </div>
          ))}
        </div>
      </div>
      <div className='histogram-chart'>
        <h2>Histogram Chart of Top Occuring Words</h2>
        <Histogram data={histogramData} />
      </div>

      <div className='download-csv-button'>
        <button onClick={() => exportCSV(histogramData)}>Export Data</button>
      </div>
    </div>
  );
};

export default WordAnalyzer;
