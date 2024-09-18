import Image from 'next/image';
import styles from './SectionV5.module.css'; 
import fondoSectionV2 from '@/assets/images/fondos/b3.png';

const SectionV5 = ({ titulo, subtitulo, contenido }) => {
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
          <h4 className={styles.bdevsSlickTitle}>{titulo}</h4>
          <p>{contenido}</p>
        </div>
      </div>
    </div>
  );
};

export default SectionV5;
