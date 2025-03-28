const apiURL = "http://api.quotable.io/random";
const quote = document.getElementById("quote");
const author = document.getElementById("author");

async function getQuote(url) {
    const response = await fetch(url);
    var data = await response.json();

    quote.innerHTML = data.content;
    author.innerHTML = data.author;
}
getQuote(apiURL);

function tweet() {
    window.open("https://twitter.com/intent/tweet?text=" + quote.innerHTML + "---- by" + author.innerHTML, "width = 600, height = 300");
}
