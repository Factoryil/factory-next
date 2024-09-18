import Portafolio from "@/components/unique/Portafolio/Portafolio";
import SectionV3 from "@/components/unique/SectionV3/SectionV3";
import SectionV5 from "@/components/unique/SectionV5/SectionV5";
import IngeneriasSistemaData from "@/data/IngeneriasSistemaData";
import LayoutWrapper from "@/layout/LayoutWrapper";


export default function Ambiental() {
  return (
    <LayoutWrapper layout="cliente">


    <SectionV5
        titulo={IngeneriasSistemaData.introduccion.titulo}
        contenido={IngeneriasSistemaData.introduccion.contenido}
      /> 


      <SectionV3 
        title={IngeneriasSistemaData.sectionV3.title} 
        datos={IngeneriasSistemaData.sectionV3.datos} 

      />

      <Portafolio 
        title={IngeneriasSistemaData.portafolio.title}
        description={IngeneriasSistemaData.portafolio.description}
        pdfUrl={IngeneriasSistemaData.portafolio.pdfUrl}
      />


    </LayoutWrapper>
  );
}
