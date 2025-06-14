import React from "react";
import { useTranslation } from "react-i18next";
import "./FoodPage.scss";
import foodImg from "../../media/food.jpg";

const FoodPage = () => {
  const { t } = useTranslation();

  return (
    <div className="food-page">
      <div className="banner">
        <img src={foodImg} alt={t("Oziq-ovqat")} />
        <div className="overlay">
          <h1>{t("Oziq-ovqat")}</h1>
          <p>{t("Sog‘lom, ekologik toza va mazali mahsulotlar bilan ta’minlaymiz.")}</p>
        </div>
      </div>

      <div className="content">
        <h2>{t("Nima uchun bizni tanlaysiz?")}</h2>
        <p>{t("Mahsulotlarimiz yuqori sifat standartlariga javob beradi va mahalliy hamda xalqaro bozorlarda talab yuqori.")}</p>

        <h2>{t("Bizning mahsulotlarimiz")}</h2>
        <ul>
          <li>{t("Organik meva va sabzavotlar")}</li>
          <li>{t("Konserva mahsulotlari")}</li>
          <li>{t("Go‘sht va parranda mahsulotlari")}</li>
          <li>{t("Sut mahsulotlari")}</li>
          <li>{t("Shirinliklar va un mahsulotlari")}</li>
        </ul>

        <h2>{t("Ishonchli yetkazib berish")}</h2>
        <p>{t("Biz mahsulotlarimizni sifatli saqlash va tez yetkazib berish orqali mijozlarimiz ishonchini qozonganmiz.")}</p>
      </div>
    </div>
  );
};

export default FoodPage;
