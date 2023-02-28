import React,{ useState } from 'react'


export default function TextForm(props) {
    const handleOnChange = (event) =>{
        setText(event.target.value);
        
    }
    const handleOnClickUpper = () =>{
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert(" text is converted to uppercase. ","success");

    }
    const handleOnClickLower = () =>{
      let newText=text.toLowerCase();
      setText(newText);
      props.showAlert(" text is converted to lowercase. ","success");

    }
    const handleOnClickClear = () =>{
      let newText='';
      setText(newText);
      props.showAlert(" text is cleared. ","success");

  }
  const handleOnCopy = () =>{
    var copyText=document.getElementById('textBox');
    copyText.select();
    document.getSelection().removeAllRanges();
    navigator.clipboard.writeText(copyText.value);
    props.showAlert(" text copied to clipboard. ","success");

}
  const handleOnExtraSpace = () =>{
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
    <button disabled={text.length===0} type="button" className="btn btn-primary my-2 mx-1" onClick={handleOnClickUpper}>Convert to Upper Case</button>
    <button disabled={text.length===0} type="button" className="btn btn-primary my-2 mx-1" onClick={handleOnClickLower}>Convert to Lower Case</button>
    <button disabled={text.length===0} type="button" className="btn btn-primary my-2 mx-1" onClick={handleOnExtraSpace}>Remove Extra Space</button>

    <button disabled={text.length===0} type="button" className="btn btn-primary my-2 mx-1" onClick={handleOnClickClear} >Clear Text</button>
    <button disabled={text.length===0} type="button" className="btn btn-primary my-2 mx-1" onClick={handleOnCopy}>Copy Text</button>
   
   </div>
  </form>
</div>
<div className={`container my-2`}>
  <h2>Your text summary:</h2>
  <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} Characters.</p>
  <p>{0.008*text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Minutes to read</p>
  <h2>Preview</h2>
  <p>{text.length>0?text:"Nothing to preview"}</p>
</div>
</>
  )
}
