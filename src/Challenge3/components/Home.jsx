import React, { useEffect, useState } from "react";
import { ImQuotesRight } from "react-icons/im";
import { FaCircleChevronLeft, FaCircleChevronRight } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
const quotes = [
  {
    quote:
      "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    author: "Nelson Mandela",
  },
  {
    quote: "The way to get started is to quit talking and begin doing.",
    author: "Walt Disney",
  },
  {
    quote: "Don't let what you cannot do interfere with what you can do.",
    author: "John Wooden",
  },
  {
    quote: "It is never too late to be what you might have been.",
    author: "George Eliot",
  },
  {
    quote: "The only way to do great work is to love what you do.",
    author: "Steve Jobs",
  },
  {
    quote: "If you can dream it, you can do it.",
    author: "Walt Disney",
  },
  {
    quote: "Where there is a will, there is a way.",
    author: "Florence Nightingale",
  },
  {
    quote:
      "The only person you are destined to become is the person you decide to be.",
    author: "Ralph Waldo Emerson",
  },
  {
    quote: "Everything you've ever wanted is on the other side of fear.",
    author: "George Addair",
  },
  {
    quote: "Believe that you can and you're halfway there.",
    author: "Theodore Roosevelt",
  },
];

function Home() {
  const [quot, setQuote] = useState(
    "Don't believe in talents, work hard and you will achieve anything "
  );

  const [person, setPerson] = useState("Bisekh");

  const [value, setValue] = useState(0);

  const setting = () => {
    let newQuote = quotes[value];
    setQuote(newQuote.quote);
    setPerson(newQuote.author);
  };

  useEffect(() => {
    setting();
  }, [quotes]);

  const rightClick = () => {
    setValue(value + 1);
    console.log(value);
    if (value >= quotes.length) {
      setValue(0);
    } else {
      let newQuote = quotes[value];
      setQuote(newQuote.quote);
      setPerson(newQuote.author);
    }
  };
  const leftClick = () => {
    if (value == 0) {
      setValue(quotes.length);
    } else {
      setValue(value - 1);
      console.log(value);
      let newQuotes = quotes[value];
      setQuote(newQuotes.quote);
      setPerson(newQuotes.author);
    }
  };

  return (
    <>
      <div className="container">
        <div className="child">
          <div className="quote-icon">
            <ImQuotesRight />
          </div>
          <div className="quote">
            <p>{quot}</p>
            <p>-{person}</p>
          </div>

          <div className="bottom">
            <div className="button">
              <button>
                <FaCircleChevronLeft
                  className="left"
                  onClick={() => leftClick()}
                />
              </button>
              <button>
                <FaCircleChevronRight onClick={() => rightClick()} />
              </button>
            </div>
            <div className="medias">
              <span>Share At: </span>
              <FaTwitter className="twitter" />
              <FaWhatsapp className="whatsapp" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
