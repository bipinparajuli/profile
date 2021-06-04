import React from 'react'
import "./Home.css"
import {Container,Row,Col} from "react-bootstrap"
import {Link} from "react-router-dom"
import {Fade,Zoom} from "react-reveal"

const Home = () => {
    return (
        <Container fluid className="home">
            <Row style={{width:"100%",justifyContent:"center",alignItems:"center"}}>
                <Col style={{color:"white"}}>
                  <Fade bottom>

                        <Link to="/about">
                                    <h1 className="firstheading"  data-aos="fade-up"  data-aos-duration="100"  ></h1>
                        </Link>  
                    </Fade>

                    <Fade bottom>
                        <Link to="/contact">

                            <h1 style={{color:"#5A20CB"}} className="secondheading"></h1>
                        </Link>
                    </Fade>

                    <Fade bottom>
                        <Link to="/blogs">
                            <h1 style={{color:"#5A20CB"}} className="thirdheading"></h1>
                        </Link>
                    </Fade>

                    <Fade bottom>
                        <Link to="/projects">
                            <h1 style={{color:"#5A20CB"}} className="fourthheading"></h1>
                        </Link>
                    </Fade>
                

                </Col>
                <Col className="second_col">
                    
                    </Col>
                    
            </Row>
        </Container>
    )
}

export default Home
