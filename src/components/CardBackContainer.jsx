import CvcComponent from "./CvcComponent"

function CardBackContainer({cardCvc}) {
    return (
        <div className="cardBackCont cardCont">
            <CvcComponent cardCvc={cardCvc}/>
        </div>
    )
}

export default CardBackContainer
