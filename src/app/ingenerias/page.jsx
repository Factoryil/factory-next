import Portafolio from "@/components/unique/Portafolio/Portafolio";
import SectionV1 from "@/components/unique/SectionV1/SectionV1";
import ServiciosGenerales from "@/components/unique/ServiciosGenerales/ServiciosGenerales";
import LayoutWrapper from "@/layout/LayoutWrapper";
import IngeneriasData from "@/data/IngeneriasData";


export default function Certificados() {
  return (
    <LayoutWrapper layout="cliente">

      <SectionV1
        titulo={IngeneriasData.acercaDeNosotros.titulo}
        subtitulo={IngeneriasData.acercaDeNosotros.subtitulo}
        contenido={IngeneriasData.acercaDeNosotros.contenido}
      />

      <ServiciosGenerales datos={IngeneriasData.servicios} />

      <Portafolio 
        title={IngeneriasData.portafolio.title}
        description={IngeneriasData.portafolio.description}
        pdfUrl={IngeneriasData.portafolio.pdfUrl}
      />

    </LayoutWrapper>
  );
}
