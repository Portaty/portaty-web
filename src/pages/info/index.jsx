import { Footer, Navbar } from "@/components";
import React from "react";
import styles from "@/styles/Info.module.css";

const Info = () => {
  return (
    <div>
      <Navbar />
      <div className="container section_two">
        <h1 className={styles.title}>Tu puente hacia un mundo de oportunidades comerciales</h1>
        <p className={styles.paragraph}>
          En un mundo interconectado donde la accesibilidad y la autenticidad
          son fundamentales, Portaty se destaca como una aplicación innovadora
          que está redefiniendo la forma en que los negocios y los consumidores
          se conectan en un nivel global. Al fusionar la eficiencia de la
          tecnología digital con la autenticidad del comercio local, Portaty se
          convierte en tu destino definitivo para descubrir, explorar y conectar
          con todo lo que necesitas, sin importar dónde te encuentres.
        </p>
        <h2 className={styles.chrTitle}>Características Únicas:</h2>
        <div className={styles.chrContain}>
          <h3 className={styles.chrSubtitle}>Búsqueda Personalizada: </h3>
          <p className={styles.chrParagraph}>
            {" "}
            Encuentra exactamente lo que estás buscando gracias a nuestra
            búsqueda avanzada y filtros personalizados, que te permiten explorar
            una amplia variedad de negocios y servicios de manera eficiente.
          </p>
        </div>
        <div className={styles.chrContain}>
          <h3 className={styles.chrSubtitle}>Visualización Auténtica: </h3>
          <p className={styles.chrParagraph}>
            Explora productos y servicios con fotos reales, garantizando una
            experiencia de compra informada y satisfactoria, sin importar en qué
            parte del mundo te encuentres.
          </p>
        </div>
        <div className={styles.chrContain}>
          <h3 className={styles.chrSubtitle}>Ubicación Precisa: </h3>
          <p className={styles.chrParagraph}>
            {" "}
            Encuentra negocios cercanos o en cualquier lugar del mundo con
            nuestra función de ubicación precisa, que te permite explorar
            opciones locales o globales según tus preferencias.
          </p>
        </div>
        <div className={styles.chrContain}>
          <h3 className={styles.chrSubtitle}>Registro de Favoritos: </h3>
          <p className={styles.chrParagraph}>
            {" "}
            Guarda tus negocios favoritos para acceder rápidamente a ellos en
            cualquier momento y desde cualquier lugar, asegurando una
            experiencia de usuario personalizada y conveniente, sin importar
            dónde te encuentres.
          </p>
        </div>
        <h2 className={styles.chrTitle}>Beneficios para los Negocios: </h2>
        <div className={styles.chrContain}>
          <h3 className={styles.chrSubtitle}>Alcance Global: </h3>
          <p className={styles.chrParagraph}>
            {" "}
            Al registrarse en Portaty, los negocios tienen la oportunidad de
            aumentar su visibilidad y alcance a una audiencia global de
            consumidores interesados en sus productos y servicios, lo que abre
            nuevas oportunidades de crecimiento y expansión.
          </p>
        </div>
        <div className={styles.chrContain}>
          <h3 className={styles.chrSubtitle}>Interacción Directa: </h3>
          <p className={styles.chrParagraph}>
            {" "}
            Nuestra plataforma facilita la comunicación directa entre los
            negocios y sus clientes, proporcionándole al cliente información de
            contacto, lo que permite una mayor interacción y relaciones más
            sólidas que impulsan la fidelidad del cliente en cualquier parte del
            mundo.
          </p>
        </div>
        <div className={styles.chrContain}>
          <h3 className={styles.chrSubtitle}>Gestión Eficiente: </h3>
          <p className={styles.chrParagraph}>
            {" "}
            Actualiza fácilmente la información del negocio, horarios de
            atención y promociones especiales, lo que garantiza que los clientes
            estén siempre informados y actualizados, independientemente de su
            ubicación geográfica.
          </p>
        </div>
        <h2 className={styles.chrTitle}>Beneficios para los Consumidores: </h2>
        <div className={styles.chrContain}>
          <h3 className={styles.chrSubtitle}>Experiencia Personalizada: </h3>
          <p className={styles.chrParagraph}>
            {" "}
            Encuentra negocios que se adapten a tus necesidades y preferencias
            específicas, creando una experiencia de compra personalizada y
            satisfactoria, ya sea que estés en tu ciudad natal o viajando por el
            mundo.
          </p>
        </div>
        <div className={styles.chrContain}>
          <h3 className={styles.chrSubtitle}>Seguridad y Confianza: </h3>
          <p className={styles.chrParagraph}>
            {" "}
            Con fotos reales y ubicaciones precisas, puedes confiar en que estás
            tomando decisiones informadas y seguras, lo que te brinda
            tranquilidad al elegir negocios en cualquier lugar del mundo.
          </p>
        </div>
        <div className={styles.chrContain}>
          <h3 className={styles.chrSubtitle}>Ahorro de Tiempo: </h3>
          <p className={styles.chrParagraph}>
            {" "}
            Evita la búsqueda interminable y las decepciones al encontrar
            exactamente lo que necesitas de manera rápida y eficiente, lo que te
            permite aprovechar al máximo tú tiempo, ya sea en casa o en el
            extranjero.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Info;
