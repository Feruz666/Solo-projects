import React from "react"
import data from "../../memeData.js"


export default function Meme() {
    const [memeImage, setMemeImage] = React.useState()
    function GetImage() {
        const memes = data.data.memes
        const randomNumber = Math.floor(Math.random() * memes.length)

        setMemeImage(function(prevMemeImage) {
            return (
                prevMemeImage = memes[randomNumber].url
            )
        })

    }
    return (
        <main>
            <div className="form">
                <div className="form-text-wrapper">
                    <input className="form-text" type="text" placeholder="Top text" />
                    <input className="form-text" type="text" placeholder="Bottom text" />
                </div>
                <p>
                    <button className="form-button" onClick={GetImage}>
                        Get a new meme image 🖼
                    </button>
                </p>
            </div>
            <img src={memeImage} alt="meme" className="meme--image" />
        </main>
    )
}