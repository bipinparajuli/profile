import React from 'react'

const Cards = ({src,title,text,link}) => {

    return (
      
      <div className="card" style={{width: "18rem"}}>
  <img className="card-img-top" src={src} alt="Card image cap" />
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{text}</p>
    <a href={link} className="btn btn-primary">View Site</a>
  </div>
</div>
    )
}

export default Cards
