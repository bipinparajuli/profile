import React,{useState} from 'react'

const Cards = ({src,title,text,link}) => {

  const [overlaping, setoverlaping] = useState(false)

  const show = () => {
setoverlaping(true)
  }

  
  const hide = () => {
    setoverlaping(false)
      }

    return (
      
      <div className="card"  onMouseEnter={show}
      onMouseLeave={hide} 
      
      style={{width: "18rem",borderRadius:"10px"}}>
  <img className="card-img-top" src={src} alt="Card image cap" />
  
  {overlaping? <div className="card-body" style=
  {{position:"absolute",
  top:"0",
  backgroundColor:"#03203C",
  color:"#fff",
  height:"100%",
  display:"flex",
  alignItems:"center",
  justifyContent:"center",
  flexDirection:"column",
  cursor:"pointer"
  
  }}>
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{text}</p>
    <a href={link} className="btn btn-primary">View Site</a>
  </div> :""}
</div>
    )
}

export default Cards
