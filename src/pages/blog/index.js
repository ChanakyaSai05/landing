import React, { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

function Blog() {
  const [blogs, setblogs] = useState([]);
  const getBlogs = async () => {
    try {
      let response = await axios({
        url: `${process.env.NEXT_PUBLIC_USER_URL}/graphql`,
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          jwt_token: localStorage.getItem("login_token"),
        },
        data: {
          query: `
            getblogs{
                id,
                adm_user_id,
                blog_title,
                blog_content,
                blog_image,
                status,
                category{
                    blog_cat_id,
                    cat_name,
                    cat_icon
                }
            } 
              `,
        },
      });
      console.log(response, "response graph ql");

      // Handle response here
      setblogs();
    } catch (error) {
      // Handle error here
    }
  };
  useEffect(() => {
    getBlogs();
  }, []);
  return (
    <>
      <Header />

      <section className="blog-hero">
        <Container className="d-flex justify-content-center">
          <Row className="pb-4 g-5 d-flex justify-content-center">
            <Col className="col-12 text-center d-flex align-items-center col-lg-7">
              <div className="">
                <h1 className="ff-reemkufi display-4 fw-600 text-grd">
                  Welcome To Our Blogs
                </h1>
                <p className="fs-5p2 fw-400 pt-3 pb-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  est ex, pretium at erat ac tincidunt fringilla lectus. Duis
                  quis elementum justo.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <Container className="pb-5">
        <Row>
          <Col className="text-center py-5">
            <h1 className="ff-reemkufi display-4 fw-600">Featured Posts</h1>
          </Col>
        </Row>
        <Row className="g-4">
          <Col className="col-12 col-md-3 card-normal-view">
            <div class="card">
              <img src="images/blog1.png" class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">
                  Lorem ipsum dolor sit amet, consect adipiscing elit.
                </h5>
                <a href="#" class="stretched-link"></a>
              </div>
            </div>

            <hr />

            <div class="card">
              <img src="images/blog2.png" class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">
                  Lorem ipsum dolor sit amet, consect adipiscing elit.
                </h5>
                <a href="#" class="stretched-link"></a>
              </div>
            </div>
          </Col>
          <Col className="col-12 col-md-6 card-view">
            <div className="card">
              <img src="images/blog-3.png" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">
                  Lorem ipsum dolor sit amet, consect adipiscing elit.
                </h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <Link href="/blog/blog-view" className="stretched-link"></Link>

                <div className="d-flex align-items-center mt-4">
                  <div className="d-flex align-items-center">
                    <div className="view-user-img">
                      <img src="images/img2.png" />
                    </div>
                    <div className="px-2 br-right">
                      <span>Vineet Joshi</span>
                    </div>
                    <div className="px-2">
                      <span>29 March 2024</span>
                    </div>
                  </div>
                  <div className="ms-auto">
                    <svg className="icon display-5">
                      <use href="#icon_cr_arrow"></use>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col className="col-12 col-md-3 right-img">
            <div class="card">
              <img src="images/blog1.png" class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Lorem ipsum dolor sit amet.</h5>
                <a href="#" class="stretched-link"></a>
              </div>
            </div>

            <hr />

            <div class="card">
              <img src="images/blog4.png" class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Lorem ipsum dolor sit amet.</h5>
                <a href="#" class="stretched-link"></a>
              </div>
            </div>

            <hr />

            <div class="card">
              <img src="images/blog5.png" class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Lorem ipsum dolor sit amet.</h5>
                <a href="#" class="stretched-link"></a>
              </div>
            </div>

            <hr />

            <div class="card">
              <img src="images/blog1.png" class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Lorem ipsum dolor sit amet.</h5>
                <a href="#" class="stretched-link"></a>
              </div>
            </div>
          </Col>
        </Row>
      </Container>

      <section className="bg-gray py-5">
        <Container>
          <Row className="g-4 pb-4">
            <Col className="col-12 col-md-7 text-center text-sm-start">
              <h1 className="ff-reemkufi display-4 fw-600">Recent Post</h1>
            </Col>
            <Col className="col-12 col-md-5">
              <div className="search-box">
                <form>
                  <svg className="icon fs-5">
                    <use href="#icon_search"></use>
                  </svg>
                  <input type="search" placeholder="Search" className="" />
                  <button type="button" className="rounded-pill">
                    Search
                  </button>
                </form>
              </div>
            </Col>
          </Row>

          <Row className="row row-cols-1 row-cols-md-2 card-view g-4">
            <Col>
              <div className="card">
                <img
                  src="images/blog6.png"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">
                    Lorem ipsum dolor sit amet, consect adipiscing elit.
                  </h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a href="#" class="stretched-link"></a>

                  <div className="d-flex align-items-center mt-4">
                    <div className="d-flex align-items-center">
                      <div className="view-user-img">
                        <img src="images/img2.png" />
                      </div>
                      <div className="px-2 br-right">
                        <span>Vineet Joshi</span>
                      </div>
                      <div className="px-2">
                        <span>29 March 2024</span>
                      </div>
                    </div>
                    <div className="ms-auto">
                      <svg className="icon display-5">
                        <use href="#icon_cr_arrow"></use>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col>
              <div className="card">
                <img
                  src="images/blog7.png"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">
                    Lorem ipsum dolor sit amet, consect adipiscing elit.
                  </h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a href="#" class="stretched-link"></a>

                  <div className="d-flex align-items-center mt-4">
                    <div className="d-flex align-items-center">
                      <div className="view-user-img">
                        <img src="images/img2.png" />
                      </div>
                      <div className="px-2 br-right">
                        <span>Vineet Joshi</span>
                      </div>
                      <div className="px-2">
                        <span>29 March 2024</span>
                      </div>
                    </div>
                    <div className="ms-auto">
                      <svg className="icon display-5">
                        <use href="#icon_cr_arrow"></use>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </Col>

            <Col>
              <div className="card">
                <img
                  src="images/blog8.png"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">
                    Lorem ipsum dolor sit amet, consect adipiscing elit.
                  </h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a href="#" class="stretched-link"></a>

                  <div className="d-flex align-items-center mt-4">
                    <div className="d-flex align-items-center">
                      <div className="view-user-img">
                        <img src="images/img2.png" />
                      </div>
                      <div className="px-2 br-right">
                        <span>Vineet Joshi</span>
                      </div>
                      <div className="px-2">
                        <span>29 March 2024</span>
                      </div>
                    </div>
                    <div className="ms-auto">
                      <svg className="icon display-5">
                        <use href="#icon_cr_arrow"></use>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col>
              <div className="card">
                <img
                  src="images/blog9.png"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">
                    Lorem ipsum dolor sit amet, consect adipiscing elit.
                  </h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a href="#" class="stretched-link"></a>

                  <div className="d-flex align-items-center mt-4">
                    <div className="d-flex align-items-center">
                      <div className="view-user-img">
                        <img src="images/img2.png" />
                      </div>
                      <div className="px-2 br-right">
                        <span>Vineet Joshi</span>
                      </div>
                      <div className="px-2">
                        <span>29 March 2024</span>
                      </div>
                    </div>
                    <div className="ms-auto">
                      <svg className="icon display-5">
                        <use href="#icon_cr_arrow"></use>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </Col>

            <Col>
              <div className="card">
                <img
                  src="images/blog10.png"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">
                    Lorem ipsum dolor sit amet, consect adipiscing elit.
                  </h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a href="#" class="stretched-link"></a>

                  <div className="d-flex align-items-center mt-4">
                    <div className="d-flex align-items-center">
                      <div className="view-user-img">
                        <img src="images/img2.png" />
                      </div>
                      <div className="px-2 br-right">
                        <span>Vineet Joshi</span>
                      </div>
                      <div className="px-2">
                        <span>29 March 2024</span>
                      </div>
                    </div>
                    <div className="ms-auto">
                      <svg className="icon display-5">
                        <use href="#icon_cr_arrow"></use>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col>
              <div className="card">
                <img
                  src="images/blog11.png"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">
                    Lorem ipsum dolor sit amet, consect adipiscing elit.
                  </h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a href="#" class="stretched-link"></a>

                  <div className="d-flex align-items-center mt-4">
                    <div className="d-flex align-items-center">
                      <div className="view-user-img">
                        <img src="images/img2.png" />
                      </div>
                      <div className="px-2 br-right">
                        <span>Vineet Joshi</span>
                      </div>
                      <div className="px-2">
                        <span>29 March 2024</span>
                      </div>
                    </div>
                    <div className="ms-auto">
                      <svg className="icon display-5">
                        <use href="#icon_cr_arrow"></use>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
        <Row>
          <Col className=" col-12 text-center pt-5">
              <button type="button" className="btn try rounded-pill px-4">
                Show More
              </button>
          </Col>
        </Row>
      </section>

      <section className="blog-vision-today">
        <Container className="d-flex justify-content-center">
          <Row className="pb-4 d-flex justify-content-center">
            <Col className="col-12 text-center col-lg-8">
              <h1 className="ff-reemkufi display-5 fw-600 pb-3">
                Get Started With Vison Today!
              </h1>
              <p className="fs-5 fw-400 pt-2 pb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed est
                ex, pretium at erat ac, tincidunt fringilla lectus. Duis quis
                elementum justo.
              </p>
              <Row className="d-flex justify-content-center">
                <Col className="col-12 text-center col-lg-8">
                  <div className="d-flex gap-4">
                    <button type="button" className="">
                      Try For Free
                    </button>
                    <button type="button" className="">
                      Get A Demo
                    </button>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>

      <Footer />
    </>
  );
}

export default Blog;
