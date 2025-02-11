
import React from "react";
import { useState } from "react";




function Captcha()
{

let[captcha , setCaptcha]=useState("");
let[userInput , setUserInput]=useState('');
let[showdata,setShowdata]=useState(false);

function generateCaptcha()

{
//shraddha malwad
let char='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
let smallchar='abcdefghijklmnopqrstuvwxyz';
let specialchar='@#&$';
let number='123456789';


let randomchar=char[Math.floor(Math.random()*char.length)];
let randomsmallchar=smallchar[Math.floor(Math.random()*smallchar.length)];
let randomspecialchar=specialchar[Math.floor(Math.random()*specialchar.length)];
let randomnumber=number[Math.floor(Math.random()*number.length)];


let result =randomchar+ randomsmallchar + randomspecialchar + randomnumber;
setCaptcha(result);

// console.log("[Math.floor(Math.random()*smallchar.length)",(Math.floor(Math.random()*char.length)));


}


function checkMatch(){

    if(captcha===userInput)
        {

     alert("matched data");

    }

    else{

        alert("unmatched data");
    }

}
function handleHide(){

let a=userInput.split('');
console.log(a);


let array=[];
for (let i = 0; i < userInput.length; i++)
{
 array.push('*')
}

console.log(array.join(''));


// setUserInput(array.join(''))

if(showdata==false){
    setUserInput(array.join(''))
    setShowdata(!showdata);
}
else{
    setUserInput(captcha)
    // console.log(b);
    setShowdata(!showdata);
}
// setShowdata(!showdata);



}
return(

<>

<input type="text" value={captcha} />
<button onClick={generateCaptcha}>Generate</button> 
<br></br> 

<input type="text"
value={userInput}
onChange={(e)=>setUserInput(e.target.value)}
placeholder="enter value to match"
/>


<button onClick={checkMatch}>Verify</button>
<button onClick={handleHide}>{showdata?"show":"Hide"}</button>  


 
</>

 
)

}
export default Captcha;