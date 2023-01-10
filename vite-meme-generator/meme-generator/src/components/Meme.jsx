import React from "react"


export default function Meme() {
    return (
        <div className="form">
            <div className="form-text-wrapper">
                <input className="form-text" type="text" placeholder="Top text" />
                <input className="form-text" type="text" placeholder="Bottom text" />
            </div>
            <p>
                <button className="form-submit">Get a new meme image 🖼</button>
            </p>
        </div>
    )
}