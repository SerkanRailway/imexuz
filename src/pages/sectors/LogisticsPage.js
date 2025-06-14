import React from "react";
import "./LogisticsPage.scss";
import logisticsImg from "../../media/logistics.jpg";
import { useTranslation } from "react-i18next";

const LogisticsPage = () => {
  const { t } = useTranslation();

  return (
    <div className="logistics-page">
      <div className="banner">
        <img src={logisticsImg} alt={t("Lojistik")} />
        <div className="overlay">
          <h1>{t("Lojistik")}</h1>
          <p>{t("Biz xalqaro yuk tashish, bojxona va logistika xizmatlarini taqdim etamiz.")}</p>
        </div>
      </div>

      <div className="content">
        <h2>{t("Xizmatlarimiz")}</h2>
        <p>{t("Logistika sohasidagi keng tarmog‘imiz va tajribamiz bilan yuklaringiz xavfsiz va tez yetkaziladi.")}</p>

        <ul>
          <li>{t("Xalqaro yuk tashish")}</li>
          <li>{t("Bojxona rasmiylashtiruvi")}</li>
          <li>{t("Omborxona va saqlash xizmatlari")}</li>
          <li>{t("Yo‘nalishlarni optimallashtirish")}</li>
        </ul>
      </div>
    </div>
  );
};

export default LogisticsPage;
