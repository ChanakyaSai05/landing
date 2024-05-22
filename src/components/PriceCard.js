import React from "react";
import { Col, Container, Row } from "react-bootstrap";

function PriceCard({ subscriptionList, subscription_type }) {
  const getSubscriptionDetails = (plan) => {
    let find = subscriptionList?.find((item) => {
      return item.subscription_name === plan;
    });
    return find?.plandetails;
  };
  const getPriceDetails = (plan) => {
    let find = subscriptionList?.find((item) => {
      return item.subscription_name === plan;
    });
    let pricedetails = find?.pricedetails;
    return pricedetails?.find(
      (price) => price.subscription_type === subscription_type
    )?.price;
  };
  const getKeyValue = (key_value) => {
    if (key_value === "Y") {
      return "";
    } else if (key_value === "N") {
      return "No ";
    } else {
      return "";
    }
  };
  const checkKeyValueComingSoon = (subscriptionDetails) => {
    let check = subscriptionDetails?.filter((item) => {
      return item.key_value === "C";
    });
    if (check?.length > 0) {
      return (
        <ul className="mt-3">
          <strong>Coming Soon</strong>
          {check.map((plan, plan_index) => (
            <li key={plan_index}>
              <span>
                <svg className="icon">
                  <use href="#icon_grd_check"></use>
                </svg>
              </span>
              {plan?.description}
            </li>
          ))}
        </ul>
      );
    } else {
      return <></>;
    }
  };
  return (
    <>
      <Row className="row row-cols-1 row-cols-lg-3 card-boxes g-4 pb-4">
        <Col>
          <div class="card h-100">
            <div class="card-body">
              <h5 class="card-title">Free Forever</h5>
              <p class="card-text">
                For Individuals just starting with Vison.ai
              </p>
              <button
                type="button"
                className="my-4 btn-default"
                onClick={() => {
                  // need to open in a new window
                  window.open(
                    process.env.NEXT_PUBLIC_USER_URL + "/signup",
                    "_blank"
                  );
                }}
              >
                Start For Free
              </button>

              <ul>
                {getSubscriptionDetails("Freemium")?.filter((plan) => plan?.key_value !== "C")?.map((plan, plan_index) => (
                  <li key={plan_index}>
                    <span>
                      <svg className="icon">
                        <use href="#icon_grd_check"></use>
                      </svg>
                    </span>
                    {getKeyValue(plan?.key_value)}
                    {plan?.description}
                  </li>
                ))}
              </ul>
              {checkKeyValueComingSoon(getSubscriptionDetails("Freemium"))}
            </div>
          </div>
        </Col>
        <Col>
          <div class="card h-100">
            {/* <span className="lable-box text-uppercase">Most Popular</span> */}
            <div class="card-body">
              <h5 class="card-title">Lite</h5>
              <p class="card-text">Powerful AI features for small teams</p>

              <div className="rate-box">
                <span>
                  <svg className="icon fs-1">
                    <use href="#icon_doller"></use>
                  </svg>
                </span>
                <strong>
                  {subscription_type === "monthly" && (
                    <>
                      {getPriceDetails("Lite")} <sub>per month</sub>
                    </>
                  )}
                  {subscription_type === "quaterly" && (
                    <>
                      {(parseFloat(getPriceDetails("Lite")) / 3).toFixed(2)}{" "}
                      <sub>per month</sub>
                    </>
                  )}
                  {subscription_type === "yearly" && (
                    <>
                      {(parseFloat(getPriceDetails("Lite")) / 12).toFixed(2)}{" "}
                      <sub>per month</sub>
                    </>
                  )}
                </strong>
              </div>

              <div className="d-flex justify-content-center">
                <div className="badge-box">
                  <strong>Save</strong> 10% on quarterly, 25% on{" "}
                  <strong>yearly</strong>
                </div>
              </div>

              <button
                type="button"
                className="my-4 btn-default"
                onClick={() => {
                  // need to open in a new window
                  window.open(
                    process.env.NEXT_PUBLIC_USER_URL + "/signup",
                    "_blank"
                  );
                }}
              >
                Start For Free
              </button>

              <p className="fw-600 pb-2">Everything In Freemium, Plus</p>
              <ul>
                {getSubscriptionDetails("Lite")
                  ?.filter((plan) => plan?.key_value !== "C")
                  ?.map((plan, plan_index) => (
                    <>
                      <li key={plan_index}>
                        <span>
                          <svg className="icon">
                            <use href="#icon_grd_check"></use>
                          </svg>
                        </span>
                        {getKeyValue(plan?.key_value)}
                        {plan?.description}
                      </li>
                    </>
                  ))}
              </ul>
              {checkKeyValueComingSoon(getSubscriptionDetails("Lite"))}
            </div>
          </div>
        </Col>
        <Col>
          <div class="card h-100">
            <div class="card-body">
              <h5 class="card-title">Pro</h5>
              <p class="card-text">Advanced AI features to grow your brand</p>

              <div className="rate-box">
                <span>
                  <svg className="icon fs-1">
                    <use href="#icon_doller"></use>
                  </svg>
                </span>
                <strong>
                  {subscription_type === "monthly" && (
                    <>
                      {getPriceDetails("Pro")} <sub>per month</sub>
                    </>
                  )}
                  {subscription_type === "quaterly" && (
                    <>
                      {(parseFloat(getPriceDetails("Pro")) / 3).toFixed(2)}{" "}
                      <sub>per month</sub>
                    </>
                  )}
                  {subscription_type === "yearly" && (
                    <>
                      {(parseFloat(getPriceDetails("Pro")) / 12).toFixed(2)}{" "}
                      <sub>per month</sub>
                    </>
                  )}
                </strong>
              </div>

              <div className="d-flex justify-content-center">
                <div className="badge-box">
                  <strong>Save</strong> 10% on quarterly, 25% on{" "}
                  <strong>yearly</strong>
                </div>
              </div>

              <button
                type="button"
                className="my-4 btn-default"
                onClick={() => {
                  // need to open in a new window
                  window.open(
                    process.env.NEXT_PUBLIC_USER_URL + "/signup",
                    "_blank"
                  );
                }}
              >
                Start For Free
              </button>

              <p className="fw-600 pb-2">Everything In Lite, Plus</p>
              <ul>
                {getSubscriptionDetails("Pro")?.filter((plan) => plan?.key_value !== "C")?.map((plan, plan_index) => (
                  <li key={plan_index}>
                    <span>
                      <svg className="icon">
                        <use href="#icon_grd_check"></use>
                      </svg>
                    </span>
                    {getKeyValue(plan?.key_value)}
                    {plan?.description}
                  </li>
                ))}
              </ul>
              {checkKeyValueComingSoon(getSubscriptionDetails("Pro"))}
            </div>
          </div>
        </Col>
      </Row>
      {/* <Row className="row row-cols-1 row-cols-lg-3 card-boxes g-4 pb-4">
        <Col>
            <div class="card h-100">
                <div class="card-body">
                    <h5 class="card-title">Free Forever</h5>
                    <p class="card-text">
                        Lorem ipsum dolor sit amet, adipiscing elit sit amet. Lorem ipsum dolor sit
                    </p>
                    <button type="button" className="my-4 btn-default">Start For Free</button>

                    <ul>
                        <li>
                            <span>
                                <svg className="icon">
                                    <use href="#icon_grd_check"></use>
                                </svg>
                            </span>
                            1 seat
                        </li>
                        <li>
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
                        <li>
                            <span>
                                <svg className="icon">
                                    <use href="#icon_grd_check"></use>
                                </svg>
                            </span>
                            1000 words in chat
                        </li>
                        <li>
                            <span>
                                <svg className="icon">
                                    <use href="#icon_grd_check"></use>
                                </svg>
                            </span>
                            No add-ons
                        </li>
                        <li>
                            <span>
                                <svg className="icon">
                                    <use href="#icon_grd_check"></use>
                                </svg>
                            </span>
                            Basic ML model
                        </li>
                        <li>
                            <span>
                                <svg className="icon">
                                    <use href="#icon_grd_check"></use>
                                </svg>
                            </span>
                            Access to only Blog Templates
                        </li>
                    </ul>
                </div>
            </div>
        </Col>
        <Col>
            <div class="card h-100">
                <span className="lable-box">Most Popular</span>
                <div class="card-body">
                    <h5 class="card-title">Lite</h5>
                    <p class="card-text">
                        Lorem ipsum dolor sit amet, adipiscing elit sit amet. Lorem ipsum dolor sit
                    </p>

                    <div className="rate-box">
                        <span>
                            <svg className="icon fs-1">
                                <use href="#icon_doller"></use>
                            </svg>
                        </span>
                        <strong>19

                        <sub>per month</sub>
                        </strong>
                        

                    </div>

                    <div className="d-flex justify-content-center">
                        <div className="badge-box">
                            <strong>Save</strong> 10% on quarterly, 25% on <strong>yearly</strong>
                        </div>
                    </div>

                    <button type="button" className="my-4 btn-default">Start For Free</button>

                    <p className="fw-600 pb-2">Everything In Freemium, Plus</p>
                    <ul>
                        <li>
                            <span>
                                <svg className="icon">
                                    <use href="#icon_grd_check"></use>
                                </svg>
                            </span>
                            1 seat
                        </li>
                        <li>
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
                        <li>
                            <span>
                                <svg className="icon">
                                    <use href="#icon_grd_check"></use>
                                </svg>
                            </span>
                            1000 words in chat
                        </li>
                        <li>
                            <span>
                                <svg className="icon">
                                    <use href="#icon_grd_check"></use>
                                </svg>
                            </span>
                            No add-ons
                        </li>
                        <li>
                            <span>
                                <svg className="icon">
                                    <use href="#icon_grd_check"></use>
                                </svg>
                            </span>
                            Basic ML model
                        </li>
                        <li>
                            <span>
                                <svg className="icon">
                                    <use href="#icon_grd_check"></use>
                                </svg>
                            </span>
                            Access to only Blog Templates
                        </li>
                    </ul>
                </div>
            </div>
        </Col>
        <Col>
            <div class="card h-100">
                <div class="card-body">
                    <h5 class="card-title">Pro</h5>
                    <p class="card-text">
                        Lorem ipsum dolor sit amet, adipiscing elit sit amet. Lorem ipsum dolor sit
                    </p>

                    <div className="rate-box">
                        <span>
                            <svg className="icon fs-1">
                                <use href="#icon_doller"></use>
                            </svg>
                        </span>
                        <strong>
                            29
                            <sub>per month</sub>
                        </strong>
                        

                    </div>

                    <div className="d-flex justify-content-center">
                        <div className="badge-box">
                            <strong>Save</strong> 10% on quarterly, 25% on <strong>yearly</strong>
                        </div>
                    </div>

                    <button type="button" className="my-4 btn-default">Start For Free</button>

                    <p className="fw-600 pb-2">Everything In Lite, Plus</p>
                    <ul>
                        <li>
                            <span>
                                <svg className="icon">
                                    <use href="#icon_grd_check"></use>
                                </svg>
                            </span>
                            1 seat
                        </li>
                        <li>
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
                        <li>
                            <span>
                                <svg className="icon">
                                    <use href="#icon_grd_check"></use>
                                </svg>
                            </span>
                            1000 words in chat
                        </li>
                        <li>
                            <span>
                                <svg className="icon">
                                    <use href="#icon_grd_check"></use>
                                </svg>
                            </span>
                            No add-ons
                        </li>
                        <li>
                            <span>
                                <svg className="icon">
                                    <use href="#icon_grd_check"></use>
                                </svg>
                            </span>
                            Basic ML model
                        </li>
                        <li>
                            <span>
                                <svg className="icon">
                                    <use href="#icon_grd_check"></use>
                                </svg>
                            </span>
                            Access to only Blog Templates
                        </li>
                    </ul>
                </div>
            </div>
        </Col>
    </Row> */}
    </>
  );
}

export default PriceCard;
