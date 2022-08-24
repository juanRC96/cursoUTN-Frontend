import Carousel from "react-bootstrap/Carousel";
import React, { useEffect, useState } from "react";
import "./../styles/components/pages/HomePage.css";
import axios from "axios";

const HomePage = (props) => {

  const[noticias,setNoticias] = useState([])

  useEffect(()=>{
    const cargarNoticias = async() =>{
      const response = await axios.get('http://localhost:3000/api/noticias');
      setNoticias(response.data)
    }
    cargarNoticias();
  },[])


  return (
    <main className="holder">
      <Carousel className="carousel">
        {noticias.map(noticia =>
                <Carousel.Item className="carousel-item">
                <img
                  className="d-block w-100"
                  src={noticia.imagen}
                  alt="First slide"
                />
                <Carousel.Caption>
                  <h3>
                    {noticia.titulo}
                  </h3>
                  <p>
                    {noticia.subtitulo}
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
          )}
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
            ac tincidunt quam enim non sem. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Donec iaculis interdum tincidunt. Etiam
            sagittis lacinia sodales. Suspendisse aliquet metus eu sollicitudin
            aliquet. Sed erat ex, hendrerit sit amet odio sed, laoreet interdum
            nibh. Praesent suscipit, nisl nec tempor ultricies, justo sapien
            imperdiet metus, ac tincidunt quam enim non sem.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            iaculis interdum tincidunt. Etiam sagittis lacinia sodales.
            Suspendisse aliquet metus eu sollicitudin aliquet. Sed erat ex,
            hendrerit sit amet odio sed, laoreet interdum nibh. Praesent
            suscipit, nisl nec tempor ultricies, justo sapien imperdiet metus,
            ac tincidunt quam enim non sem. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Donec iaculis interdum tincidunt. Etiam
            sagittis lacinia sodales. Suspendisse aliquet metus eu sollicitudin
            aliquet. Sed erat ex, hendrerit sit amet odio sed, laoreet interdum
            nibh. Praesent suscipit, nisl nec tempor ultricies, justo sapien
            imperdiet metus, ac tincidunt quam enim non sem.
          </p>
        </div>
      </div>
    </main>
  );
};

export default HomePage;
