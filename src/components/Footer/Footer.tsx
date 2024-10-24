import React, { useState } from "react";
import funiro from "../../assets/funiro.png";
import classes from "./Footer.module.css";

function Footer() {
  const [email, setEmail] = useState<string>("");
  const [submitted, setSubmitted] = useState<boolean>(false);

  const subscribeToNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <div className={classes["footer-itens"]}>
        <div className={classes["location"]}>
          <a href="#">
            <img src={funiro} />
          </a>
          <p className={classes["map-location"]}>
            400 University Drive Suite 200 Coral Gables,
            <br /> FL 33134 USA
          </p>
        </div>

        <div className={classes["itens"]}>
          <div>
            <ul className={classes["menu-links"]}>
              <li className={classes["highlights"]}>Links</li>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Shop</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>

          <div className={classes["itens"]}>
            <ul className={classes["footer-links"]}>
              <li className={classes["highlights"]}>Help</li>
              <li>
                <a href="#">Payment Options</a>
              </li>
              <li>
                <a href="#">Returns</a>
              </li>
              <li>
                <a href="#">Privacy Policies</a>
              </li>
            </ul>
          </div>

          <div className={classes["itens-newsletter"]}>
            <div className={classes["newsletter"]}>
              <p className={classes["highlights"]}>Newsletter</p>
            </div>
            <div className={classes["newsletter-form"]}>
              {!submitted ? (
                <form
                  action=""
                  className={classes["form"]}
                  onSubmit={subscribeToNewsletter}
                >
                  <div className={classes["email"]}>
                    <input
                      className={classes["input-email"]}
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Enter Your Email Address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className={classes["subscribe"]}>
                    <button
                      type="submit"
                      className={classes["button-subscribe"]}
                    >
                      SUBSCRIBE
                    </button>
                  </div>
                </form>
              ) : (
                <span className={classes["thank-you-message"]}>
                  Thank you for subscribing to our Newsletter. We'll send you
                  news on {email}.
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
      <hr className={classes["divider"]} />
      <div className={classes["credits"]}>
        <p className={classes["credits-sentence"]}>
          2023 furino. All rights reserved
        </p>
      </div>
    </>
  );
}

export default Footer;
