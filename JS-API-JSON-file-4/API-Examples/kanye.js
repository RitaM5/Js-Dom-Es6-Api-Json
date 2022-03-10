const loadQuotes = () => {
    fetch('https://api.kanye.rest/') //kanye.rest search kore ai link asbe.
    .then(res => res.json())
    .then(data => displayQuote(data));
};

const displayQuote = quote => {
     //console.log(quote.quote);
     const quoteElement = document.getElementById('qoute');
     quoteElement.innerText = quote.quote;
}