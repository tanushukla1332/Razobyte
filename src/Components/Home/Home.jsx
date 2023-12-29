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
import Marquee from 'react-fast-marquee';
import Data from '../../Data.json'





export default function Home() {
    const[currentTitle,setCurrentTitle]=useState(0)
    const[subheading,setSubheading]=useState(0)
    const[paras,setParas]=useState(0)
    const[Allimagess,setAllImage]=useState(0)



    const titles=Data.map((data)=>data.title)
    const subtitles=Data.map((data)=>data.subTitle)
    const paragraphs=Data.map((data)=>data.paragraph)
    const allimages=Data.map((data)=>data.image)

    // For heading
    useEffect(()=>{
const intervalId=setInterval(()=>{
    setCurrentTitle((prev)=>(prev+1)%titles.length)
},3000)
    return()=>clearInterval(intervalId)

    },[titles.length])

      // For Subheading
      useEffect(()=>{
        const intervalId=setInterval(()=>{
            setSubheading((prev)=>(prev+1)%subtitles.length)
        },3000)
            return()=>clearInterval(intervalId)
        
            },[subtitles.length])
// For paragrap
useEffect(()=>{
    const intervalId=setInterval(()=>{
        setParas((prev)=>(prev+1)%paragraphs.length)
    },3000)
        return()=>clearInterval(intervalId)
    
        },[paragraphs.length])
// ForImages
useEffect(()=>{
    const intervalId=setInterval(()=>{
        setAllImage((prev)=>(prev+1)%allimages.length)
    },3000)
        return()=>clearInterval(intervalId)
    
        },[allimages.length])


    

    return (

        <>
            <Container fluid >
                <Row className='py-3' style={{ backgroundColor: "#3B7FBF" }}
                >
                    <Col className='text-light'>
                        <h1 className='hed1  mt-5 '>{titles[currentTitle]} </h1>
                        <h3 className=' hed3 '>{subtitles[subheading]}
                        </h3>
                        <p className=' sm '>{paragraphs[paras]}</p>
                        <Button className=" btm mr-5" variant='dark'>Get in touch </Button>
                        <Button variant='dark' className=" btm mr-5 my-3">About Us</Button>
                    </Col>
                    <Col md={7} className='mt-2'>
                        <Image src={allimages[Allimagess]} alt='' fluid
                            className='rounded-1' style={{width:"100%"}}
                        />
                    </Col>
                </Row>
                <Row className=' d-none d-sm-flex justify-content-evenly'>
                    <Col md={6} className=' px-1 py-3 '>
                        <Image src='./src/Components/Image/Web devices-amico (1).png' alt='' fluid style={{ maxWidth: "100%", maxHeight: "95%", borderRadius: "4px", boxShadow: "2px 0px 2px rgba(0,0,0,0.2) " }} /></Col>
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
                        <img src="./src/Components/Image/svg-removebg-preview (2).png" alt="" className='img-fluid'


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
                                    <CardImg variant="top" src="./src/Components/Image/innovative-web.png" fluid style={{ maxHeight: '50px', maxWidth: "50px" }} className='my-3' />
                                    <CardBody className='text-center'>
                                        <CardTitle>
                                            <h3 className='hed3'>Innovative Web Design</h3>
                                        </CardTitle>
                                        <CardText >
                                            <p className='sm'> Revolutionizing User Experiences: The Future of Innovative Web Design</p>    <Button variant='dark' className='btn1' href='./#'>Read more</Button>
                                        </CardText>
                                    </CardBody>
                                </Card>

                            </Col>
                            <Col lg={4} className='mb-3'>
                                <Card className='align-items-center custom-card'>
                                    <CardImg variant="top" src="./src/Components/Image/ecommerce-solutions.png" fluid style={{ maxHeight: '50px', maxWidth: "50px" }} className='my-3' />
                                    <CardBody className='text-center'>
                                        <CardTitle >
                                            <h3 className='hed3'>Ecommerece Solutions</h3>

                                        </CardTitle>
                                        <CardText >
                                            <p className='sm'> Empowering Online Success: Cutting-Edge Ecommerce Solutions for Businesses</p>
                                            <Button variant='dark' className='btn1' href='./#'>Read more</Button>
                                        </CardText>

                                    </CardBody>
                                </Card>

                            </Col>
                            <Col lg={4} className='mb-3'>
                                <Card className='align-items-center custom-card'>
                                    <CardImg variant="top" src="./src/Components/Image/seo-services.png" fluid style={{ maxHeight: '50px', maxWidth: "50px" }} className='my-3' />
                                    <CardBody className='text-center'>
                                        <CardTitle>
                                            <h3 className='hed3'>Search Enggine  Optimization</h3>
                                        </CardTitle>
                                        <CardText >
                                            <p className='sm'>Unlocking Digital Visibility: Maximizing Results with Search Engine Optimization Lo</p>

                                            <Button variant='dark' className='btn1' href='./#'>Read more</Button>
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
                                    <CardImg variant="top" src="./src/Components/Image/local-listings.png" fluid style={{ maxHeight: '50px', maxWidth: "40px" }} className='my-3' />
                                    <CardBody className='text-center'>
                                        <CardTitle>
                                            <h3 className='hed3'>Google Local Listing</h3>
                                        </CardTitle>
                                        <CardText >
                                            <p className='sm'>Boost Your Local Presence: Harnessing the Power of Google Local Listings</p>
                                            <Button variant='dark' className='btn1' href='./#'>Read more</Button>
                                        </CardText>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col lg={4} className='mb-3'>
                                <Card className='align-items-center custom-card'>
                                    <CardImg variant="top" src="./src/Components/Image/adwords-ppc.png" fluid style={{ maxHeight: '50px', maxWidth: "40px" }} className='my-3' />
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
                                    <CardImg variant="top" src="./src/Components/Image/smo-services.png" fluid style={{ maxHeight: '50px', maxWidth: "40px" }} className='my-3' />
                                    <CardBody className='text-center '>
                                        <CardTitle>
                                            <h3 className='hed3'>Social Media Optimization</h3>
                                        </CardTitle>
                                        <CardText>
                                            <p className='sm'>Mastering Social Media Optimization (SMO) for Success</p>
                                            <Button variant='dark' className='btn1' href='./#'>Read more</Button>
                                        </CardText>
                                    </CardBody>
                                </Card>

                            </Col>

                        </Row>
                    </Col>
                </Row>

                <Row>
                    <Col>

                    </Col>
                </Row>

                <Row className='d-flex justify-content-center flex-wrap mb-4' style={{ backgroundColor: " #3B7FBF" }}>
                    <div className='text-center'>
                        <h2 className='hed2 text-light'>Our Clients</h2>
                        <p className='sm text-light'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit, a!</p>
                    </div>
                    <Col>
                        <Marquee>
                            <div className='m-1 flex space-x-5 p-4 '>
                                <img src="https://razobyte.com/wp-content/uploads/2019/04/image005-300x200.jpg" alt="" className='img-fluid' style={{ width: "300px", height: "200px" }} />
                            </div>
                            <div className='m-1 rounded-xl flex space-x-5 p-4'>
                                <img src="https://razobyte.com/wp-content/uploads/2019/04/image004-300x200.jpg" alt="" className='img-fluid' style={{ width: "300px", height: "200px" }} />
                            </div>
                            <div className='m-1 rounded-xl flex space-x-5 p-4'>
                                <img src="https://razobyte.com/wp-content/uploads/2019/04/galuku_logo-300x200.jpg" alt="" className='img-fluid' style={{ width: "300px", height: "200px" }} />
                            </div>
                            <div className='m-1 rounded-xl flex space-x-5 p-4'>
                                <img src="https://razobyte.com/wp-content/uploads/2019/04/ohreco-300x200.jpg" alt="" className='img-fluid' style={{ width: "300px", height: "200px" }} />

                            </div>
                            <div className='m-1 rounded-xl flex space-x-5 p-4'>
                                <img src="https://razobyte.com/wp-content/uploads/2019/04/image009-300x200.jpg" alt="" className='img-fluid' style={{ width: "300px", height: "200px" }} />
                            </div>
                            <div className='m-1 rounded-xl flex space-x-5 p-4'>
                                <img src="https://razobyte.com/wp-content/uploads/2019/04/yes-creation-1-300x200.png" alt="" className='img-fluid' style={{ width: "300px", height: "200px" }} />
                            </div>
                        </Marquee>
                        <Marquee autoFill pauseOnClick direction='right'>
                            <div className='m-1 rounded-xl flex space-x-5 p-4'>
                                <img src="https://razobyte.com/wp-content/uploads/2019/04/image008-300x200.jpg" alt="" className='img-fluid' style={{ width: "300px", height: "200px" }} />
                            </div>
                            <div className='m-1 rounded-xl flex space-x-5 p-4'>
                                <img src="https://razobyte.com/wp-content/uploads/2019/04/image007-300x200.jpg" alt="" className='img-fluid' style={{ width: "300px", height: "200px" }} />
                            </div>
                            <div className='m-1 rounded-xl flex space-x-5 p-4'>
                                <img src="https://razobyte.com/wp-content/uploads/2019/04/image006-300x200.jpg" alt="" className='img-fluid' style={{ width: "300px", height: "200px" }} />
                            </div>
                            <div className='m-1 rounded-xl flex space-x-5 p-4'>
                                <img src="https://razobyte.com/wp-content/uploads/2019/04/avon-logo-300x200.jpg" alt="" className='img-fluid' style={{ width: "300px", height: "200px" }} />
                            </div>
                            <div className='m-1 rounded-xl flex space-x-5 p-4'>
                                <img src="https://razobyte.com/wp-content/uploads/2019/04/astro-logo-300x200.jpg" alt="" className='img-fluid' style={{ width: "300px", height: "200px" }} />
                            </div>
                            <div className='m-1 rounded-xl flex space-x-5 p-4'>
                                <img src="https://razobyte.com/wp-content/uploads/2019/04/verona-logo3-1-300x200.png" alt="" className='img-fluid' style={{ width: "300px", height: "200px" }} />
                            </div>
                        </Marquee>
                    </Col>

                </Row>

                <Row>
                <h2>   Services </h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, dolorum.</p>
             

                    <Col md={4}  className='mb-4'>
                        <Card style={{backgroundImage:"url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQ1KOuUrddsgD3p8ffWyqFfHa3z77CixocAg&usqp=CAU)" ,height:"50vh",width:"600px",backgroundRepeat:"no-repeat",backgroundSize:"cover"}} className='card-with-button '>
                            <CardBody className='text-light 'style={{marginTop:"13rem"}}>
                                <CardTitle>
                                    <h3 className='hed3 fw-bold' >Social Media Optimization</h3>
                                </CardTitle>
                                <CardText>
                                    <p className='sm fw-bold'>Mastering Social Media Optimization (SMO) for Success</p>
                                </CardText>
                                <Button variant='dark'className='transparent-button'>Learn more</Button>
                            </CardBody>
                        </Card>

                    </Col>
                </Row>



















            </Container >

        </>

    )
}