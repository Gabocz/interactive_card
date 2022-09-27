import NumErrorMessage from "./NumErrorMessage"
import OtherErrorMsg from "./OtherErrorMsg"
import { useState } from 'react'

function FormContainer({setCardName, setCardNum, setCardMonth, setCardYear, setCardCvc, setIsSubmitted}) {
  
    const [nameInput, setNameInput] = useState('')
    const [numInput, setNumInput] = useState('')
    const [monthInput, setMonthInput] = useState('')
    const [yearInput, setYearInput] = useState('')
    const [cvcInput, setCvcInput] = useState('')
    const [numError, setNumError] = useState(false)
    const [noNameError, setNoNameError] = useState(false)
    const [noNumError, setNoNumError] = useState(false)
    const [monthError, setMonthError] = useState(false)
    const [yearError, setYearError] = useState(false)
    const [cvcError, setCvcError] = useState(false)
    const [noCvcError, setNoCvcError] = useState(false)


  const formatCardNum = (rawNum) => {
       const numNoSpaces = rawNum.replaceAll(' ', '').trim()
       const numArray = Array.from(numNoSpaces)
       numArray.splice(4, 0, ' ')
       numArray.splice(9, 0, ' ')
       numArray.splice(14, 0, ' ')
       return numArray.toString().replaceAll(',', '')
}
  
  const handleNameChange = (e) => {
      setNameInput(e.target.value)
      if(!e.target.value) {
        setNoNameError(true)
      } else if(/^[\-/A-Za-z\u00C0-\u017F ]*$/.test(e.target.value)) {
      setCardName(e.target.value)
      setNoNameError(false)
    }
     
  }

  const handleNumChange = (e) => {
    setNumInput(e.target.value)
    if(!e.target.value) {
      setNoNumError(true)
    } else if(/^[0-9]*$/.test(e.target.value)) {
      setCardNum(formatCardNum(e.target.value))
      setNoNumError(false)
      setNumError(false)
    } else {
      setNumError(true)
    }
  }

  const handleMonthChange = (e) => {
    setMonthInput(e.target.value)
    if(e.target.value && /^(0?[1-9]|1[012])$/.test(e.target.value)) {
      setCardMonth(e.target.value)
      setMonthError(false)
    } else {
      setCardMonth('00')
      setMonthError(true)
    }
  }

  const handleYearChange = (e) => {
    setYearInput(e.target.value)
    if(e.target.value && /^[00-99]*$/.test(e.target.value)) {
      setCardYear(e.target.value)
      setYearError(false)
    } else {
      setCardYear('00')
      setYearError(true)
    }
  }

  const handleCvcChange = (e) => { 
    setCvcInput(e.target.value)
    if(!e.target.value) {
      setCvcError(false)
      setNoCvcError(true)
      setCardCvc('000')
    } else if(/^[0-9]*$/.test(e.target.value)) {
      setCardCvc(e.target.value)
      setNoCvcError(false)
      setCvcError(false)
    } else {
      setCardCvc('000')
      setNoCvcError(false)
      setCvcError(true)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if(!nameInput) {
      setNoNameError(true)
    }

    if (!numInput) {
      setNoNumError(true)
     } 

    if (!monthInput) {
      setMonthError(true)
    }

    if (!yearInput) {
      setYearError(true)
    }

    if (!cvcInput) {
      setNoCvcError(true)
    } 

    if(!nameInput || !numInput || !monthInput || !yearInput || !cvcInput) {
      return
    } else {
      setIsSubmitted(true)
    }
       
  }

 

    return (
        <div className="formCont">
            <form action="#">
                <label htmlFor="cardName">Cardholder Name</label>
                <input 
                  value={nameInput}
                  className={noNameError ? 'redBorder' : ''}
                  id="cardNameInput" 
                  type="text" 
                  maxLength='30'
                  placeholder="eg. Jane Appleseed" 
                  name="cardName" 
                  onChange={handleNameChange}
                  />
                  <div className={noNameError ? "errorMsgCont" : "errorMsgCont hidden"}>
                  <OtherErrorMsg 
                  />
                  </div>     
                <label htmlFor="cardNumber">Card Number</label>
                <input 
                  value={numInput}
                  className={numError || noNumError ? 'redBorder' : ''}
                  id="cardNumberInput" 
                  type="text" 
                  placeholder="eg. 1234567891230000" 
                  name="cardNumber"
                  onChange={handleNumChange}
                  maxLength='16'
                  />
                  <div className="numErrMsgCont">
                 { noNumError && <div className={noNumError ? "errorMsgCont" : "errorMsgCont hidden"}>
                    <OtherErrorMsg
                  />
                  </div>}
                       { numError && <div className={ numError ? "errorMsgCont" : "errorMsgCont hidden"}>
                    <NumErrorMessage
                  />
                  </div> }
                  </div>
                <div className="expDateCvcCont">
                  <div>
                    <label htmlFor="expDate">Exp. Date (MM/YY)</label>
                    <input 
                      value={monthInput}
                      className={monthError ? 'redBorder' : ''}
                      id="monthInput" 
                      type="text" 
                      placeholder="MM"
                      minLength='2'
                      maxLength='2'
                      onChange={handleMonthChange}
                      />
                    <input 
                      value={yearInput}
                      className={yearError ? 'redBorder' : ''}
                      id="yearInput" 
                      type="text" 
                      placeholder="YY"
                      minLength='2'
                      maxLength='2'
                      onChange={handleYearChange}
                      />
                    <div>
                    <div className={monthError || yearError ? "errorMsgCont" : "errorMsgCont hidden"}>
                    <OtherErrorMsg
                  />
                  </div>
                  </div>
                  </div>
                  <div>
                    <label id="cvcLabel" htmlFor="cvc">cvc</label>
                    <input 
                      value={cvcInput}
                      className={cvcError || noCvcError ? 'redBorder' : ''}
                      id="cvcInput" 
                      type="text" 
                      placeholder="eg. 123"
                      maxLength='3'
                      onChange={handleCvcChange}
                      />
                     { noCvcError && <div className={noCvcError ? "errorMsgCont forCvc" : "errorMsgCont hidden"}>
                    <OtherErrorMsg
                  />
                  </div>}
                       { cvcError && <div className={cvcError ? "errorMsgCont forCvc" : "errorMsgCont hidden"}>
                    <NumErrorMessage
                  />
                  </div> }
                  </div>
                </div>
                <button onClick={handleSubmit} type="submit">Confirm</button>
            </form>
        </div>
    )
}

export default FormContainer
