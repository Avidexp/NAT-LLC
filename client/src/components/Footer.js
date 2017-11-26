import React, { Component } from 'react'

class Footer extends Component {

    render(){
        return(
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
        )
    }
}

export default Footer;