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
                <h1 className="firstheading">hello .<span className="one" >About</span></h1> 
                <h1 style={{color:"#5A20CB"}} className="secondheading">I <span className="two">Contact</span></h1>
                <h1 style={{color:"#5A20CB"}} className="thirdheading">am <span className="three">Blog</span></h1>
                <h1 style={{color:"#5A20CB"}} className="fourthheading">Bipin <span className="four">Projects</span></h1>

                </Col>
                <Col className="second_col">
                
                </Col>
            </Row>
        </Container>
    )
}

export default Home
