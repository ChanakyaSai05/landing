import React, { useState } from "react";
import axios from "axios";
import { Col, Container, Row } from "react-bootstrap";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

function ContactSales() {
  const [contactSales, setcontactSales] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    trial: "", //0 not trial, 1 trial
    remark: "",
  });
  const [loading, setloading] = useState(false);
  const [message, setmessage] = useState("");
  const handleChange = (e) => {
    const { id, value } = e.target;
    setcontactSales({ ...contactSales, [id]: value });
  };
  const contactSalesFn = async () => {
    setloading(true);
    setmessage("");
    try {
      let response = await axios({
        url: `${process.env.NEXT_PUBLIC_BASE_URL}/sales/contact`,
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        data: {
          ...contactSales,
          trial: contactSales.trial == "yes" ? "1" : "0",
        },
      });
      // console.log(response, "response");
      setloading(false);
      if (!response.data.error) {
        setmessage(response.data.message);
        setTimeout(() => {
          setmessage("");
        }, 3000);
        setcontactSales({
          first_name: "",
          last_name: "",
          email: "",
          phone: "",
          trial: "", //0 not trial, 1 trial
          remark: "",
        });
      } else {
        setmessage(response.data.message);
      }
    } catch (error) {
      setloading(false);
      console.log(error);
      setmessage(error?.response?.data?.message);
    }
  };
  console.log(contactSales, "contact sales");

  return (
    <>
      <Header />

      <section className="contact-sales">
        <Container className="d-flex justify-content-center">
          <Row className="pb-4 g-5">
            <Col className="col-12 text-center col-lg-5 order-sm-1">
              <div>
                <img
                  src="images/contact.png"
                  className="w-100"
                  alt="contact image"
                />
              </div>
            </Col>
            <Col className="col-12 text-center d-flex align-items-center col-lg-7">
              <div className="">
                <h1 className="ff-reemkufi display-5 fw-600 text-grd">
                  Contact Sales
                </h1>
                <p className='fs-5p2 fw-400 pt-3 pb-2'>
                                Get in touch with Vison.ai team and we will get back to you within 24 hours
                            </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <Container>
        <Row className="row row-cols-1 row-cols-md-2 py-4 g-5">
          <Col className="">
            <h4 className="fw-700 display-5 pb-3 text-center text-sm-start">
              Schedule A Demo Call With Vison.ai
            </h4>
            <p className="fw-400 fs-5p2 pb-3">
              Book your personalized demo call with our team today and discover
              the future of AI-driven solutions for your business!
            </p>

            <p className="fw-700 fs-4 pb-3">Get a demo to understand</p>
            <ul className="fw-400 fs-5p2 pb-3 p-0 ps-4 tab-list">
              <li>
                How Vison.ai can help you to solve business critical problems
              </li>
              <li>
                How Vison.ai can help you to produce marketing content on scale
              </li>
              <li>To see practical AI use cases for your team</li>
              <li>
                Deeper understanding of Vison.ai's capabilities and discover the
                Return on Investment for your business
              </li>
            </ul>
          </Col>

          <Col className="gray-input">
            <form onSubmit={(e) => e.preventDefault()}>
              <Row className="row row-cols-1 row-cols-md-2 g-4 pb-4">
                <Col className="">
                  <div className="">
                    <label for="fname" className="form-label">
                      First Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="first_name"
                      placeholder="Enter First Name"
                      value={contactSales.first_name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </Col>
                <Col className="">
                  <div className="">
                    <label for="lname" className="form-label">
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="last_name"
                      placeholder="Enter Last Name"
                      value={contactSales.last_name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </Col>
              </Row>
              <Row className="row row-cols-1 g-4">
                <Col className="col-12">
                  <div className="pb-4">
                    <label for="WorkEmail" className="form-label">
                      Work Email
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="Enter Work Email"
                      value={contactSales.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="pb-4">
                    <label for="Pnumber" className="form-label">
                      Phone Number
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      id="phone"
                      placeholder="Enter Mobile Number"
                      value={contactSales.phone}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="pb-4">
                    <label for="Pnumber" className="form-label">
                      Have You started your Trial Yet!{" "}
                    </label>
                    <select
                      className="form-select"
                      aria-label="Please Choose Trial"
                      id="trial"
                      value={contactSales.trial}
                      onChange={handleChange}
                      required
                    >
                      <option selected>Please Choose</option>
                      <option value="yes">Yes</option>
                      <option value="no">No</option>
                    </select>
                  </div>

                  <div className="pb-4">
                    <label for="massage" className="form-label">
                      Anything Else? (Optional)
                    </label>
                    <textarea
                      class="form-control"
                      id="remark"
                      rows="3"
                      value={contactSales.remark}
                      placeholder="Enter Here"
                      onChange={handleChange}
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="btn-default rounded-3"
                    onClick={contactSalesFn}
                  >
                    CONTACT SALES
                  </button>
                  {message?.length > 0 && (
                    <>
                      <div className="text-center text-success my-2 fs-3">
                        {message}
                      </div>
                    </>
                  )}
                </Col>
              </Row>
            </form>
          </Col>
        </Row>

        {/* <Row className="img-click pb-5">
          <Row className="d-flex justify-content-center pb-5">
            <Col className="col-12 col-lg-7 pb-5">
              <img src="images/half.png" className="w-100" alt="..." />
            </Col>
          </Row>
          <Row>
            <Col className="col-12 col-lg-10">
              <div className="img-boxOne img-rounded">
                <img src="images/img1.png" alt="user" />
              </div>
              <div className="img-boxTwo img-rounded">
                <img src="images/img2.png" alt="user" />
              </div>
              <div className="img-boxThree img-rounded">
                <img src="images/img3.png" alt="user" />
              </div>
              <div className="img-boxFour img-rounded-small">
                <img src="images/img4.png" alt="user" />
              </div>
              <div className="img-boxFive img-rounded-small">
                <img src="images/img5.png" alt="user" />
              </div>
              <div className="img-boxSix img-rounded-small">
                <img src="images/img6.png" alt="user" />
              </div>
              <div className="img-boxSeven img-rounded-small">
                <img src="images/img7.png" alt="user" />
              </div>
            </Col>
          </Row>
        </Row> */}

        <Row className="d-flex justify-content-center pb-5">
          {/* <Col className="col-12 col-lg-10 review-box p-0">
            <div className="artical-card p-0 row gap-0 g-0">
              <div className="content-box ">
                <div className="d-flex justify-content-center">
                  <div className="user-img">
                    <img src="images/james.png" alt="user" />
                  </div>
                </div>
                <div className="d-flex align-items-center justify-content-center my-3">
                  <div className="py-2 border-right">
                    <h4 className="me-4 fs-4 fw-700">Mr. James Smith</h4>
                  </div>
                  <div>
                    <p className="ms-4 fw-400 fs-14px">
                      Digital Marketing Agency
                    </p>
                  </div>
                </div>
                <p className="fs-5">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  est ex, pretium at erat ac, tincidunt fringilla lectus. Duis
                  quis elementum justo. Proin eu ipsum maximus, congue elit non,
                  pharetra dui.
                </p>
              </div>
            </div>
          </Col> */}
        </Row>
      </Container>

      <Footer />
    </>
  );
}

export default ContactSales;
