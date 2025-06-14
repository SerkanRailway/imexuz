import React from "react";
import Logo from "../../media/ChatGPT_Image_13_июн._2025_г.__14_28_59-removebg-preview.png";
import "./Footer.scss";
import { useTranslation } from "react-i18next";
import SEO from "../../SEO";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <div className="footer">
      <SEO />
      <div className="container">
        <div className="upper_footer">
          <div className="left_side">
            <div className="footer_logo">
              <a href="/">
                <img src={Logo} alt="Logo" style={{ maxWidth: "120px", height: "auto" }} />
              </a>
              <h1 className="company_name">IMEX UZ</h1>
            </div>
            <div
              style={{ marginTop: 10 }}
              className="footer_company_description"
            >
              {t(
                "Biz sog‘liqni saqlash, turizm, qurilish, quritilgan mevalar, oziq-ovqat, logistika va konsalting sohalarida faoliyat yuritamiz. Har bir yo‘nalishda eng yangi texnologiyalar, tajribali mutaxassislar va halollik tamoyiliga asoslangan yondashuvimiz bilan mijozlarimizga ishonchli, sifatli va barqaror xizmatlar taqdim etamiz."
              )}
            </div>
            <div className="footer_company_social_media">
            
              <a
                target="_blank"
                href="https://www.instagram.com/imexuz1/?hl=tr"
              >
                <i className="bx bxl-instagram"></i>
              </a>
              
            </div>
          </div>
          <div className="right_side">
            <h1 style={{ marginTop: 40 }} className="company_name">
              {t("Aloqa")}
            </h1>

            <ul style={{ marginTop: 10 }}>
              <li>
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
                >
                  {t(
                    "Shota Rustavelli 53, O'zbekiston Toshkent"
                  )}
                </a>{" "}
              </li>
              <li style={{ display: "flex" }}>
                <div>
                  <span className="footer-icon">
                    <i
                      className="bx bxs-phone"
                      style={{ marginRight: 5, color: "green" }}
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
                  <a href="tel:+998 90 969 96 87">+998 (90) 969-96-87</a>

                </div>
              </li>
              <li>
                <span className="footer-icon">
                  <i
                    className="bx bx-envelope"
                    style={{ marginRight: 5, color: "orange" }}
                  ></i>
                </span>{" "}
                <a href="mailto:imexuz1@hotmail.com">
                  {" "}
                  imexuz1@hotmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="down_footer">
        <span>{t("Mualliflik huquqi")}</span> © 2023 SMART SOFTWARE
      </div>
    </div>
  );
};

export default Footer;
