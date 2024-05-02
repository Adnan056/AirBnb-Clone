function Card(props){
    return(
    <div className="card">
        <div className="katie">
            <div className="photo">
                <img src={`./src/assets/${props.img}`} alt="katie zaferes" />
                {/* <div className="status">
                    <p>Sold out</p>
                </div> */}
            </div>
            <div className="image-content">
                <div className="review">
                 <div className="rating">
                     <img src="src\assets\star.png" alt="star" />
                     <span>{props.rating}</span>
                    <span className="gray">({props.reviewCount}) • </span>
                    <span className="gray">{props.location}</span>
                    </div>
                </div>
                <div className="title">
                    <p>{props.title}</p>
                </div>
                <div className="price">
                <p><span className="bold">From ${props.price}</span> / person</p>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Card