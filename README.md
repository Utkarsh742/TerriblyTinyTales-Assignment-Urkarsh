# Project Structure 
This is a react project and is divided into multiple components where, the code is written in Tsx(TypeScript XML). It uses React Routing for page navigation and React re-charts for displaying the data of top 20 most occuring words along with their names in a histogram chart with downloadable data. 

## The Component Based Structuring Includes : 
1. **The Home Page Component** : The home page where the submit button will exist. It also has an interactive Ui.
2. **The WordAnalyzer Component** : This component fetches and stores the words(provided from the given API Endpoint) and the number of times they occurred into an array(removing any unnecessary words) and displays them accordingly. Thereafter top 20 words with largest occurences are stored in another array and taking the words on x-axis and their occurrences on y-axis, a histogram is rendered with the help of React Re-Charts. Post this an export button is displayed which when clicked creates a data URI with the media type, encoding and data of the histogram in csv format and downloads it instantly for the user.

## Libraries/Plugins Used : 
1. React Router Dom
2. React Re-Charts

## Deployement : [https://sample.netlify.com](https://sample.netlify.com)
