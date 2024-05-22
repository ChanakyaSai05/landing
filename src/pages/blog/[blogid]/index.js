import Header from "@/components/Header";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";

function Blog_view() {
  return (
    <>
      <Header />
      <section className="blog-view">
        <Container className="d-flex justify-content-center py-5">
          <Row className="pb-4 g-5">
            <Col className="col-12 text-center col-lg-5">
              <div className="blog-imgfull">
                <img
                  src={
                    typeof window !== "undefined"
                      ? window.location.origin + "/images/mind.webp"
                      : ""
                  }
                  className="w-100"
                  alt="contact image"
                />
              </div>
            </Col>
            <Col className="col-12 text-center text-sm-start d-flex align-items-center col-lg-7">
              <div className="">
                <h1 className="ff-reemkufi display-4 fw-600 text-grd">
                  Lorem ipsum dolor sit amet, cons Morbi convallis
                </h1>

                <div className="d-flex align-items-center py-4">
                  <div className="blog-user-img">
                    <img
                      src={
                        typeof window !== "undefined"
                          ? window.location.origin + "/images/img2.png"
                          : ""
                      }
                    />
                  </div>
                  <div className="px-3 br-right fs-4 fw-700">
                    <span>Vineet Joshi</span>
                  </div>
                  <div className="px-3 fs-4 fw-700">
                    <span>30 March 2024</span>
                  </div>
                </div>

                <div className="social-icon d-flex pt-2">
                  <a href="#">
                    <div>
                      <svg className="icon fs-2">
                        <use href="#icon_fb"></use>
                      </svg>
                    </div>
                  </a>
                  <a href="#">
                    <div>
                      <svg className="icon fs-2">
                        <use href="#icon_twitter"></use>
                      </svg>
                    </div>
                  </a>
                  <a href="#">
                    <div>
                      <svg className="icon fs-2">
                        <use href="#icon_linkedin"></use>
                      </svg>
                    </div>
                  </a>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="bg-gray">
        <Container className="py-4 scroll-content">
          <div className="row">
            <div className="col-12 col-md-3">
              <nav
                id="navbar-example3"
                className="flex-column align-items-stretch pe-4 left-tabs"
              >
                <nav className="nav nav-pills flex-column">
                  <a
                    className="nav-link d-flex align-items-center"
                    href="#item-1"
                  >
                    <svg className="icon fs-3">
                      <use href="#icon_tab_arrow"></use>
                    </svg>
                    Item 1
                  </a>
                  <a
                    className="nav-link d-flex align-items-center"
                    href="#item-2"
                  >
                    <svg className="icon fs-3">
                      <use href="#icon_tab_arrow"></use>
                    </svg>
                    Item 2
                  </a>
                  <a
                    className="nav-link d-flex align-items-center"
                    href="#item-3"
                  >
                    <svg className="icon fs-3">
                      <use href="#icon_tab_arrow"></use>
                    </svg>
                    Item 3
                  </a>
                </nav>
              </nav>
            </div>

            <div className="col-12 col-md-9">
              <div
                data-bs-spy="scroll"
                data-bs-target="#navbar-example3"
                data-bs-smooth-scroll="true"
                className="scrollspy-example-2"
                tabindex="0"
              >
                <div id="item-1" className="mb-4">
                  <h4>Item 1</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    elementum mollis est, viverra rutrum nisl vehicula sed.
                    Pellentesque habitant morbi tristique senectus et netus et
                    malesuada fames ac turpis egestas. Aliquam vitae leo arcu.
                    Nam quis lectus gravida, posuere eros vitae, fermentum
                    mauris. Sed tincidunt metus quis ex porttitor, id semper
                    augue suscipit. Phasellus posuere cursus nisl tincidunt
                    sollicitudin. Sed porttitor efficitur lectus non varius.
                    Nulla iaculis justo eu dapibus venenatis. Etiam vitae libero
                    purus. Nulla facilisi. Ut enim magna, malesuada a quam eu,
                    pretium pulvinar mi. Sed quis quam risus. Praesent ultrices
                    egestas placerat. Ut leo odio, dignissim a tellus id,
                    gravida dictum tortor. Integer eget mauris ex.Lorem ipsum
                    dolor sit amet, consectetur adipiscing elit. Sed elementum
                    mollis est, viverra rutrum nisl vehicula sed. Pellentesque
                    habitant morbi tristique senectus et netus et malesuada
                    fames ac turpis egestas. Aliquam vitae leo arcu. Nam quis
                    lectus gravida, posuere eros vitae, fermentum mauris. Sed
                    tincidunt metus quis ex porttitor, id semper augue suscipit.
                    Phasellus posuere cursus nisl tincidunt sollicitudin. Sed
                    porttitor efficitur lectus non varius. Nulla iaculis justo
                    eu dapibus venenatis. Etiam vitae libero purus. Nulla
                    facilisi. Ut enim magna, malesuada a quam eu, pretium
                    pulvinar mi. Sed quis quam risus. Praesent ultrices egestas
                    placerat. Ut leo odio, dignissim a tellus id, gravida dictum
                    tortor. Integer eget mauris ex.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    elementum mollis est, viverra rutrum nisl vehicula sed.
                    Pellentesque habitant morbi tristique senectus et netus et
                    malesuada fames ac turpis egestas. Aliquam vitae leo arcu.
                    Nam quis lectus gravida, posuere eros vitae, fermentum
                    mauris. Sed tincidunt metus quis ex porttitor, id semper
                    augue suscipit. Phasellus posuere cursus nisl tincidunt
                    sollicitudin. Sed porttitor efficitur lectus non varius.
                    Nulla iaculis justo eu dapibus venenatis. Etiam vitae libero
                    purus. Nulla facilisi. Ut enim magna, malesuada a quam eu,
                    pretium pulvinar mi. Sed quis quam risus. Praesent ultrices
                    egestas placerat. Ut leo odio, dignissim a tellus id,
                    gravida dictum tortor. Integer eget mauris ex.Lorem ipsum
                    dolor sit amet, consectetur adipiscing elit. Sed elementum
                    mollis est, viverra rutrum nisl vehicula sed. Pellentesque
                    habitant morbi tristique senectus et netus et malesuada
                    fames ac turpis egestas. Aliquam vitae leo arcu. Nam quis
                    lectus gravida, posuere eros vitae, fermentum mauris. Sed
                    tincidunt metus quis ex porttitor, id semper augue suscipit.
                    Phasellus posuere cursus nisl tincidunt sollicitudin. Sed
                    porttitor efficitur lectus non varius. Nulla iaculis justo
                    eu dapibus venenatis. Etiam vitae libero purus. Nulla
                    facilisi. Ut enim magna, malesuada a quam eu, pretium
                    pulvinar mi. Sed quis quam risus. Praesent ultrices egestas
                    placerat. Ut leo odio, dignissim a tellus id, gravida dictum
                    tortor. Integer eget mauris ex.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    elementum mollis est, viverra rutrum nisl vehicula sed.
                    Pellentesque habitant morbi tristique senectus et netus et
                    malesuada fames ac turpis egestas. Aliquam vitae leo arcu.
                    Nam quis lectus gravida, posuere eros vitae, fermentum
                    mauris. Sed tincidunt metus quis ex porttitor, id semper
                    augue suscipit. Phasellus posuere cursus nisl tincidunt
                    sollicitudin. Sed porttitor efficitur lectus non varius.
                    Nulla iaculis justo eu dapibus venenatis. Etiam vitae libero
                    purus. Nulla facilisi. Ut enim magna, malesuada a quam eu,
                    pretium pulvinar mi. Sed quis quam risus. Praesent ultrices
                    egestas placerat. Ut leo odio, dignissim a tellus id,
                    gravida dictum tortor. Integer eget mauris ex.Lorem ipsum
                    dolor sit amet, consectetur adipiscing elit. Sed elementum
                    mollis est, viverra rutrum nisl vehicula sed. Pellentesque
                    habitant morbi tristique senectus et netus et malesuada
                    fames ac turpis egestas. Aliquam vitae leo arcu. Nam quis
                    lectus gravida, posuere eros vitae, fermentum mauris. Sed
                    tincidunt metus quis ex porttitor, id semper augue suscipit.
                    Phasellus posuere cursus nisl tincidunt sollicitudin. Sed
                    porttitor efficitur lectus non varius. Nulla iaculis justo
                    eu dapibus venenatis. Etiam vitae libero purus. Nulla
                    facilisi. Ut enim magna, malesuada a quam eu, pretium
                    pulvinar mi. Sed quis quam risus. Praesent ultrices egestas
                    placerat. Ut leo odio, dignissim a tellus id, gravida dictum
                    tortor. Integer eget mauris ex.
                  </p>
                </div>
                <div id="item-2" className="mb-4">
                  <h4>Item 2</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    elementum mollis est, viverra rutrum nisl vehicula sed.
                    Pellentesque habitant morbi tristique senectus et netus et
                    malesuada fames ac turpis egestas. Aliquam vitae leo arcu.
                    Nam quis lectus gravida, posuere eros vitae, fermentum
                    mauris. Sed tincidunt metus quis ex porttitor, id semper
                    augue suscipit. Phasellus posuere cursus nisl tincidunt
                    sollicitudin. Sed porttitor efficitur lectus non varius.
                    Nulla iaculis justo eu dapibus venenatis. Etiam vitae libero
                    purus. Nulla facilisi. Ut enim magna, malesuada a quam eu,
                    pretium pulvinar mi. Sed quis quam risus. Praesent ultrices
                    egestas placerat. Ut leo odio, dignissim a tellus id,
                    gravida dictum tortor. Integer eget mauris ex.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    elementum mollis est, viverra rutrum nisl vehicula sed.
                    Pellentesque habitant morbi tristique senectus et netus et
                    malesuada fames ac turpis egestas. Aliquam vitae leo arcu.
                    Nam quis lectus gravida, posuere eros vitae, fermentum
                    mauris. Sed tincidunt metus quis ex porttitor, id semper
                    augue suscipit. Phasellus posuere cursus nisl tincidunt
                    sollicitudin. Sed porttitor efficitur lectus non varius.
                    Nulla iaculis justo eu dapibus venenatis. Etiam vitae libero
                    purus. Nulla facilisi. Ut enim magna, malesuada a quam eu,
                    pretium pulvinar mi. Sed quis quam risus. Praesent ultrices
                    egestas placerat. Ut leo odio, dignissim a tellus id,
                    gravida dictum tortor. Integer eget mauris ex.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    elementum mollis est, viverra rutrum nisl vehicula sed.
                    Pellentesque habitant morbi tristique senectus et netus et
                    malesuada fames ac turpis egestas. Aliquam vitae leo arcu.
                    Nam quis lectus gravida, posuere eros vitae, fermentum
                    mauris. Sed tincidunt metus quis ex porttitor, id semper
                    augue suscipit. Phasellus posuere cursus nisl tincidunt
                    sollicitudin. Sed porttitor efficitur lectus non varius.
                    Nulla iaculis justo eu dapibus venenatis. Etiam vitae libero
                    purus. Nulla facilisi. Ut enim magna, malesuada a quam eu,
                    pretium pulvinar mi. Sed quis quam risus. Praesent ultrices
                    egestas placerat. Ut leo odio, dignissim a tellus id,
                    gravida dictum tortor. Integer eget mauris ex.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    elementum mollis est, viverra rutrum nisl vehicula sed.
                    Pellentesque habitant morbi tristique senectus et netus et
                    malesuada fames ac turpis egestas. Aliquam vitae leo arcu.
                    Nam quis lectus gravida, posuere eros vitae, fermentum
                    mauris. Sed tincidunt metus quis ex porttitor, id semper
                    augue suscipit. Phasellus posuere cursus nisl tincidunt
                    sollicitudin. Sed porttitor efficitur lectus non varius.
                    Nulla iaculis justo eu dapibus venenatis. Etiam vitae libero
                    purus. Nulla facilisi. Ut enim magna, malesuada a quam eu,
                    pretium pulvinar mi. Sed quis quam risus. Praesent ultrices
                    egestas placerat. Ut leo odio, dignissim a tellus id,
                    gravida dictum tortor. Integer eget mauris ex.
                  </p>
                </div>
                <div id="item-3" className="mb-4">
                  <h4>Item 3</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    elementum mollis est, viverra rutrum nisl vehicula sed.
                    Pellentesque habitant morbi tristique senectus et netus et
                    malesuada fames ac turpis egestas. Aliquam vitae leo arcu.
                    Nam quis lectus gravida, posuere eros vitae, fermentum
                    mauris. Sed tincidunt metus quis ex porttitor, id semper
                    augue suscipit. Phasellus posuere cursus nisl tincidunt
                    sollicitudin. Sed porttitor efficitur lectus non varius.
                    Nulla iaculis justo eu dapibus venenatis. Etiam vitae libero
                    purus. Nulla facilisi. Ut enim magna, malesuada a quam eu,
                    pretium pulvinar mi. Sed quis quam risus. Praesent ultrices
                    egestas placerat. Ut leo odio, dignissim a tellus id,
                    gravida dictum tortor. Integer eget mauris ex.Lorem ipsum
                    dolor sit amet, consectetur adipiscing elit. Sed elementum
                    mollis est, viverra rutrum nisl vehicula sed. Pellentesque
                    habitant morbi tristique senectus et netus et malesuada
                    fames ac turpis egestas. Aliquam vitae leo arcu. Nam quis
                    lectus gravida, posuere eros vitae, fermentum mauris. Sed
                    tincidunt metus quis ex porttitor, id semper augue suscipit.
                    Phasellus posuere cursus nisl tincidunt sollicitudin. Sed
                    porttitor efficitur lectus non varius. Nulla iaculis justo
                    eu dapibus venenatis. Etiam vitae libero purus. Nulla
                    facilisi. Ut enim magna, malesuada a quam eu, pretium
                    pulvinar mi. Sed quis quam risus. Praesent ultrices egestas
                    placerat. Ut leo odio, dignissim a tellus id, gravida dictum
                    tortor. Integer eget mauris ex.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    elementum mollis est, viverra rutrum nisl vehicula sed.
                    Pellentesque habitant morbi tristique senectus et netus et
                    malesuada fames ac turpis egestas. Aliquam vitae leo arcu.
                    Nam quis lectus gravida, posuere eros vitae, fermentum
                    mauris. Sed tincidunt metus quis ex porttitor, id semper
                    augue suscipit. Phasellus posuere cursus nisl tincidunt
                    sollicitudin. Sed porttitor efficitur lectus non varius.
                    Nulla iaculis justo eu dapibus venenatis. Etiam vitae libero
                    purus. Nulla facilisi. Ut enim magna, malesuada a quam eu,
                    pretium pulvinar mi. Sed quis quam risus. Praesent ultrices
                    egestas placerat. Ut leo odio, dignissim a tellus id,
                    gravida dictum tortor. Integer eget mauris ex.Lorem ipsum
                    dolor sit amet, consectetur adipiscing elit. Sed elementum
                    mollis est, viverra rutrum nisl vehicula sed. Pellentesque
                    habitant morbi tristique senectus et netus et malesuada
                    fames ac turpis egestas. Aliquam vitae leo arcu. Nam quis
                    lectus gravida, posuere eros vitae, fermentum mauris. Sed
                    tincidunt metus quis ex porttitor, id semper augue suscipit.
                    Phasellus posuere cursus nisl tincidunt sollicitudin. Sed
                    porttitor efficitur lectus non varius. Nulla iaculis justo
                    eu dapibus venenatis. Etiam vitae libero purus. Nulla
                    facilisi. Ut enim magna, malesuada a quam eu, pretium
                    pulvinar mi. Sed quis quam risus. Praesent ultrices egestas
                    placerat. Ut leo odio, dignissim a tellus id, gravida dictum
                    tortor. Integer eget mauris ex.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    elementum mollis est, viverra rutrum nisl vehicula sed.
                    Pellentesque habitant morbi tristique senectus et netus et
                    malesuada fames ac turpis egestas. Aliquam vitae leo arcu.
                    Nam quis lectus gravida, posuere eros vitae, fermentum
                    mauris. Sed tincidunt metus quis ex porttitor, id semper
                    augue suscipit. Phasellus posuere cursus nisl tincidunt
                    sollicitudin. Sed porttitor efficitur lectus non varius.
                    Nulla iaculis justo eu dapibus venenatis. Etiam vitae libero
                    purus. Nulla facilisi. Ut enim magna, malesuada a quam eu,
                    pretium pulvinar mi. Sed quis quam risus. Praesent ultrices
                    egestas placerat. Ut leo odio, dignissim a tellus id,
                    gravida dictum tortor. Integer eget mauris ex.Lorem ipsum
                    dolor sit amet, consectetur adipiscing elit. Sed elementum
                    mollis est, viverra rutrum nisl vehicula sed. Pellentesque
                    habitant morbi tristique senectus et netus et malesuada
                    fames ac turpis egestas. Aliquam vitae leo arcu. Nam quis
                    lectus gravida, posuere eros vitae, fermentum mauris. Sed
                    tincidunt metus quis ex porttitor, id semper augue suscipit.
                    Phasellus posuere cursus nisl tincidunt sollicitudin. Sed
                    porttitor efficitur lectus non varius. Nulla iaculis justo
                    eu dapibus venenatis. Etiam vitae libero purus. Nulla
                    facilisi. Ut enim magna, malesuada a quam eu, pretium
                    pulvinar mi. Sed quis quam risus. Praesent ultrices egestas
                    placerat. Ut leo odio, dignissim a tellus id, gravida dictum
                    tortor. Integer eget mauris ex.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="subscribe">
        <Container style={{ marginBottom: "-10px" }}>
          <Row>
            <Col className="col-12 d-flex justify-content-center">
              <img
                src={
                  typeof window !== "undefined"
                    ? window.location.origin + "/images/mail.png"
                    : ""
                }
                className="w-100 pt-3"
                style={{ maxWidth: "320px" }}
                alt="subscribe"
              />
            </Col>
          </Row>
        </Container>
        <div className="grd-bg">
          <Container>
            <Row>
              <Col className="col-12 text-center py-4">
                <h2 className="text-white py-4">
                  Subscribe now. We’ll make sure you never miss a thing
                </h2>

                <div className="d-flex justify-content-center pb-2">
                  <input
                    type="email"
                    className="form-control w-auto"
                    placeholder="Enter Email"
                  />
                  <button
                    type="button"
                    className="subscribe-btn px-4 ms-4 fw-700"
                  >
                    Subscribe
                  </button>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </section>

      <Container>
        <Row className="g-4 py-5">
          <Col className="col-12 col-md-7 text-center text-sm-start">
            <h1 className="display-6 fw-600">Related Posts</h1>
          </Col>
        </Row>

        <Row className="row row-cols-1 row-cols-md-3 card-view g-4">
          <Col>
            <div className="card">
              <img
                src={
                  typeof window !== "undefined"
                    ? window.location.origin + "/images/blog6.png"
                    : ""
                }
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">
                  Lorem ipsum dolor sit amet, consect adipiscing elit.
                </h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" class="stretched-link"></a>

                <div className="d-flex align-items-center mt-4">
                  <div className="d-flex align-items-center">
                    <div className="view-user-img">
                      <img
                        src={
                          typeof window !== "undefined"
                            ? window.location.origin + "/images/img2.png"
                            : ""
                        }
                      />
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
                src={
                  typeof window !== "undefined"
                    ? window.location.origin + "/images/blog7.png"
                    : ""
                }
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">
                  Lorem ipsum dolor sit amet, consect adipiscing elit.
                </h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" class="stretched-link"></a>

                <div className="d-flex align-items-center mt-4">
                  <div className="d-flex align-items-center">
                    <div className="view-user-img">
                      <img
                        src={
                          typeof window !== "undefined"
                            ? window.location.origin + "/images/img2.png"
                            : ""
                        }
                      />
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
                src={
                  typeof window !== "undefined"
                    ? window.location.origin + "/images/blog8.png"
                    : ""
                }
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">
                  Lorem ipsum dolor sit amet, consect adipiscing elit.
                </h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" class="stretched-link"></a>

                <div className="d-flex align-items-center mt-4">
                  <div className="d-flex align-items-center">
                    <div className="view-user-img">
                      <img
                        src={
                          typeof window !== "undefined"
                            ? window.location.origin + "/images/img2.png"
                            : ""
                        }
                      />
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
                src={
                  typeof window !== "undefined"
                    ? window.location.origin + "/images/blog9.png"
                    : ""
                }
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">
                  Lorem ipsum dolor sit amet, consect adipiscing elit.
                </h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" class="stretched-link"></a>

                <div className="d-flex align-items-center mt-4">
                  <div className="d-flex align-items-center">
                    <div className="view-user-img">
                      <img
                        src={
                          typeof window !== "undefined"
                            ? window.location.origin + "/images/img2.png"
                            : ""
                        }
                      />
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
                src={
                  typeof window !== "undefined"
                    ? window.location.origin + "/images/blog10.png"
                    : ""
                }
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">
                  Lorem ipsum dolor sit amet, consect adipiscing elit.
                </h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" class="stretched-link"></a>

                <div className="d-flex align-items-center mt-4">
                  <div className="d-flex align-items-center">
                    <div className="view-user-img">
                      <img
                        src={
                          typeof window !== "undefined"
                            ? window.location.origin + "/images/img2.png"
                            : ""
                        }
                      />
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
                src={
                  typeof window !== "undefined"
                    ? window.location.origin + "/images/blog11.png"
                    : ""
                }
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">
                  Lorem ipsum dolor sit amet, consect adipiscing elit.
                </h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" class="stretched-link"></a>

                <div className="d-flex align-items-center mt-4">
                  <div className="d-flex align-items-center">
                    <div className="view-user-img">
                      <img
                        src={
                          typeof window !== "undefined"
                            ? window.location.origin + "/images/img2.png"
                            : ""
                        }
                      />
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
    </>
  );
}

export default Blog_view;
