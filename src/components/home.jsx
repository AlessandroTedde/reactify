import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Container fluid className="mainPage">
      <Row>
        <Col xs={12} md={9} className="offset-md-3">
          <Row>
            <Col xs={9} lg={11} className="mainLinks d-none d-md-flex">
              <Link to="/">TRENDING</Link>
              <Link to="/">PODCAST</Link>
              <Link to="/">MOODS AND GENRES</Link>
              <Link to="/">NEW RELEASES</Link>
              <Link to="/">DISCOVER</Link>
            </Col>
          </Row>

          {/* Search Results */}
          <Row>
            <Col xs={10}>
              <div id="searchResults" style={{ display: "none" }}>
                <h2>Search Results</h2>
                <Row className="row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3"></Row>
              </div>
            </Col>
          </Row>

          {/* Rock Classics */}
          <Row>
            <Col xs={10}>
              <Card>
                <Card.Body>
                  <Card.Title>Rock Classics</Card.Title>
                  <Row
                    className="row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3"
                    id="rockSection"
                  ></Row>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          {/* Pop Culture */}
          <Row>
            <Col xs={10}>
              <Card>
                <Card.Body>
                  <Card.Title>Pop Culture</Card.Title>
                  <Row
                    className="row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3"
                    id="popSection"
                  ></Row>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          {/* #HipHop */}
          <Row>
            <Col xs={10}>
              <Card>
                <Card.Body>
                  <Card.Title>#HipHop</Card.Title>
                  <Row
                    className="row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3"
                    id="hipHopSection"
                  ></Row>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
