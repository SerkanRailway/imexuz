import React from "react";
import "./ServicePage.scss";
import adviceImg from "../../media/consulting.jpg";
import { useTranslation } from "react-i18next";

const ServicePage = () => {
  const { t } = useTranslation();

  return (
    <div className="advice-page">
      <div className="banner">
        <img src={adviceImg} alt={t("Maslahat")} />
        <div className="overlay">
          <h1>{t("Maslahat Xizmatlari")}</h1>
          <p>{t("Mutaxassislarimiz sizga kerakli maslahat va yo'nalishlarni taqdim etishadi.")}</p>
        </div>
      </div>

      <div className="content">
        <h2>{t("Xizmatlarimiz")}</h2>
        <p>{t("Hayotning turli jabhalarida eng yaxshi qarorlarni qabul qilishingiz uchun maslahatlarimizdan foydalaning.")}</p>

        <ul>
          <li>{t("Huquqiy maslahatlar")}</li>
          <li>{t("Psixologik maslahatlar")}</li>
          <li>{t("Biznes bo‘yicha yo‘naltirish")}</li>
          <li>{t("Shaxsiy rivojlanish tavsiyalari")}</li>
        </ul>
      </div>
    </div>
  );
};

export default ServicePage;
