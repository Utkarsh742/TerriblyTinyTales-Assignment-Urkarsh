# Project Structure
This is a ReactJs Based project, it fetches a piece of text from the `https://www.terriblytinytales.com/test.txt` endpoint and breaks it down into various words and then does several things.
* Displays all the words along with their frequency in a box form.
* Displays the top 20 most occuring words into a histogram chart.
* Enables the viewer to download the list of words in `.csv` format with the click of a button.

## It includes several re-usable components and utilty function to complete the functionality
### Components
* **StartScreen Component** - A interactive Welcome Screen to welcome the users and take them to the main Word Analyzer Component.
* **WordAnalyzer Component** - A Fully functional Word Analyzer Component, which starts with fetching all the words and a list of top 20 most occuring words from the given endpoint using a utlity function `fetchData().` And then it lists the complete word list in a box form, thereafter it displays a chart of 20 most occuring words in the text available at the given endpoint. Finally it displays a export button to export the list of words
* **Histogram Component** - Component responsible for histogram graph using the library `re-charts`.

### Utility functions
* **fetchData()** - Visits the given endpoint and fetches the given text, performs several operations with the help of several lsub-functions inside it to promote code readability, and returns the list5 of words.
* **exportCSV()** - A function which enables us to download the word data into a CSV file.

## Libraries/Plugins Used :
1. React Router Dom
2. React Re-Charts

## Deployement : [https://utkarsh-at-tinytales.netlify.app/](https://utkarsh-at-tinytales.netlify.app/)
