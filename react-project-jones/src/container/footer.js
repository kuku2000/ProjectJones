import React from 'react'
import Footer from '../components/footer/index'


export function FooterContainer(){

return (

    <Footer>
    <Footer.Wrapper>
    <Footer.Row>
    <Footer.Column>
    <Footer.Title>About us</Footer.Title>
    <Footer.Link href="#">Story</Footer.Link>
    <Footer.Link href="#">Clients</Footer.Link>
    <Footer.Link href="#">Testimonials</Footer.Link>
    </Footer.Column>
    <Footer.Column>
    <Footer.Title>Services</Footer.Title>
    <Footer.Link href="#">Story</Footer.Link>
    <Footer.Link href="#">Clients</Footer.Link>
    <Footer.Link href="#">Testimonials</Footer.Link>
    </Footer.Column>
    <Footer.Column>
    <Footer.Title>Contact us</Footer.Title>
    <Footer.Link href="#">Story</Footer.Link>
    <Footer.Link href="#">Clients</Footer.Link>
    <Footer.Link href="#">Testimonials</Footer.Link>
    </Footer.Column>
    <Footer.Column>
    <Footer.Title>Connect with us</Footer.Title>
    <Footer.Link href="#">Facebook</Footer.Link>
    <Footer.Link href="#">Instagram</Footer.Link>
    <Footer.Link href="#">LinkedIn</Footer.Link>
    </Footer.Column>
    </Footer.Row>
    </Footer.Wrapper>
    
    </Footer>
)

}