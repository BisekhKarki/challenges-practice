// import React, { useEffect, useState } from "react";
// import { LiaPagerSolid } from "react-icons/lia";
// import { FaTwitter } from "react-icons/fa";
// import { FaLinkedinIn } from "react-icons/fa6";
// function Home() {
//   const [typing, setTyping] = useState("");
//   const [words, setWords] = useState(0);
//   const [characters, setCharacters] = useState(0);
//   const [sentences, setSentences] = useState(0);
//   const [paragraphs, setParagraphs] = useState(0);

//   const settingWord = () => {
//     setWords(typing.split(" ").length - 1);
//     setCharacters(typing.length);
//     setSentences(typing.split(".").length - 1);
//     setParagraphs(typing.split("\n").length-1);

//   };
//   useEffect(() => settingWord(), [typing]);

//   return (
//     <>
//       <div className="navigation">
//         <nav>
//           <h1>Text Analyser</h1>
//           <div className="icons">
//             <LiaPagerSolid />
//             <FaTwitter />
//             <FaLinkedinIn />
//           </div>
//         </nav>
//       </div>
//       <div className="count">
//         <div className="display">
//           <p>
//             Words <br></br> <span> {words}</span>{" "}
//           </p>
//           <p>
//             Characters<br></br> <span> {characters}</span>{" "}
//           </p>
//           <p>
//             Sentences <br></br> <span> {sentences}</span>{" "}
//           </p>
//           <p>
//             Paragraphs <br></br> <span> {paragraphs}</span>{" "}
//           </p>
//           <p>
//             Pronouns <br></br> <span> {0}</span>{" "}
//           </p>
//         </div>
//         <div className="text">
//           <textarea
//             placeholder="Paste your text here"
//             value={typing}
//             onChange={(e) => setTyping(e.target.value)}
//           ></textarea>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Home;

