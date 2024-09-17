"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import CertificadoCard from '@/components/unique/CertificadoCard/CertificadoCard';
import { certificados } from '@/data/certificadosData';
import "./CertificadosPage.css"

export default function ContenedorCertificados() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openModal = (index) => {
    setSelectedImage(certificados[index].img);
    setCurrentIndex(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    const newIndex = (currentIndex + 1) % certificados.length;
    setSelectedImage(certificados[newIndex].img);
    setCurrentIndex(newIndex);
  };

  const prevImage = () => {
    const newIndex = (currentIndex - 1 + certificados.length) % certificados.length;
    setSelectedImage(certificados[newIndex].img);
    setCurrentIndex(newIndex);
  };

  return (
    <div className="container">
      <h1 className="titulo">CERTIFICADOS</h1>
      <div className="grid">
        {certificados.map((certificado, index) => (
          <CertificadoCard
            key={index}
            certificado={certificado.img}
            title={certificado.title}
            text={certificado.text}
            onClick={() => openModal(index)}
          />
        ))}
      </div>

      {selectedImage && (
        <div className="modal">
          <span className="close" onClick={closeModal}>&times;</span>
          <Image className="modal-content" src={selectedImage} alt="Certificado Ampliado" layout="fill" objectFit="contain" />
          <button className="prev" onClick={prevImage}>&#10094;</button>
          <button className="next" onClick={nextImage}>&#10095;</button>
        </div>
      )}
    </div>
  );
}
