import Portafolio from "@/components/unique/Portafolio/Portafolio";
import SectionV3 from "@/components/unique/SectionV3/SectionV3";
import SectionV5 from "@/components/unique/SectionV5/SectionV5";
import IngeneriasMecanicaData from "@/data/IngeneriasMecanicaData";
import LayoutWrapper from "@/layout/LayoutWrapper";


export default function Ambiental() {
  return (
    <LayoutWrapper layout="cliente">


    <SectionV5
        titulo={IngeneriasMecanicaData.introduccion.titulo}
        contenido={IngeneriasMecanicaData.introduccion.contenido}
      /> 


      <SectionV3 
        title={IngeneriasMecanicaData.sectionV3.title} 
        datos={IngeneriasMecanicaData.sectionV3.datos} 

      />

      <Portafolio 
        title={IngeneriasMecanicaData.portafolio.title}
        description={IngeneriasMecanicaData.portafolio.description}
        pdfUrl={IngeneriasMecanicaData.portafolio.pdfUrl}
      />


    </LayoutWrapper>
  );
}
