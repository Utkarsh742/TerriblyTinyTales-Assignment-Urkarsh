import { WordCountType } from "./fetchData";

export const exportCSV = (data: WordCountType) => {
  const csvData = Object.entries(data)
    .map(([key, value]) => `${key},${value}`)
    .join('\n');

  const blob = new Blob([csvData], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.setAttribute('href', url);
  link.setAttribute('download', 'histogram.csv');
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
