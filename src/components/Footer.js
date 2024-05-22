import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <>
      <footer className="position-relative pt-5 pb-4">
        <img src="images/bg-footer.svg" className="wrting-imgbg3 ft-bg py-2" />
        <div className="container position-relative text-center text-md-start">
          <div className="row g-4">
            <div className="col-md-3 col-sm-6">
              <div className="logo-box">
                <a href="#">
                  <img
                    src="images/footer-logo.png"
                    className="w-100"
                    alt="footer logo"
                  />
                </a>
              </div>

              <p className="text-reset fs-3 fw-400 pb-2">
                The Only <span className="fw-700">Multi-Skilled</span>
                Generative AI
              </p>

              {/* <ul>
                <li>
                  <a href="#" className="text-reset fw-700">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-reset fw-700">
                    Terms Of Services
                  </a>
                </li>
              </ul> */}
              {/* <spna className="fw-400 fs-5p2">&copy; 2024 Infiniticube</spna> */}
            </div>
            <div className="col-md-3 col-sm-6">
              <h6 className="">Useful Links</h6>
              <ul>
                <li>
                  <Link href="/features" className="text-reset">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="/pricing" className="text-reset">
                    Pricing
                  </Link>
                </li>
                {/* <li>
                  <Link href="#" className="text-reset">
                    Subscriptions
                  </Link>
                </li> */}
                <li>
                  <Link href="/contact-us" className="text-reset">
                    Book a Demo
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-md-3 col-sm-6">
              <h6 className="">Resources</h6>
              <ul>
                <li>
                  <Link href="/" className="text-reset">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/" className="text-reset">
                    Career
                  </Link>
                </li>
                <li>
                  <Link href="/" className="text-reset">
                    Missing Feature
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-md-3 col-sm-6">
              <h6 className="">Follow Us</h6>

              <div className="footer-socialicon">
                <a href="https://www.facebook.com/heyvison" target="_blank" className="facebook">
                  <svg className="icon">
                    <use href="#icon_facebook"></use>
                  </svg>
                </a>

                <a href="https://twitter.com/heyvisonai" target="_blank" className="twitter">
                  <svg className="icon">
                    <use href="#icon_fttwitter"></use>
                  </svg>
                </a>

                <a href="https://www.linkedin.com/company/visonai" target="_blank" className="linkedin">
                  <svg className="icon">
                    <use href="#icon_ftlinkedin"></use>
                  </svg>
                </a>

                <a href="https://www.instagram.com/heyvison.ai" target="_blank" className="whatsapp">
                  <svg className="icon">
                    <use href="#icon_ftinsta"></use>
                  </svg>
                </a>
              </div>

              {/* <ul>
                        <li>
                            <a href="#" className="text-reset">
                            D-9, D Block, Sector 3, Noida, Uttar Pradesh 201301
                            </a>
                        </li>
                    </ul> */}
            </div>
          </div>
          <div className="d-flex justify-content-center align-items-center gap-4 copyright pt-4">
            <div className="copy">© 2024 Infiniticube</div>
            <span>|</span>
            <div>
              <a href="saas-agreement">SaaS Agreement</a>
            </div>
            <span>|</span>
            <div>
              <a href="terms">Terms Of Services</a>
            </div>
            <span>|</span>
            <div>
              <a href="privacy">Privacy Policy</a>
            </div>
          </div>
        </div>
        {/* <div className="flex justify-center items-center min-h-screen">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="col-span-1">
              <span className="font-normal text-lg block">
                &copy; 2024 Infiniticube
              </span>
            </div>
            <div className="col-span-1">
              <a href="#" className="text-reset font-bold">
                Privacy Policy
              </a>
            </div>
            <div className="col-span-1">
              <a href="#" className="text-reset font-bold">
                Terms of Service
              </a>
            </div>
            <div className="col-span-1">
              <a href="#" className="text-reset font-bold">
                Contact Us
              </a>
            </div>
          </div>
        </div> */}
      </footer>
    </>
  );
}

export default Footer;
