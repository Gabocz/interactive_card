import IconComplete from '../assets/images/icon-complete.svg'
function ThankYouMsg() {
    return (
        <div className='thankYouMsg'>
            <img id='iconComplete' src={IconComplete} alt="icon complete" />
            <p id='thankYou'>THANK YOU!</p>
            <p id='detailsAddedMsg'>We've added your card details.</p>
            <button>Continue</button>
        </div>
    )
}

export default ThankYouMsg
