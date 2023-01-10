import React from "react"


export default function Meme() {
    return (
        <div className="form">
            <form action="">
                <div className="form-text-wrapper">
                    <input className="form-text" type="text" placeholder="Top text" />
                    <input className="form-text" type="text" placeholder="Bottom text" />
                </div>
                <p>
                    <input className="form-submit" type="submit" value="Get a new meme image 🖼" />
                </p>
            </form>
        </div>
    )
}