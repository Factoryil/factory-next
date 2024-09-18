import Portafolio from "@/components/unique/Portafolio/Portafolio";
import SectionV3 from "@/components/unique/SectionV3/SectionV3";
import SectionV5 from "@/components/unique/SectionV5/SectionV5";
import LogisticaData from "@/data/LogisticaData";
import LayoutWrapper from "@/layout/LayoutWrapper";


export default function Ambiental() {
  return (
    <LayoutWrapper layout="cliente">


    <SectionV5
        titulo={LogisticaData.introduccion.titulo}
        contenido={LogisticaData.introduccion.contenido}
      /> 


      <SectionV3 
        title={LogisticaData.sectionV3.title} 
        datos={LogisticaData.sectionV3.datos} 

      />

      <Portafolio 
        title={LogisticaData.portafolio.title}
        description={LogisticaData.portafolio.description}
        pdfUrl={LogisticaData.portafolio.pdfUrl}
      />


    </LayoutWrapper>
  );
}
