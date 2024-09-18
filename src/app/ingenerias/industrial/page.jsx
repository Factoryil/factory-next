import Portafolio from "@/components/unique/Portafolio/Portafolio";
import SectionV3 from "@/components/unique/SectionV3/SectionV3";
import SectionV5 from "@/components/unique/SectionV5/SectionV5";
import IngeneriasIndustrialData from "@/data/IngeneriasIndustrialData";
import LayoutWrapper from "@/layout/LayoutWrapper";


export default function Ambiental() {
  return (
    <LayoutWrapper layout="cliente">


    <SectionV5
        titulo={IngeneriasIndustrialData.introduccion.titulo}
        contenido={IngeneriasIndustrialData.introduccion.contenido}
      /> 


      <SectionV3 
        title={IngeneriasIndustrialData.sectionV3.title} 
        datos={IngeneriasIndustrialData.sectionV3.datos} 

      />

      <Portafolio 
        title={IngeneriasIndustrialData.portafolio.title}
        description={IngeneriasIndustrialData.portafolio.description}
        pdfUrl={IngeneriasIndustrialData.portafolio.pdfUrl}
      />


    </LayoutWrapper>
  );
}
