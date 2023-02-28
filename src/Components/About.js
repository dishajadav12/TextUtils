import React from 'react'

export default function About(props) {
  
   
  return (

    <div className={`container my-5' bg-${props.mode}`} >
       <h2 className='my-4'>About Us</h2>
        <div className="accordion" id="accordionExample">
    <div className="accordion-item my-1">
     
      <h2 className="accordion-header" id="headingOne">
        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
          Analyze your Text
        </button>
      </h2>
      <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
        <div className="accordion-body" >
            Text utils gives you a way to Analyze your text quickly and efficiently. Be it word count, Character count or Preview your text.          </div>
      </div>
    </div>
    <div className="accordion-item">
      <h2 className="accordion-header" id="headingTwo">
        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" >
          Free to use
        </button>
      </h2>
      <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
        <div className="accordion-body">
             TextUtils is a free character counting tool that providees instant character count & word count statistics for a given text. TextUtils reports the number of words and character.        </div>
      </div>
    </div>
    <div className="accordion-item">
      <h2 className="accordion-header" id="headingThree">
        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
          Browser Compatible
        </button>
      </h2>
      <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
        <div className="accordion-body">
            This is word counter software works in any browser such as chrome, Firefox, Internet Explorer, Safari, Opera. It suits to count character in facebook, blog, books, excel document, essays, etc.        </div>
      </div>
    </div>   
  </div>

  </div>
  )
}

