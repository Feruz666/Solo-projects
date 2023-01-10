import React from "react"
import data from "../../data.js"

export default function Card(props) {
    
    return (
        <div className="card-wrapper">
            <div className="card">
                <img className="card-image" src={props.imageUrl} alt={props.title} />
                <div className="card-info">
                    <p className="card-info-location">
                        <img className="card-info-point" src="src/assets/point.png" alt="" />
                        <h3 className="card-info-country">{props.location}</h3>
                        <a className="card-location-link" href={props.googleMapsUrl}>View on Google Maps</a>
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
            { data[data.length - 1].id !== props.id && <hr className="horizontal"></hr> }
        </div>
    )
}