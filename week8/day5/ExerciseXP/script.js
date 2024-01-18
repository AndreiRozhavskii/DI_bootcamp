const quotes = [
    { id: 0, author: "Walt Disney", quote: "The way to get started is to quit talking and begin doing.", likes: 0 },
    { id: 1, author: "James Cameron", quote: "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success.", likes: 0 },
    { id: 2, author: "Steve Jobs", quote: "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma - which is living with the results of other people's thinking.", likes: 0 },
    { id: 3, author: "Benjamin Franklin", quote: "Well done is better than well said.", likes: 0 },
    { id: 4, author: "Oscar Wilde", quote: "Be yourself; everyone else is already taken.", likes: 0 }
    ];
    
    
const quoteSection = document.getElementById("quote-section");
const quote = document.getElementById("quote");
const author = document.getElementById("author");
const generateQuote = document.getElementById("generate-quote");
const addQuoteForm = document.getElementById("add-quote-form");
const newQuote = document.getElementById("new-quote");
const newAuthor = document.getElementById("new-author");
const countCharactersWithSpace = document.getElementById("count-characters-with-space");
const countCharactersWithoutSpace = document.getElementById("count-characters-without-space");
const countWords = document.getElementById("count-words");
const likeQuote = document.getElementById("like-quote");
const filterQuoteForm = document.getElementById("filter-quote-form");
const filterAuthor = document.getElementById("filter-author");
const previousQuote = document.getElementById("previous-quote");
const nextQuote = document.getElementById("next-quote");    
    
let currentQuoteIndex = -1;
    
    
function getQuote() {
    
    let randomIndex;
    do {
    randomIndex = Math.floor(Math.random() * quotes.length);
    } 
    while (randomIndex === currentQuoteIndex);
    currentQuoteIndex = randomIndex;
    let quoteObject = quotes[randomIndex];
    quote.textContent = quoteObject.quote;
    author.textContent = "- " + quoteObject.author;
    }
    
    
function addQuote(event) {
    event.preventDefault();
    let quoteValue = newQuote.value;
    let authorValue = newAuthor.value;
    let newQuoteObject = {
    id: quotes.length,
    author: authorValue,
    quote: quoteValue,
    likes: 0
    };
    quotes.push(newQuoteObject);
    newQuote.value = "";
    newAuthor.value = "";
    alert("Your quote has been added!");
    }
    
    
function countWithSpace() {
    
    let quoteObject = quotes[currentQuoteIndex];
    let quoteLength = quoteObject.quote.length;
    quote.textContent = `The quote has ${quoteLength} characters (space included).`;
    author.textContent = "";
    }
    
    
function countWithoutSpace() {
    
    let quoteObject = quotes[currentQuoteIndex];
    let quoteString = quoteObject.quote.replace(/\s/g, "");
    let quoteLength = quoteString.length;
    quote.textContent = `The quote has ${quoteLength} characters (space not included).`;
    author.textContent = "";
    }
    
    
function countW() {
    
    let quoteObject = quotes[currentQuoteIndex];
    let quoteWords = quoteObject.quote.split(" ");
    let wordCount = quoteWords.length;
    quote.textContent = `The quote has ${wordCount} words.`;
    author.textContent = "";
    }
    
    
function countL() {

    let quoteObject = quotes[currentQuoteIndex];
    quoteObject.likes++;
    quote.textContent = `You liked this quote! It has ${quoteObject.likes} likes.`;
    author.textContent = "";
    }

function filterQuote(event) {
        
    event.preventDefault();
    let authorValue = filterAuthor.value;
    filteredQuotes = quotes.filter((quote) => quote.author === authorValue);

    if (filteredQuotes.length > 0) {
        currentQuoteIndex = 0;
        let quoteObject = filteredQuotes[currentQuoteIndex];
        quote.textContent = quoteObject.quote;
        author.textContent = "- " + quoteObject.author;
        
        
        previousQuote.disabled = false;
        nextQuote.disabled = false;
    } 
    else {       
        quote.textContent = "No quotes were found by this author.";
        author.textContent = "";
        previousQuote.disabled = true;
        nextQuote.disabled = true;
        }
        
        filterAuthor.value = "";
        }
        
function showPreviousQuote() {
    if (currentQuoteIndex > 0) {
        currentQuoteIndex--;
        let quoteObject = filteredQuotes[currentQuoteIndex];
        quote.textContent = quoteObject.quote;
        author.textContent = "- " + quoteObject.author;
        }
        }

function showNextQuote() {
        
        if (currentQuoteIndex < filteredQuotes.length - 1) {
        currentQuoteIndex++;
        let quoteObject = filteredQuotes[currentQuoteIndex];
        quote.textContent = quoteObject.quote;
        author.textContent = "- " + quoteObject.author;
        }
        }   

generateQuote.addEventListener("click", getQuote);
addQuoteForm.addEventListener("submit", addQuote);
countCharactersWithSpace.addEventListener("click", countWithSpace);
countCharactersWithoutSpace.addEventListener("click", countWithoutSpace);
countWords.addEventListener("click", countW);
likeQuote.addEventListener("click", countL);
filterQuoteForm.addEventListener("submit", filterQuote);
previousQuote.addEventListener("click", showPreviousQuote);
nextQuote.addEventListener("click", showNextQuote);
    
    
getQuote();
    