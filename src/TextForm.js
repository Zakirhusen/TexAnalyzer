import React, { useState } from "react";

const TextForm = (props) => {
  const [text, setText] = useState("");

  let textCheck=text.split(/\s+/).filter((elem)=>(elem.length!==0)).join(' ');
  let numOfWords=text.split(/\s+/).filter((elem) => elem.length !== 0).length;
  // console.log(textCheck)
  const toUpper = (e) => {
    console.log(text.length)
    // if user enter white space or not enter any text
    if (textCheck) {
      let upText = text.toUpperCase();
      setText(upText);
      props.displayAlert('Converted to uppercase','success')
    } else {
      props.displayAlert('Enter some text to convert in uppercase') 
    }
  };
  
  const toLpper = (e) => {
    if (textCheck) {
      const loText = text.toLowerCase();
      setText(loText);
      props.displayAlert('Converted to uppercase','success')
    } else {
      props.displayAlert('Enter some text to convert in lowercase')
    }
  };
  const handleCopy = () => {
    if (textCheck) {
      let copyText = document.getElementById("myTextArea");
      // alert("copied text is: " + " " + copyText.value);
      copyText.select();
      navigator.clipboard.writeText(copyText.value);
      document.getSelection().removeAllRanges();
      props.displayAlert('Text is copied to clipboard','success')
    } else {
      props.displayAlert('Nothing to copy')
    }
  };
  const RemoveExtraSpces=() => {
    if (text.split(/\s+/).filter((elem)=>(elem.length!==0)).join(' ')) {
      setText(text.split(/\s+/).filter((elem)=>{
        // console.log(elem.length,elem)
      return elem.length!==0}).join(' '))
      props.displayAlert('Extra spaces are removed','success')
    } else {
      props.displayAlert('Enter some text to perform this task') 
    }
  }
  const Clear=() => {
    if (textCheck) {
      setText('')
      props.displayAlert('Text area is cleared','success')
    } else {
      props.displayAlert('Text area is already clean') 
    }
  }
  return (
    <>
      <div className="container center my-3">
        <div className="mb-3">
          <label htmlFor="myTextArea" className="form-label">
            <h3 className={`text ${props.mode==='light'?'text-dark':'text-light'}`}>Enter text below to analyze </h3>
          </label>
          <textarea
            className={`form-control ${props.mode==='light'?'text-dark bg-light':'bg-dark bg-opacity-50 text-light'}`}
            id="myTextArea"
            rows="6"
            value={text}
            onChange={(e) => {
              setText(e.target.value);
            }}
          ></textarea>
        </div>
        <button className="btn btn-dark mx-0 my-0" onClick={toUpper}>
          ToUppercase
        </button>
        <button className="btn btn-dark mx-2 my-1" onClick={toLpper}>
          ToLowercase
        </button>
        <button className="btn btn-dark mx-2 my-1" onClick={handleCopy}>
          Copy
        </button>
        <button className="btn btn-dark mx-2 my-1" onClick={RemoveExtraSpces}>
          Remove Extra Spaces
        </button>
        <button className="btn btn-dark mx-2 my-1" onClick={Clear}>
            Clear
        </button>

      </div>
      <div className={`text container ${props.mode==='light'?'text-dark':'text-light'}`}>
        <h1>Your text summary</h1>
        <p>
          {text.length} chars with WHITE SPACES {","}
          {/* here regex is used for seperator for matching white space ,newline ,tab etc */}
          {text.split(/\s+/).join('').length} chars without WHITE SPACES and{" "}
          {numOfWords} words{" "}
        </p>
        <p>
          {" "}
          {(1 / 125) *
            numOfWords}{" "}
          Minutes to read{" "}
        </p>
        <h2>Preview</h2>
        <p>{text?text:'Enter text above to preview'}</p>
      </div>
    </>
  );
};

export default TextForm;
