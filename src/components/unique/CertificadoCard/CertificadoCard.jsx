import React from 'react';
import Image from 'next/image';

const CertificadoCard = ({ certificado, title, text, onClick }) => {
  return (
    <div className="card" onClick={onClick}>
      <Image src={certificado} alt={title} className="card-image" layout="responsive" width={500} height={300} />
      <div className="card-content">
        <h2 className="card-title">{title}</h2>
        <p className="card-text">{text}</p>
      </div>
    </div>
  );
};

export default CertificadoCard;
