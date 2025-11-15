import React from 'react';
import { Link } from 'react-router-dom';
import './MainPage.css'; // Estilos específicos de MainPage

const MainPage: React.FC = () => {
  const base = import.meta.env.BASE_URL; // Base URL para producción

  return (
    <>
      <div className="header">
        <a>
          <img src={base + 'vite.svg'} className="logoEstimula" alt="Estimula" />
        </a>
        <h1>
          <Link to="/bio" className="nombreLink">
            Psi. Kasandra Rodriguez
          </Link>
        </h1>
        <h2>Estimulación Temprana | Refuerzos Educativos</h2>
      </div>

      <div className="loquehacemos-panel">
        <img 
          src={base + 'vite.svg'} 
          alt="Lo que hacemos" 
          className="loquehacemos-image" 
        />
        <a 
          href="https://www.canva.com/design/DAG4cFeAtCI/bC7RnGF9Oj3_NtXO9p7twA/view?embed"
          target="_blank" 
          rel="noopener noreferrer"
          className="loquehacemos-button"
        >
          Lo que hacemos
        </a>
      </div>

      <div className="politicas-panel">
        <img 
          src={base + 'POLITICAS.png'} 
          alt="Políticas" 
          className="politicas-image" 
        />
        <a 
          href="https://www.canva.com/design/DAG4ialtD-g/D_dzFJ4z_1AFRPVMgl4WaA/view?embed" 
          target="_blank" 
          rel="noopener noreferrer"
          className="politicas-button"
        >
          Nuestras Políticas
        </a>
      </div>

      <div className="programs-panel">
        <img 
          src={base + 'PROGRAMA.jpg'} 
          alt="Programa de estimulación temprana" 
          className="program-image" 
        />
        <a 
          href="https://www.canva.com/design/DAG4OXCqPuk/view?embed" 
          target="_blank" 
          rel="noopener noreferrer"
          className="program-button"
        >
          Nuestro Programa 2025-2026
        </a>
      </div>

      <div className="post-panel">
        <a 
          href="https://wa.me/18099917165" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <img 
            src={base + 'Post.png'} 
            alt="Políticas" 
            className="post-image"
          />
        
          <div className="click-indicator">
            <img src={base + 'TGgC.gif'} alt="Bebé señalando" className="baby-gif"/>
            <span>Haz clic aquí</span>
          </div>
        </a>
      </div>

      <div className="contact-section">
        <h3>Contacto</h3>
        <p>📍 Dirección: Calle Agramonte Bonao, Monseñor Nouel, Rep. Dominicana</p>

        <div className="contact-icons">
          <a 
            href="https://wa.me/18099917165" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <img src={base + 'whatsapp.gif'} alt="WhatsApp" className="icon" />
            <span>WhatsApp</span>
          </a>

          <a 
            href="https://www.instagram.com/estimula_psicol"
            target="_blank" 
            rel="noopener noreferrer"
          >
            <img src={base + 'instagram.gif'} alt="Instagram" className="icon" />
            <span>Instagram</span>
          </a>
        </div>
      </div>
    </>
  );
};

export default MainPage;
