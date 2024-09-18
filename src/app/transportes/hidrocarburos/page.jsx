import Portafolio from "@/components/unique/Portafolio/Portafolio";
import SectionV3 from "@/components/unique/SectionV3/SectionV3";
import SectionV5 from "@/components/unique/SectionV5/SectionV5";
import TransporteHidrocarburosData from "@/data/TransporteHidrocarburosData";
import LayoutWrapper from "@/layout/LayoutWrapper";


export default function Ambiental() {
  return (
    <LayoutWrapper layout="cliente">


    <SectionV5
        titulo={TransporteHidrocarburosData.introduccion.titulo}
        contenido={TransporteHidrocarburosData.introduccion.contenido}
      /> 


      <SectionV3 
        title={TransporteHidrocarburosData.sectionV3.title} 
        datos={TransporteHidrocarburosData.sectionV3.datos} 

      />

      <Portafolio 
        title={TransporteHidrocarburosData.portafolio.title}
        description={TransporteHidrocarburosData.portafolio.description}
        pdfUrl={TransporteHidrocarburosData.portafolio.pdfUrl}
      />


    </LayoutWrapper>
  );
}
