import React, { useState } from "react"; 

const quotes = [
    "The only thing we have to fear is fear itself.",
    "Courage is being scared to death, but saddling up anyway.",
    "If you cannot do great things, do small things in a great way.",
    "Well done is better than well said.",
    "The way to get started is to quit talking and begin doing."
];

export default function QuoteGenerator() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [quote, setQuote] = useState("Click the button");

    function getRandomQuote() {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        return quotes[randomIndex];
    }


    function nextQuoteChange() {
        setCurrentIndex((nextIndex) => (nextIndex + 1) % quotes.length);
        setQuote(quotes[(currentIndex + 1) % quotes.length]);
    }

    function prevQuoteChange() {
        setCurrentIndex((nextIndex) => (nextIndex - 1) % quotes.length);
        setQuote(quotes[(currentIndex - 1) % quotes.length]);
    }

    function randomQuoteChange() {
        setQuote(getRandomQuote());
        setCurrentIndex(quotes.indexOf(quote)); 
    }

    return (
        <div className="quote-generator-container">
            <h1>Quote Generator</h1>
            <div className="quote-display">
                <p>"{quote}"</p>
            </div>
            <button className="previews" onClick={prevQuoteChange}>Previews Quote</button>
            <button className="randomize" onClick={randomQuoteChange}>Randomize</button>
            <button className="next" onClick={nextQuoteChange}>Next Quote</button>
            </div>
    );
}
