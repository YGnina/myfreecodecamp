$(document).ready(function () {
  // Select DOM elements
  const $quoteText = $('#text');
  const $quoteAuthor = $('#author');
  const $newQuoteBtn = $('#new-quote');
  const $tweetBtn = $('#tweet-quote');
  
  // Fetch random quotes from the API
  function fetchQuotes() {
    fetch('https://api.quotable.io/random')
    .then(response => response.json())
    .then(data => {
      const quote = data;
      $quoteText.text(quote.content);
      $quoteAuthor.text(`- ${quote.author}`);
    });

  }
  
  // Event listener for "New Quote" button
  $newQuoteBtn.on('click', fetchQuotes);
  
  // Initialize with a random quote
  fetchQuotes();
});
