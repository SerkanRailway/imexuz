import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom"; // ekle
import SEO from "../../SEO";
import "./MainPage.scss";
import healthImg from "../../media/healthh.jpg";
import tourismImg from "../../media/tourism.jpg";
import constructionImg from "../../media/construction.jpg";
import dryFruitImg from "../../media/dryfruit.jpg";
import foodImg from "../../media/food.jpg";
import logisticsImg from "../../media/logistics.jpg";
import consultingImg from "../../media/consulting.jpg";

const MainPage = () => {
  const { t } = useTranslation();

  const sectors = [
    {
      key: "salomatlik",
      title: t("SALOMATLIK"),
      description: t("Bizning sog‘liqni saqlash xizmatlarimiz bemorlar uchun eng yuqori sifatni kafolatlaydi."),
      image: healthImg,
    },
    {
      key: "turizm",
      title: t("TURIZM"),
      description: t("Dunyo bo‘ylab sayohatlar, mehmondo‘stlik va unutilmas tajribalar."),
      image: tourismImg,
    },
    {
      key: "qurilish",
      title: t("QURILISH"),
      description: t("Yuqori sifatli qurilish loyihalari va muhandislik yechimlari."),
      image: constructionImg,
    },
    {
      key: "quritilgan-mevalar",
      title: t("QURITILGAN MEVALAR"),
      description: t("Tabiiy va foydali quritilgan mahsulotlar eksporti va savdosi."),
      image: dryFruitImg,
    },
    {
      key: "oziq-ovqat",
      title: t("OZIQ-OVQAT"),
      description: t("Ekologik toza va sifatli oziq-ovqat mahsulotlari ishlab chiqarish."),
      image: foodImg,
    },
    {
      key: "logistics",
      title: t("LOJISTIKA"),
      description: t("Yuk tashish, bojxona va xalqaro logistika xizmatlari."),
      image: logisticsImg,
    },
    {
      key: "maslahat",
      title: t("MASLAHAT XIZMATLARI"),
      description: t("Biznes rivojlanishi uchun strategik maslahatlar va tahlillar."),
      image: consultingImg,
    },
  ];

  return (
    <div className="main-page">
      <SEO />
      <h1 className="main-title">{t("BIZNING YO'NALISHLAR")}</h1>
      <div className="sectors">
        {sectors.map((sector) => (
          <Link to={`/${sector.key}`} key={sector.key} className="sector-card">
            <img src={sector.image} alt={sector.title} />
            <h3>{sector.title}</h3>
            <p>{sector.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MainPage;
