import React,{Component} from "react";
import {Navbar,Nav,NavDropdown} from "react-bootstrap";
import {BrowserRouter as Router,Switch,Route,NavLink} from "react-router-dom";
import App from "../index.js";
import PlaylistContainer from "../containers/PlaylistContainer";
import Search from "../containers/Search";
import PlaylistCreate from "./Playlists/PlaylistCreate.js";
import { LinkContainer } from "react-router-bootstrap";

var accessToken="";
var isAccess = false;
export default class Navigation extends Component{
  constructor(props){
    super(props);
    accessToken = this.props.access;
    isAccess = true;
  }
    render(){
        return(
          <Router>
            <Navbar bg="dark" variant="dark">
            <Navbar.Brand >Find Your Music</Navbar.Brand>
            <Nav className="mr-auto">
              <NavLink className="nav-link" exact to="/">Home</NavLink>
              <NavLink className="nav-link" exact to="/search">Search</NavLink>
              <NavDropdown title="Playlists" id="basic-nav-dropdown">
                <LinkContainer exact to="/playlistMaker/create">
                  <NavDropdown.Item>Create Playlist</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer exact to="/playlistMaker/modify">
                  <NavDropdown.Item>Modify Playlist</NavDropdown.Item>
                </LinkContainer>
              </NavDropdown>
            </Nav>
          </Navbar>
          <Switch>
            <Route exact path="/">
              <App/>
            </Route>
            <Route exact path="/playlistMaker/create">
              <PlaylistCreate accessToken={accessToken}/>
            </Route>
            <Route exact path="/search">
              <Search accessToken={accessToken}/>
            </Route>
          </Switch>
          </Router>
        )
    }
}