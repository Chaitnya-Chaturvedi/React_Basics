import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=>{
        console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText )
    }

    const handleOnChange = (event)=>{
        console.log("On change");
        setText(event.target.value);
    }

    const handleLowClick = ()=>{
        console.log("Uppercase was clicked" + text);
        let newText = text.toLowerCase();
        setText(newText )
    }    
    const [text, setText] = useState("");
  return (
    <>
    <div className='container'>
      <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="8"></textarea>
        </div>
         <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to uppercase</button>
         <button className="btn btn-primary" onClick={handleLowClick}>Convert to lowercase</button>


    </div>
    <div className="container my-3">
      <h2>Text Summary</h2>
      <p>{text.split(" ").length} words and {text.length} character</p>
      <p>{0.008*text.split(" ").length} mins to read </p>

    </div>
    </>
  )
}
