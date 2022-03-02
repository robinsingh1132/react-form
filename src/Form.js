import React, { useState } from 'react'
import FormSignup from './FormSignup'

const Form = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  function submitForm(){
    // setIsSubmitted(true);
    alert('Form submitted successfully!');
  }
  return (
    <>
      <div>
        {/* <FormSignup/> */}
        <FormSignup submitForm={submitForm}/>
      </div>
    </>
  )
}

export default Form