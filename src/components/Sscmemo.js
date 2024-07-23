import React, { useEffect, useRef } from 'react';

function Sscmemo() {
    let firstNameInputRef = useRef();
    let lastNameInputRef = useRef();
    let telInputRef = useRef();
    let engInputRef = useRef();
    let hindiInputRef = useRef();
    let mathsInputRef = useRef();
    let sciInputRef = useRef();
    let socInputRef = useRef();
    let resultParaRef = useRef();

    let firstNameResultRef = useRef();
    let lastNameResultRef = useRef();
    let telResultRef = useRef();
    let engResultRef = useRef();
    let hindiResultRef = useRef();
    let mathsResultRef = useRef();
    let sciResultRef = useRef();
    let socResultRef = useRef();

    useEffect(()=>{
      alert("Welcome to the mark sheet page");
    },[])
 
    return (
  <div>
  <form >
    <h1>marks sheet</h1>
  <div>
    <div>
        <label>First Name:</label>
        <input type="text" ref={firstNameInputRef}onFocus={()=>{console.log("First Name-onFocus");
         firstNameInputRef.current.style.backgroundColor="yellow"

        }} onChange={()=>{console.log("First Name-onChange");

        }} onBlur={()=>{console.log("First Name-onBlur");
         firstNameInputRef.current.style.backgroundColor="red"
        }}></input>
        <span ref={firstNameResultRef}></span>
     </div>
        <label>Last Name:</label>
        <input type="text" ref={lastNameInputRef }onFocus={()=>{console.log("Last Name-onFocus");
         lastNameInputRef.current.style.backgroundColor="yellow"

        }} onChange={()=>{console.log("Last Name-onChange");

        }} onBlur={()=>{console.log("Last Name-onBlur");
         lastNameInputRef.current.style.backgroundColor="red"
        }}></input>
        <span ref={lastNameResultRef}></span>
     </div>
     <div>
        <label>Telugu</label>
        <input type="number" ref={telInputRef}onFocus={()=>{console.log("Telugu-onFocus");
         telInputRef.current.style.backgroundColor="yellow"

        }} onChange={()=>{telResultRef.current.innerHTML = telInputRef.current.value >=35?"Pass":"Fail";
          telResultRef.current.style.backgroundColor = telInputRef.current.value >=35?"green":"red";

        }} onBlur={()=>{console.log("Telgu-onBlur");
         telInputRef.current.style.backgroundColor="red"
        }}></input>
        <span ref={telResultRef}></span>
     </div>
     <div>
        <label>English</label>
        <input type="number" ref={engInputRef}onFocus={()=>{console.log("English-onFocus");
         engInputRef.current.style.backgroundColor="yellow"

        }} onChange={()=>{engResultRef.current.innerHTML = engInputRef.current.value >=35?"Pass":"Fail";
         engResultRef.current.style.color = engInputRef.current.value >=35?"green":"red";


        }} onBlur={()=>{console.log("English-onBlur");
         engInputRef.current.style.backgroundColor="Red"
        }}></input>
        <span ref={engResultRef}></span>
     </div>
     <div>
        <label>Hindi</label>
        <input type="number" ref={hindiInputRef}onFocus={()=>{console.log("Hindi-onFocus");
          hindiInputRef.current.style.backgroundColor="yellow"

        }} onChange={()=>{hindiResultRef.current.innerHTML = hindiInputRef.current.value >=35?"😎":"😞"

        }} onBlur={()=>{console.log("Hindi-onBlur");
           hindiInputRef.current.style.backgroundColor="red"
        }}></input>
        <span ref={hindiResultRef}></span>
     </div>
     <div>
        <label>Maths</label>
        <input type="number" ref={mathsInputRef}onFocus={()=>{console.log("Maths-onFocus");
          mathsInputRef.current.style.backgroundColor="yellow"

        }} onChange={()=>{mathsResultRef.current.innerHTML = mathsInputRef.current.value >=35?"good":"next time"

        }} onBlur={()=>{console.log("Maths-onBlur");
           mathsInputRef.current.style.backgroundColor="red"
        }}></input>
        <span ref={mathsResultRef}></span>
     </div>
     <div>
        <label>Science</label>
        <input type="number"ref={sciInputRef} onFocus={()=>{console.log("Science-onFocus");
         sciInputRef.current.style.backgroundColor="yellow"

        }} onChange={()=>{sciResultRef.current.innerHTML = sciInputRef.current.value >=35?"Pass":"Fail"

        }} onBlur={()=>{console.log("Science-onBlur");
           sciInputRef.current.style.backgroundColor="red"

        }}></input>
        <span ref={sciResultRef}></span>
     </div>
     <div>
        <label>Social</label>
        <input type="number" ref={socInputRef}onFocus={()=>{console.log("Social-onFocus");
         socInputRef.current.style.backgroundColor="yellow"

        }} onChange={()=>{socResultRef.current.innerHTML = socInputRef.current.value >=35?"Pass":"Fail"

        }} onBlur={()=>{console.log("Social-onBlur");
           socInputRef.current.style.backgroundColor="red"

        }}></input>
        <span ref={socResultRef}></span>
     </div>
     <div>
        <button type="button" onMouseMove={()=>{
            let firstName = firstNameInputRef.current.value;
            let lastName = lastNameInputRef.current.value;
            let telMarks = Number(telInputRef.current.value);
            let engMarks = Number(engInputRef.current.value);
            let hindiMarks = Number(hindiInputRef.current.value);
            let mathsMarks = Number(mathsInputRef.current.value);
            let sciMarks = Number(sciInputRef.current.value);
            let socMarks = Number(socInputRef.current.value);

            let totalMarks = telMarks+engMarks+hindiMarks+mathsMarks+sciMarks+socMarks;
          //alert(enginputRef.current.value);
          alert(`Total Marks are ${totalMarks}`);
          resultParaRef.current.innerHTML = `${firstName} ${lastName} got total Marks are ${totalMarks}`;
          console.log(totalMarks);


        }}>Calculate Result</button>
     </div>
    <p ref={resultParaRef}>Please Enter values and Click Calculate</p>
    </form>
    </div>
  )
}

export default Sscmemo