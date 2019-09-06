/******************************************
  A Random Quote Generator - Steven Duval
******************************************/

// Setting variable to store set interval value (timer for printQuote auto run)
var quoteTimer;

// Array of Objects that contains 5 quotes and other information that goes with the quotes
var quotes = [
  {
    quote: 'If you want to know what a man\'s like, take a good look at how he treats his inferiors, not his equals.',
    source: 'J.K. Rowling',
    citation: 'Harry Potter and the Goblet of Fire',
    year: 2000
  },
  {
    quote: 'I have had all the disadvantages required for success.',
    source: 'Larry Ellison',
  },
  {
    quote: 'Most people overestimate what they can do in one year and underestimate what they can do in ten years.',
    source: 'Bill Gates',
    tags: 'inspirational, life'
  },
  {
    quote: 'DNA is like a computer program but far, far more advanced than any software ever created.',
    source: 'Bill Gates',
    citation: 'The Road Ahead',
    year: 1995,
    tags: 'DNA, software, science'
  },
  {
    quote: 'Never trust a computer you can\'t throw out a window',
    source: 'Steve Wozniak'
  },
];


// Generates random number
function getRandomNumber(max) {
  return Math.floor(Math.random() * max);
}

// Generates random quote
function getRandomQuote() {
  var i = getRandomNumber(quotes.length);
  return quotes[i];
}

// Changes the body tag's background color to a randomly generated rgb value
function generateRGB(){
  return 'rgb(' + getRandomNumber(255) + ',' + getRandomNumber(255) + ',' + getRandomNumber(255) + ')'
}

/*
This is the brains of the operation, it does the following once the loadQuote button is clicked : 
  1. Clear the timer information that is stored in the quoteTimer variable
  2. Store random quote object from getRandomQuote function into variable named getQuote
  3. Create an empty string and store it into variable called html 
  4. We then place certain information from the getQuote variable into the html variable (checking if citation and year are not empty)
  5. We then update the background color
  6. We then push all the information in the html variable to an element with the id of quote-box
  7. We then start the timer and store that value in quoteTimer
*/
function printQuote() {
  clearInterval(quoteTimer);
  var getQuote = getRandomQuote();
  var html = '';
  html += '<p class="quote">' + getQuote.quote + '</p>';
  html += '<p class="source">' + getQuote.source;
  if (getQuote.citation != undefined) { html += '<span class="citation">' + getQuote.citation + '</span>';}
  if (getQuote.year != undefined) { html += '<span class="year">' + getQuote.year + '</span>';}
  if (getQuote.tags != undefined) { html += '</p><p class="tags"> tags: ' + getQuote.tags};
  html += '</p>'
  document.body.style.backgroundColor = generateRGB();
  document.getElementById('quote-box').innerHTML = html;
  quoteTimer = setInterval(printQuote, 20000);
}

//run printQuote function when page is loaded
window.onload = function() {
  printQuote();
}

// listens for click event on the loadQuote button and executes the printQuote function
document.getElementById('loadQuote').addEventListener('click', printQuote, false);