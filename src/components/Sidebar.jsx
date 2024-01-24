import { useEffect } from "react";
import { InputGroup, FormControl, Button, Navbar, Nav } from "react-bootstrap";
import { BookFill, HouseDoorFill } from "react-bootstrap-icons";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { SET_QUERY, fetchDataFailure, fetchDataSuccess } from "../redux/actions/results";

const Sidebar = (props) => {
  const dispatch = useDispatch();
  const query = useSelector((state) => state.data.query);
  const handleSearch = async () => {
    try {
      const response = await fetch(`https://striveschool-api.herokuapp.com/api/deezer/search?q=` + query);
      if (response.ok) {
        const data = await response.json();
        dispatch(fetchDataSuccess(data));
      } else if (response.status === 400) {
        console.log("Bad request");
      } else {
        console.log("Request failed");
      }
    } catch (error) {
      dispatch(fetchDataFailure(error));
    }
  };

  const handleChange = (event) => {
    if (event.key === "Enter") {
      dispatch({
        type: SET_QUERY,
        payload: event.target.value,
      });
    }
  };
  useEffect(() => {
    handleSearch();
  }, [query]);
  return (
    <Navbar expand="md" fixed="left" className="d-none d-md-flex">
      <Link className="navbar-brand" to="/">
        <img src={props.source} alt="Spotify_Logo" width={131} height={40} className="mt-3" />
      </Link>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="align-items-baseline">
        <Nav className="flex-column">
          <Link className="nav-link" to="/">
            <HouseDoorFill size={24} /> Home
          </Link>
          <Link className="nav-link" to="/library">
            <BookFill size={24} /> Your Library
          </Link>
          <InputGroup>
            <FormControl
              placeholder="Search"
              aria-label="Search"
              aria-describedby="basic-addon2"
              onChange={handleChange}
            />
            <Button variant="outline-secondary" id="button-addon2" onClick={handleChange}>
              GO
            </Button>
          </InputGroup>
        </Nav>
      </Navbar.Collapse>
      <div className="nav-btn">
        <Button className="btn" id="signup-btn">
          Sign Up
        </Button>
        <Button className="btn" id="login-btn">
          Login
        </Button>
        <Link to="/">Cookie Policy</Link> |<Link to="/"> Privacy</Link>
      </div>
    </Navbar>
  );
};

export default Sidebar;
