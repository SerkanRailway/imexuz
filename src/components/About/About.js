import React from "react";
import "./About.scss";
import Slider from "react-slick";
import { useTranslation } from "react-i18next";
import SEO from "../../SEO";
import AboutImg from "../../media/photo_2025-06-13_13-36-40.jpg";

const About = () => {
  const { t } = useTranslation();
  const card = [
    {
      id: 1,
      theme: 1,
      icon: <i className="bx bx-cut"></i>,
      title_uz: "To'qimachilik korxonalari",
      title_ru: "Текстильные предприятия",
    },
    {
      id: 2,
      theme: 2,
      icon: <i className="bx bx-package"></i>,
      title_uz: "Qog'oz ishlab chiqarih korxonalari",
      title_ru: "Предприятия по производству бумаги",
    },
    {
      id: 3,
      theme: 3,
      icon: <i className="bx bxs-city"></i>,
      title_uz: "Qurilish materiallari ishlab chiqarish korxonalari",
      title_ru: " Предприятия по производству строительных материалов",
    },
    {
      id: 4,
      theme: 1,
      icon: <i className="bx bx-cookie"></i>,
      title_uz: "Oziq-ovqat ishlab chiqarish korxonalari",
      title_ru: "Предприятия по производству пищевых продуктов",
    },
    {
      id: 5,
      theme: 2,
      icon: <i className="bx bxs-factory"></i>,
      title_uz: "Lojistik va metallurgiya ishlab chiqarish korxonalari",
      title_ru: "Предприятия по производству логистики и металлургии",
    },
    {
      id: 6,
      theme: 3,
      icon: <i className="bx bx-health"></i>,
      title_uz: "So'glik va soliq ishlab chiqarish korxonalari",
      title_ru: "Предприятия по производству медицинских изделий",
    },
    {
      id: 7,
      theme: 2,
      icon: <i className="bx bxs-cloud-lightning"></i>,
      title_uz: "Istalgan turdagi elektronik qurilmalarni ta'mirlash",
      title_ru: "Ремонт любых электронных устройств",
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
        <div className="category">{t("Biz haqimizda")}</div>
      </div>

      <div className="upper-about">
        <div className="left_side">
          <img src={AboutImg} alt="Nothing" />
        </div>
        <div className="right_side">
          <p className="text-about">
            {t(
              "IMEX UZ kompaniyasi — O‘zbekistonda va xalqaro bozorlarda faoliyat yuritayotgan, zamonaviy talab va ehtiyojlarga mos xizmatlarni taklif etuvchi ishonchli biznes hamkoringizdir. 2008-yildan buyon kompaniyamiz turli sohalarda faoliyat yuritib, o‘zining professionalligi, xizmatlar sifati va mijozlarga bo‘lgan individual yondashuvi bilan ajralib kelmoqda. Asosiy maqsadimiz — har bir mijozning ehtiyojini chuqur o‘rganib, unga eng optimal va natijaviy yechimni taqdim etishdir, IMEX UZ doimo sifat, ishonchlilik va zamonaviy yondashuv tamoyillariga sodiq qolgan holda ish olib boradi. Biz nafaqat xizmat ko‘rsatamiz, balki sizning biznesingizga baraka keltiradigan strategik yechimlarni taklif qilamiz. Jahon bozorlarida o‘z o‘rnini topmoqchi bo‘lgan har qanday kompaniya uchun IMEX UZ — bu tajriba, ishonch, sifat va yuksalishga yo‘l."
            )}
          </p>
        </div>
      </div>

      <div className="up">
        <div className="category">{t("Xizmat ko'rsatish sohalarimiz")}</div>
      </div>
      <Slider className={"custom-slider"} {...settings2}>
        {card.map((card) => (
          <div className={`card__bx card__${card.theme}`}>
            <div className="card__data">
              <div className="card__icon">
                <div className="card__icon-bx">{card.icon}</div>
              </div>
              <div className="card__content">
                <h3>
                  {localStorage.getItem("value") === "uz" ? (
                    <>{card.title_uz}</>
                  ) : (
                    <>{card.title_ru}</>
                  )}
                </h3>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default About;
