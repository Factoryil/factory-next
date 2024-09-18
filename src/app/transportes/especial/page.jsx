import Portafolio from "@/components/unique/Portafolio/Portafolio";
import SectionV3 from "@/components/unique/SectionV3/SectionV3";
import SectionV5 from "@/components/unique/SectionV5/SectionV5";
import TransporteEspecialData from "@/data/TransporteEspecialData";
import LayoutWrapper from "@/layout/LayoutWrapper";


export default function Ambiental() {
  return (
    <LayoutWrapper layout="cliente">


    <SectionV5
        titulo={TransporteEspecialData.introduccion.titulo}
        contenido={TransporteEspecialData.introduccion.contenido}
      /> 


      <SectionV3 
        title={TransporteEspecialData.sectionV3.title} 
        datos={TransporteEspecialData.sectionV3.datos} 

      />

      <Portafolio 
        title={TransporteEspecialData.portafolio.title}
        description={TransporteEspecialData.portafolio.description}
        pdfUrl={TransporteEspecialData.portafolio.pdfUrl}
      />


    </LayoutWrapper>
  );
}
