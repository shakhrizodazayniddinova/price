import { Component } from 'react';
import "./header.css";

class Header extends Component{
    render(){
        return(
            <header className="w-100 d-flex align-items-center justify-content-between p-4 border-bottom shadow-sm ">
                <p className='fs-5 m-0'>Company name</p>

                <ul className='d-flex gap-3 list-unstyled align-items-center m-0'>
                    <li><a href="#" className='listA text-decoration-none text-black'>Features</a></li>
                    <li><a href="#" className='listA text-decoration-none text-black'>Enterprice</a></li>
                    <li><a href="#" className='listA text-decoration-none text-black'>Support</a></li>
                    <li><a href="#" className='listA text-decoration-none text-black'>Pricing</a></li>
                    <li><button className="signBtn cardBtn1 border border-primary rounded bg-transparent px-2 py-2 text-primary">Sign up</button></li>
                </ul>
            </header>
        )
    }
}

export default Header;