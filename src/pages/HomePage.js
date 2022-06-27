import Carousel from 'react-bootstrap/Carousel'
import React from "react";
import "./../styles/components/pages/HomePage.css"

const HomePage = (props) => {
  return (
    <main className="holder">

<Carousel>
  <Carousel.Item style={{height: "300px"}}>
    <img style={{height: "100%",width:"100%",objectFit:"cover"}}
      className="d-block w-100"
      src="images/home/gaming.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>¡El futuro es hoy! Sony presentaría una nueva marca de gaming</h3>
      <p>Sony presentará la marca INZONE, especializada en headsets y monitores para gaming</p>
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item style={{height: "300px"}}>
    <img style={{height: "100%",width:"100%",objectFit:"cover"}}
      className="d-block w-100"
      src="images/home/nvidia.jpg"
      alt="Second slide"
    />
    <Carousel.Caption>
      <h3>Las fechas de lanzamiento de las RTX 4000 se retrasa nuevamente</h3>
      <p>Se espera que sean lanzadas en octubre de 2022</p>
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item style={{height: "300px"}}>
    <img style={{height: "100%",width:"100%",objectFit:"cover"}}
      className="d-block w-100"
      src="images/home/explorer.jpg"
      alt="Third slide"
    />
    <Carousel.Caption>
      <h3>Internet Explorer: mañana deja de funcionar el clásico navegador de Microsoft</h3>
      <p>La compañía se enfoca exclusivamente en el browser Edge.</p>
    </Carousel.Caption>
  </Carousel.Item>

</Carousel>
      <div className="columnas">
        <div className="bienvenidos">
          <h2>Bienvenidos</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            iaculis interdum tincidunt. Etiam sagittis lacinia sodales.
            Suspendisse aliquet metus eu sollicitudin aliquet. Sed erat ex,
            hendrerit sit amet odio sed, laoreet interdum nibh. Praesent
            suscipit, nisl nec tempor ultricies, justo sapien imperdiet metus,
            ac tincidunt quam enim non sem.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            iaculis interdum tincidunt. Etiam sagittis lacinia sodales.
            Suspendisse aliquet metus eu sollicitudin aliquet. Sed erat ex,
            hendrerit sit amet odio sed, laoreet interdum nibh. Praesent
            suscipit, nisl nec tempor ultricies, justo sapien imperdiet metus,
            ac tincidunt quam enim non sem.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            iaculis interdum tincidunt. Etiam sagittis lacinia sodales.
            Suspendisse aliquet metus eu sollicitudin aliquet. Sed erat ex,
            hendrerit sit amet odio sed, laoreet interdum nibh. Praesent
            suscipit, nisl nec tempor ultricies, justo sapien imperdiet metus,
            ac tincidunt quam enim non sem.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            iaculis interdum tincidunt. Etiam sagittis lacinia sodales.
            Suspendisse aliquet metus eu sollicitudin aliquet. Sed erat ex,
            hendrerit sit amet odio sed, laoreet interdum nibh. Praesent
            suscipit, nisl nec tempor ultricies, justo sapien imperdiet metus,
            ac tincidunt quam enim non sem.
          </p>
        </div>
      </div>
    </main>
  );
};

export default HomePage;
