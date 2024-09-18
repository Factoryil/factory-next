import Portafolio from "@/components/unique/Portafolio/Portafolio";
import SectionV3 from "@/components/unique/SectionV3/SectionV3";
import SectionV5 from "@/components/unique/SectionV5/SectionV5";
import IngeneriasElectronicaData from "@/data/IngeneriasElectronicaData";
import LayoutWrapper from "@/layout/LayoutWrapper";


export default function Ambiental() {
  return (
    <LayoutWrapper layout="cliente">


    <SectionV5
        titulo={IngeneriasElectronicaData.introduccion.titulo}
        contenido={IngeneriasElectronicaData.introduccion.contenido}
      /> 


      <SectionV3 
        title={IngeneriasElectronicaData.sectionV3.title} 
        datos={IngeneriasElectronicaData.sectionV3.datos} 

      />

      <Portafolio 
        title={IngeneriasElectronicaData.portafolio.title}
        description={IngeneriasElectronicaData.portafolio.description}
        pdfUrl={IngeneriasElectronicaData.portafolio.pdfUrl}
      />


    </LayoutWrapper>
  );
}
