import React,{ useState } from 'react'


export default function TextForm(props) {
    const handleOnChange = (event) =>{
        console.log('Change in text ' );
        setText(event.target.value);
        
    }
    const handleOnClickUpper = () =>{
        console.log('Convert to uppercase button has clicked.' + text);
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert(" text is converted to uppercase. ","success");

    }
    const handleOnClickLower = () =>{
      console.log('Convert to Lower case button has clicked.' + text);
      let newText=text.toLowerCase();
      setText(newText);
      props.showAlert(" text is converted to lowercase. ","success");

    }
    const handleOnClickClear = () =>{
      console.log('Clear Text button has clicked.');
      let newText='';
      setText(newText);
      props.showAlert(" text is cleared. ","success");

  }
  const handleOnCopy = () =>{
    console.log('Copy Text button has clicked.');
    var copyText=document.getElementById('textBox');
    copyText.select();
    navigator.clipboard.writeText(copyText.value);
    props.showAlert(" text copied to clipboard. ","success");

}
  const handleOnExtraSpace = () =>{
    console.log('Remove Extra Space button has clicked.');
    let newText= text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert(" Extra space has boon removed!. ","success");

}
    const [text, setText] = useState('');
    
  return (
    <>
 <div className={`container my-3 bg-${props.mode}`}>
  <form> 
   <div className="form-group ">
    <h1>{props.heading}</h1>
    <textarea className={`form-control bg-${props.mode} text-${props.mode==='light'?'dark':'light'}`} value={text} id="textBox" rows="8" onChange={handleOnChange} ></textarea>
    <button type="button" className="btn btn-primary my-3 mx-1" onClick={handleOnClickUpper}>Convert to Upper Case</button>
    <button type="button" className="btn btn-primary my-3 mx-1" onClick={handleOnClickLower}>Convert to Lower Case</button>
    <button type="button" className="btn btn-primary my-3 mx-1" onClick={handleOnExtraSpace}>Remove Extra Space</button>

    <button type="button" className="btn btn-primary my-3 mx-1" onClick={handleOnClickClear} >Clear Text</button>
    <button type="button" className="btn btn-primary my-3 mx-1" onClick={handleOnCopy}>Copy Text</button>
   
   </div>
  </form>
</div>
<div className={`container my-2`}>
  <h2>Your text summary:</h2>
  <p>{text.split(" ").length} words and {text.length} Characters.</p>
  <p>{0.008*text.split(" ").length} Minutes to read</p>
  <h2>Preview</h2>
  <p>{text.length>0?text:"Enter some text in Text Box to preview it here..."}</p>
</div>
</>
  )
}
