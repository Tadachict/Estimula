import React from 'react';
import { useNavigate } from 'react-router-dom';
import './BioPage.css';

const BioPage: React.FC = () => {
  const navigate = useNavigate();
  const base = import.meta.env.BASE_URL; // Base URL para producción

  return (
    <div className="bio-container">
      <div className="bio-card">
        {/* Imagen de la profesional */}
        <img 
          src={base + 'Ka.jpg'} 
          alt="Kasandra Rodriguez" 
          className="bio-image" 
        />

        {/* Contenido de la bio */}
        <div className="bio-content">
          <h1>Kassandra Rodriguez</h1>
          <h2>Psicóloga Educativa - Especialista en Desarrollo Infantil</h2>

          <p>
            Licenciada en Psicología Educativa por la Universidad UAPA, Kassandra cuenta con una sólida formación en el acompañamiento del desarrollo infantil y la intervención psicopedagógica.
          </p>

          <p>
            Actualmente cursa una Maestría en Neurociencias de la Educación en la Universidad UPID y una Maestría en Logopedia a través de CEUPE España, ampliando sus competencias en el abordaje de dificultades de aprendizaje, autismo y trastornos del lenguaje.
          </p>

          <p>
            Complementa su preparación con diplomados en estimulación temprana, terapia del habla, intervención educativa y consejería familiar.
          </p>

          <p>
            Su trabajo se distingue por la responsabilidad, el compromiso y la integración de estrategias basadas en evidencia para promover el bienestar emocional, cognitivo y social de los niños.
          </p>

          <button 
            className="back-button"
            onClick={() => navigate(-1)}
          >
            Volver
          </button>
        </div>
      </div>
    </div>
  );
};

export default BioPage;
