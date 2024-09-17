import Portafolio from "@/components/unique/Portafolio/Portafolio";
import SectionV1 from "@/components/unique/SectionV1/SectionV1";
import SectionV3 from "@/components/unique/SectionV3/SectionV3";
import IngeneriasCivilData from "@/data/IngeneriasCivilData";
import LayoutWrapper from "@/layout/LayoutWrapper";


export default function Certificados() {
  return (
    <LayoutWrapper layout="cliente">
      <SectionV1
        titulo={IngeneriasCivilData.acercaDeNosotros.titulo}
        subtitulo={IngeneriasCivilData.acercaDeNosotros.subtitulo}
        contenido={IngeneriasCivilData.acercaDeNosotros.contenido}
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
