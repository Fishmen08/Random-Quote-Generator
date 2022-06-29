
import './App.css';
import React, {useState} from 'react';

const quoteBank = [
  {
    quote: 'The greatest glory in living lies not in never falling, but in rising every time we fall.',
    author: 'Nelson Mandela'
  },
  {
    quote: 'The way to get started is to quit talking and begin doing.',
    author: 'Walt Disney'
  },
  {
    quote: "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma, which is living with the results of other people's thinking.",
    author: 'Steve Jobs'
  },
]

function App() {
  const num = Math.floor(Math.random() * quoteBank.length);
  const [quote, setQuote] = useState({quote: quoteBank[num].quote, author: quoteBank[num].author});

  function generateQuote() {
    setQuote(quoteBank[Math.floor(Math.random() * quoteBank.length)]);    
  }

  return (
    <div className="App">
     <div className='wrapper' id='quote-box'>
      <div id='text'><p><i class="fa-solid fa-quote-left"></i> {quote.quote}</p></div>
      <div id='author'><p>- {quote.author}</p></div>
      <div className='box'>
      <div ><a id='tweet-quote' href='twitter.com/intent/tweet'><i class="fa-brands fa-twitter-square"></i></a></div>
      <div id='new-quote'><button onClick={generateQuote}>New Quote</button></div>
      
      </div>
     </div>
    </div>
  );
}

export default App;
