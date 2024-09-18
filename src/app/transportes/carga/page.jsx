import Portafolio from "@/components/unique/Portafolio/Portafolio";
import SectionV3 from "@/components/unique/SectionV3/SectionV3";
import SectionV5 from "@/components/unique/SectionV5/SectionV5";
import TransporteCargaData from "@/data/TransporteCargaData";
import LayoutWrapper from "@/layout/LayoutWrapper";


export default function Ambiental() {
  return (
    <LayoutWrapper layout="cliente">


    <SectionV5
        titulo={TransporteCargaData.introduccion.titulo}
        contenido={TransporteCargaData.introduccion.contenido}
      /> 


      <SectionV3 
        title={TransporteCargaData.sectionV3.title} 
        datos={TransporteCargaData.sectionV3.datos} 

      />

      <Portafolio 
        title={TransporteCargaData.portafolio.title}
        description={TransporteCargaData.portafolio.description}
        pdfUrl={TransporteCargaData.portafolio.pdfUrl}
      />


    </LayoutWrapper>
  );
}
