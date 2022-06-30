
import './App.css';
import React, {useEffect, useState} from 'react';


function App() {
  const [quote, setQuote] = useState({});
  const url = 'https://api.quotable.io/random'
  
  async function updateQuote() {
    const response = await fetch(url);
    const json = await response.json();
    console.log(json)
    console.log(json.content);
    console.log(json.author);
    setQuote(json);
  }

  useEffect(() => {
    updateQuote();
  }, [])

  return (
    <div className="App">
     <div className='wrapper' id='quote-box'>
      <div id='text'><p><i class="fa-solid fa-quote-left"></i> {quote.content}</p></div>
      <div id='author'><p>- {quote.author}</p></div>
      <div className='box'>
      <div ><a id='tweet-quote' href='twitter.com/intent/tweet'><i class="fa-brands fa-twitter-square"></i></a></div>
      <div id='new-quote'><button onClick={updateQuote}>New Quote</button></div>
      
      </div>
     </div>
    </div>
  );
}

export default App;
