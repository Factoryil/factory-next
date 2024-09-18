import Portafolio from "@/components/unique/Portafolio/Portafolio";
import SectionV3 from "@/components/unique/SectionV3/SectionV3";
import SectionV5 from "@/components/unique/SectionV5/SectionV5";
import IngeneriasCivilData from "@/data/IngeneriasCivilData";
import LayoutWrapper from "@/layout/LayoutWrapper";


export default function Civil() {
  return (
    <LayoutWrapper layout="cliente">


    <SectionV5
        titulo={IngeneriasCivilData.introduccion.titulo}
        contenido={IngeneriasCivilData.introduccion.contenido}
      /> 


      <SectionV3 
        title={IngeneriasCivilData.sectionV3.title} 
        datos={IngeneriasCivilData.sectionV3.datos} 

      />

      <Portafolio 
        title={IngeneriasCivilData.portafolio.title}
        description={IngeneriasCivilData.portafolio.description}
        pdfUrl={IngeneriasCivilData.portafolio.pdfUrl}
      />


    </LayoutWrapper>
  );
}
