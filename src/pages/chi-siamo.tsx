import React from "react";
import GlobalWrapper from "../components/core/GlobalWrapper";
import SEO from "../components/core/SEO";
import BreadcrumbArea from "components/ui/base/BreadcrumbArea";
import PostListArea from "components/ui/base/PostListArea";
import { Col, Container, Row } from "styled-bootstrap-grid";
import { AboutUs, Inner } from "styles/chi-siamo.style";
import Title from "components/core/Title";

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
            <Col lg={8} xl={8}>
              <AboutUs>
                <Inner>
                  <Title level={2}>
                    Bestondesk é il tuo nuovo collega che sarà sempre dalla tua
                    parte
                  </Title>
                  <Title level={3}>Perché?</Title>
                  <p>
                    Perché bbiamo accumulato oltre 20 anni di esperienza nel
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
                  <p>
                    La nostra missione è aiutarti ad avere successo attraverso
                    te stesso!
                  </p>
                  <p>
                    Mantenere viva la tua creatività costruendoci attorno
                    l’ambiente perfetto in cui fare emergere le tue qualità.
                  </p>
                  <p>
                    Perché la tua identità viene prima di qualsiasi altra cosa e
                    tutto ciò che devi fare è non dimenticarlo mai.
                  </p>
                </Inner>
              </AboutUs>
            </Col>
          </Row>
        </Container>
      </PostListArea>
    </GlobalWrapper>
  );
};
