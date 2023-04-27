import Carousel from 'react-bootstrap/esm/Carousel'

import Homepage from '../images/Homepage.jpg'
export const HomePage= () => {
    return (
        <Carousel>
            <Carousel.Item interval={1000}>
        <img
          className="d-block w-100 homepage"
                    src={Homepage}
                    alt="First slide"
                    

        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
            <Carousel.Item interval={1000}>
        <img 
                    className="d-block w-100 homepage"
                    src={Homepage}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
            <Carousel.Item interval={1000}>
        <img
                    className="d-block w-100 homepage"
                    src={Homepage}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    
   
 )
}

         