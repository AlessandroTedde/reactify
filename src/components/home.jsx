import React, { useEffect } from "react";
import { Container, Row, Col, Card, CardImg } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { fetchDataFailure, fetchDataSuccess, fetchQueryDataSuccess } from "../redux/actions/results";

const Home = (params) => {
  const dispatch = useDispatch();
  const fetchData = async (query) => {
    fetchDataSuccess();
    try {
      const response = await fetch(`https://striveschool-api.herokuapp.com/api/deezer/search?q=${query}`);
      const data = await response.json();
      //setTimeout(function() { //puoi commentare/decommentare questo timeout per attendere 5 secondi la risposta e mostrare il loader (insieme alla riga sotto)
      fetchQueryDataSuccess(data);
      //}, 5000)
    } catch (error) {
      fetchDataFailure(error.message);
    }
  };
  useEffect(() => {
    fetchData();
  }, [fetchDataSuccess, fetchDataFailure, fetchQueryDataSuccess]);
  return (
    <Container fluid className="mainPage">
      <Row>
        <Col xs={12} md={9} className="offset-md-3">
          <Row>
            <Col xs={9} lg={11} className="mainLinks d-none d-md-flex">
              <Link className="toplink" to="/">
                TRENDING
              </Link>
              <Link className="toplink" to="/">
                PODCAST
              </Link>
              <Link className="toplink" to="/">
                MOODS AND GENRES
              </Link>
              <Link className="toplink" to="/">
                NEW RELEASES
              </Link>
              <Link className="toplink" to="/">
                DISCOVER
              </Link>
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
              <Card onLoad={dispatch(fetchData(params.rock))}>
                <CardImg variant="top" src={state.picture_medium} />
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
