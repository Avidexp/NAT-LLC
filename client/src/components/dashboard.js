import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import axios from 'axios';
import Footer from './Footer';
import DatePicker from 'react-bootstrap-date-picker';
const ROOT_URL = 'http://localhost:8080/api/v1';



class Dashboard extends Component {
  constructor(props) {
    super(props);
    
  }    
  state = {
    startValue: '',
    startFormattedValue: '',
    endValue: '',
    endFormattedValue: ''
  }
  
  //How to redirect pages + go back EX: this.context.router.history.push('/directory');
  static contextTypes = {
    router: PropTypes.object
  };

  //Just a back button
  onBackClick () {
    this.context.router.history.push('/');
  }



  // componentDidMount() {
  //   const user_email = localStorage.getItem('userEmail');
  //   // // (RAB) send the user checkboxed itinerary data to the server to store the user-specific itinerary data in the DB 
  //   axios.post(`${ROOT_URL}/get_itin`, { user_email })
  //     .then(response => {
  //       // //How we got the saved itineraries for the user, you can do whatever you want here for your app to get things from the user to display when they log in
  //       // // saved_itineraries = response.data.payload;
  //       // // this.setState({itins_retrieved : true})
  //     })
  //     .catch(err => {
  //       //  //this.setState({itins_retrieved : false});        
  //     })
  // }
  renderLinks () {
    if (this.props.authenticated) {
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

  handleFormSubmit(){
    const title = this.refs.title.value;
    const serial = this.refs.serial.value;
    const condition = this.refs.condition.value;
    const desc = this.refs.description.value;
const start = this.state.startFormattedValue;

const end = this.state.endFormattedValue;
console.log("DATES: ");
console.log(start);
console.log(end);
let Email = localStorage.getItem('userEmail');
    axios.post(`${ROOT_URL}/listEquipment`, {
      Email,
      title,
      serial,
      condition,
      desc,
      start,
      end
    })
    .then(response => {
      console.log("Equipment saved successfully");

    })
    .catch(()=> {
      console.log("Equipment Save Failed");
    })
    
  }

  startHandleChange(value, formattedValue){
    console.log(value);
    console.log(formattedValue);
    this.setState({
      startValue: value,
      startFormattedValue: formattedValue
    });
    console.log(this.state);
  }
  endHandleChange(value, formattedValue){
    console.log(value);
    console.log(formattedValue);
    this.setState({
      endValue: value,
      endFormattedValue: formattedValue
    });
    console.log(this.state);
  }
  render() {
    //Grabs the users email from localStorage
      // localStorage.setItem("USER_EMAIL", email) -- to set a variable email to the local storage variable of USER_EMAIL
      // localStorage.getItem("USER_EMAIL") -- gets the variable USER_EMAIL from localStorage
    let Email = localStorage.getItem('userEmail');
  return (      
      <div>
      <div className='dashboard'>
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
        <h3>Dashboard</h3>
        <div className='col-md-6'>


          <h4>Welcome to the dashboard, you have logged in correctly :) </h4>
          <form action="/messenger">
          <button type="submit"> Go to your messenger</button>
          </form>
          {
            Email ? `Your email is, ${Email}` : <p>Something went wrong getting your email </p>
          }
          
        </div>
        <div className='col-md-3'>
          
        <form>
            <fieldset className="form-group">
              <label>Title
              <input
                ref="title"
                className="form-control"
                
              />
              </label>
              <label>Serial Number
              <input
                ref="serial"
                className="form-control"
              />
              </label>
            </fieldset>
            <fieldset className="form-group">
              <label>Condition</label>
              <input
                ref="condition"
                className="form-control"
              />
            </fieldset>
            <fieldset className="form-group">
              <label>Description</label>
              <input type="textarea"
                ref="description"
                className="form-control"
                
              />
            </fieldset>

            <fieldset className="form-group">
              <label>Start Date</label>
              <DatePicker id="start-datepicker"ref="startValue" value={this.state.startValue} onChange={this.startHandleChange.bind(this)} />

            </fieldset>
            <fieldset className="form-group">
              <label>End Date</label>
              <DatePicker id="end-datepicker" ref="endValue" value={this.state.endValue}  onChange={this.endHandleChange.bind(this)} />

            </fieldset>
            <button
              onClick={this.handleFormSubmit.bind(this)}
              className="btn btn-primary"
            >
              Add Equipment
            </button>
          </form>

          <button onClick={this.onBackClick.bind(this)} className='btn btn-default'>Back</button>
        </div>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
      </div>
      <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
      <br/>
      <br/>
      <br/>
      <Footer />
        </div>
    );
  }
}

const mapStatetoProps = (state) => ({
  itins_retrieved: state.itins_retrieved
});

export default connect(mapStatetoProps)(Dashboard);