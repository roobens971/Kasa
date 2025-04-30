import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import Banner from "../components/BannerApropos.jsx";
import Accordion from "../components/Accordion.jsx";
import AccordionStyle from "../components/AccordionStyle.jsx";


function Apropos() {
  return (
    <>
    <div>
      <Header/>
      <Banner/>
      <div className="collapseContainer">
      <Accordion>
        <AccordionStyle title="Fiabilité">
          Les annonces postées sur Kasa garantissent une fiabilité totale. Les
          photos sont conformes aux logements, et toutes les informations sont
          régulièrement verifiées par nos équipes.
        </AccordionStyle>
      </Accordion>

      <Accordion>
        <AccordionStyle title="Respect">
          La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
          comportement discriminatoire ou de pertubation du voisinage entraînera
          une exclusion de notre plateforme.
        </AccordionStyle>
      </Accordion>

      <Accordion>
        <AccordionStyle title="Service">
          La qualité du service est au coeur de notre engagement chez Kasa. Nous
          veillons à ce que chaque interaction, que ce soit avec nos hôtes ou
          nos locataires, soit empreinte de respect et de bienveillance.
        </AccordionStyle>
      </Accordion>

      <Accordion>
        <AccordionStyle title="Sécurité">
          La sécurité est la propriété de Kasa. Aussi bien pour nos hôtes que
          pour les voyageurs, chaque logement correspond aux critères de
          sécurité établis par nos services. En laissant une note aussi bien à
          l'hôte qu'au locataire, cela permet à nos équipes de vérifié que les
          standards sont bien respectés. Nous organisons également des ateliers
          sur la sécurité domestique pour nos hôtes.
        </AccordionStyle>
      </Accordion>
    </div>
      <Footer/>
    </div>
    </>
  );
  
}

export default Apropos