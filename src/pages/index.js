import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Head from "next/head";
import { useState } from "react";
import Image from "next/image";
import { Container, Row, Col } from "react-bootstrap";
import { NextSeo } from "next-seo";

export default function Home() {
  const [email, setemail] = useState("");
  return (
    <>
      <NextSeo
        title="Vison The Only Multi-Skilled Gen AI"
        description="Explore Vison.ai, an innovative solution leveraging Multi Skilled Generative AI technology to revolutionize your business processes. Stay ahead with us!"
      />
      <Header />

      <section className="hero">
        <Container>
          <div className="img-box">
            <img className="bg-img" src="images/bg-hero.svg" alt="..." />
          </div>
          <Row className="hero-content py-4">
            <Col className="col-12 col-lg-6 order-lg-1">
              <h1 className="ff-reemkufi display-5 fw-600">
                The Only Multi-Skilled
                <span className="d-sm-block fw-400">Generative AI</span>
              </h1>
              <h6 className="h4 fw-400 my-3">
                Let You Get Your Work Done{" "}
                <strong className="fw-800">Faster</strong> And{" "}
                <strong className="fw-800">Better</strong>
              </h6>
              <p className="fs-5 fw-400 pt-2 pb-3">
                Vison multi-skilled AI is developed for Individuals and
                businesses to propel their day to day marketing and operational
                efforts.
              </p>
              <em className="fs-5p2 fw-600 d-block py-2">
                Expedite Your Business Process{" "}
                <strong className="fw-800">TODAY, Let’s get started</strong>
              </em>
              <div className="px-3 px-md-0 pt-3 d-flex flex-column flex-sm-row gap-3 gap-sm-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setemail(e.target.value)}
                  className="form-control form-control-lg theme-placeholder border-0"
                  placeholder="Enter your email id"
                />
                <button
                  type="button"
                  className="btn btn-lg btn-gradient text-nowrap"
                  onClick={() => {
                    if (email?.trim() == "") {
                      // alert("Please enter your email id");
                      return;
                    }
                    window.open(
                      process.env.NEXT_PUBLIC_USER_URL +
                        `/signup?email=${email}`,
                      "_blank"
                    );
                  }}
                >
                  Hands-on Vison.ai
                </button>
              </div>
              <div className="text-start px-3 px-md-0 pt-2">
                <p className="fs-14px fw-400">
                  Try Vison for free, no credit card required
                </p>
              </div>
            </Col>
            <Col className="col-6 col-lg-3 py-4">
              <Image
                className="w-100 h-100"
                width={100}
                height={100}
                src="images/left-hero.svg"
              />
            </Col>
            <Col className="col-6 col-lg-3 order-lg-1 py-4">
              <Image
                className="w-100 h-100"
                width={100}
                height={100}
                src="images/right-hero.svg"
              />
            </Col>
          </Row>
        </Container>
      </section>

      {/* <section className='position-relative pt-5 pb-4'>
        <img src='images/bg-second.svg' className='wrting-imgbg1'/>
        <div className='container position-relative'>
            <div className="row text-center">
                <div className="col">
                    <h2 className='ff-reemkufi display-5 fw-medium maxw-1100 mx-auto'>Get to Know Vison Multi-Skilled Gen AI Platform</h2>
                    <h3 className='ff-reemkufi mt-3'>Do More, Better And Faster</h3>
                    <div className='d-block pt-2 pt-sm-3'>
                        <span className='heading-liner'></span>
                    </div>
                </div>
            </div>
            <div className='row my-4 py-2'>
                <div className="col-12 py-2 overflow-auto maxh-440 scroll-hide">
                    <div className="row g-3">
                        <div className='col-12 col-lg-7'>
                            <img src='images/pc-left.svg' className='w-100 maxh-400'/>
                        </div>
                        <div className='col-12 col-lg-5'>
                            <h3 className='ff-reemkufi display-6 fw-700'>Short & Long Form content</h3>
                            <ul className='text-decoration-none ms-3 p-0 fs-5 fw-400 mt-4 pt-2'>
                                <li className='pb-3'>Generate from ideas to long form articles</li>
                                <li className='pb-3'>Get SEO friendly content that ranks your article higher</li>
                                <li className='pb-3'>Get your personal writing assistant that writes like you. <span className='d-block'>Yes, you can train our model to your unique writing style.</span></li>
                            </ul>
                            <div className='d-flex justify-content-center justify-content-md-start'>
                                <a href='#' className='btn btn-outline-dark btn-lg btn-xll rounded-pill px-4 px-sm-5 minw-xl-240'>Get your writing assistant</a>
                            </div>
                        </div>
                    </div>
                    <div className="row g-3 mt-5">
                        <div className='col-12 col-lg-7'>
                            <img src='images/marketing-ads.svg' className='w-100 maxh-400'/>
                        </div>
                        <div className='col-12 col-lg-5'>
                            <h3 className='ff-reemkufi display-6 fw-700'>Marketing/Ads Copy</h3>
                            <ul className='text-decoration-none ms-3 p-0 fs-5 fw-400 mt-4 pt-2'>
                                <li className='pb-3'>Write your PPC ad campaign with click of a button</li>
                                <li className='pb-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                                <li className='pb-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <span className='d-block'>Maecenas massa dui, eleifend ut libero</span></li>
                            </ul>
                            <div className='d-flex justify-content-center justify-content-md-start'>
                                <a href='#' className='btn btn-outline-dark btn-lg btn-xll rounded-pill px-4 px-sm-5 minw-xl-240'>Get your writing assistant</a>
                            </div>
                        </div>
                    </div>
                    <div className="row g-3 mt-5">
                        <div className='col-12 col-lg-7'>
                            <img src='images/social-media.svg' className='w-100 maxh-400'/>
                        </div>
                        <div className='col-12 col-lg-5'>
                            <h3 className='ff-reemkufi display-6 fw-700'>Social Media</h3>
                            <h4 className='ff-reemkufi fw-700'>E-Commerce/Product Description <span className='d-block'>Diagram generator</span></h4>
                            <ul className='text-decoration-none ms-3 p-0 fs-5 fw-400 mt-4 pt-2'>
                                <li className='pb-3'>Generate complex process flow or system design with click of a button</li>
                                <li className='pb-3'>Export them as a PDF or PNG to add into a pitch</li>
                                <li className='pb-3'>Also generate bullet points that explain the diagram</li>
                            </ul>
                            <div className='d-flex justify-content-center justify-content-md-start'>
                                <a href='#' className='btn btn-outline-dark btn-lg btn-xll rounded-pill px-4 px-sm-5 minw-xl-240'>Get your writing assistant</a>
                            </div>
                        </div>
                    </div>
                    <div className="row g-3 mt-5">
                        <div className='col-12 col-lg-7'>
                            <img src='images/summarizer.svg' className='w-100 maxh-400'/>
                        </div>
                        <div className='col-12 col-lg-5'>
                            <h3 className='ff-reemkufi display-6 fw-700'>Summarizer (YT)</h3>
                            <ul className='text-decoration-none ms-3 p-0 fs-5 fw-400 mt-4 pt-2'>
                                <li className='pb-3'>Don’t have time to watch a YouTube video or read an article,blog or PDF</li>
                                <li className='pb-3'>Cut your watching and reading time</li>
                                <li className='pb-3'>Use the precise information that you need</li>
                            </ul>
                            <div className='d-flex justify-content-center justify-content-md-start'>
                                <a href='#' className='btn btn-outline-dark btn-lg btn-xll rounded-pill px-4 px-sm-5 minw-xl-240'>Get your writing assistant</a>
                            </div>
                        </div>
                    </div>
                    <div className="row g-3 mt-5">
                        <div className='col-12 col-lg-7'>
                            <img src='images/business-copy.svg' className='w-100 maxh-400'/>
                        </div>
                        <div className='col-12 col-lg-5'>
                            <h3 className='ff-reemkufi display-6 fw-700'>Business Copy</h3>
                            <ul className='text-decoration-none ms-3 p-0 fs-5 fw-400 mt-4 pt-2'>
                                <li className='pb-3'>Don’t have time to watch a YouTube video or read an article,blog or PDF</li>
                                <li className='pb-3'>Cut your watching and reading time</li>
                                <li className='pb-3'>Use the precise information that you need</li>
                            </ul>
                            <div className='d-flex justify-content-center justify-content-md-start'>
                                <a href='#' className='btn btn-outline-dark btn-lg btn-xll rounded-pill px-4 px-sm-5 minw-xl-240'>Get your writing assistant</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section> */}

      <section className="overlay">
        {/* <img src='images/bg-second.svg' className='wrting-imgbg1'/> */}
        <div className="sticky-area">
          <div className="container">
            <div className="row text-center pt-5 pb-3">
              <div className="col">
                <h2 className="ff-reemkufi display-5 fw-medium maxw-1100 mx-auto">
                  Get to Know Vison Multi-Skilled Gen AI Platform
                </h2>
                <h3 className="ff-reemkufi mt-3">Do More, Better And Faster</h3>
                <div className="d-block pt-2 pt-sm-3">
                  <span className="heading-liner"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container pb-5 position-relative">
          <div className="row my-5 py-sm-5 g-3">
            <div className="col-12 col-lg-7">
              <img src="images/pc-left.svg" className="w-100 maxh-400" />
            </div>
            <div className="col-12 col-lg-5">
              <h3 className="ff-reemkufi display-6 fw-700">
                Short & Long Form content
              </h3>
              <ul className="text-decoration-none ms-3 p-0 fs-5 fw-400 mt-4 pt-2">
                <li className="pb-3">
                  Generate from ideas to long form articles
                </li>
                <li className="pb-3">
                  Get SEO friendly content that ranks your article higher
                </li>
                <li className="pb-3">
                  Get your personal writing assistant that writes like you.{" "}
                  <span className="d-block">
                    Yes, you can train our model to your unique writing style.
                  </span>
                </li>
              </ul>
              <div className="d-flex justify-content-center justify-content-md-start">
                <a
                  href={process.env.NEXT_PUBLIC_USER_URL + "/signup"}
                  target="_blank"
                  className="btn btn-outline-dark normal-btn btn-lg btn-xll rounded-pill px-4 px-sm-5 minw-xl-240"
                >
                  Get your writing assistant
                </a>
              </div>
            </div>
          </div>
          <div className="row my-5 py-sm-5 g-3">
            <div className="col-12 col-lg-7">
              <img src="images/marketing-ads.svg" className="w-100 maxh-400" />
            </div>
            <div className="col-12 col-lg-5">
              <h3 className="ff-reemkufi display-6 fw-700">
                Marketing/Ads Copy
              </h3>
              <ul className="text-decoration-none ms-3 p-0 fs-5 fw-400 mt-4 pt-2">
                <li className="pb-3">
                  Write your PPC ad campaign with click of a button
                </li>
                <li className="pb-3">
                  Write conversion proof copy for your Facebook Ads
                </li>
                <li className="pb-3">Get more leads with Vison</li>
              </ul>
              <div className="d-flex justify-content-center justify-content-md-start">
                <a
                  href={process.env.NEXT_PUBLIC_USER_URL + "/signup"}
                  target="_blank"
                  className="btn btn-outline-dark normal-btn btn-lg btn-xll rounded-pill px-4 px-sm-5 minw-xl-240"
                >
                  Get More Leads Today
                </a>
              </div>
            </div>
          </div>
          <div className="row my-5 py-sm-5 g-3">
            <div className="col-12 col-lg-7">
              <img src="images/social-media.svg" className="w-100 maxh-400" />
            </div>
            <div className="col-12 col-lg-5">
              <h3 className="ff-reemkufi display-6 fw-700">Social Media</h3>
              <ul className="text-decoration-none ms-3 p-0 fs-5 fw-400 mt-4 pt-2">
                <li className="pb-3">
                  Get engaging copy that reflects your brand
                </li>
                <li className="pb-3">Schedule publishing of post/captions</li>
                <li className="pb-3">
                  Let Vison take care of your creative social media copies
                </li>
              </ul>
              <div className="d-flex justify-content-center justify-content-md-start">
                <a
                  href={process.env.NEXT_PUBLIC_USER_URL + "/signup"}
                  target="_blank"
                  className="btn btn-outline-dark normal-btn btn-lg btn-xll rounded-pill px-4 px-sm-5 minw-xl-240"
                >
                  Write with Vison
                </a>
              </div>
            </div>
          </div>
          <div className="row my-5 py-sm-5 g-3">
            <div className="col-12 col-lg-7">
              <img src="images/e-commerce.svg" className="w-100 maxh-400" />
            </div>
            <div className="col-12 col-lg-5">
              <h3 className="ff-reemkufi display-6 fw-700">
                E-Commerce/Product Description
              </h3>
              <ul className="text-decoration-none ms-3 p-0 fs-5 fw-400 mt-4 pt-2">
                <li className="pb-3">Write product copies that will sell</li>
                <li className="pb-3">
                  Generate product descriptions that follows Amazon guidelines
                </li>
                <li className="pb-3">
                  Use knowledge base to reflect your brand persona
                </li>
              </ul>
              <div className="d-flex justify-content-center justify-content-md-start">
                <a
                  href={process.env.NEXT_PUBLIC_USER_URL + "/signup"}
                  target="_blank"
                  className="btn btn-outline-dark normal-btn btn-lg btn-xll rounded-pill px-4 px-sm-5 minw-xl-240"
                >
                  Craft with your Brand
                </a>
              </div>
            </div>
          </div>
          <div className="row my-5 py-sm-5 g-3">
            <div className="col-12 col-lg-7">
              <img src="images/diagram.svg" className="w-100 maxh-400" />
            </div>
            <div className="col-12 col-lg-5">
              <h3 className="ff-reemkufi display-6 fw-700">
                Diagram Generator
              </h3>
              <ul className="text-decoration-none ms-3 p-0 fs-5 fw-400 mt-4 pt-2">
                <li className="pb-3">
                  Generate complex process flow or system design with click of a
                  button
                </li>
                <li className="pb-3">
                  Export them as a PDF or PNG to add into a pitch
                </li>
                <li className="pb-3">
                  Also generate bullet points that explain the diagram
                </li>
              </ul>
              <div className="d-flex justify-content-center justify-content-md-start">
                <a
                  href={process.env.NEXT_PUBLIC_USER_URL + "/signup"}
                  target="_blank"
                  className="btn btn-outline-dark normal-btn btn-lg btn-xll rounded-pill px-4 px-sm-5 minw-xl-240"
                >
                  Save hours with Vison
                </a>
              </div>
            </div>
          </div>
          <div className="row my-5 py-sm-5 g-3">
            <div className="col-12 col-lg-7">
              <img src="images/watch-video.svg" className="w-100 maxh-400" />
            </div>
            <div className="col-12 col-lg-5">
              <h3 className="ff-reemkufi display-6 fw-700">
                Ask Instead Watch Videos
              </h3>
              <ul className="text-decoration-none ms-3 p-0 fs-5 fw-400 mt-4 pt-2">
                <li className="pb-3">
                  Don't have time to watch a YouTube video, then chat
                </li>
                <li className="pb-3">Cut your watching time</li>
                <li className="pb-3">
                  Get the precise information that you need without spending
                  time
                </li>
              </ul>
              <div className="d-flex justify-content-center justify-content-md-start">
                <a
                  href={process.env.NEXT_PUBLIC_USER_URL + "/signup"}
                  target="_blank"
                  className="btn btn-outline-dark normal-btn btn-lg btn-xll rounded-pill px-4 px-sm-5 minw-xl-240"
                >
                  Ask Videos
                </a>
              </div>
            </div>
          </div>
          <div className="row my-5 py-sm-5 g-3">
            <div className="col-12 col-lg-7">
              <img src="images/businesses.svg" className="w-100 maxh-400" />
            </div>
            <div className="col-12 col-lg-5">
              <h3 className="ff-reemkufi display-6 fw-700">
                Vison for Businesses
              </h3>
              <ul className="text-decoration-none ms-3 p-0 fs-5 fw-400 mt-4 pt-2">
                <li className="pb-3">
                  Generate FAQ, Landing page and other important copies with
                  your brand persona
                </li>
                <li className="pb-3">
                  Write LinkedIn posts that will get engagement
                </li>
                <li className="pb-3">
                  Write Job Posts that attracts top-talent
                </li>
              </ul>
              <div className="d-flex justify-content-center justify-content-md-start">
                <a
                  href={process.env.NEXT_PUBLIC_USER_URL + "/signup"}
                  target="_blank"
                  className="btn btn-outline-dark normal-btn btn-lg btn-xll rounded-pill px-4 px-sm-5 minw-xl-240"
                >
                  Speed Up Marketing Efforts
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <section className='writing-assistant-box'>
        <div className="writing-assistant-triangle">
            <svg preserveAspectRatio="none" viewBox="0 0 100 100">
                <polygon points="100,100 100,0 0,100" opacity="1"></polygon>
            </svg>
        </div>
        <div className='position-relative pt-5 pb-4'>
            <img src='images/bg-hero.svg' className='wrting-imgbg'/>
            <div className='container position-relative'>
                <div className="row text-center text-white">
                    <div className="col">
                        <h2 className='ff-reemkufi display-5 fw-medium'>Get your writing assistant</h2>
                        <div className='d-block pt-1 pt-sm-2'>
                            <span className='heading-liner'></span>
                        </div>
                        <p className='h4 fw-400 lh-md maxw-1100 mx-auto my-4 py-sm-3'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ut nisi eu augue ultricies sagittis ut et lorem.  Etiam vulputate maximus risus, at volutpat turpis venenatis non. Duis mattis pretium ligula ut rhoncus. Suspendisse
                        </p>
                        <a href='#' className='btn btn-outline-light btn-lg btn-xl rounded-pill px-4 px-sm-5 minw-xl-240'>Try It Now</a>
                    </div>
                </div>
            </div>
        </div>
        <div className='container position-relative py-5'>
            <div className="row text-center text-white">
                <div className="col">
                    <h2 className='ff-reemkufi display-5 fw-medium'>Get Access to SER Chat (BETA)</h2>
                    <h3 className='ff-reemkufi mt-3'>Our exclusive chat model for helping Students, Engineers & Researchers (SER Chat)</h3>
                    <div className='d-block pt-2 pt-sm-3'>
                        <span className='heading-liner'></span>
                    </div>
                </div>
            </div>
        </div>

        <div className='position-relative pt-2 pb-2 pt-md-5 pb-md-4'>
            <img src='images/bg-wave.svg' className='wrting-imgbg2'/>
            <div className='container position-relative'>
                <div className="row row-cols-2 row-cols-md-4">
                    <div className="col">
                        <div className='ser-boxes'>
                            <svg className='icon'><use href='#icon_chat'></use></svg>
                            <p>Chat with your books, research papers</p>
                        </div>
                    </div>
                    <div className="col mt-4 mt-md-5">
                        <div className='ser-boxes'>
                            <svg className='icon'><use href='#icon_extract'></use></svg>
                            <p>Extract the precise piece of information</p>
                        </div>
                    </div>
                    <div className="col">
                        <div className='ser-boxes'>
                            <svg className='icon'><use href='#icon_question'></use></svg>
                            <p>Get potential questions that can come in exam</p>
                        </div>
                    </div>
                    <div className="col mt-4 mt-md-5">
                        <div className='ser-boxes'>
                            <svg className='icon'><use href='#icon_engineering'></use></svg>
                            <p>Ask it to explain complex engineering diagrams</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </section> */}
      <section className="writing-assistant-box bg-chatgpt">
        <div className="writing-assistant-triangle">
          <svg preserveAspectRatio="none" viewBox="0 0 100 100">
            <polygon points="100,100 100,0 0,100" opacity="1"></polygon>
          </svg>
        </div>
        <div className="container position-relative py-5">
          <div className="row text-center text-white">
            <div className="col">
              <h2 className="ff-reemkufi display-5 fw-medium">
                Tired of Generic Outputs from ChatGPT
              </h2>
              <h3 className="ff-reemkufi mt-3">
                {" "}
                Now train Vison models with your own writing style so the <br />
                output looks like you've written it
              </h3>
              <div className="d-block pt-2 pt-sm-3">
                <span className="heading-liner"></span>
              </div>
            </div>
          </div>
        </div>

        <div className="position-relative pt-2 pb-2 pt-md-5 pb-md-4">
          {/* <img src='images/bg-chat.svg' className='wrting-imgbg2'/> */}
          <div className="container position-relative chatgpt-card">
            <div className="row row-cols-1 row-cols-md-4 text-white g-0 mt-50">
              <div className="col">
                <div className="card bg-first h-100">
                  <div className="card-body word-number d-flex flex-column justify-content-between">
                    <div className="d-flex justify-content-center">
                      <svg className="icon">
                        <use href="#icon_zero"></use>
                      </svg>
                      <svg className="icon">
                        <use href="#icon_one"></use>
                      </svg>
                    </div>
                    <p className="mt-3 text-center">
                      Train your writing style in 6 simple easy steps
                    </p>
                    <div className="d-flex justify-content-center mt-3">
                      <svg className="icon">
                        <use href="#icon_footstep"></use>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card bg-second h-100 t-50">
                  <div className="card-body word-number d-flex flex-column justify-content-between">
                    <div className="d-flex justify-content-center">
                      <svg className="icon">
                        <use href="#icon_zero"></use>
                      </svg>
                      <svg className="icon">
                        <use href="#icon_two"></use>
                      </svg>
                    </div>
                    <p className="mt-3 text-center">
                      Train models like you are playing a game
                    </p>
                    <div className="d-flex justify-content-center mt-3">
                      <svg className="icon">
                        <use href="#icon_game"></use>
                      </svg>
                    </div>
                  </div>
                  <img src="images/first.png" className="angle" alt="angle" />
                </div>
              </div>
              <div className="col">
                <div className="card bg-third h-100 t-100">
                  <div className="card-body word-number d-flex flex-column justify-content-between">
                    <div className="d-flex justify-content-center">
                      <svg className="icon">
                        <use href="#icon_zero"></use>
                      </svg>
                      <svg className="icon">
                        <use href="#icon_three"></use>
                      </svg>
                    </div>
                    <p className="mt-3 text-center">
                      Choose from multiple trained models to get the output you
                      want
                    </p>
                    <div className="d-flex justify-content-center mt-3">
                      <svg className="icon">
                        <use href="#icon_training"></use>
                      </svg>
                    </div>
                  </div>
                  <img src="images/second.png" className="angle" alt="angle" />
                </div>
              </div>
              <div className="col">
                <div className="card bg-four h-100 t-150">
                  <div className="card-body word-number d-flex flex-column justify-content-between">
                    <div className="d-flex justify-content-center">
                      <svg className="icon">
                        <use href="#icon_zero"></use>
                      </svg>
                      <svg className="icon">
                        <use href="#icon_four"></use>
                      </svg>
                    </div>
                    <p className="mt-3 text-center">
                      All our templates will use your trained writing style to
                      generate unique content
                    </p>
                    <div className="d-flex justify-content-center mt-3l py-5">
                      <svg className="icon">
                        <use href="#icon_template"></use>
                      </svg>
                    </div>
                    <div className="d-flex justify-content-center my-2 py-5 empty"></div>
                  </div>
                  <img src="images/third.png" className="angle" alt="angle" />
                </div>
              </div>
            </div>

            <div className="row pt-5">
              <div className="col-12 text-center">
                <a
                  href={process.env.NEXT_PUBLIC_USER_URL + "/signup"}
                  target="_blank"
                  className="btn btn-gradient btn-lg btn-xl rounded-pill px-4 px-sm-5 minw-xl-240 text-white"
                >
                  Generate In Your Writing Style
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <section className='position-relative py-5'>
        <img src="images/right-multiskill.svg" alt="..." className="position-absolute right-top"/>
        <div className='container position-relative'>
            <div className="row text-center pb-5">
                <div className="col">
                    <h2 className='ff-reemkufi display-5 fw-medium maxw-1100 mx-auto'>Empowered with Vison Multi-Skilled AI</h2>
                    <h3 className='ff-reemkufi mt-3'>In Our Users Word</h3>
                    <div className='d-block pt-2 pt-sm-3'>
                        <span className='heading-liner'></span>
                    </div>
                </div>
            </div>
        </div>
        <div className='position-relative'>
            <img src='images/bg-multiskilled.svg' className='wrting-imgbg3'/>
            <div className='container position-relative'>
                <div className="row row-cols-1 row-cols-md-4 text-white g-4 d-flex align-items-center">
                    <div className="col">
                        <div className='word-boxes d-flex flex-column justify-content-between mt-150'>
                            <svg className='icon'><use href='#icon_dualcot'></use></svg>
                            <p className='mt-3'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut at felis sed risus condimentum egestas at eu nisl. Donec dolor odio, facilisis eu sapien eget, maximus portaaugue
                            </p>
                            <div className='d-flex align-items-center maxh-40 mt-3'>
                                <div className='avtar d-flex align-items-center justify-content-center overflow-hidden me-3'>
                                    <img src='images/avtar.png' alt='avtar' className='w-100'/>
                                </div>
                                <div className='avtar-detail'>
                                    <span className='fw-700 d-block'>Vineet Joshi</span>
                                    <span className='fw-400 fs-14px d-block text-secondary'>India</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className='word-boxes d-flex flex-column justify-content-between'>
                            <svg className='icon'><use href='#icon_dualcot'></use></svg>
                            <p className='mt-3'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut at felis sed risus condimentum egestas at eu nisl. Donec dolor odio, facilisis eu sapien eget, maximus portaaugue
                            </p>
                            <div className='d-flex align-items-center maxh-40 mt-3'>
                                <div className='avtar d-flex align-items-center justify-content-center overflow-hidden me-3'>
                                    <img src='images/avtar.png' alt='avtar' className='w-100'/>
                                </div>
                                <div className='avtar-detail'>
                                    <span className='fw-700 d-block'>Vineet Joshi</span>
                                    <span className='fw-400 fs-14px d-block text-secondary'>India</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className='word-boxes d-flex flex-column justify-content-between mt-150'>
                            <svg className='icon'><use href='#icon_dualcot'></use></svg>
                            <p className='mt-3'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut at felis sed risus condimentum egestas at eu nisl. Donec dolor odio, facilisis eu sapien eget, maximus portaaugue
                            </p>
                            <div className='d-flex align-items-center maxh-40 mt-3'>
                                <div className='avtar d-flex align-items-center justify-content-center overflow-hidden me-3'>
                                    <img src='images/avtar.png' alt='avtar' className='w-100'/>
                                </div>
                                <div className='avtar-detail'>
                                    <span className='fw-700 d-block'>Vineet Joshi</span>
                                    <span className='fw-400 fs-14px d-block text-secondary'>India</span>
                                </div>
                            </div>
                        </div>
                        <div className='word-boxes d-flex flex-column justify-content-between mt-4'>
                            <svg className='icon'><use href='#icon_dualcot'></use></svg>
                            <p className='mt-3'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut at felis sed risus condimentum egestas at eu nisl. Donec dolor odio, facilisis eu sapien eget, maximus portaaugue
                            </p>
                            <div className='d-flex align-items-center maxh-40 mt-3'>
                                <div className='avtar d-flex align-items-center justify-content-center overflow-hidden me-3'>
                                    <img src='images/avtar.png' alt='avtar' className='w-100'/>
                                </div>
                                <div className='avtar-detail'>
                                    <span className='fw-700 d-block'>Vineet Joshi</span>
                                    <span className='fw-400 fs-14px d-block text-secondary'>India</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className='word-boxes d-flex flex-column justify-content-between'>
                            <svg className='icon'><use href='#icon_dualcot'></use></svg>
                            <p className='mt-3'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut at felis sed risus condimentum egestas at eu nisl. Donec dolor odio, facilisis eu sapien eget, maximus portaaugue
                            </p>
                            <div className='d-flex align-items-center maxh-40 mt-3'>
                                <div className='avtar d-flex align-items-center justify-content-center overflow-hidden me-3'>
                                    <img src='images/avtar.png' alt='avtar' className='w-100'/>
                                </div>
                                <div className='avtar-detail'>
                                    <span className='fw-700 d-block'>Vineet Joshi</span>
                                    <span className='fw-400 fs-14px d-block text-secondary'>India</span>
                                </div>
                            </div>
                        </div>
                        <div className='word-boxes d-flex flex-column justify-content-between mt-4'>
                            <svg className='icon'><use href='#icon_dualcot'></use></svg>
                            <p className='mt-3'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut at felis sed risus condimentum egestas at eu nisl. Donec dolor odio, facilisis eu sapien eget, maximus portaaugue
                            </p>
                            <div className='d-flex align-items-center maxh-40 mt-3'>
                                <div className='avtar d-flex align-items-center justify-content-center overflow-hidden me-3'>
                                    <img src='images/avtar.png' alt='avtar' className='w-100'/>
                                </div>
                                <div className='avtar-detail'>
                                    <span className='fw-700 d-block'>Vineet Joshi</span>
                                    <span className='fw-400 fs-14px d-block text-secondary'>India</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section> */}

      {/* <section className='position-relative py-5'>
        <img src="images/right-multiskill.svg" alt="..." className="position-absolute right-top"/>
        <div className='container position-relative'>
            <div className="row text-center">
                <div className="col">
                    <h2 className='ff-reemkufi display-5 fw-medium maxw-1100 mx-auto'>Empowered with Vison Multi-Skilled AI</h2>
                    <h3 className='ff-reemkufi mt-3'>In Our Users Word</h3>
                    <div className='d-block pt-2 pt-sm-3'>
                        <span className='heading-liner'></span>
                    </div>
                </div>
            </div>
        </div>
        <div className='position-relative'>
            <img src='images/bg-multiskilled.svg' className='wrting-imgbg3'/>
            <div className='card-container'>
                <div className="card-inner">
                    <div className='word-boxes d-flex flex-column justify-content-between'>
                        <svg className='icon'><use href='#icon_engineering'></use></svg>
                        <p className='mt-3'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut at felis sed risus condimentum egestas at eu nisl. Donec dolor odio, facilisis eu sapien eget, maximus portaaugue
                        </p>
                        <div className='d-flex align-items-center maxh-40 mt-3'>
                            <div className='avtar d-flex align-items-center justify-content-center overflow-hidden me-3'>
                                <img src='images/avtar.png' alt='avtar' className='w-100'/>
                            </div>
                            <div className='avtar-detail'>
                                <span className='fw-700 d-block'>Vineet Joshi</span>
                                <span className='fw-400 fs-14px d-block text-secondary'>India</span>
                            </div>
                        </div>
                    </div>
                    <div className='word-boxes d-flex flex-column justify-content-between mt-5'>
                        <svg className='icon'><use href='#icon_engineering'></use></svg>
                        <p className='mt-3'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut at felis sed risus condimentum egestas at eu nisl. Donec dolor odio, facilisis eu sapien eget, maximus portaaugue
                        </p>
                        <div className='d-flex align-items-center maxh-40 mt-3'>
                            <div className='avtar d-flex align-items-center justify-content-center overflow-hidden me-3'>
                                <img src='images/avtar.png' alt='avtar' className='w-100'/>
                            </div>
                            <div className='avtar-detail'>
                                <span className='fw-700 d-block'>Vineet Joshi</span>
                                <span className='fw-400 fs-14px d-block text-secondary'>India</span>
                            </div>
                        </div>
                    </div>
                    <div className='word-boxes d-flex flex-column justify-content-between'>
                        <svg className='icon'><use href='#icon_engineering'></use></svg>
                        <p className='mt-3'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut at felis sed risus condimentum egestas at eu nisl. Donec dolor odio, facilisis eu sapien eget, maximus portaaugue
                        </p>
                        <div className='d-flex align-items-center maxh-40 mt-3'>
                            <div className='avtar d-flex align-items-center justify-content-center overflow-hidden me-3'>
                                <img src='images/avtar.png' alt='avtar' className='w-100'/>
                            </div>
                            <div className='avtar-detail'>
                                <span className='fw-700 d-block'>Vineet Joshi</span>
                                <span className='fw-400 fs-14px d-block text-secondary'>India</span>
                            </div>
                        </div>
                    </div>
                    <div className='word-boxes d-flex flex-column justify-content-between mt-5'>
                        <svg className='icon'><use href='#icon_engineering'></use></svg>
                        <p className='mt-3'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut at felis sed risus condimentum egestas at eu nisl. Donec dolor odio, facilisis eu sapien eget, maximus portaaugue
                        </p>
                        <div className='d-flex align-items-center maxh-40 mt-3'>
                            <div className='avtar d-flex align-items-center justify-content-center overflow-hidden me-3'>
                                <img src='images/avtar.png' alt='avtar' className='w-100'/>
                            </div>
                            <div className='avtar-detail'>
                                <span className='fw-700 d-block'>Vineet Joshi</span>
                                <span className='fw-400 fs-14px d-block text-secondary'>India</span>
                            </div>
                        </div>
                    </div>
                    <div className='word-boxes d-flex flex-column justify-content-between'>
                        <svg className='icon'><use href='#icon_engineering'></use></svg>
                        <p className='mt-3'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut at felis sed risus condimentum egestas at eu nisl. Donec dolor odio, facilisis eu sapien eget, maximus portaaugue
                        </p>
                        <div className='d-flex align-items-center maxh-40 mt-3'>
                            <div className='avtar d-flex align-items-center justify-content-center overflow-hidden me-3'>
                                <img src='images/avtar.png' alt='avtar' className='w-100'/>
                            </div>
                            <div className='avtar-detail'>
                                <span className='fw-700 d-block'>Vineet Joshi</span>
                                <span className='fw-400 fs-14px d-block text-secondary'>India</span>
                            </div>
                        </div>
                    </div>
                    <div className='word-boxes d-flex flex-column justify-content-between mt-5'>
                        <svg className='icon'><use href='#icon_engineering'></use></svg>
                        <p className='mt-3'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut at felis sed risus condimentum egestas at eu nisl. Donec dolor odio, facilisis eu sapien eget, maximus portaaugue
                        </p>
                        <div className='d-flex align-items-center maxh-40 mt-3'>
                            <div className='avtar d-flex align-items-center justify-content-center overflow-hidden me-3'>
                                <img src='images/avtar.png' alt='avtar' className='w-100'/>
                            </div>
                            <div className='avtar-detail'>
                                <span className='fw-700 d-block'>Vineet Joshi</span>
                                <span className='fw-400 fs-14px d-block text-secondary'>India</span>
                            </div>
                        </div>
                    </div>
                    <div className='word-boxes d-flex flex-column justify-content-between'>
                        <svg className='icon'><use href='#icon_engineering'></use></svg>
                        <p className='mt-3'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut at felis sed risus condimentum egestas at eu nisl. Donec dolor odio, facilisis eu sapien eget, maximus portaaugue
                        </p>
                        <div className='d-flex align-items-center maxh-40 mt-3'>
                            <div className='avtar d-flex align-items-center justify-content-center overflow-hidden me-3'>
                                <img src='images/avtar.png' alt='avtar' className='w-100'/>
                            </div>
                            <div className='avtar-detail'>
                                <span className='fw-700 d-block'>Vineet Joshi</span>
                                <span className='fw-400 fs-14px d-block text-secondary'>India</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card-inner card-inner2">
                    <div className='word-boxes d-flex flex-column justify-content-between'>
                        <svg className='icon'><use href='#icon_engineering'></use></svg>
                        <p className='mt-3'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut at felis sed risus condimentum egestas at eu nisl. Donec dolor odio, facilisis eu sapien eget, maximus portaaugue
                        </p>
                        <div className='d-flex align-items-center maxh-40 mt-3'>
                            <div className='avtar d-flex align-items-center justify-content-center overflow-hidden me-3'>
                                <img src='images/avtar.png' alt='avtar' className='w-100'/>
                            </div>
                            <div className='avtar-detail'>
                                <span className='fw-700 d-block'>Vineet Joshi</span>
                                <span className='fw-400 fs-14px d-block text-secondary'>India</span>
                            </div>
                        </div>
                    </div>
                    <div className='word-boxes d-flex flex-column justify-content-between mt-5'>
                        <svg className='icon'><use href='#icon_engineering'></use></svg>
                        <p className='mt-3'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut at felis sed risus condimentum egestas at eu nisl. Donec dolor odio, facilisis eu sapien eget, maximus portaaugue
                        </p>
                        <div className='d-flex align-items-center maxh-40 mt-3'>
                            <div className='avtar d-flex align-items-center justify-content-center overflow-hidden me-3'>
                                <img src='images/avtar.png' alt='avtar' className='w-100'/>
                            </div>
                            <div className='avtar-detail'>
                                <span className='fw-700 d-block'>Vineet Joshi</span>
                                <span className='fw-400 fs-14px d-block text-secondary'>India</span>
                            </div>
                        </div>
                    </div>
                    <div className='word-boxes d-flex flex-column justify-content-between'>
                        <svg className='icon'><use href='#icon_engineering'></use></svg>
                        <p className='mt-3'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut at felis sed risus condimentum egestas at eu nisl. Donec dolor odio, facilisis eu sapien eget, maximus portaaugue
                        </p>
                        <div className='d-flex align-items-center maxh-40 mt-3'>
                            <div className='avtar d-flex align-items-center justify-content-center overflow-hidden me-3'>
                                <img src='images/avtar.png' alt='avtar' className='w-100'/>
                            </div>
                            <div className='avtar-detail'>
                                <span className='fw-700 d-block'>Vineet Joshi</span>
                                <span className='fw-400 fs-14px d-block text-secondary'>India</span>
                            </div>
                        </div>
                    </div>
                    <div className='word-boxes d-flex flex-column justify-content-between mt-5'>
                        <svg className='icon'><use href='#icon_engineering'></use></svg>
                        <p className='mt-3'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut at felis sed risus condimentum egestas at eu nisl. Donec dolor odio, facilisis eu sapien eget, maximus portaaugue
                        </p>
                        <div className='d-flex align-items-center maxh-40 mt-3'>
                            <div className='avtar d-flex align-items-center justify-content-center overflow-hidden me-3'>
                                <img src='images/avtar.png' alt='avtar' className='w-100'/>
                            </div>
                            <div className='avtar-detail'>
                                <span className='fw-700 d-block'>Vineet Joshi</span>
                                <span className='fw-400 fs-14px d-block text-secondary'>India</span>
                            </div>
                        </div>
                    </div>
                    <div className='word-boxes d-flex flex-column justify-content-between'>
                        <svg className='icon'><use href='#icon_engineering'></use></svg>
                        <p className='mt-3'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut at felis sed risus condimentum egestas at eu nisl. Donec dolor odio, facilisis eu sapien eget, maximus portaaugue
                        </p>
                        <div className='d-flex align-items-center maxh-40 mt-3'>
                            <div className='avtar d-flex align-items-center justify-content-center overflow-hidden me-3'>
                                <img src='images/avtar.png' alt='avtar' className='w-100'/>
                            </div>
                            <div className='avtar-detail'>
                                <span className='fw-700 d-block'>Vineet Joshi</span>
                                <span className='fw-400 fs-14px d-block text-secondary'>India</span>
                            </div>
                        </div>
                    </div>
                    <div className='word-boxes d-flex flex-column justify-content-between mt-5'>
                        <svg className='icon'><use href='#icon_engineering'></use></svg>
                        <p className='mt-3'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut at felis sed risus condimentum egestas at eu nisl. Donec dolor odio, facilisis eu sapien eget, maximus portaaugue
                        </p>
                        <div className='d-flex align-items-center maxh-40 mt-3'>
                            <div className='avtar d-flex align-items-center justify-content-center overflow-hidden me-3'>
                                <img src='images/avtar.png' alt='avtar' className='w-100'/>
                            </div>
                            <div className='avtar-detail'>
                                <span className='fw-700 d-block'>Vineet Joshi</span>
                                <span className='fw-400 fs-14px d-block text-secondary'>India</span>
                            </div>
                        </div>
                    </div>
                    <div className='word-boxes d-flex flex-column justify-content-between'>
                        <svg className='icon'><use href='#icon_engineering'></use></svg>
                        <p className='mt-3'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut at felis sed risus condimentum egestas at eu nisl. Donec dolor odio, facilisis eu sapien eget, maximus portaaugue
                        </p>
                        <div className='d-flex align-items-center maxh-40 mt-3'>
                            <div className='avtar d-flex align-items-center justify-content-center overflow-hidden me-3'>
                                <img src='images/avtar.png' alt='avtar' className='w-100'/>
                            </div>
                            <div className='avtar-detail'>
                                <span className='fw-700 d-block'>Vineet Joshi</span>
                                <span className='fw-400 fs-14px d-block text-secondary'>India</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section> */}

      {/* <section className='position-relative py-5'>
        <img src='images/bg-hero.svg' className='wrting-imgbg3' style={{opacity: "0.08"}}/>
        <div className='container position-relative'>
            <div className="row text-center">
                <div className="col">
                    <h2 className='ff-reemkufi display-5 fw-medium maxw-1100 mx-auto'>Access To The Best Models Always</h2>
                    <div className='d-block pt-2 pt-sm-3'>
                        <span className='heading-liner'></span>
                    </div>
                </div>
            </div>
            <div className="row mt-4">
                <div className="col">
                    <img src="images/modal.svg" className="w-100" alt="..."/>
                </div>
            </div>
        </div>
    </section> */}
      {/* part 1 */}
      {/* {console.log("hello")} */}
      <section className="position-relative writing-assistant-boxl py-5">
        {/* <img src={typeof window !== 'undefined'?window.location.origin+'/images/bg-hero.svg':""} className='wrting-imgbg3'  style={{opacity: "0.08"}} /> */}
        <img
          src="images/bg-hero.svg"
          className="wrting-imgbg3"
          style={{ opacity: "0.08" }}
        />
        <div className="writing-assistant-triangle">
          <svg preserveAspectRatio="none" viewBox="0 0 100 100">
            <polygon points="100,100 100,0 0,100" opacity="1"></polygon>
          </svg>
        </div>
        <div className="container position-relative">
          <div className="row text-center">
            <div className="col pb-4">
              <h2 className="ff-reemkufi display-5 fw-medium maxw-1100 mx-auto">
                Access To The Best Models Always
              </h2>
              <div className="d-block pt-2 pt-sm-3">
                <span className="heading-liner"></span>
              </div>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col">
              {/* <img src={typeof window !== 'undefined'? window.location.origin +'/images/new-modal.svg':""} className="w-100" alt="..."  /> */}
              <img src="images/new-modal2.svg" className="w-100" alt="..." />
            </div>
          </div>
        </div>
      </section>

      {/* <section className='writing-assistant-box'>
        <div className="writing-assistant-triangle">
            <svg preserveAspectRatio="none" viewBox="0 0 100 100">
                <polygon points="100,100 100,0 0,100" opacity="1"></polygon>
            </svg>
        </div>
        <div className='position-relative pt-5 pb-2'>
            <img src='images/enterprice-left.svg' className='position-absolute z-0'/>
            <div className='container position-relative py-5'>
                <div className="row text-center text-white">
                    <div className="col">
                        <h2 className='ff-reemkufi display-5 fw-medium'>Vison for Enterprises</h2>
                        <h3 className='ff-reemkufi mt-3'>Enterprise level security for all</h3>
                        <div className='d-block pt-2 pt-sm-3'>
                            <span className='heading-liner'></span>
                        </div>
                    </div>
                </div>
                <div className="row row-cols-2 row-cols-md-4 g-4 mt-4">
                    <div className="col d-flex justify-content-center">
                        <div className="enterprice-boxes">
                            <img src="images/iso.png"/>
                        </div>
                    </div>
                    <div className="col d-flex justify-content-center">
                        <div className="enterprice-boxes">
                            <img src="images/soc.png"/>
                        </div>
                    </div>
                    <div className="col d-flex justify-content-center">
                        <div className="enterprice-boxes">
                            <img src="images/iso.png"/>
                        </div>
                    </div>
                    <div className="col d-flex justify-content-center">
                        <div className="enterprice-boxes">
                            <img src="images/soc.png"/>
                        </div>
                    </div>
                </div>
                <div className="row text-white">
                    <div className="col">
                        <p className='h4 fw-400 lh-md maxw-1100 mx-auto mt-5 py-sm-3 text-center'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ut nisi eu augue ultricies sagittis ut et lorem.  Etiam vulputate maximus risus, at volutpat turpis venenatis non. Duis mattis pretium ligula ut rhoncus. Suspendisse
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div className='container position-relative py-5 rd-br'>
            <img src='images/bg-wave.svg' className='started-imgbg'/>
            <div className="row text-center text-white position-relative">
                <div className="col">
                    <h5 className='ff-reemkufi fw-600 mb-4'>STARTED FOR CREATE AI</h5>
                    <h2 className='ff-reemkufi display-4 fw-medium'>Get Started For Free</h2>
                    <div className='d-block pt-2 pt-sm-3'>
                        <span className='heading-liner'></span>
                    </div>
                    <p className='h4 fw-400 lh-md maxw-1000 mx-auto my-3 py-sm-3 text-center'>
                        Either you are a soloprenuer, a marketer, a startup owner or a big enterprise, enhance your productivity and business processes with Vison.ai
                    </p>
                    <a href='#' className='btn btn-outline-light btn-lg btn-xl rounded-pill px-4 px-sm-5 minw-xl-240'>Start Free Trial</a>
                </div>
            </div>
        </div>
    </section> */}
      <section
        className="writing-assistant-boxl"
        style={{ background: "#F9F9F9" }}
      >
        {/* <div className="writing-assistant-triangle">
            <svg preserveAspectRatio="none" viewBox="0 0 100 100">
                <polygon points="100,100 100,0 0,100" opacity="1"></polygon>
            </svg>
        </div> */}
        <div className="position-relative pt-4 pb-2">
          <div className="container position-relative py-5">
            <div className="row text-center text-whitel">
              <div className="col">
                <h2 className="ff-reemkufi display-5 fw-medium">
                  Enterprise level security for all
                </h2>
                <h3 className="ff-reemkufi mt-3">
                  Vison.ai is not just another AI tool. We're a secure,
                  AI-native platform to <br />
                  solve your critical tasks.
                </h3>
                <div className="d-block pt-2 pt-sm-3">
                  <span className="heading-liner"></span>
                </div>
              </div>
            </div>
            <div className="row row-cols-2 row-cols-md-4 g-4 mt-4">
              <div className="col d-flex justify-content-center">
                <div className="enterprice-boxes">
                  <img src="images/iso.png" />
                </div>
              </div>
              <div className="col d-flex justify-content-center">
                <div className="enterprice-boxes">
                  <img src="images/soc.png" />
                </div>
              </div>
              <div className="col d-flex justify-content-center">
                <div className="enterprice-boxes">
                  <img src="images/gdpr.png" />
                </div>
              </div>
              <div className="col d-flex justify-content-center">
                <div className="enterprice-boxes">
                  <img src="images/iso2.svg" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* part 3 */}
      {/* <section className="py-5 my-2 position-relative writing-getstart-box text-white">
        <img src='images/bg-wave.svg' className='started-imgbg'/>
        <div className='container position-relative py-5'>
            <div className="row text-center position-relative">
                <div className="col">
                    <h5 className='ff-reemkufi fw-600 mb-4'>STARTED FOR CREATE AI</h5>
                    <h2 className='ff-reemkufi display-4 fw-medium'>Get Started For Free</h2>
                    <div className='d-block pt-2 pt-sm-3'>
                        <span className='heading-liner'></span>
                    </div>
                    <p className='h4 fw-400 lh-md maxw-1000 mx-auto my-3 py-sm-3 text-center'>
                        Either you are a soloprenuer, a marketer, a startup owner or a big enterprise, enhance your productivity and business processes with Vison.ai
                    </p>
                    <a href='#' className='btn btn-outline-light btn-lg btn-xl rounded-pill px-4 px-sm-5 minw-xl-240'>Start Free Trial</a>
                </div>
            </div>
        </div>
    </section> */}
      <section className="pt-5 mt-2 position-relative writing-getstart-box text-white">
        <div className="container position-relative py-5">
          <img src="images/round.svg" className="started-imgbg" />
          <div className="row text-center position-relative">
            <div className="col">
              <h2 className="ff-reemkufi display-4 fw-medium">
                See Vison.ai in Action
              </h2>
              <div className="d-block pt-2 pt-sm-3">
                <span className="heading-liner"></span>
              </div>
              <p className="h4 fw-400 lh-md maxw-1000 mx-auto my-3 py-sm-3 text-center">
                Either you are a soloprenuer, a marketer, a startup owner or a
                big enterprise, enhance your productivity and business processes
                with Vison.ai
              </p>
              <a
                href={process.env.NEXT_PUBLIC_USER_URL + "/signup"}
                target="_blank"
                className="btn btn-gradient btn-lg btn-xl rounded-pill px-4 px-sm-5 minw-xl-240"
              >
                Start Free Trial
              </a>
            </div>
          </div>
        </div>
        <img
          src="images/top-footer.png"
          className="w-100 footer-top"
          alt="footer"
        />
      </section>
      <Footer />
    </>
  );
}
