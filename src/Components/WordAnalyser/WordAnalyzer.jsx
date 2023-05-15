import React, { useEffect, useState } from 'react';
import './WordAnalyzer.css';
const WordAnalyzer = () => {
  const [histogramData, setHistogramData] = useState([]);
  
  useEffect(() => {
    fetchData();
    }, []);
  const fetchData = async () => {
    try {
      const response = await fetch('https://www.terriblytinytales.com/test.txt');
      const text = await response.text();
      const words = text.split(/\s+/);
      const wordCounts = {};
    const format= /[!@0123456#$%^&*()_+–\-=\[\]{};':"\\|,.<>\/?]/;

      words.forEach((word) => {
        
        if(format.test(word)===false)   
        {
        word = word.toLowerCase();
        wordCounts[word] = (wordCounts[word] || 0) + 1;
        }
      });

      const sortedData = Object.entries(wordCounts)
        .sort((a, b) => b[1] - a[1])
        var data = Object.entries(wordCounts)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 20);
      setHistogramData(sortedData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
   
  const exportCSV = () => {
    const csvContent = 'data:text/csv;charset=utf-8,';
    const headerRow = 'Word,Count\n';
    const csvRows = histogramData.map(([word, count]) => `${word},${count}\n`);
    const csv = csvContent + headerRow + csvRows.join('');
    const encodedURI = encodeURI(csv);
    const link = document.createElement('a');
    link.setAttribute('href', encodedURI);
    link.setAttribute('download', 'histogram.csv');
    document.body.appendChild(link);
    link.click();
  };
  
  return (
    <div>
      {histogramData.length > 0 && (
        <div className='content-cover'>
          <h1>Word Frequency Histogram</h1>
          {/* <ul>
            {histogramData.map(([word, count]) => (
              <li key={word}>
                {word}: {count}
              </li>
            ))}
          </ul> */}
          <div className="word-frequency-list">
      {histogramData.map(([word,count]) => (
        <div key={word} className="word-frequency-item">
          <span className="word">{word} : </span>
          <span className="frequency">{count}</span>
        </div>
      ))}
    </div>
          <div className='footer-cover'>
          <button onClick={exportCSV}>Export</button>
        </div>
        </div>
      )}
    </div>
  );
};

export default WordAnalyzer;