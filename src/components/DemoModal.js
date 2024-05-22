import axios from "axios";
import React, { useState } from "react";
import { Container, Row, Col, Modal } from "react-bootstrap";

function DemoModal({ show, setShow }) {
  const [contactSales, setcontactSales] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    trial: "", //0 not trial, 1 trial
    remark: "",
  });
  const [message, setmessage] = useState("");
  const [loading, setloading] = useState(false);
  const handleChange = (e) => {
    const { id, value } = e.target;
    setcontactSales({ ...contactSales, [id]: value });
  };
  const contactSalesFn = async () => {
    setmessage("");
    setloading(true);
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
      console.log(error);
      setloading(false);
      setmessage(error?.response?.data?.message);
    }
  };
  return (
    <>
      <Modal
        show={show}
        onHide={() => setShow(false)}
        centered
        size="xl"
        // dialogClassName="modal-80w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton className="border-0"></Modal.Header>
        <Modal.Body>
          <h1 className="ff-reemkufi display-5 fw-600 text-center text-grd">
            Get A Demo Of Vison.ai
          </h1>
          <p className="text-center py-4">
            Get your personalized demo today to understand how you can use
            Vison.ai to expedite your marketing process.
          </p>

          <Row className="row row-cols-1 row-cols-md-3 g-4 gray-input">
            <Col className="">
              <div class="">
                <label for="fname" class="form-label">
                  First Name
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="first_name"
                  placeholder="Enter First Name"
                  value={contactSales.first_name}
                  onChange={handleChange}
                  required
                />
              </div>
            </Col>
            <Col className="">
              <div class="">
                <label for="lname" class="form-label">
                  Last Name
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="last_name"
                  placeholder="Enter Last Name"
                  value={contactSales.last_name}
                  onChange={handleChange}
                  required
                />
              </div>
            </Col>
            <Col className="">
              <div class="">
                <label for="email" class="form-label">
                  Email
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="email"
                  placeholder="Enter Email"
                  value={contactSales.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </Col>
          </Row>

          <Row className="row row-cols-1 row-cols-md-3 py-4">
            <Col></Col>
            <Col></Col>
            <Col>
              <button
                type="button"
                className="btn-default rounded-3"
                onClick={contactSalesFn}
              >
                Submit
              </button>
            </Col>
          </Row>
          {message?.length > 0 && (
            <Row className="row row-cols-1 row-cols-md-3 py-4">
              <Col></Col>
              <Col></Col>
              <Col>
                <div className="text-center text-success my-2 fs-3">
                  {message}
                </div>
              </Col>
            </Row>
          )}
        </Modal.Body>
      </Modal>
    </>
  );
}

export default DemoModal;
