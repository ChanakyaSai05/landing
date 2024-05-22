import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Col, Container, Row, Modal } from "react-bootstrap";
import DemoModal from "@/components/DemoModal";

function Feature() {
  const [show, setShow] = useState(false);
  const commonBoxStyle = {
    background: '#f4f8f9',
    borderRadius: '25px',
    padding: '25px',
    width: '100%',
    height: '100%',
    opacity: '1', // should be a string representing the value between 0 and 1
    zIndex: 1000
  };
  // useEffect(() => {
  //   require("bootstrap/dist/js/bootstrap.bundle.min.js");
  // }, []);
  return (
    <>
      <Header />
      <section className="contact-sales">
        <Container className="d-flex justify-content-center">
          <Row className="pb-4 g-5">
            <Col className="col-12 text-center col-lg-5 order-sm-1">
              <div>
                <img
                  src="images/platform.svg"
                  className="w-100"
                  alt="contact image"
                />
              </div>
            </Col>
            <Col className="col-12 text-center text-sm-start d-flex align-items-center col-lg-7">
              <div className="">
                <h1 className="ff-reemkufi display-4 fw-600 text-grd">
                  One Platform <br />
                  Many Possibilities.
                </h1>
                <p className="fs-5p2 fw-400 pt-3 pb-2">
                  Leverage power of Vison.ai to drive efficiency in business
                  critical tasks.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="three-boxes my-5">
        <img className="bg-arrow" src="images/bg-arrow.svg" />
        <Container>
          <Row className="g-5">
            <Col className="col-12 col-lg-5">
              <div className="box-one">
                <div className="number-box">
                  <img src="images/one.png" alt="one" />
                </div>
                <div className="comman-box">
                  <div className="border-box border-light-blue text-center">
                    <svg className="icon fs-1 text-light-blue">
                      <use href="#icon_templates"></use>
                    </svg>
                    <h4 className="display-6 fw-700 mt-3">Templates</h4>

                    <div className="d-flex justify-content-center">
                      <a className="arrow-btn my-4" href="#templates">
                        <svg className="icon fs-2">
                          <use href="#icon_arrow"></use>
                        </svg>
                      </a>
                    </div>
                    <a href="#templates" className="achor-btn">
                      know More
                    </a>
                  </div>
                </div>
              </div>
            </Col>
            <Col className="col-12 col-lg-7 d-flex align-items-center px-3">
              <p>
                Vision.ai is trained in over 50 specialized skills, ranging from
                crafting high-converting headlines to creating SEO-optimized
                blog posts, all achievable in just a few clicks.
              </p>
            </Col>
          </Row>

          <Row className="g-5 row-two">
            <Col className="col-12 col-lg-5  order-sm-1 lorder-1">
              <div className="box-one box-two">
                <div className="number-box">
                  <img src="images/two.png" alt="two" />
                </div>
                <div className="comman-box">
                  <div className="border-box border-light-violet text-center">
                    <svg className="icon fs-1 text-light-violet">
                      <use href="#icon_chat"></use>
                    </svg>
                    <h4 className="display-6 fw-700 mt-3">YouTube Chat</h4>

                    <div className="d-flex justify-content-center">
                      <a className="arrow-btn my-4" href="#YouTubeChat">
                        <svg className="icon fs-2">
                          <use href="#icon_arrow"></use>
                        </svg>
                      </a>
                    </div>
                    <a href="#YouTubeChat" className="achor-btn">
                      know More
                    </a>
                  </div>
                </div>
              </div>
            </Col>
            <Col className="col-12 col-lg-7 d-flex align-items-center px-3 ">
              <p>
                Short on time to watch lengthy, tedious YouTube videos? Try
                Vison.ai to effortlessly summarize them. You can even ask
                questions to extract specific information from the videos.
              </p>
            </Col>
          </Row>

         <Row className="g-5">
            <Col className="col-12 col-lg-5 ">
              {/* <div className="box-one box-two">
                <div className="number-box">
                  <img src="images/three.png" alt="three" />
                </div>
                <div className="comman-box">
                  <div className="border-box border-light-purple text-center">
                    <svg className="icon fs-1 text-light-purple">
                      <use href="#icon_general_chat"></use>
                    </svg>
                    <h4 className="display-6 fw-700 mt-3">General Chat</h4>

                    <div className="d-flex justify-content-center">
                      <a className="arrow-btn my-4" href="#GeneralChat">
                        <svg className="icon fs-2">
                          <use href="#icon_arrow"></use>
                        </svg>
                      </a>
                    </div>
                    <a href="#GeneralChat" className="achor-btn">
                      know More
                    </a>
                  </div>
                </div>
              </div> */}
            </Col>
            {/* <Col className="col-12 col-lg-7 d-flex align-items-center px-3">
              <p>
                Vison.ai's chat feature can help you with tasks like crafting
                long-form articles, creating social media captions, writing ad
                and sales copy, conducting quick research, and answering
                questions all through a natural, human-like conversation.
              </p>
            </Col> */}
          </Row>
        </Container>
      </section>

      {/* <Container>
            <Row>
                <Col className='col-12'>
                        <a className="list-group-item list-group-item-action" href="#list-item-1">Item 1</a>
                        <a className="list-group-item list-group-item-action" href="#list-item-2">Item 2</a>
                        <a className="list-group-item list-group-item-action" href="#list-item-3">Item 3</a>
                        <a className="list-group-item list-group-item-action" href="#list-item-4">Item 4</a>
                    <div className="list-group" id="list-example">
                        <div data-bs-spy="scroll" data-bs-target="#list-example" data-bs-offset="0" className="scrollspy-example" tabIndex="0">
                            <div id="list-item-1">
                            <h1>1</h1>
                            </div>
                            <div id="list-item-2">
                            <h1>2</h1>
                            </div>
                            <div id="list-item-3">
                            <h1>3</h1>
                            </div>
                            <div id="list-item-4">
                            <h1>4</h1>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container> */}

      <br />

      <div
        data-bs-spy="scroll"
        data-bs-target="#list-example"
        data-bs-offset="0"
        className="scrollspy-example"
        tabIndex="0"
      >
        <div className="template-area py-5" id="templates">
          <Container>
            <Row className="text-center py-5">
              <div className="col">
                <h2 className="ff-reemkufi display-5 fw-medium maxw-1100 mx-auto">
                  Templates
                </h2>
                <h3 className="ff-reemkufi mt-3">
                  More than 50 templates to craft converting copy in just few
                  clicks
                </h3>
                <div className="d-block pt-2 pt-sm-3">
                  <span className="heading-liner"></span>
                </div>
              </div>
            </Row>

            <Row>
              <Col className="col-12 py-5 template-tabs">
                <ul className="nav nav-pills mb-3" id="pillsTab" role="tablist">
                  <li class="nav-item" role="presentation">
                    <button
                      className="nav-link active"
                      id="pills-blog-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-blog"
                      type="button"
                      role="tab"
                      aria-controls="pills-blog"
                      aria-selected="true"
                    >
                      <h5>Blog</h5>
                    </button>
                  </li>
                  <li class="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="pills-socialmedia-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-socialmedia"
                      type="button"
                      role="tab"
                      aria-controls="pills-socialmedia"
                      aria-selected="false"
                    >
                      <h5>Social Media</h5>
                    </button>
                  </li>
                  <li class="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="pills-commerce-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-commerce"
                      type="button"
                      role="tab"
                      aria-controls="pills-commerce"
                      aria-selected="false"
                    >
                      <h5>E-Commerce</h5>
                    </button>
                  </li>
                  <li class="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="pills-marketing-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-marketing"
                      type="button"
                      role="tab"
                      aria-controls="pills-marketing"
                      aria-selected="false"
                    >
                      <h5>Marketing</h5>
                    </button>
                  </li>
                  <li class="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="pills-video-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-video"
                      type="button"
                      role="tab"
                      aria-controls="pills-video"
                      aria-selected="false"
                    >
                      <h5>Video</h5>
                    </button>
                  </li>
                </ul>
              </Col>

              <Col className="col-12">
                <div class="tab-content" id="pills-tabContent">
                  <div
                    class="tab-pane fade show active"
                    id="pills-blog"
                    role="tabpanel"
                    aria-labelledby="pills-blog-tab"
                    tabindex="0"
                  >
                    <Row className="row row-cols-1 row-cols-md-2 g-5">
                      <Col className="">
                        <h4 className="fw-700 display-5 pb-4">
                          Write both Long-form and Short-form Content in your
                          own writing style
                        </h4>
                        <ul className="fw-400 fs-5p2 pb-3 p-0 ps-4 tab-list">
                          <li>Generate from ideas to long form articles</li>
                          <li>
                            Overcome writer's block and produce high-quality,
                            SEO-friendly blog posts in a fraction of the time.
                          </li>
                          <li>
                            Get your personal writing assistant that writes like
                            you.
                          </li>
                        </ul>
                      </Col>
                      <Col className="temp-bg">
                        <img
                          src="images/pc-left.svg"
                          className="w-100"
                          alt="news"
                        />
                      </Col>
                    </Row>
                  </div>

                  <div
                    class="tab-pane fade"
                    id="pills-socialmedia"
                    role="tabpanel"
                    aria-labelledby="pills-socialmedia-tab"
                    tabindex="0"
                  >
                    <Row className="row row-cols-1 row-cols-md-2 g-5">
                      <Col className="">
                        <h4 className="fw-700 display-5 pb-4">
                          Write engaging social media copies in few clicks
                        </h4>
                        <ul className="fw-400 fs-5p2 pb-3 p-0 ps-4 tab-list">
                          <li>
                            Elevate your brand's presence and strengthen
                            audience engagement directly on social media.
                          </li>
                          <li>
                            No matter the product, business, or social media
                            platform, Vison.ai provides the words you need to
                            scale your growth effectively.
                          </li>
                        </ul>
                      </Col>
                      <Col className="temp-bg">
                        <img
                          src="images/social-media.svg"
                          className="w-100"
                          alt="news"
                        />
                      </Col>
                    </Row>
                  </div>

                  <div
                    class="tab-pane fade"
                    id="pills-commerce"
                    role="tabpanel"
                    aria-labelledby="pills-seo-tab"
                    tabindex="0"
                  >
                    <Row className="row row-cols-1 row-cols-md-2 g-5">
                      <Col className="">
                        <h4 className="fw-700 display-5 pb-4">
                          Create product descriptions that drive customers to
                          add items to their cart.
                        </h4>
                        <ul className="fw-400 fs-5p2 pb-3 p-0 ps-4 tab-list">
                          <li>
                            Quickly generate high-converting, SEO-friendly
                            product descriptions for your online store and
                            Amazon listing.
                          </li>
                          <li>
                            Break free from generic product pages and craft
                            personalized copy that drives sales!
                          </li>
                        </ul>
                      </Col>
                      <Col className="temp-bg">
                        <img
                          src="images/e-commerce.svg"
                          className="w-100"
                          alt="news"
                        />
                      </Col>
                    </Row>
                  </div>

                  <div
                    class="tab-pane fade"
                    id="pills-marketing"
                    role="tabpanel"
                    aria-labelledby="pills-marketing-tab"
                    tabindex="0"
                  >
                    <Row className="row row-cols-1 row-cols-md-2 g-5">
                      <Col className="">
                        <h4 className="fw-700 display-5 pb-4">
                          Craft high converting ad and sales copy for your brand
                        </h4>
                        <ul className="fw-400 fs-5p2 pb-3 p-0 ps-4 tab-list">
                          <li>
                            With the click of a button generate
                            highly-converting google and facebook ad copy.
                          </li>
                          <li>
                            Whether it's a sales email or LinkedIn InMail, craft
                            messages that boost open and response rates.
                          </li>
                          <li>
                            With Vison.ai, you gain access to an unlimited
                            reservoir of copy to elevate your efforts!
                          </li>
                        </ul>
                      </Col>
                      <Col className="temp-bg">
                        <img
                          src="images/marketing-ads.svg"
                          className="w-100"
                          alt="news"
                        />
                      </Col>
                    </Row>
                  </div>

                  <div
                    class="tab-pane fade"
                    id="pills-video"
                    role="tabpanel"
                    aria-labelledby="pills-video-tab"
                    tabindex="0"
                  >
                    <Row className="row row-cols-1 row-cols-md-2 g-5">
                      <Col className="">
                        <h4 className="fw-700 display-5 pb-4">
                          Craft compelling video scripts on scale
                        </h4>
                        <ul className="fw-400 fs-5p2 pb-3 p-0 ps-4 tab-list">
                          <li>
                            Overcome your creative block and write engaging
                            video scripts for your social media content.
                          </li>
                          <li>
                            Create captivating YouTube video descriptions that
                            drive more clicks.
                          </li>
                        </ul>
                      </Col>
                      <Col className="temp-bg">
                        <img
                          src="images/watch-video2.svg"
                          className="w-100"
                          alt="news"
                        />
                      </Col>
                    </Row>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>

        <Container className="py-5" id="YouTubeChat">
          <Row className="text-center py-5">
            <div className="col">
              <h2 className="ff-reemkufi display-5 fw-medium maxw-1100 mx-auto">
                YouTube Chat
              </h2>
              <div className="d-block pt-2 pt-sm-3">
                <span className="heading-liner"></span>
              </div>
            </div>
          </Row>

          <Row className="row row-cols-1 row-cols-md-2 g-5">
            <Col className="temp-bg">
              <img src="images/ytchat.png" className="w-100" alt="news" />
            </Col>
            <Col className="">
              <h4 className="fw-700 display-5 pb-3">
                Summarize YouTube videos with Vison.ai
              </h4>
              <ul className="fw-400 fs-5p2 pb-3 p-0 ps-4 tab-list">
                <li>
                  Avoid lengthy viewing time and chat with YouTube videos
                  instead
                </li>
                <li>
                  Create timestamps for videos and jump directly to the specific
                  segments you want to watch
                </li>
                <li>
                  Get specific pieces of information without watching the entire
                  video
                </li>
              </ul>
            </Col>
          </Row>
        </Container>

        {/* <div className='bg-gray' id="GeneralChat">
                <Container className='py-5'>
                    <Row className='text-center py-5'>
                        <div className="col">
                            <h2 className='ff-reemkufi display-5 fw-medium maxw-1100 mx-auto'>General Chat</h2>
                            <div className='d-block pt-2 pt-sm-3'>
                                <span className='heading-liner'></span>
                            </div>
                        </div>
                    </Row>

                    <Row className='row row-cols-1 row-cols-md-2 g-5'>
                        <Col className=''>
                            <h4 className='fw-700 display-5 pb-3'>Lorem ipsum dolor sit<br/> amet, consectetur</h4>
                            <p className='fs-5p2 fw-400 pb-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed est ex, pretium at erat ac, tincidunt fringilla lectus. Duis quis elementum justo. Proin eu ipsum maximus, congue elit non, pharetra dui. Nam nisi lacus, gravida vel arcu ut, efficitur consectetur lorem.</p>
                            <ul className='fw-400 fs-5p2 pb-3 p-0 ps-4'>
                                <li>Lorem ipsum dolor sit amet, consectetur</li>
                                <li>Lorem ipsum</li>
                                <li>Lorem ipsum dolor sit amet</li>
                                <li>Lorem ipsum dolor</li>
                            </ul>
                        </Col>
                        <Col className='temp-bg'>
                            <img src='images/generalchat.png' className='w-100' alt='news'/>
                        </Col>
                    </Row>
                </Container>
            </div> */}
      </div>

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
      {/* <Modal
            show={show}
            onHide={() => setShow(false)}
            centered
            size="xl"
            // dialogClassName="modal-80w"
            aria-labelledby="example-custom-modal-styling-title"
        >
            <Modal.Header closeButton className="border-0">
            </Modal.Header>
            <Modal.Body>
                <h1 className='ff-reemkufi display-5 fw-600 text-center text-grd'>
                    Get A Demo Of Vison.ai
                </h1>
                <p className="text-center py-4">
                    Get your personalized demo today to understand how you can use Vison.ai to expedite your marketing process.
                </p>

                <Row className="row row-cols-1 row-cols-md-3 g-4 gray-input">
                    <Col className="">
                        <div class="">
                            <label for="fname" class="form-label">First Name</label>
                            <input type="text" class="form-control" id="fname" placeholder="Enter First Name"/>
                        </div>
                    </Col>
                    <Col className="">
                        <div class="">
                            <label for="lname" class="form-label">Last Name</label>
                            <input type="text" class="form-control" id="lname" placeholder="Enter Last Name"/>
                        </div>
                    </Col>
                    <Col className="">
                        <div class="">
                            <label for="email" class="form-label">Email</label>
                            <input type="email" class="form-control" id="email" placeholder="Enter Email"/>
                        </div>
                    </Col>
                </Row>

                <Row className="row row-cols-1 row-cols-md-3 py-4">
                    <Col></Col>
                    <Col></Col>
                    <Col>
                        <button type="button" className="btn-default rounded-3">Submit</button>
                    </Col>
                </Row>
            </Modal.Body>
        </Modal> */}
    </>
  );
}

export default Feature;
