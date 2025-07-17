import React from 'react';
import '../pages/styles/Home.css';
// Importa las imágenes (asegúrate que están en la ruta correcta)
import iconCertificado from '../assets/icons/certificado.png';
import iconProfesores from '../assets/icons/profesores.png';
import iconProgramas from '../assets/icons/programas.png';
import fondoCloud from '../assets/images/fondocloud.png';
import fondoVirtual from '../assets/images/fondovirtual.png';
import presencialImg from '../assets/images/presencial.png';
import virtualImg from '../assets/images/virtual.png';

function Home() {
  return (
    <div className="home-container">
      {/* Sección de bienvenida */}
      <section className="welcome-section">
        <h1>Bienvenidos a Instituto Cultural Peruano Norteamericano</h1>
      </section>

      {/* Sección de modalidades educativas */}
      <section className="modalities-section">
        <h2>Aprende con nosotros en cualquiera de nuestras modalidades</h2>
        
        <div className="modalities-container">
          {/* Modalidad Virtual */}
          <div className="modality-card">
            <img className="modalidad-img" src={virtualImg} alt="Clases virtuales" />
            <div className="modality-content">
              <h3>Modalidad Virtual</h3>
              <p>Clases 100% en vivo con un docente en tiempo real.</p>
              <button className="modality-button">VER MODALIDAD</button>
            </div>
          </div>
          
          {/* Modalidad Presencial */}
          <div className="modality-card">
            <img className="modalidad-img" src={presencialImg} alt="Clases presenciales" />
            <div className="modality-content">
              <h3>Modalidad Presencial</h3>
              <p>Clases 100% presenciales con docentes especializados.</p>
              <button className="modality-button">VER MODALIDAD</button>
            </div>
          </div>
        </div>
      </section>

      <section className="why-icpna-section">
      <div className="section-header">
        <h2>¿Por qué estudiar en ICPNA?</h2>
      </div>
      
      <div className="benefits-container">
        {/* Beneficio 1 */}
        <div className="benefit-card">
          <div className="benefit-icon">
            <img src={iconProgramas} alt="Programas acreditados" style={{width: '48px', height: '48px'}} />
          </div>
          <h3>Programas de inglés acreditados internacionalmente</h3>
        </div>

        {/* Beneficio 2 */}
        <div className="benefit-card">
          <div className="benefit-icon">
            <img src={iconProfesores} alt="Profesores certificados" style={{width: '48px', height: '48px'}} />
          </div>
          <h3>Profesores certificados por la Universidad de Michigan</h3>
        </div>

        {/* Beneficio 3 */}
        <div className="benefit-card">
          <div className="benefit-icon">
            <img src={iconCertificado} alt="Doble certificación" style={{width: '48px', height: '48px'}} />
          </div>
          <h3>Doble certificación: ICPNA y Educational Testing Service (ETS)</h3>
        </div>
      </div>
    </section>

    <section className="library-services">
      <div className="services-container">
        
        {/* Biblioteca Virtual */}
        <div className="service-card">
          <img className="service-img-bg" src={fondoVirtual} alt="Biblioteca Virtual" />
          <div className="service-absolute-content">
            <div className="service-header">
              <h2>Biblioteca Virtual</h2>
            </div>
            <div className="service-content">
              <p>
                Te ofrecemos diversas plataformas en línea donde accederás a miles de libros y publicaciones sobre el aprendizaje del inglés, artículos académicos, arte y revistas de actuación. Consulta a través de cualquier dispositivo.
              </p>
              <button className="service-button">IR A BIBLIOTECA VIRTUAL</button>
            </div>
          </div>
        </div>

        {/* Book Cloud */}
        <div className="service-card">
          <img className="service-img-bg" src={fondoCloud} alt="Book Cloud" />
          <div className="service-absolute-content">
            <div className="service-header">
              <h2>Book Cloud</h2>
            </div>
            <div className="service-content">
              <p>
                Accede a miles de libros electrónicos y audiolibros sobre literatura, arte, cómics, cultura estadounidense y temas actuales. Disponible para la comunidad ICPNA, asociados de biblioteca y público en general.
              </p>
              <button className="service-button">IR A BOOK CLOUD</button>
            </div>
          </div>
        </div>

      </div>
    </section>
    </div>
  );
}

export default Home;