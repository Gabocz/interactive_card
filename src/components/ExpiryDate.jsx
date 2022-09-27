function ExpiryDate({cardMonth, cardYear}) {
    return (
        <div>
           <span id="month">{cardMonth}</span>/ 
           <span id="year">{cardYear}</span>
        </div>
    )
}

export default ExpiryDate
