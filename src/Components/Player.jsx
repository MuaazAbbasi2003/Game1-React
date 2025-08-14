
import { useState } from "react";


export default function Player({pName,pSymbol,isActive}){
    const [changeButton,setchangeButton]=useState(false);
    const[changeButtonName,setchangeButtonName]=useState(pName);

    function HandleChange(){
        setchangeButton((muaaz)=>!muaaz);
    };
    function HandleChange2(event){
        setchangeButtonName(event.target.value);


    };
    const truth= changeButton ? <input type="text" required value={changeButtonName} onChange={HandleChange2} />:<span className="player-name">{changeButtonName}</span>
    const agree=!changeButton ? "Edit":"Save"
    
    return ( 
      <li className={isActive ? "active":undefined}>
          <span className="player">
            {truth}
            <span className="player-symbol">{pSymbol}</span>
          </span>
          <button onClick={HandleChange}>{agree}</button>
        </li>
        );
};