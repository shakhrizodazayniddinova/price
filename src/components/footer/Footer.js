import { Component } from "react";
import "./footer.css";

class Footer extends Component{
    render(){
        return(
            <footer>
                <div className="footerDiv row">
                <div className='col-12 col-md footerLogo'>
                    <img src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg" alt="" />
                    <p className='text-secondary mt-1'>© 2017-2018</p>
                </div>
                <div className='col-12 col-md'>
                    <ul className='d-flex flex-column list-unstyled m-0'>
                    <li className='fs-5 fw-semibold mb-1'>Features</li>
                    <li className=''><a href="#" className='listA text-secondary text-decoration-none'>Cool stuff</a></li>
                    <li className=''><a href="#" className='listA text-secondary text-decoration-none'>Random feature</a></li>
                    <li className=''><a href="#" className='listA text-secondary text-decoration-none'>Team feature</a></li>
                    <li className=''><a href="#" className='listA text-secondary text-decoration-none'>Stuff for developers</a></li>
                    <li className=''><a href="#" className='listA text-secondary text-decoration-none'>Another one</a></li>
                    <li className=''><a href="#" className='listA text-secondary text-decoration-none'>Last time</a></li>
                    </ul>
                </div>
                <div className='col-12 col-md'>
                    <ul className='d-flex flex-column list-unstyled m-0'>
                    <li className='fs-5 fw-semibold mb-1'>Resources</li>
                    <li className=''><a href="#" className='listA text-secondary text-decoration-none'>Resource</a></li>
                    <li className=''><a href="#" className='listA text-secondary text-decoration-none'>Resource name</a></li>
                    <li className=''><a href="#" className='listA text-secondary text-decoration-none'>Another resource</a></li>
                    <li className=''><a href="#" className='listA text-secondary text-decoration-none'>Final resource</a></li>
                    </ul>
                </div>
                <div className='col-12 col-md'>
                    <ul className='d-flex flex-column list-unstyled m-0'>
                    <li className='fs-5 fw-semibold mb-1'>About</li>
                    <li className=''><a href="#" className='listA text-secondary text-decoration-none'>Team</a></li>
                    <li className=''><a href="#" className='listA text-secondary text-decoration-none'>Locations</a></li>
                    <li className=''><a href="#" className='listA text-secondary text-decoration-none'>Privacy</a></li>
                    <li className=''><a href="#" className='listA text-secondary text-decoration-none'>Terms</a></li>
                    </ul>
                </div>
                </div>
            </footer>
        )
    }
}

export default Footer;