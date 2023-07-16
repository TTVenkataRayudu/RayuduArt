import Carousel from 'react-bootstrap/Carousel';
import Homepage from '../images/Homepage.jpg';

export const HomePage = () => {
    const carouselItems = [
        {
            imageSrc: Homepage,
            caption: 'First slide label',
            description: 'Nulla vitae elit libero, a pharetra augue mollis interdum.',
        },
        {
            imageSrc: Homepage,
            caption: 'Second slide label',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        },
        {
            imageSrc: Homepage,
            caption: 'Third slide label',
            description: 'Praesent commodo cursus magna, vel scelerisque nisl consectetur.',
        },
    ];

    return (
        <Carousel>
            {carouselItems.map((item, index) => (
                <Carousel.Item key={index} interval={1000}>
                    <img className="d-block w-100 homepage" src={item.imageSrc} alt={`Slide ${index + 1}`} />

                    <Carousel.Caption>
                        <h3>{item.caption}</h3>
                        <p>{item.description}</p>
                    </Carousel.Caption>
                </Carousel.Item>
            ))}
        </Carousel>
    );
};
