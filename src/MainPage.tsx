import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';

const MainPage: React.FC = () => {
  return (
    <>
      <div className="header">
        <a>
          <img src="/vite.svg" className="logoEstimula" alt="Estimula" />
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
            src="/vite.svg" 
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
            src="/POLITICAS.png" 
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
          src="/PROGRAMA.jpg" 
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
            src="/Post.png" 
            alt="Políticas" 
            className="post-image"
          />
        
          <div className="click-indicator">
            <img src="/TGgC.gif" alt="Bebé señalando" className="baby-gif"/>
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
            <img src="/whatsapp.gif" alt="WhatsApp" className="icon" />
            <span>WhatsApp</span>
          </a>

          <a 
            href="https://www.instagram.com/estimula_psicol"
            target="_blank" 
            rel="noopener noreferrer"
          >
            <img src="/instagram.gif" alt="Instagram" className="icon" />
            <span>Instagram</span>
          </a>
        </div>
      </div>
    </>
  );
};

export default MainPage;
