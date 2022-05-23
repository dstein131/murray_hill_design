import React from 'react'
import { Card, Container, Col, Row } from 'react-bootstrap'

function Resume() {
  return (
    <Container>
      <Card>
        <Card.Body>
        <Row>
        <center><Card.Title>c.v</Card.Title></center>
        <Col xs={9}>
        {/* <Card.Title>c.v</Card.Title>
        <br/> */}
        <Card.Title>work.experience</Card.Title>
        <Card.Subtitle>ux.ui bootcamp > university.of.denver > feb 21 - sep 21</Card.Subtitle>
        <Card.Text>User-Centric Design Research: Qualitative and Quantitative Research Practices, Information Architecture and Flow,
User Need Identification, User Experience Interviewing,
Persona Creation, Insight Synthesis.</Card.Text>
        <Card.Text>User Interface Development: Atomic Design, UI Grids and Composition, Color Theory, Heuristic Evaluation, Typography,
Interaction Design and Iconography.</Card.Text>
        <Card.Text>Visual Prototyping and Wireframing: Adobe XD, Figma, In-Vision, Google Slides, Storyboarding, Decision Mapping, Decision Flow Diagrams. Responsive Web Design (RWD).</Card.Text>
        <Card.Subtitle>grant.preaward.specialist > the.university.of.colorado > june 16 - feb 21</Card.Subtitle>
        <Card.Text>Responsible for reviewing research grants prior to submission to the funding agency. Experienced with the National Institute of Health rules and regulations for grant submissions. Experience in InfoED and ERA Commons portals. Reviewed and rebuilt budgets for a multitude of funding announcements. Experience in fringe benefit rates and Facilities & Administration costs. Understanding of the timelines needed and the various cycle periods. Reviewed support documents such other support, research support, biosketches, and subcontract agreements.</Card.Text>
        <Card.Subtitle>signals.intelligence.analyst > u.s.army > nov 09 – june 16</Card.Subtitle>
        <Card.Text>Management of the Department of Defense’s geosynchronous satellite resources on a global scale in order to provide early warning indicators for troops in direct conflict as well as missile defense for the United States and its allies. Communicated directly with multiple federal agencies as well as its allies on a daily basis to ensure timely and relevant intelligence dissemination. Deployed to Afghanistan to support Special Operations Command in Operation Enduring Freedom as a Signals Intelligence Geospatial Analyst to aid in the targeting of known high value targets throughout Afghanistan from both signals intelligence and human intelligence gathered on the battlefield.</Card.Text>
        </Col>
        <Col>
        <Card.Title>education</Card.Title>
        <Card.Text>UX/UI Bootcamp >
        University of Denver >
        Feb ’21 – Sep '21</Card.Text>
        
        <Card.Text>Finance (Masters) >
Colorado State University >
2017-2019</Card.Text>
        
        <Card.Text>Business Admin (Bachelors) >
Florida International University >
2000-2005</Card.Text>
        
        <Card.Title>
        Awards
        </Card.Title>
        <Card.Text>Combat Action Badge</Card.Text>
        <Card.Text>Joint Service Commendation Medal</Card.Text>
        <Card.Text>Army Commendation Medal</Card.Text>
        <Card.Text>Army Achievement Medal, (3rd Award)</Card.Text>
        <Card.Text>Afghanistan Campaign Medal (2nd Award)</Card.Text>
        <Card.Text>Overseas Service Ribbon (2nd Award)</Card.Text>
        <Card.Text>NATO Medal (2nd Award)</Card.Text>
        <Card.Text>Global War on Terrorism Medal</Card.Text>
        <Card.Text>Army Service Ribbon</Card.Text>
        <Card.Text>Army Good Conduct Medal, (2nd Award)</Card.Text>
        <Card.Text>National Defense Service Medal</Card.Text>
        </Col>
        </Row>
       
        </Card.Body>
      </Card>
    </Container>
  )
}

export default Resume