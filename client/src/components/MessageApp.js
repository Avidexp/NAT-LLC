import React from 'react';
import ChatApp from './ChatApp';
import '../styles/App.css';
import { Link } from 'react-router-dom';
class MessageApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: '' };
  }

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
    let Email = localStorage.getItem('userEmail');
      return (
        <div>
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
      <br/>
        <ChatApp username={Email} />

<br/>
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
MessageApp.defaultProps = {
};

export default MessageApp;
