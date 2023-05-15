import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';
import { WordCountType } from '../../utils/fetchData';
import { useState, useEffect } from 'react';

interface Props {
  data: WordCountType;
}

const Histogram = ({ data }: any) => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const chartData = Object.keys(data).map((word) => ({
    word,
    WordCount: data[word],
  }));

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <BarChart width={screenWidth - 50} height={400} data={chartData}>
      <CartesianGrid strokeDasharray='3 3' />
      <XAxis dataKey='word' tick={{ fill: '#fff' }} />
      <YAxis tick={{ fill: '#fff' }} />
      <Tooltip
        contentStyle={{ backgroundColor: '#696eff', borderRadius: '5px' }}
        labelStyle={{ color: 'white' }}
      />

      <Legend />
      <Bar dataKey='WordCount' fill='#ebf4f5' />
    </BarChart>
  );
};

export default Histogram;
