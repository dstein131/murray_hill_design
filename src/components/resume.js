import React from "react";
import { Card, Container, Col, Row } from "react-bootstrap";

function Resume() {
  return (
    <Row className="justify-content-md-center">
      <Col lg={8} md={11} xs={12}>
        <Container>
          <Card>
            <Card.Body>
              <Row>
                <center>
                  <Card.Title>c.v</Card.Title>
                </center>
                <Col lg={9} md={8} xs={7}>
                  {/* <Card.Title>c.v</Card.Title>
        <br/> */}
                  <Card.Subtitle className="mb-3">
                    work.experience
                  </Card.Subtitle>
                  <Card.Subtitle className="mb-3" style={{ fontSize: "15px" }}>
                    ux.ui bootcamp > university.of.denver > feb 21 - sep 21
                  </Card.Subtitle>
                  <Card.Text style={{ fontSize: "13px" }}>
                    User-Centric Design Research: Qualitative and Quantitative
                    Research Practices, Information Architecture and Flow, User
                    Need Identification, User Experience Interviewing, Persona
                    Creation, Insight Synthesis.
                  </Card.Text>
                  <Card.Text style={{ fontSize: "13px" }}>
                    User Interface Development: Atomic Design, UI Grids and
                    Composition, Color Theory, Heuristic Evaluation, Typography,
                    Interaction Design and Iconography.
                  </Card.Text>
                  <Card.Text style={{ fontSize: "13px" }}>
                    Visual Prototyping and Wireframing: Adobe XD, Figma,
                    In-Vision, Google Slides, Storyboarding, Decision Mapping,
                    Decision Flow Diagrams. Responsive Web Design (RWD).
                  </Card.Text>
                  <Card.Subtitle className="mb-3" style={{ fontSize: "15px" }}>
                    grant.preaward.specialist > the.university.of.colorado >
                    june 16 - feb 21
                  </Card.Subtitle>
                  <Card.Text style={{ fontSize: "13px" }}>
                    Responsible for reviewing research grants prior to
                    submission to the funding agency. Experienced with the
                    National Institute of Health rules and regulations for grant
                    submissions. Experience in InfoED and ERA Commons portals.
                    Reviewed and rebuilt budgets for a multitude of funding
                    announcements. Experience in fringe benefit rates and
                    Facilities & Administration costs. Understanding of the
                    timelines needed and the various cycle periods. Reviewed
                    support documents such other support, research support,
                    biosketches, and subcontract agreements.
                  </Card.Text>
                  <Card.Subtitle className="mb-3" style={{ fontSize: "15px" }}>
                    signals.intelligence.analyst > u.s.army > nov 09 – june 16
                  </Card.Subtitle>
                  <Card.Text style={{ fontSize: "13px" }}>
                    Management of the Department of Defense’s geosynchronous
                    satellite resources on a global scale in order to provide
                    early warning indicators for troops in direct conflict as
                    well as missile defense for the United States and its
                    allies. Communicated directly with multiple federal agencies
                    as well as its allies on a daily basis to ensure timely and
                    relevant intelligence dissemination. Deployed to Afghanistan
                    to support Special Operations Command in Operation Enduring
                    Freedom as a Signals Intelligence Geospatial Analyst to aid
                    in the targeting of known high value targets throughout
                    Afghanistan from both signals intelligence and human
                    intelligence gathered on the battlefield.
                  </Card.Text>
                </Col>
                <Col lg={3} md={4} xs={4}>
                  <div
                    style={{
                      borderLeft: "1px solid gray",
                      paddingLeft: "10px",
                    }}
                  >
                    <Card.Subtitle className="mb-3">education</Card.Subtitle>
                    <Card.Text style={{ fontSize: "13px" }}>
                      UX/UI Bootcamp > University of Denver > Feb ’21 – Sep '21
                    </Card.Text>

                    <Card.Text style={{ fontSize: "13px" }}>
                      Finance (Masters) > Colorado State University > 2017-2019
                    </Card.Text>

                    <Card.Text style={{ fontSize: "13px" }}>
                      Business Admin (Bachelors) > Florida International
                      University > 2000-2005
                    </Card.Text>

                    <Card.Subtitle className="mb-3">Awards</Card.Subtitle>
                    <Card.Text style={{ fontSize: "13px" }}>
                      Combat Action Badge
                    </Card.Text>
                    <Card.Text style={{ fontSize: "13px" }}>
                      Joint Service Commendation Medal
                    </Card.Text>
                    <Card.Text style={{ fontSize: "13px" }}>
                      Army Commendation Medal
                    </Card.Text>
                    <Card.Text style={{ fontSize: "13px" }}>
                      Army Achievement Medal, (3rd Award)
                    </Card.Text>
                    <Card.Text style={{ fontSize: "13px" }}>
                      Afghanistan Campaign Medal (2nd Award)
                    </Card.Text>
                    <Card.Text style={{ fontSize: "13px" }}>
                      Overseas Service Ribbon (2nd Award)
                    </Card.Text>
                    <Card.Text style={{ fontSize: "13px" }}>
                      NATO Medal (2nd Award)
                    </Card.Text>
                    <Card.Text style={{ fontSize: "13px" }}>
                      Global War on Terrorism Medal
                    </Card.Text>
                    <Card.Text style={{ fontSize: "13px" }}>
                      Army Service Ribbon
                    </Card.Text>
                    <Card.Text style={{ fontSize: "13px" }}>
                      Army Good Conduct Medal, (2nd Award)
                    </Card.Text>
                    <Card.Text style={{ fontSize: "13px" }}>
                      National Defense Service Medal
                    </Card.Text>
                  </div>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Container>
      </Col>
    </Row>
  );
}

export default Resume;
