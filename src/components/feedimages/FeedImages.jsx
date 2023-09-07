import React from 'react'
import "./feed.css"
import data from "./data/data.json";

function FeedImages() {
    return (
        <section className="section__images container-mx">
            <div className="box__img">
                <ul className="list__img">
                {
                    data.map((item)=>{
                        return <li key={item.id}><img src={item.url} loading='lazy' className='img' alt="" /></li>
                    })
                }
                </ul>
            </div>
        </section>
    )
}

export default FeedImages;