import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import axios from 'axios';
// import Tripbuild from './tripbuild';

const ROOT_URL = 'http://localhost:8080/api/v1';

let saved_itineraries = [];

class Dashboard extends Component {
  constructor(props) {
    super(props);

    // this.state = {
    //   //Insert What you want for the state 
    //     // This component is also linked to your global redux state defined in reducers, and actions
    // };
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
            <a className="navbar-brand" href="#">
            <strong>App Name Here</strong></a>
          </div>
          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav">
              <li><a href="/">Home </a></li>
              <li><a href="#">Tab 2</a></li>
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
          {/* <h4><strong>Your Previously saved Itineraries</strong></h4>
          <ul className="itineraries">
            {saved_itineraries.map(saved_itins => 
            <li key={saved_itins.place_id}>
              <span className="badge">{saved_itins.type}</span>
              {saved_itins.name} {saved_itins.price_level} {saved_itins.rating} {saved_itins.vicinity} 
            </li>
            )}
          </ul> */}

          <h4>Welcome to the dashboard, you have logged in correctly :) </h4>
          <form action="/messenger">
          <button type="submit"> Go to your messenger</button>
          </form>
          {
            Email ? `Your email is, ${Email}` : <p>Something went wrong getting your email </p>
          }
          
        </div>
        <div className='col-md-3'>
          <h2>Dylan Jackson is so cool haha</h2>
          
          {/* I left his here to show how to have a button to redirect someone somewhere. I had it to go to the places page, but you can use this to link any other page in your site here
              <form action='/places'>
            <button className='btn btn-default' type='submit'>
              Click to Manually Search Places
            </button>
            </form> */}
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
      <footer className='page-footer center-on-small-only'>
          <div className='container-fluid'>
            <div className='row'>
              <div className='col-lg-3 col-md-6 ml-auto'>
                <h5 className='title mb-3'><strong>About Us</strong></h5>
                <p>Designed by greatness.</p>
                <p>Designed for greatness.</p>
              </div>

              
              <hr className='w-100 clearfix d-sm-none' />
              <div className='col-lg-2 col-md-6 ml-auto'>
                <h5 className='title mb-3'><strong>First column</strong></h5>
                <ul>
                  <li className='nav-item'><a href='/'>Home</a></li>
                  <li className='nav-item'><a href='/signup'>Sign Up</a></li>
                  <li className='nav-item'><a href='/signin'>Sign In</a></li>
                  <li className='nav-item'><a href='/signout'>Sign Out</a></li>
                </ul>
              </div>


              <div className='col-lg-2 col-md-6 ml-auto'>
                <h5 className='title mb-3'><strong>Second column</strong></h5>
                <ul>
                <li className='nav-item'><a href='/'>Home</a></li>
                <li className='nav-item'><a href='/signup'>Sign Up</a></li>
                <li className='nav-item'><a href='/signin'>Sign In</a></li>
                <li className='nav-item'><a href='/signout'>Sign Out</a></li>
              </ul>
              </div>


              <div className='col-lg-2 col-md-6 ml-auto'>
                <h5 className='title mb-3'><strong>Third column</strong></h5>
                <ul>
                <li className='nav-item'><a href='/'>Home</a></li>
                <li className='nav-item'><a href='/signup'>Sign Up</a></li>
                <li className='nav-item'><a href='/signin'>Sign In</a></li>
                <li className='nav-item'><a href='/signout'>Sign Out</a></li>
              </ul>
              </div>
            </div>
          </div>
          <div className='footer-copyright'>
            <div className='container-fluid'>
            © 2017 Copyright: <a href='#'> Dylan.me </a>
            </div>
          </div>
        </footer>
        </div>
    );
  }
}

const mapStatetoProps = (state) => ({
  itins_retrieved: state.itins_retrieved
});

export default connect(mapStatetoProps)(Dashboard);