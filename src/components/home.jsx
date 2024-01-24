import React, { useEffect } from "react";
import { Container, Row, Col, Card, CardImg } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  FETCH_DATA_FAILURE,
  fetchDataSuccess,
  fetchHipHopArtist,
  fetchPopArtist,
  fetchRockArtist,
} from "../redux/actions/results";

const Home = () => {
  const dispatch = useDispatch();
  const query = useSelector((state) => state.data.query);
  const dynamicMusic = useSelector((state) => state.data.data);
  const rockMusic = useSelector((state) => state.data.dataRock);
  const popMusic = useSelector((state) => state.data.dataPop);
  const hipHopMusic = useSelector((state) => state.data.dataHipHop);

  const fetchData = async (search) => {
    try {
      const response = await fetch(`https://striveschool-api.herokuapp.com/api/deezer/search?q=` + search);
      const data = await response.json();
      //setTimeout(function() { //puoi commentare/decommentare questo timeout per attendere 5 secondi la risposta e mostrare il loader (insieme alla riga sotto)
      dispatch(fetchDataSuccess(data));
      //}, 5000)
    } catch (error) {
      dispatch({
        type: FETCH_DATA_FAILURE,
        payload: error,
      });
    }
  };
  useEffect(() => {
    fetchData(query);
  }, [query]);
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
          {query && (
            <Row>
              <Col xs={10}>
                <Card>
                  <CardImg variant="top" src={dynamicMusic.picture_medium} />
                  <Card.Body>
                    <Card.Title>Search Results</Card.Title>
                    <Row
                      className="row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3"
                      id="rockSection"
                    ></Row>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          )}

          {/* Rock Classics */}
          <Row>
            <Col xs={10}>
              <Card onLoad={fetchRockArtist("queen")}>
                <CardImg variant="top" src={rockMusic.picture_medium} />
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
              <Card onLoad={fetchPopArtist("rihanna")}>
                <CardImg variant="top" src={popMusic.picture_medium} />
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
              <Card onLoad={fetchHipHopArtist("eminem")}>
                <CardImg variant="top" src={hipHopMusic.picture_medium} />
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
