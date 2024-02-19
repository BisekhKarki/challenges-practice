import React, { useEffect, useState } from "react";
import { VscDebugRestart } from "react-icons/vsc";

function HomeTwo() {
  const [password, setPassword] = useState("");
  const [lengths, setLength] = useState(5);

  const [type, setType] = useState("");

  const up = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const low = "abcdefghijklmnopqrstuvwxyz";
  const spe = "!@#$%^&*_";


  const settingPassword = () => {
    types();
    let newPass = "";
    const randomUpper = up[Math.floor(Math.random() * up.length)];
    const randomLower = low[Math.floor(Math.random() * low.length)];
    const randomNumber = Math.floor(Math.random() * 20);
    const randomSpecial = spe[Math.floor(Math.random() * spe.length)];
    let pass = randomUpper  + randomLower + randomNumber + randomSpecial;
    
    newPass+= pass
    setPassword(newPass);
    
  };

  
  const types = () => {
    const pa = password.length;
    if (pa==0){
      setType('')
    } else if (pa > 0 && pa <8) {
      setType("weak");
    } else if (pa >= 8 && pa < 16) {
      setType("medium");
    } else if (pa >= 16 && pa <= 30) {
      setType("Strong");
    }
  };

  useEffect(() => {
    settingPassword();
  }, []);
  return (
    <>
      <div className="container">
        <div className="top-section">
          <img
            className="image"
            src="https://reactjs-password-generator.vercel.app/static/media/password.41b50a01b4d0a0f2c9ba.gif"
            alt="Locker Image"
          />
          <h2>PASSWORD GENERATOR</h2>
          <p>
            Create strong and secure passwords to keep your account safe{" "}
            <br></br> online.
          </p>
        </div>

        <div className="generator">
          <input className="gen" value={password} />
          <button className="copy" onClick={settingPassword} >
            <VscDebugRestart /> Generate{" "} 
          
          </button>
        </div>
        <span className="span">{type}</span>

        <div className="type">
          <p className="length">Password Length: {lengths}</p>
          <input
            type="range"
            min={5}
            max={30}
            value={lengths}
            onChange={(e) => setLength(e.target.value)}
            className="ran"
            color="#3cc"
          />
        </div>
      </div>
    </>
  );
}

export default HomeTwo;
