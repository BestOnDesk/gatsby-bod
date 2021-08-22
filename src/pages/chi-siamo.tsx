import React from "react";
import GlobalWrapper from "../components/core/GlobalWrapper";
import SEO from "../components/core/SEO";
import BreadcrumbArea from "components/ui/base/BreadcrumbArea";
import PostListArea from "components/ui/base/PostListArea";
import { Col, Container, Row } from "styled-bootstrap-grid";
import { AboutUs, CustomP, Inner } from "styles/chi-siamo.style";
import Title from "components/core/Title";
import WidgetPostList from "components/ui/base/WidgetPostList";
import WidgetSocial from "components/ui/base/WidgetSocial";

export default () => {
  return (
    <GlobalWrapper withLayout>
      <SEO title={"Chi siamo"} description={"Chi siamo"} />

      <BreadcrumbArea
        title="Chi siamo"
        breadcrumbs={[
          { name: "BestOnDesk", link: "/" },
          {
            name: "Chi siamo",
            link: "/chi-siamo",
          },
        ]}
      />

      <PostListArea>
        <Container>
          <Row>
            <Col lg={8}>
              <AboutUs>
                <Inner>
                  <Title level={2}>
                    BestOnDesk é il tuo nuovo collega che sarà sempre dalla tua
                    parte
                  </Title>
                  <Title level={3}>Perché?</Title>
                  <p>
                    Perché abbiamo accumulato oltre 20 anni di esperienza nel
                    lavoro d’ufficio. Abbastanza per comprendere che le piccole
                    cose fanno spesso la differenza tra una carriera di successo
                    e uno stato di insoddisfazione.
                  </p>
                  <Title level={3}>Cosa troverai qui</Title>
                  <p>
                    Abbiamo deciso mettere la nostra esperienza a disposizione
                    di tutti coloro che desiderano cambiare qualcosa,
                    migliorarsi, o cominciare un nuovo percorso partendo dalle
                    piccole cose come per esempio dalla creazione di una
                    postazione di lavoro che sia l’espressione di te stesso.
                  </p>
                  <p>
                    Del carattere, talento, competenza, serietà e
                    professionalità che ti contraddistinguono prima di tutto
                    come persona e poi come impiegato, manager, imprenditore o
                    dipedente.
                  </p>
                  <Title level={3}>Cosa facciamo tutti i giorni</Title>
                  <p>
                    Testiamo decine e decine di prodotti per ufficio e
                    continuiamo costantemente a fare nuove esperienze da
                    condividere, ogni giorno alla ricerca dell’eccellenza,
                    dell’unicità e dello stile da raggiungere attraverso la
                    personalizzazione della postazione di lavoro accompagnata
                    dalla crescita personale a 360°.
                  </p>
                  <Title level={3}>Our mission</Title>
                  <CustomP>
                    La nostra missione è aiutarti ad avere successo attraverso
                    te stesso!
                  </CustomP>
                  <CustomP>
                    Mantenere viva la tua creatività costruendoci attorno
                    l’ambiente perfetto in cui fare emergere le tue qualità.
                  </CustomP>
                  <p>
                    Perché la tua identità viene prima di qualsiasi altra cosa e
                    tutto ciò che devi fare è non dimenticarlo mai.
                  </p>
                  <Title level={3}>Partnership e collaborazioni</Title>
                  <CustomP>
                    Vuoi uno spazio pubblicitario su BestOnDesk? Una recensione
                    di un tuo prodotto o un articolo dedicato al tuo Brand?
                  </CustomP>
                  <p>
                    Scrivici e troveremo la soluzione migliore per te e il tuo
                    business.
                  </p>
                </Inner>
              </AboutUs>
            </Col>
            <Col lg={4}>
              <WidgetPostList
                title={"Ultimi post su BestOnDesk"}
                marginBottom={30}
                limit={3}
                type={"last"}
              />
              <WidgetSocial marginBottom={30} />
              <WidgetPostList
                title={"Popolari su BestOnDesk"}
                marginBottom={30}
                type={"fixed"}
                fixedSlugs={[
                  "le-migliori-sedie-da-ufficio",
                  "i-migliori-notebook",
                ]}
              />
            </Col>
          </Row>
        </Container>
      </PostListArea>
    </GlobalWrapper>
  );
};
