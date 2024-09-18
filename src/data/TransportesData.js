const TransportesData = {
  acercaDeNosotros: {
    titulo: "Acerca de nosotros",
    subtitulo: "Ingeniería y Soluciones Tecnológicas",
    contenido: "La ingeniería es la clave para transformar ideas en soluciones reales y efectivas. En nuestra compañía, abarcamos múltiples disciplinas de la ingeniería, combinando innovación y tecnología de vanguardia para optimizar procesos y automatizar operaciones. Nos especializamos en sectores como la construcción, la logística, el transporte, y la manufactura, desarrollando soluciones técnicas que garantizan sostenibilidad y eficiencia. Nuestro enfoque está siempre orientado a superar los desafíos actuales y futuros del mercado global, proporcionando soluciones precisas y adaptadas a cada necesidad."
  },
  servicios: {
    titulo: "Nuestros servicios de ingeniería",
    servicios: [
      { id: 10, title: 'transporte carga', imgSrc: '/img/servicios/delivery-truck_516419.png' , link: '/transportes/carga'},
        { id: 11, title: 'transporte especial', imgSrc: '/img/servicios/favourite_2156164.png' , link: '/transportes/especial'},
        { id: 12, title: 'transporte hidrocarburos', imgSrc: '/img/servicios/tank-truck_1850928.png' , link: '/transportes/hidrocarburos'},
     ]
  },
  portafolio: {
    title: "portafolio",
    description: "este es nuestro portafolio de ingenerias",
    pdfUrl: '/pdf/portafolio-de-servicios-general.pdf'
  },
};

export default TransportesData;
