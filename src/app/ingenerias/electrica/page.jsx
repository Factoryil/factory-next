import Portafolio from "@/components/unique/Portafolio/Portafolio";
import SectionV3 from "@/components/unique/SectionV3/SectionV3";
import SectionV5 from "@/components/unique/SectionV5/SectionV5";
import IngeneriasElectricaData from "@/data/IngeneriasElectricaData";
import LayoutWrapper from "@/layout/LayoutWrapper";


export default function Ambiental() {
  return (
    <LayoutWrapper layout="cliente">


    <SectionV5
        titulo={IngeneriasElectricaData.introduccion.titulo}
        contenido={IngeneriasElectricaData.introduccion.contenido}
      /> 


      <SectionV3 
        title={IngeneriasElectricaData.sectionV3.title} 
        datos={IngeneriasElectricaData.sectionV3.datos} 

      />

      <Portafolio 
        title={IngeneriasElectricaData.portafolio.title}
        description={IngeneriasElectricaData.portafolio.description}
        pdfUrl={IngeneriasElectricaData.portafolio.pdfUrl}
      />


    </LayoutWrapper>
  );
}
