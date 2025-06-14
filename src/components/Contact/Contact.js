import React from "react";
import "./Contact.scss";
import { useTranslation } from "react-i18next";
import SEO from "../../SEO";

const Contact = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="up">
        <div className="category">{t("Aloqa")} </div>
      </div>
      <div className="contact">
        <SEO />
        <div className="left-side">
          <div className="coutry">
            <ul style={{ marginTop: 10 }}>
              <li style={{ display: "flex !important" }}>
                {" "}
                <span className="footer-icon">
                  <i
                    className="bx bxs-map"
                    style={{ marginRight: 5, color: "red" }}
                  ></i>
                </span>{" "}
                <a
                  target="_blank"
                  href="https://www.google.com/maps/place/68+%D0%9E%D0%B4%D0%B5%D0%B6%D0%B5%D0%BA/@41.2856364,69.2519099,17z/data=!3m1!4b1!4m6!3m5!1s0x38ae8aedad9b1311:0x720b58d864e12270!8m2!3d41.2856324!4d69.2544848!16s%2Fg%2F11bzz1nb9y?entry=ttu&g_ep=EgoyMDI1MDYxMC4xIKXMDSoASAFQAw%3D%3D"
                  rel="noreferrer"
                >
                  {t("Shota Rustavelli 53, O'zbekiston Toshkent")}
                </a>
              </li>
              <li style={{ display: "flex" }}>
                <div>
                  <li className="office">{t("Ofis menedjer")}</li>
                  <span className="footer-icon">
                    <i
                      className="bx bxs-phone"
                      style={{ marginRight: 10, color: "green" }}
                    ></i>
                  </span>
                  <a href="tel:+998 90 969 96 87">+998 (90) 969-96-87</a>
                  <br />
                  <span className="footer-icon">
                    <i
                      className="bx bxs-phone"
                      style={{ marginRight: 5, color: "green" }}
                    ></i>
                  </span>
                  <a href="tel:+998 93 497 96 87"> +998 (93) 497-96-87</a>{" "}
                  <br />
                </div>
              </li>
              
              <li style={{ display: "flex" }}>
                <div>
                  <i
                    className="bx bx-envelope display-flex"
                    style={{ marginRight: 5, color: "orange" }}
                  ></i>
                  <a href="mailto:imexuz1@hotmail.com"> imexuz1@hotmail.com</a>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="right-side">
          <iframe
            title="Google Map"
            className="yandex-map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2998.06763707649!2d69.2544848!3d41.28563239999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8aedad9b1311%3A0x720b58d864e12270!2zNjgg0J7QtNC10LbQtdC6!5e0!3m2!1sru!2s!4v1749802718689!5m2!1sru!2s"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default Contact;
