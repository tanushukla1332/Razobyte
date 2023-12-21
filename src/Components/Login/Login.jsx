import React from 'react';
import { Container, Card, CardBody, CardLink, CardText, CardSubtitle, CardImg, Button } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Login() {
    return (
        <Container fluid >
            <Row>
                <Col md={5} className='mb-4'>
                    <Card>
                        <CardImg src='https://img.freepik.com/premium-photo/3d-illustration-purple-retro-headphones-purple-isolated-background-white-lights-headphone-icon-illustration_116124-7777.jpg' alt='Image alt text'  />
                        <CardBody>
                            <CardSubtitle className='mb-2 text-muted'>Card subtitle</CardSubtitle>
                            <CardText>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus, eligendi.
                            </CardText>
                            <CardLink href='#'>Card link</CardLink>
                            <Button variant='outline-primary' className='ml-2'>
                                Read more
                            </Button>
                        </CardBody>
                    </Card>
                </Col>
                <Col md={5} className='mb-5'>
                    <Card>
                        <CardImg src='https://img.freepik.com/premium-photo/3d-illustration-purple-retro-headphones-purple-isolated-background-white-lights-headphone-icon-illustration_116124-7777.jpg' fluid  />
                        <CardBody>
                            <CardSubtitle className="mb-2 text-muted">Card subtitle</CardSubtitle>
                            <CardText>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus, eligendi.</CardText>
                            <CardLink href='#'>Card link</CardLink>
                            <Button variant='outline-primary' className='ml-2'>
                                Read more
                            </Button>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}
