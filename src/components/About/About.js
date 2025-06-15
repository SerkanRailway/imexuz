import React from "react";
import "./About.scss";
import Slider from "react-slick";
import { useTranslation } from "react-i18next";
import SEO from "../../SEO";
import AboutImg from "../../media/photo_2025-06-13_13-36-40.jpg";

const About = () => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;

  const card = [
    {
      id: 1,
      theme: 1,
      icon: <i className="bx bx-cut"></i>,
      title: t("about.cards.1"),
    },
    {
      id: 2,
      theme: 2,
      icon: <i className="bx bx-package"></i>,
      title: t("about.cards.2"),
    },
    {
      id: 3,
      theme: 3,
      icon: <i className="bx bxs-city"></i>,
      title: t("about.cards.3"),
    },
    {
      id: 4,
      theme: 1,
      icon: <i className="bx bx-cookie"></i>,
      title: t("about.cards.4"),
    },
    {
      id: 5,
      theme: 2,
      icon: <i className="bx bxs-factory"></i>,
      title: t("about.cards.5"),
    },
    {
      id: 6,
      theme: 3,
      icon: <i className="bx bx-health"></i>,
      title: t("about.cards.6"),
    },
    {
      id: 7,
      theme: 2,
      icon: <i className="bx bxs-cloud-lightning"></i>,
      title: t("about.cards.7"),
    },
  ];

  const settings2 = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1189,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 914,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 566,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div>
      <SEO />
      <div className="up">
        <div className="category">{t("about.title")}</div>
      </div>

      <div className="upper-about">
        <div className="left_side">
          <img src={AboutImg} alt="IMEX UZ" />
        </div>
        <div className="right_side">
          <p className="text-about">{t("about.description")}</p>
        </div>
      </div>

      <div className="up">
        <div className="category">{t("about.servicesTitle")}</div>
      </div>

      <Slider className={"custom-slider"} {...settings2}>
        {card.map((card) => (
          <div className={`card__bx card__${card.theme}`} key={card.id}>
            <div className="card__data">
              <div className="card__icon">
                <div className="card__icon-bx">{card.icon}</div>
              </div>
              <div className="card__content">
                <h3>{card.title}</h3>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default About;
