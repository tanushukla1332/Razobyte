import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Form from 'react-bootstrap/Form';
import { Button, CardBody, CardImg, CardImgOverlay, CardText, CardTitle, CarouselCaption, CarouselItem, FormCheck, FormControl, FormGroup, FormLabel, FormText } from 'react-bootstrap';
import { RxDoubleArrowRight } from "react-icons/rx";
import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel';
import { useState, useEffect } from 'react';
import { FcGoogle } from "react-icons/fc";
import { FaLinkedin, FaTwitter, FaApple } from "react-icons/fa";





export default function Home() {
    const [text, setText] = useState(0)
    const [image, setImage] = useState(0)

    const array = [
        "welcome to Razobyte SofTech pvt ltd this is a web devloping compnay",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, nostrum",
        "Adaptability empowers growth, kindness fosters connection, curiosity",
        "Adapt, connect, learn; kindness and gratitude fuel resilience growth",
        "Code, create,debug; transforming lines into meaningful innovation passionate"

    ]
    const imgdata = [
        "https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg",
        "https://cdn.pixabay.com/photo/2017/01/22/12/07/imac-1999636_1280.png",
        "https://razobyte.com/wp-content/uploads/2019/05/1a_5-SAP-Softwares-Every-Industry-Should-Be-Utilising.jpg",
        "https://cdn.pixabay.com/photo/2015/01/08/18/25/desk-593327_1280.jpg"



    ]
    useEffect(() => {
        const intervaliId = setInterval(() => {
            setText((prev) => (prev + 1) % array.length)
        }, 1000)
        return () => clearInterval(intervaliId)

    }, [])
    useEffect(() => {
        const intervaliId = setInterval(() => {
            setImage((prev) => (prev + 1) % imgdata.length)
        }, 3000)
        return () => clearInterval(intervaliId)

    }, [])

    return (

        <>
            <Container fluid >
                <Row className='py-3' style={{ backgroundColor: "#3B7FBF" }}
                >
                    <Col className='text-light'>
                        <h1 className='hed1  mt-5 '>Revolutionize </h1>
                        <h3 className=' hed3 '>Your Business with Razobyte's Innovative Tech &
                            Marketing Mastery
                        </h3>
                        <p className=' sm '>Unleash the full potential of your brand with Razobyte's integrated IT solutions and creative digital marketing strategies. Our expertise bridges the latest technology with market-leading insights, ensuring your business stays ahead in a dynamic digital landscape. Partner with Razobyte to navigate the future of digital excellence.</p>
                        <Button className=" btm mr-5" variant='dark'>Get in touch </Button>
                        <Button variant='dark' className=" btm mr-5 my-3">About Us</Button>
                    </Col>
                    <Col md={7} className='mt-2'>
                        <Image src="https://razobyte.com/wp-content/uploads/2019/08/laptop-img.png" alt='' fluid
                            className='rounded-1'
                        />
                    </Col>
                </Row>
                <Row className=' d-none d-sm-flex justify-content-evenly'>
                    <Col md={6} className=' px-1 py-3 '>
                        <Image src='././src/Components/Image/Web devices-amico.png' alt='' fluid style={{ maxWidth: "100%", maxHeight: "95%", borderRadius: "4px", boxShadow: "2px 0px 2px rgba(0,0,0,0.2) " }} /></Col>
                    <Col className='mt-4 ml-4'>
                        <div className='spacing'>
                            <h1 className=' hed1 pb-4' style={{ color: "#3B7FBF" }}>Our Features</h1>
                            <h2 className='pb-3 hed2 '>Transforming Ideas into Digital Solutions</h2>
                            <p className='sm fs-6  fs-md-3'>Welcome to <span className='text-dark font-weight-bold'>RazoByte SoftTech</span>, a leading IT Services and Digital solutions company empowering businesses globally. We specialize in delivering cutting-edge solutions that drive growth and propel your brand to new heights. With a comprehensive suite of services ranging from web design and development to mobile app design and development, ecommerce solutions, IoT integration, and digital marketing, we have all the tools you need to succeed in the digital landscape.</p>
                            <div className='spacing2'>
                                At <span className='text-dark font-weight-bold'>RazoByte SoftTech</span> we believe in the power of innovation and technology to transform your ideas into reality. Our team of skilled professionals is dedicated to crafting exceptional digital experiences that captivate your audience and drive tangible results. Whether you are a startup looking to establish your online presence or an established enterprise aiming to stay ahead in the digital race, we have the expertise and creativity to bring your vision to life.
                            </div>
                            <Button variant='dark' className='btm my-3 pt-1' style={{ borderRadius: '5px' }} >Get a quote</Button>

                        </div>
                    </Col>

                </Row>
                <Row className='d-block d-sm-none  justify-content-evenly'>
                    <Col className='mt-4' >
                        <div className='spacing'>
                            <h1 className='hed1 pb-4' style={{ color: "#3B7FBF" }}>Our Features</h1>
                            <h3 className='pb-3 hed3'>Transforming Ideas into Digital Solutions</h3>
                            <p>Welcome to <span className='text-dark font-weight-bold'>RazoByte SoftTech</span>, a leading IT Services and Digital solutions company empowering businesses globally. We specialize in delivering cutting-edge solutions that drive growth and propel your brand to new heights. With a comprehensive suite of services ranging from web design and development to mobile app design and development, ecommerce solutions, IoT integration, and digital marketing, we have all the tools you need to succeed in the digital landscape.</p>
                            <div className=' spacing2'>
                                At <span className='text-dark font-weight-bold'>RazoByte SoftTech</span> we believe in the power of innovation and technology to transform your ideas into reality. Our team of skilled professionals is dedicated to crafting exceptional digital experiences that captivate your audience and drive tangible results. Whether you are a startup looking to establish your online presence or an established enterprise aiming to stay ahead in the digital race, we have the expertise and creativity to bring your vision to life.
                            </div>

                            <Button variant='light' className='btm my-3 pt-1' style={{ borderRadius: '1px' }} >Get a quote</Button>
                        </div>
                    </Col>
                    <Col md={6} className='px-1 py-3'>
                        <Image src='././src/Components/Image/Web devices-amico.png' alt=''
                            style={{
                                width: "100%", maxHeight: "100%", borderRadius: "3px",
                                boxShadow: "2px 0px 2px rgba(0,0,0,0.2)"
                            }}
                            fluid /></Col>
                </Row>


                <Row style={{ background: "#3B7FBF" }} className='py-5 px-0 justify-content-evenly' >
                    <h2 className=' hed2 text-resize-lg  text-center formlayout text-light mb-5'>Let's Talk To Our Experts</h2>

                    <Col md={5} className='mb-3 px-1 py-3'>

                        <div className='justify-content-center align-items-center'>

                            <Form className='Form p-4'

                            >
                                <FormGroup >
                                    <FormLabel>Name</FormLabel>
                                    <FormControl type='text' placeholder='Enter your name' required />
                                </FormGroup>
                                <FormGroup></FormGroup>


                                <FormGroup >
                                    <FormLabel>Email Adress</FormLabel>
                                    <FormControl type='email' placeholder='Enter your email' required />
                                </FormGroup>
                                <FormGroup>
                                    <FormLabel>Phone</FormLabel>
                                    <FormControl type='number' placeholder='Enter your number' required />
                                </FormGroup>
                                <FormGroup>
                                    <FormLabel>Project</FormLabel>
                                    <FormControl as='select' placeholder='Project type' required >
                                        <option value=''>Project type</option>
                                        <option value=''>SEO</option>
                                        <option value=''>SMO</option>
                                        <option value=''>SEM PPC</option>
                                        <option value=''>Mobile app developement</option>
                                        <option value=''>E Commerece Website</option>
                                        <option value=''>Other</option>
                                    </FormControl>


                                </FormGroup>
                                <FormGroup controlId='formBasicCheckbox'>
                                    <FormCheck type="checkbox" label="Remember Me ">
                                    </FormCheck>
                                </FormGroup>
                                <div className='w-100  d-flex justify-content-center align-items-center'>
                                    <Button type="submit" variant='outline-dark' className='my-4 px-5 btnsubmit'
                                        style={{ width: "80%" }}>Submit</Button>
                                </div>

                                <div className='text-center'>
                                    <p className='sm mx-5'>if you don't have an account <span className='text-primary text-decoration-underline'>Go with </span> </p>
                                    <hr />
                                    <p className='sm text-center'>or</p>
                                    <p>

                                        <a href="https://www.google.com" target="_blank"><FcGoogle size={32} /></a>
                                        <a href='https://www.linkedin.com' target="_blank" className='mx-3'><FaLinkedin size={32} color='blue' /></a>
                                        <a href='https://www.twitter.com' target="_blank" ><FaTwitter size={32} color='3B7FBF' className='mx-3' /></a>
                                        <a href='https://www.apple.com' target="_blank">< FaApple size={32} color='black' /></a>
                                    </p>
                                </div>
                            </Form>
                        </div>
                    </Col>
                    <Col md={5} className='mt-5 px-1 d-flex align-items-center justify-content-center' style={{
                        paddingBottom: "32px",
                        paddingTop: "10px",
                    }}>
                        // <img src="./src/Components/Image/svg.png" alt="" className='img-fluid'


                        />

                    </Col>
                </Row>

                
                <Row className='my-5 d-block'>
                    <h2 className='text-center'> My Awesome Services</h2>
                    <p className='text-center'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. At, unde!</p>
                    <Col >
                        <Row className='d-flex justify-content-center'>
                            <Col lg={4} className='mb-3'>
                                <Card className='align-items-center img-fluid custom-card'>
                                    <CardImg variant="top" src="./src/Components/Image/innovative-web.png" fluid style={{ maxHeight: '50px', maxWidth: "50px"}}className='my-3' />
                                    <CardBody className='text-center'>
                                        <CardTitle>
                                            <h3 className='hed3'>Innovative Web Design</h3>
                                        </CardTitle>
                                        <CardText >
                                            <p className='sm'> Revolutionizing User Experiences: The Future of Innovative Web Design</p>    <Button variant='dark' className='btn1'  href='./#'>Read more</Button>
                                        </CardText>
                                    </CardBody>
                                </Card>

                            </Col>
                            <Col lg={4} className='mb-3'>
                                <Card className='align-items-center custom-card'>
                                    <CardImg variant="top" src="./src/Components/Image/ecommerce-solutions.png" fluid style={{ maxHeight: '50px', maxWidth: "50px"}}  className='my-3'/>
                                    <CardBody className='text-center'>
                                        <CardTitle >
                                            <h3 className='hed3'>Ecommerece Solutions</h3>
                                            
                                        </CardTitle>
                                        <CardText >
                                            <p className='sm'> Empowering Online Success: Cutting-Edge Ecommerce Solutions for Businesses</p> 
                                            <Button variant='dark' className='btn1'  href='./#'>Read more</Button>
                                            </CardText>
                                            
                                    </CardBody>
                                </Card>

                            </Col>
                            <Col lg={4} className='mb-3'>
                                <Card className='align-items-center custom-card'>
                                    <CardImg variant="top" src="./src/Components/Image/seo-services.png" fluid style={{ maxHeight: '50px', maxWidth: "50px"}} className='my-3' />
                                    <CardBody className='text-center'>
                                        <CardTitle>
                                            <h3 className='hed3'>Search Enggine  Optimization</h3>
                                        </CardTitle>
                                        <CardText >
                                            <p className='sm'>Unlocking Digital Visibility: Maximizing Results with Search Engine Optimization Lo</p>
                                            
                                            <Button variant='dark' className='btn1'  href='./#'>Read more</Button>
                                        </CardText>
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>
                    </Col>
                    <Col className='mt-3'>
                        <Row className='d-flex justify-content-center '>
                            <Col lg={4} className='mb-3'>
                                <Card className='align-items-center custom-card'>
                                    <CardImg variant="top" src="./src/Components/Image/local-listings.png" fluid style={{ maxHeight: '50px', maxWidth: "40px" }}  className='my-3'/>
                                    <CardBody className='text-center'>
                                        <CardTitle>
                                            <h3 className='hed3'>Google Local Listing</h3>
                                        </CardTitle>
                                        <CardText >
                                            <p className='sm'>Boost Your Local Presence: Harnessing the Power of Google Local Listings</p>
                                            <Button variant='dark' className='btn1'href='./#'>Read more</Button>
                                        </CardText>
                                    </CardBody>
                                </Card>


                            </Col>
                            <Col lg={4} className='mb-3'>
                                <Card className='align-items-center custom-card'>
                                    <CardImg variant="top" src="./src/Components/Image/adwords-ppc.png" fluid style={{ maxHeight: '50px', maxWidth: "40px" }}className='my-3' />
                                    <CardBody className='text-center'>
                                        <CardTitle>
                                            <h3 className='hed3'>Google Adwords(PPC)</h3>
                                        </CardTitle>
                                        <CardText>
                                            <p className='sm'>Accelerate Your Online Growth: Unleashing the Potential of Search Engine Marketing</p>
                                            <Button variant='dark' className='btn1' href='./#'>Read more</Button>
                                        </CardText>
                                    </CardBody>
                                </Card>

                            </Col>
                            <Col lg={4} className='mb-3'>
                                <Card className='align-items-center custom-card'>
                                    <CardImg variant="top" src="./src/Components/Image/smo-services.png" fluid style={{ maxHeight: '50px', maxWidth: "40px"}}className='my-3' />
                                    <CardBody className='text-center '>
                                        <CardTitle>
                                            <h3 className='hed3'>Social Media Optimization</h3>
                                        </CardTitle>
                                        <CardText>
                                            <p className='sm'>Mastering Social Media Optimization (SMO) for Success</p>
                                            <Button variant='dark' className='btn1'  href='./#'>Read more</Button>
                                        </CardText>
                                    </CardBody>
                                </Card>

                            </Col>

                        </Row>
                    </Col>

                </Row>


                


            






               



            </Container >

        </>

    )
}