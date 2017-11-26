import React, { Component } from 'react'
import axios from 'axios';
import {Grid, Row, Col,  Thumbnail, Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ROOT_URL = 'http://localhost:8080/api/v1';
export default class Equipment extends Component {

    constructor(props){
        super(props);
    }

    state = {
        equipment: []
    }

    renderLinks () {
        let authenticated = true;
        if (authenticated) {
          // show a link for user to go to Dashboard or Sign Out
          return [
    
            <li className='nav-item active' key={2}>
              <Link className='btn btn-default tg-login__btn' to='/dashboard'>Dashboard</Link>
            </li>
            ,
            <li className='nav-item' key={3}>
              <Link className='nav-link' to='/signout'>Sign Out</Link>
            </li>
          ];
        } else {
          // show a link for user to Sign In or Sign Up
          return [
            <li className='nav-item active' key={2}>
              <Link className='btn btn-default tg-login__btn' to='/dashboard'>Dashboard</Link>
            </li>
            ,
            <li className='nav-item' key={3}>
              <Link className='nav-link' to='/signout'>Sign Out</Link>
            </li>
        
          ];
        }
      };
    componentWillMount(){
        let authenticated = true;
        axios
        .post(`${ROOT_URL}/fetchEquipment`)
        .then(response => {
          console.log("CHANGED STATE");
          console.log(this.state);
          let EquipmentArray = [];
          response.data.payload.map(equipment => {
            console.log(equipment);
            EquipmentArray.push(equipment);
          });
          console.log(EquipmentArray);
        
          this.setState({ equipment: EquipmentArray });
        })
        .catch(err => {
          console.log("Couldn't Fetch Users Events");
          console.log(err);
        });
    }
    render(){
        return(
            <div>
                 <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="/">
            <strong>Need A Tool</strong></a>
          </div>
          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav">
              <li><a href="/">Home </a></li>
              <li><a href="/Equipment">Equipment</a></li>
              <li><a href="#">Tab 3</a></li>

            </ul>
            <ul className="nav navbar-nav navbar-right">
              {this.renderLinks()}
            </ul>
          </div>
        </div>
      </nav>
                <Grid>
                <Row>
                {this.state.equipment ? <div> {this.state.equipment.map(equipment => 
                <Col xs={6} md={4}><Thumbnail src="https://www.ace-success.com.sg/wp-content/uploads/2017/03/forklift-side-1024x680-1024x680.jpg">  <h3>{equipment.title}</h3> Description: <p> {equipment.desc}</p><br/> Condition: <p>{equipment.condition}</p> <br/> Serial: <p>{equipment.serial}</p> <br/> Start Date: <p>{equipment.start}</p><br/> End Date: <p>{equipment.end}</p> <p><Button bsStyle="primary">Rent</Button>&nbsp;
                <Button bsStyle="default">Save to Watchlist</Button></p> </Thumbnail> </Col>)} </div> : <p></p>}
                </Row>
                </Grid>
            </div>
        )
    }
}