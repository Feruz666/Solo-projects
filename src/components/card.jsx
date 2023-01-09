import React from "react"

export default function Card(props) {
    
    return (
        <>
            <div className="card">
                <img className="card-image" src={props.imageUrl} alt={props.title} />
                <div className="card-info">
                    <p>
                        <img className="card-info-point" src="src/assets/point.png" alt="" />
                        <h3>{props.location}</h3>
                        <a href={props.googleMapsUrl}>View on Google Maps</a>
                    </p>
                    <h1>{props.title}</h1>
                    <p>
                        <strong>
                            {props.startDate} - {props.endDate}
                        </strong>
                    </p>
                    <p>
                        {props.description}
                    </p>
                </div>
            </div>
            <hr></hr>
        </>
    )
}