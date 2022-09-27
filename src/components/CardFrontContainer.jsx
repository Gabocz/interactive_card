import Logo from '../assets/images/card-logo.svg'
import CardNumberContainer from './CardNumberContainer'
import NameContainer from './NameContainer'
import ExpiryDate from './ExpiryDate'


function CardFrontContainer({cardName, cardNum, cardMonth, cardYear}) {
    return (
        <div className="cardFrontCont cardCont">
           <div className="contentCont">
             <div className="cardLogoCont">
               <img id='logo' src={Logo} alt='logo'/>
             </div>
             <CardNumberContainer
               cardNum={cardNum}
             />
             <div className='nameAndExpDateCont'>
               <NameContainer 
                 cardName={cardName}
                />
               <ExpiryDate
                 cardMonth={cardMonth}
                 cardYear={cardYear}
               /> 
             </div>
             
           </div>
            
        </div>
    )
}

export default CardFrontContainer
