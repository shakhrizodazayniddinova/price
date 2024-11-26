import { Component } from "react";
import "./main.css"

class Main extends Component{
    render(){
        return(
            <main>
                <section id='pricing'>
    
                <div className="pricingText d-flex justify-content-center flex-column align-items-center">
                    <p className='price m-0'>Pricing</p>
                    <p className='priceTitle fs-5 text-center m-0'>Quickly build an effective pricing table for your potential customers with this Bootstrap example. It's built with default Bootstrap components and utilities with little customization.</p>
                </div>
    
                {/* cards */}
                <div className="pricingCard row d-flex justify-content-center gap-4 mt-5 border-bottom">
    
                    {/* card 1 */}
                    <div className="card col-6 col-md-4 d-flex align-items-center flex-column">
                    <div className='cardHead m-0 d-flex align-items-center justify-content-center border-bottom'>
                        <p className='m-0 fs-4'>Free</p>
                    </div>
    
                    <div className='cardMain p-3 d-flex flex-column align-items-center'>
                        <p className="priceMonth fs-3 text-secondary"><span className='fs-1 fw-semibold text-black'>$0</span> / mo</p>
                        <p className='priceMonthTitle text-center'>10 users included <br /> 2 GB of storage  <br />Email support <br /> Help center access</p>
                        <button className="cardBtn cardBtn1 btn text-primary border-primary fs-5">Sign up for free</button>
                    </div>
                    </div>
    
                    {/* card 2 */}
                    <div className="card col-6 col-md-4 d-flex align-items-center flex-column">
                    <div className='cardHead m-0 d-flex align-items-center justify-content-center border-bottom'>
                        <p className='m-0 fs-4'>Pro</p>
                    </div>
    
                    <div className='cardMain p-3 d-flex flex-column align-items-center'>
                        <p className="priceMonth fs-3 text-secondary"><span className='fs-1 fw-semibold text-black'>$15</span> / mo</p>
                        <p className='priceMonthTitle text-center'>20 users included <br /> 10 GB of storage <br /> Priority email support <br /> Help center access</p>
                        <button className="cardBtn cardBtns btn text-white bg-primary fs-5">Get started</button>
                    </div>
                    </div>
                    {/* card 3 */}
                    <div className="card col-6 col-md-4 d-flex align-items-center flex-column">
                    <div className='cardHead m-0 d-flex align-items-center justify-content-center border-bottom'>
                        <p className='m-0 fs-4'>Enterprise</p>
                    </div>
    
                    <div className='cardMain p-3 d-flex flex-column align-items-center'>
                        <p className="priceMonth fs-3 text-secondary"><span className='fs-1 fw-semibold text-black'>$29</span> / mo</p>
                        <p className='priceMonthTitle text-center'>30 users included <br /> 15 GB of storage <br /> Phone and email support <br /> Help center access</p>
                        <button className="cardBtn cardBtns btn text-white bg-primary fs-5">Contact us</button>
                    </div>
                    </div>
                </div>
    
                </section>
          </main>
        )
    }
}

export default Main;