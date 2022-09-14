
import React, {useState} from "react";

export default function TextForm(props) {
    const handleUpClick = () =>{
        console.log("Uppercase was selected" + text);
        let newText = text.toUpperCase();
        setText (newText)
        props.showAlert("uppercase was selected","success");

    }
    const handleLoClick = () =>{
      console.log("Uppercase was selected" + text);
      let newText = text.toLowerCase();
      setText (newText)
      props.showAlert("lowercase was selected", "success");
    }

    const handleClearClick = () =>{
      //console.log("Uppercase was selected" + text);
      let newText = " "
      setText (newText)
      props.showAlert("Clear text was selected","success");
    }

    const handleOnChange = (event) =>{
        console.log("onChange")
        setText(event.target.value)
    }
  const[text,setText] = useState("");
  return (
    <>
    <div className="container"style = {{color:props.mode ==="dark"?"grey":"black"}}> </div>
    <div style = {{color:props.mode ==="dark"?"grey":"black"}}>
        <h1> {props.heading } </h1>
      <div className="mb-3" style = {{color:props.mode ==="dark"?"white":"white"}}>
        <textarea
          className="form-control"
          value={text}
          onChange = {handleOnChange}
          id="My textbox"
          rows="8"
        ></textarea>
      </div>
      <button className="btn btn-primary mx-2" onClick = 
      { handleUpClick }  > Convert to uppercase</button>

      <button className="btn btn-primary mx-2" onClick = 
      { handleLoClick }  > Convert to lowercase</button>

      <button className="btn btn-primary mx-2" onClick = 
      { handleClearClick }  > Clear all text </button>

      
    </div>
    <div className="container my-3"style = {{color:props.mode ==="dark"?"grey":"black"}}> 
      <h2> Your Text summary</h2>
      <p>{text.split(" ").length} words and {text.length} characters
      </p>
      <p>{0.008 * text.split(" ").length} Minutes read </p>
      <h3> Preview</h3>
      <p>{text.length>0? text :"ENTER YOUR TEXT TO PREVIEW"}</p>
    </div>
    </>
  );
}
