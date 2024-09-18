import Portafolio from "@/components/unique/Portafolio/Portafolio";
import SectionV3 from "@/components/unique/SectionV3/SectionV3";
import SectionV5 from "@/components/unique/SectionV5/SectionV5";
import IngeneriasAmbientalData from "@/data/IngeneriasAmbientalData";
import LayoutWrapper from "@/layout/LayoutWrapper";


export default function Ambiental() {
  return (
    <LayoutWrapper layout="cliente">


    <SectionV5
        titulo={IngeneriasAmbientalData.introduccion.titulo}
        contenido={IngeneriasAmbientalData.introduccion.contenido}
      /> 


      <SectionV3 
        title={IngeneriasAmbientalData.sectionV3.title} 
        datos={IngeneriasAmbientalData.sectionV3.datos} 

      />

      <Portafolio 
        title={IngeneriasAmbientalData.portafolio.title}
        description={IngeneriasAmbientalData.portafolio.description}
        pdfUrl={IngeneriasAmbientalData.portafolio.pdfUrl}
      />


    </LayoutWrapper>
  );
}
