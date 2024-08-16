import './App.css';
import './index.css'

function App() {
  return (
    <div className="">
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
    </div>
  );
}

export default App;
