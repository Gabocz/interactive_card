import BgImgContainer from "./BgImgContainer"
import CardFrontContainer from "./CardFrontContainer"
import CardBackContainer from "./CardBackContainer"
import FormContainer from "./FormContainer"
import ThankYouMsg from "./ThankYouMsg"
import { useState } from 'react'

function Container() {
  
    const [cardName, setCardName] = useState('Jane Appleseed')
    const [cardNum, setCardNum] = useState('0000 0000 0000 0000')
    const [cardMonth, setCardMonth] = useState('00')
    const [cardYear, setCardYear] = useState('00')
    const [cardCvc, setCardCvc] = useState('000')
    const [isSubmitted, setIsSubmitted] = useState(false)

    return (
        <main className="container">
            <BgImgContainer/>
            <CardFrontContainer 
              cardName={cardName} 
              cardNum={cardNum}
              cardMonth={cardMonth}
              cardYear={cardYear}
               />
            <CardBackContainer
              cardCvc={cardCvc}
            />
            {!isSubmitted && <FormContainer 
              setCardName={setCardName}
              setCardNum={setCardNum}
              setCardMonth={setCardMonth}
              setCardYear={setCardYear}
              setCardCvc={setCardCvc}
              cardMonth={cardMonth}
              setIsSubmitted={setIsSubmitted}
              />}
            {isSubmitted && <ThankYouMsg/>}
            
        </main>
    )
}

export default Container
