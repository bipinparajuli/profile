import React from 'react'
import "./Home.css"
import image from '../assets/my-img.png'
import {Image,Container,Row,Col} from "react-bootstrap"
import {Link} from "react-router-dom"

const Home = () => {
    return (
        <Container fluid className="home">
            <Row style={{width:"100%",justifyContent:"center",alignItems:"center"}}>
                <Col style={{color:"white"}}>
               <Link to="/about">
               <h1 className="firstheading"></h1>
               </Link>  
                <h1 style={{color:"#5A20CB"}} className="secondheading"></h1>
                <h1 style={{color:"#5A20CB"}} className="thirdheading"></h1>
                <h1 style={{color:"#5A20CB"}} className="fourthheading"></h1>

                </Col>
                <Col className="second_col">
                
                </Col>
            </Row>
        </Container>
    )
}

export default Home
