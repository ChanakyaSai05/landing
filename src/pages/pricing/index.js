import { useEffect, useState } from "react";
import { Container, Row, Col, Modal } from "react-bootstrap";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PriceCard from "@/components/PriceCard";
import axios from "axios";
import DemoModal from "@/components/DemoModal";

function Subscription(props) {
  const [show, setShow] = useState(false);
  // const [subscriptionList, setsubscriptionList] = useState([]);
  const { subscriptionList } = props;

  useEffect(() => {
    const handleTabShown = (event) => {
      const tabEl = document.querySelector("#pillsTab");
      const selectedTab = tabEl.querySelector(".selected");
      selectedTab.style.left = event.target.offsetLeft + "px";
    };
    const tabEl = document.querySelector("#pillsTab");
    tabEl.addEventListener("shown.bs.tab", handleTabShown);
    return () => {
      tabEl.removeEventListener("shown.bs.tab", handleTabShown);
    };
  }, []);
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  // useEffect(() => {
  //   getSubscriptionListGraphql();
  // }, []);

  return (
    <>
      <Header />

      <section className="subscription">
        <Container className="d-flex justify-content-center">
          <Row className="pb-4 d-flex justify-content-center">
            <Col className="col-12 text-center col-lg-10">
              <h1 className="ff-reemkufi display-4 fw-600">
                Try Vison.ai Risk Free
              </h1>
              <p className="fs-5 fw-400 pt-2 pb-3">
                Unlock your business's full potential with Vison's tailored
                plans and pricing! Designed to support your growth at every
                stage.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      <Container className="pb-5">
        <Row className="d-flex justify-content-center animation-tab">
          <Col className="col-12 col-md-9 col-lg-9 py-5">
            <ul className="nav nav-pills mb-3" id="pillsTab" role="tablist">
              <li class="nav-item" role="presentation">
                <button
                  className="nav-link active"
                  id="pills-home-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-home"
                  type="button"
                  role="tab"
                  aria-controls="pills-home"
                  aria-selected="true"
                >
                  <h5>Monthly</h5>
                  <p>No Contracts, Cancel anytime</p>
                </button>
              </li>
              <li class="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="pills-profile-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-profile"
                  type="button"
                  role="tab"
                  aria-controls="pills-profile"
                  aria-selected="false"
                >
                  <h5>Quarterly</h5>
                  <p>Save10%</p>
                </button>
              </li>
              <li class="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="pills-contact-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-contact"
                  type="button"
                  role="tab"
                  aria-controls="pills-contact"
                  aria-selected="false"
                >
                  <h5>Yearly</h5>
                  <p>Save25%</p>
                </button>
              </li>
              <li class="selected"></li>
            </ul>
          </Col>
        </Row>
        <Row>
          <Col className="col-12 text-center fs-5 pb-4">
            <i className="fw-700">No Credit Card Required</i>
          </Col>
          <Col className="col-12">
            <div class="tab-content" id="pills-tabContent">
              <div
                class="tab-pane fade show active"
                id="pills-home"
                role="tabpanel"
                aria-labelledby="pills-home-tab"
                tabindex="0"
              >
                <PriceCard
                  subscriptionList={subscriptionList}
                  subscription_type="monthly"
                />
              </div>
              <div
                class="tab-pane fade"
                id="pills-profile"
                role="tabpanel"
                aria-labelledby="pills-profile-tab"
                tabindex="0"
              >
                <PriceCard
                  subscriptionList={subscriptionList}
                  subscription_type="quaterly"
                />
              </div>
              <div
                class="tab-pane fade"
                id="pills-contact"
                role="tabpanel"
                aria-labelledby="pills-contact-tab"
                tabindex="0"
              >
                <PriceCard
                  subscriptionList={subscriptionList}
                  subscription_type="yearly"
                />
              </div>
            </div>
          </Col>
        </Row>

        {/* <Row>
          <Col className="col-12 card-boxes pb-4">
            <div className="card">
              <div class="card-body">
                <Row>
                  <Col className="col-sm-12 col-md-12 col-lg-6">
                    <h5 class="card-title">Enterprise / Business</h5>
                    <p class="card-text">
                      Lorem ipsum dolor sit amet, adipiscing elit sit amet.
                      Lorem ipsum dolor sit
                    </p>
                    <div className="w-100">
                      <a href="#" className="my-4 ctn-btn btn-default">
                        Contact Sales
                      </a>
                    </div>
                  </Col>

                  <Col className="col-12 col-md-6 col-lg-3">
                    <ul>
                      <li className="pb-3">
                        <span>
                          <svg className="icon">
                            <use href="#icon_grd_check"></use>
                          </svg>
                        </span>
                        1 seat
                      </li>
                      <li className="pb-3">
                        <span>
                          <svg className="icon">
                            <use href="#icon_grd_check"></use>
                          </svg>
                        </span>
                        1 work space
                      </li>
                      <li>
                        <span>
                          <svg className="icon">
                            <use href="#icon_grd_check"></use>
                          </svg>
                        </span>
                        1000 words in templates
                      </li>
                    </ul>
                  </Col>
                  <Col className="col-12 col-md-6 col-lg-3">
                    <ul>
                      <li className="pb-3">
                        <span>
                          <svg className="icon">
                            <use href="#icon_grd_check"></use>
                          </svg>
                        </span>
                        1 seat
                      </li>
                      <li className="pb-3">
                        <span>
                          <svg className="icon">
                            <use href="#icon_grd_check"></use>
                          </svg>
                        </span>
                        1 work space
                      </li>
                      <li>
                        <span>
                          <svg className="icon">
                            <use href="#icon_grd_check"></use>
                          </svg>
                        </span>
                        1000 words in templates
                      </li>
                    </ul>
                  </Col>
                </Row>
              </div>
            </div>
          </Col>
        </Row> */}

        {/* <Row className="d-flex justify-content-center py-4">
          <Col className="col-12 col-lg-10 review-box">
            <div className="color-card"></div>
            <div className="img-box">
              <img src="images/james.png" alt="avtar" />
            </div>
            <div className="review-card text-center">
              <h4 className="pb-3 fs-2">Mr. James Smith</h4>
              <span>Lorem ipsum dolor sit</span>
              <div className="py-3">
                <img src="images/star-4.5.png" alt="star" />
              </div>
              <p className="fs-5 pb-3">Good Experinece</p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed est
                ex, pretium at erat ac, tincidunt fringilla lectus. Duis quis
                elementum justo. Proin eu ipsum maximus, congue elit non,
                pharetra dui.
              </p>
            </div>
          </Col>
        </Row>

        <Row className="d-flex justify-content-center py-4">
          <Col className="col-12 col-lg-9 review-box">
            <div className="artical-card p-0 row gap-0 g-0">
              <div className="img-area col-sm-2 order-sm-1 h-100">
                <img src="images/james.png" alt="user" />
              </div>
              <div className="content-box col-sm-10">
                <p className="fs-5">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  est ex, pretium at erat ac, tincidunt fringilla lectus. Duis
                  quis elementum justo. Proin eu ipsum maximus, congue elit non,
                  pharetra dui.
                </p>
                <div className="d-flex align-items-center pt-3">
                  <div className="py-2 border-right">
                    <h4 className="me-4 fs-4 fw-700">Mr. James Smith</h4>
                  </div>
                  <div>
                    <p className="ms-4 fw-400 fs-14px">
                      Digital Marketing Agency
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row> */}

        <Row>
          <Col className="col-12 py-4 mb-4">
            <h2 className="ff-reemkufi display-5 text-center">
              Answer To Your Questions
            </h2>
          </Col>
        </Row>

        <div className="accordion accordion-flush" id="accordionFlushExample">
          <Row className="g-4 pb-2 mb-5">
            <Col className="col-12 col-lg-3 text-center text-sm-start">
              <h4 className="fs-2 fw-700">Answers To</h4>
              <h2 className="display-4 fw-700">Frequent Asked Questions</h2>
            </Col>
            <Col className="col-12 col-lg-9">
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-FrequentOne"
                    aria-expanded="false"
                    aria-controls="flush-FrequentOne"
                  >
                    What is Vison.ai?
                  </button>
                </h2>
                <div
                  id="flush-FrequentOne"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body">
                    Placeholder content for this accordion, which is intended to
                    demonstrate the <code>.accordion-flush</code> class. This is
                    the first item's accordion body.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-FrequentTwo"
                    aria-expanded="false"
                    aria-controls="flush-FrequentTwo"
                  >
                    Why Should I Choose Vison.ai?
                  </button>
                </h2>
                <div
                  id="flush-FrequentTwo"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body">
                    Placeholder content for this accordion, which is intended to
                    demonstrate the <code>.accordion-flush</code> class. This is
                    the second item's accordion body. Let's imagine this being
                    filled with some actual content.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-FrequentThree"
                    aria-expanded="false"
                    aria-controls="flush-FrequentThree"
                  >
                    How much does Vison.ai cost?
                  </button>
                </h2>
                <div
                  id="flush-FrequentThree"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body">
                    Placeholder content for this accordion, which is intended to
                    demonstrate the <code>.accordion-flush</code> class. This is
                    the third item's accordion body. Nothing more exciting
                    happening here in terms of content, but just filling up the
                    space to make it look, at least at first glance, a bit more
                    representative of how this would look in a real-world
                    application.
                  </div>
                </div>
              </div>
            </Col>
          </Row>

          <Row className="g-4 pb-2 mb-5">
            <Col className="col-12 col-lg-3 text-center text-sm-start">
              <h4 className="fs-2 fw-700">Answers To</h4>
              <h2 className="display-4 fw-700">Billing Related Questions</h2>
            </Col>
            <Col className="col-12 col-lg-9">
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-BillingOne"
                    aria-expanded="false"
                    aria-controls="flush-BillingOne"
                  >
                    Does Vison.ai offer free trials?
                  </button>
                </h2>
                <div
                  id="flush-BillingOne"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body">
                    Placeholder content for this accordion, which is intended to
                    demonstrate the <code>.accordion-flush</code> class. This is
                    the third item's accordion body. Nothing more exciting
                    happening here in terms of content, but just filling up the
                    space to make it look, at least at first glance, a bit more
                    representative of how this would look in a real-world
                    application.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-BillingTwo"
                    aria-expanded="false"
                    aria-controls="flush-BillingTwo"
                  >
                    What s the commitment?
                  </button>
                </h2>
                <div
                  id="flush-BillingTwo"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body">
                    Placeholder content for this accordion, which is intended to
                    demonstrate the <code>.accordion-flush</code> class. This is
                    the third item's accordion body. Nothing more exciting
                    happening here in terms of content, but just filling up the
                    space to make it look, at least at first glance, a bit more
                    representative of how this would look in a real-world
                    application.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-BillingThree"
                    aria-expanded="false"
                    aria-controls="flush-BillingThree"
                  >
                    What is the cost of additional seats and workspaces?
                  </button>
                </h2>
                <div
                  id="flush-BillingThree"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body">
                    Placeholder content for this accordion, which is intended to
                    demonstrate the <code>.accordion-flush</code> class. This is
                    the third item's accordion body. Nothing more exciting
                    happening here in terms of content, but just filling up the
                    space to make it look, at least at first glance, a bit more
                    representative of how this would look in a real-world
                    application.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-BillingFour"
                    aria-expanded="false"
                    aria-controls="flush-BillingFour"
                  >
                    What payment methods do you support?
                  </button>
                </h2>
                <div
                  id="flush-BillingFour"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body">
                    Placeholder content for this accordion, which is intended to
                    demonstrate the <code>.accordion-flush</code> class. This is
                    the third item's accordion body. Nothing more exciting
                    happening here in terms of content, but just filling up the
                    space to make it look, at least at first glance, a bit more
                    representative of how this would look in a real-world
                    application.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-BillingFive"
                    aria-expanded="false"
                    aria-controls="flush-BillingFive"
                  >
                    What happens If I cancel my subscription?
                  </button>
                </h2>
                <div
                  id="flush-BillingFive"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body">
                    Placeholder content for this accordion, which is intended to
                    demonstrate the <code>.accordion-flush</code> class. This is
                    the third item's accordion body. Nothing more exciting
                    happening here in terms of content, but just filling up the
                    space to make it look, at least at first glance, a bit more
                    representative of how this would look in a real-world
                    application.
                  </div>
                </div>
              </div>
            </Col>
          </Row>

          <Row className="g-4 mb-5">
            <Col className="col-12 col-lg-3 text-center text-sm-start">
              <h4 className="fs-2 fw-700">Answers To</h4>
              <h2 className="display-4 fw-700">Product Related Questions</h2>
            </Col>
            <Col className="col-12 col-lg-9">
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-ProductOne"
                    aria-expanded="false"
                    aria-controls="flush-ProductOne"
                  >
                    What are add-ons?
                  </button>
                </h2>
                <div
                  id="flush-ProductOne"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body">
                    Placeholder content for this accordion, which is intended to
                    demonstrate the <code>.accordion-flush</code> class. This is
                    the third item's accordion body. Nothing more exciting
                    happening here in terms of content, but just filling up the
                    space to make it look, at least at first glance, a bit more
                    representative of how this would look in a real-world
                    application.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-ProductTwo"
                    aria-expanded="false"
                    aria-controls="flush-ProductTwo"
                  >
                    Is my data safe with Vison.ai?
                  </button>
                </h2>
                <div
                  id="flush-ProductTwo"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body">
                    Placeholder content for this accordion, which is intended to
                    demonstrate the <code>.accordion-flush</code> class. This is
                    the third item's accordion body. Nothing more exciting
                    happening here in terms of content, but just filling up the
                    space to make it look, at least at first glance, a bit more
                    representative of how this would look in a real-world
                    application.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-ProductThree"
                    aria-expanded="false"
                    aria-controls="flush-ProductThree"
                  >
                    Can I use Vison.ai for my client s?
                  </button>
                </h2>
                <div
                  id="flush-ProductThree"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body">
                    Placeholder content for this accordion, which is intended to
                    demonstrate the <code>.accordion-flush</code> class. This is
                    the third item's accordion body. Nothing more exciting
                    happening here in terms of content, but just filling up the
                    space to make it look, at least at first glance, a bit more
                    representative of how this would look in a real-world
                    application.
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div>
        <Row>
          <Col className="col-12">
            <h2 className="display-6 fw-800 text-center">
              Have Additional Questions?
            </h2>
            <div className="text-center fs-5 py-2">
              Customer support:{" "}
              <a href="#" className="anchor-link">
                support@vison.ai
              </a>
            </div>
          </Col>
        </Row>
      </Container>
      <section className="vision-today">
        <Container className="d-flex justify-content-center">
          <Row className="pb-4 d-flex justify-content-center">
            <Col className="col-12 text-center">
              <h1 className="ff-reemkufi display-5 fw-600 pb-3">
                Still Not Convinced to use Vison.ai
              </h1>
              <p className="fs-5 fw-400 pt-2 pb-4">
                Register and try the app today or schedule a personalized demo
                call with our team!
              </p>
              <div className="row">
                <div className="col-12 col-lg-8 mx-auto">
                  <div className="d-flex gap-4">
                    <button
                      type="button"
                      className="btn-default"
                      onClick={() => {
                        // need to open in a new window
                        window.open(
                          process.env.NEXT_PUBLIC_USER_URL + "/signup",
                          "_blank"
                        );
                      }}
                    >
                      Try For Free
                    </button>
                    <button
                      type="button"
                      className="btn-default"
                      onClick={() => setShow(true)}
                    >
                      Get A Demo
                    </button>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <Footer />


    <DemoModal show={show} setShow={setShow} />  
    </>
  );
}

export default Subscription;
const getSubscriptionListGraphql = async () => {
  try {
    let response = await axios({
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/graphql`,
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      data: {
        query: `
          {
            getsubscriptions(subscription_id: 0) {
              plan_id,
              subscription_name,
              status,
              plandetails {
                id,
                description,
                key_name,
                key_value
              },
              pricedetails {
                id,
                country,
                currency,
                subscription_type,
                price,
                stripe_price_id
              }
            }
          }
        `,
      },
    });
    // console.log(response, "response graph ql");

    // Handle response here
    // setsubscriptionList(response.data.data.getsubscriptions);
    return {
      status: 200,
      data: response.data.data.getsubscriptions,
    };
  } catch (error) {
    // Handle error here
    return {
      status: error.response.status,
      data: error,
    };
  }
};
export async function getServerSideProps() {
  const subscriptionList = await getSubscriptionListGraphql();
  if (subscriptionList.status!== 200) {
    return {
      props: {
        subscriptionList: [],
      },
    };
  }
  return {
    props: {
      subscriptionList: subscriptionList.data,
    },
  };
}