import React , {useState} from 'react'
import { useEffect } from 'react'
import axios from 'axios'

function Index() {
    const [link , setLink] = useState("")
    const [shortenLink , setShortenLink] = useState("")
    const [shortenLink2 , setShortenLink2] = useState("")

    const handleChange = (e) => {
        setLink(e.target.value)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const response = await fetch(`https://api.shrtco.de/v2/shorten?url=${link}`);
            const data = await response.json();
            console.log(data);
            setShortenLink(data.result.full_short_link)
            setShortenLink2(data.result.full_short_link2)
            
        } catch (e) {
            console.error(e);
        }
    }
    return (
    <div>
        <div>
            <h1>SHORTEN URL</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Enter your link" onChange={handleChange}></input>
                <button type="submit" value="">shorten it!</button>
            </form>
            <p>shrtco.de: </p><a href={shortenLink} target="_blank">{shortenLink}</a>
            <p>9qr.de: </p><a href={shortenLink2} target="_blank">{shortenLink2}</a>
        </div>
    </div>
)
}

export default Index