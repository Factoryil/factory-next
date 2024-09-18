import Portafolio from "@/components/unique/Portafolio/Portafolio";
import SectionV1 from "@/components/unique/SectionV1/SectionV1";
import ServiciosGenerales from "@/components/unique/ServiciosGenerales/ServiciosGenerales";
import LayoutWrapper from "@/layout/LayoutWrapper";
import TransportesData from "@/data/TransportesData";


export default function Certificados() {
  return (
    <LayoutWrapper layout="cliente">

      <SectionV1
        titulo={TransportesData.acercaDeNosotros.titulo}
        subtitulo={TransportesData.acercaDeNosotros.subtitulo}
        contenido={TransportesData.acercaDeNosotros.contenido}
      />

      <ServiciosGenerales datos={TransportesData.servicios} />

      <Portafolio 
        title={TransportesData.portafolio.title}
        description={TransportesData.portafolio.description}
        pdfUrl={TransportesData.portafolio.pdfUrl}
      />

    </LayoutWrapper>
  );
}
