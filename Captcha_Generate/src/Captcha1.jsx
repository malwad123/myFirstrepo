import { useState } from "react"
import React from "react";



function Captcha1()
 {


let[captcha1,setCaptcha1]=useState();
let[userInput,setUserInput]=useState();


function generateCaptcha(){


let smallletter="abcdefghijklmnopqrstuvwxyz";
let capitalletter="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let specialchar="@#$";
let number="123456789"



let randomsmallletter=smallletter[Map.floor(Map.random*smallletter.length)];
let randomcapitallletter=capitalletter[Map.floor(Map.random*capitalletter.length)];
let randomspecialchar=specialchar[Map.floor(Map.random*specialchar.length)];
let randomnumber=number[Map.floor(Map.random*number.length)];


let result=randomsmallletter + randomcapitallletter + randomspecialchar + randomnumber;

function checkMatch1()
{

if(captcha1===userInput)
    {

        alert("matched");
    }
    else{

        alert("ummatched");
    }

}

}


return(

    <>
    
    <input type="text" value={generateCaptcha}/>
    <button onClick={generateCaptcha}>Generate</button>


    <input type="text" 
    value={userInput}
    onChange={(e)=>userInput(e.target.value)}
    placeholder="enter value to check"/>

    <button onClick={checkMatch1}>Verify</button>
       
    </>
)

}

export default Captcha1;