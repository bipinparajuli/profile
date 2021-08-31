import React from 'react'
import "./Projects.css"
import Card from './UI/Cards'
import {data} from '../data'
import BackIcon from './UI/BackIcon'


const Projects = () => {

    return (
        <div className="project">
            <BackIcon />
            <div className="containers">
                <div className="title">
                    <h3>My Recent Works</h3>
                    <p>Here are my recent works</p>
                </div>
            <div className="row">
            {data.map(data=>(
                <div style={{padding:"20px"}}>
<Card title={data.title} text={data.text} src={data.src} link={data.link} />
</div>

            ))}
            </div>
            </div>

        </div>
    )
}

export default Projects
