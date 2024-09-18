import Image from 'next/image';
import styles from './SectionV2.module.css'; 
import fondoSectionV2 from '@/assets/images/fondos/b3.png';

const SectionV2 = ({ titulo, subtitulo, contenido }) => {
  return (
    <div className={styles.contenedorTestimonioFactory}>
      <div className={styles.itemTestimonioFactory}>
        <Image 
          src={fondoSectionV2}
          alt="Testimonio" 
          fill 
          style={{ objectFit: 'cover' }} 
          className={styles.itemTestimonioFactoryImg}
        />
        <div className={styles.itemTestimonioFactoryContenido}>
          <p>{contenido}</p>
          <h4 className={styles.bdevsSlickTitle}>{titulo}</h4>
          <h5 className={styles.bdevsSlickSubtitle}>{subtitulo}</h5>
        </div>
      </div>
    </div>
  );
};

export default SectionV2;
