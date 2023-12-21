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





export default function Home() {
    const [text, setText] = useState(0)
    const [image,setImage]=useState(0)

    const array = [
        "welcome to Razobyte SofTech pvt ltd this is a web devloping compnay",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, nostrum",
        "Adaptability empowers growth, kindness fosters connection, curiosity",
        "Adapt, connect, learn; kindness and gratitude fuel resilience growth",
        "Code, create,debug; transforming lines into meaningful innovation passionate"

    ]
    const imgdata=[
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
    useEffect(()=>{
        const intervaliId = setInterval(() => {
            setImage((prev) => (prev + 1) % imgdata.length)
        }, 3000)
        return () => clearInterval(intervaliId)
        
    },[])

    return (
        <>
            <Container fluid  >
                <Row style={{ backgroundColor: "#3B7FBF" }}>
                    <Col className='m-4 text-light'>
                        <p className=' mt-5  text-resize'>Razobyte SofTech ...</p>
                        <h1 className='mt-4 pb-2  text-resize-lg'>Digital Excellence </h1>
                        <h3 className='pb-4  text-resize-md'> Marketing and Development</h3>
                        <p className='pb-5  text-resize-sm'>Our mission is to unlock your digital potential by crafting tailor-made solutions that align with your unique goals.Our skilled team keeps abreast of the latest trends and technologies to provide cutting-edge solutions.</p>
                        <Button className="mr-5" variant='outline-light'>Get in touch </Button>
                        <Button variant='light' className=' mt-2'>About us</Button>
                    </Col>
                    <Col md={4} className='mt-4 ml-1 pb-3 mr-5 mb-5 img'><Image src="https://lambent-figolla-b6d8af.netlify.app/assets/images/home1/banner/banner-img.png" alt='' fluid />
                    </Col>
                </Row>
                <Row className=' d-none d-sm-flex'>
                    <Col md={4} className='mt-5'><Image src='https://lambent-figolla-b6d8af.netlify.app/assets/images/home1/about/about.png' alt='' fluid /></Col>
                    <Col className='mt-5 ml-4'>
                        <h4 className='pb-4' style={{ color: "#3B7FBF" }}>Our Features</h4>
                        <h1 className='pb-3 '>We Offer a Wide Range of SEO Disinfection & Services</h1>
                        <p className=' text-secondary'>Our mission is to unlock your digital potential by crafting tailor-made solutions that align with your unique goals. From startups to established enterprises, we've helped clients stay ahead of the competition and succeed in the digital realm.As your trusted tech partner, we offer strategic consulting, expert advice, and reliable support to ensure seamless integration and effective execution of your digital initiatives. </p>
                        <p><span><RxDoubleArrowRight /><span className='ml-1'> Awesome Result</span></span>
                            <span className='ml-5'><RxDoubleArrowRight /><span className='ml-1'>All Size Bsuiness</span></span></p>
                        <p><span ><RxDoubleArrowRight /><span className='ml-1'>Significant ROI</span></span>
                            <span style={{ marginLeft: "3.5em" }}><RxDoubleArrowRight /><span className='ml-1'>Expert devisor</span></span>
                        </p>
                        <Button variant='dark' className='  mb-5 pt-1' style={{ borderRadius: '7rem' }} >Get a quote</Button>
                    </Col>
                </Row>
                <Row className='d-block d-sm-none  py-5 m-3'>

                    <Col>
                        <h4 className='pb-4' style={{ color: "#3B7FBF" }}>Our Features</h4>
                        <h1 className='pb-3 text-resize-lg  '>We Offer a Wide Range of SEO Disinfection & Services</h1>
                        <p className=' text-secondary text-resize-sm'>Our mission is to unlock your digital potential by crafting tailor-made solutions that align with your unique goals. From startups to established enterprises, we've helped clients stay ahead of the competition and succeed in the digital realm.As your trusted tech partner, we offer strategic consulting, expert advice, and reliable support to ensure seamless integration and effective execution of your digital initiatives. </p>
                        <p className='text-resize-sm '><span ><RxDoubleArrowRight /><span className='ml-1 txt' > Awesome Result</span></span>
                            <span className='ml-5 '><RxDoubleArrowRight /><span className='ml-1 txt'>All Size Bsuiness</span></span></p>
                        <p className='text-resize-sm'><span ><RxDoubleArrowRight /><span className='ml-1 txt '>Significant ROI</span></span>
                            <span style={{ marginLeft: "3.5em" }} ><RxDoubleArrowRight /><span className='ml-1 txt'>Expert devisor</span></span>
                        </p>
                        <Button variant='dark' className='  mb-5 pt-1' style={{ borderRadius: '7rem' }} >Get a quote</Button>

                    </Col>
                    <Col md={4} className='mt-2  '><Image src='https://lambent-figolla-b6d8af.netlify.app/assets/images/home1/about/about.png' alt='' fluid /></Col>
                </Row>
                <Row style={{ backgroundColor: "#3B7FBF" }} className='py-5'>
                    <Col>
                        <div style={{ marginLeft: "25px" }}>
                            <h1>Satisfies customers</h1>
                            <p>Those who are already tired it</p>
                        </div>
                        <Row className='px-0 justify-content-evenly '>
                            <Col md={4} className='mb-2'>
                                <Card className='rounded-3'>
                                    <CardImg variant="top" src='https://images.pexels.com/photos/1839963/pexels-photo-1839963.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' fluid style={{ maxHeight: '100px', maxWidth: "100px", borderRadius: "50%", marginLeft: "10px", marginTop: "5px" }} />
                                    <CardBody >
                                        <CardTitle>Chandler
                                        </CardTitle>
                                        <p>Deo thomes</p>
                                        <CardText>
                                            “Every detail has been taken care these team are realy amazing and talented! I will work only to help your sales goals.”
                                        </CardText>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col md={4} className='mb-2'>
                                <Card className='rounded-3'>
                                    <CardImg variant="top" src='https://images.pexels.com/photos/1839963/pexels-photo-1839963.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' fluid style={{ maxHeight: '100px', maxWidth: "100px", borderRadius: "50%", marginLeft: "10px", marginTop: "5px" }} />
                                    <CardBody >
                                        <CardTitle>Chandler
                                        </CardTitle>
                                        <p>Deo thomes</p>
                                        <CardText>
                                            “Every detail has been taken care these team are realy amazing and talented! I will work only to help your sales goals.”
                                        </CardText>
                                    </CardBody>
                                </Card>

                            </Col>
                            <Col md={4} className='mb-2'>
                                <Card className='rounded-3'>
                                    <CardImg variant="top" src='https://images.pexels.com/photos/1839963/pexels-photo-1839963.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' fluid style={{ maxHeight: '100px', maxWidth: "100px", borderRadius: "50%", marginLeft: "10px", marginTop: "5px" }} />
                                    <CardBody >
                                        <CardTitle>Chandler
                                        </CardTitle>
                                        <p>Deo thomes</p>
                                        <CardText>
                                            “Every detail has been taken care these team are realy amazing and talented! I will work only to help your sales goals.”
                                        </CardText>
                                    </CardBody>
                                </Card>

                            </Col>
                        </Row>
                    </Col>
                </Row>


                <Row >
                    <Col className='px-0 '>
                        <h1 className='text-center text-resize-lg py-3'>Our Networks</h1>
                        <div>
                            <Carousel>
                                <CarouselItem>
                                    <Image src='https://b1831098.smushcdn.com/1831098/wp-content/uploads/2019/03/Google-AdWords-vs-Google-Ads.png?lossy=1&strip=1&webp=1' fluid className="d-block w-100" style={{ height: "350px" }} />
                                </CarouselItem>
                                <CarouselItem>
                                    <Image src="https://d57439wlqx3vo.cloudfront.net/iblock/a23/a2363483305a7b65315468d11e1dc96f/94a24431c6657496283e12b98df56804.png" fluid className=' d-block w-100' style={{ height: "350px" }}></Image>

                                </CarouselItem>
                                <CarouselItem>
                                    <Image src="https://www.digitalvidya.com/blog/wp-content/uploads/2019/03/Bing-Ads.webp" fluid className=' d-block w-100' style={{ height: "350px" }}></Image>
                                </CarouselItem>
                                <CarouselItem>
                                    <Image src="https://www.flatlineagency.com/wp-content/uploads/2023/12/Untitled-design-3-1024x582.png" fluid className=' d-block w-100 ' style={{ height: "350px" }}></Image>
                                </CarouselItem>
                                <CarouselItem>
                                    <Image src='https://wallpapers.com/images/featured/blank-h9v8oske8iey8nkq.webp' fluid className=' d-block w-100' style={{ height: "350px" }}></Image>
                                    <CarouselCaption>
                                        <h3>Databox</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                    </CarouselCaption>
                                </CarouselItem>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
                <Row style={{ backgroundColor: "#3B7FBF" }} className='py-5 justify-content-evenly'>
                    <Col md={5}>
                        <div className='text-light spacing'>
                            <h1 className='text-resize-lg'>Transforming Ideas into Digital Solutions</h1>
                            <p className='text-resize-sm mt-5'>Welcome to <span className='text-dark font-weight-bold'>RazoByte SoftTech</span>, a leading IT Services and Digital solutions company empowering businesses globally. We specialize in delivering cutting-edge solutions that drive growth and propel your brand to new heights. With a comprehensive suite of services ranging from web design and development to mobile app design and development, ecommerce solutions, IoT integration, and digital marketing, we have all the tools you need to succeed in the digital landscape.</p>
                            <div className='text-resize-sm'>
                                At  <span className='text-dark font-weight-bold'>RazoByte SoftTech</span> we believe in the power of innovation and technology to transform your ideas into reality. Our team of skilled professionals is dedicated to crafting exceptional digital experiences that captivate your audience and drive tangible results. Whether you are a startup looking to establish your online presence or an established enterprise aiming to stay ahead in the digital race, we have the expertise and creativity to bring your vision to life.
                            </div>
                        </div>
                    </Col>
                    <Col md={5}>
                        <h1 className='text-resize-lg  text-center formlayout'>Let's Talk To Our Experts</h1>
                        <div className='justify-content-center align-items-center'>
                            <Form className='rounded-1 p-4 p-sm-3'>
                                <FormGroup className='mb-3' controlId='formBasicName'>
                                    <FormLabel>Name
                                    </FormLabel>
                                    <FormControl type='text' placeholder=' enter your name' required />
                                    <FormText className='text-light'>We w'ill never share your Details</FormText>
                                </FormGroup>
                                <FormGroup className='mb-3'>
                                    <FormLabel>Email Adress</FormLabel>
                                    <FormControl type='email' placeholder='Enter your email' required />
                                </FormGroup>
                                <FormGroup className='mb-3'>
                                    <FormLabel>Password</FormLabel>
                                    <FormControl type='password' placeholder='Enter your password' required />
                                </FormGroup>
                                <FormGroup className='mb-3' controlId='formBasicCheckbox'>
                                    <FormCheck type="checkbox" label="Remember Me ">
                                    </FormCheck>

                                </FormGroup>

                                <FormGroup className='mb-3'>
                                    <FormLabel>Upload your resume here </FormLabel>
                                    <FormControl type='file' placeholder='Enter your password' required />
                                    <FormText>please upload clean and updated resume</FormText>
                                </FormGroup>


                                <Button type='submit' variant='outline-dark' className='m-3 px-4' size='sm'>submit</Button>
                            </Form>
                        </div>
                    </Col>
                </Row>
                <Row className='justify-content-evenly'>
                    <Col xs={12} className='align-items-center px-0'>
                        <figure className='position-relative'>
                            <img src={imgdata[image]} alt="" className='img-fluid w-100' style={{ height: "500px",opacity:1.5 }} />
                            <figcaption >{array[text]}</figcaption>
                        </figure>
                    </Col>
                </Row>


            </Container>
        </>
    )
}