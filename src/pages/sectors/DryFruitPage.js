import React from "react";
import { useTranslation } from "react-i18next";
import "./DryFruitsPage.scss";
import dryFruitsImage from "../../media/dryfruit.jpg";

const DryFruitsPage = () => {
  const { t } = useTranslation();

  return (
    <div className="dryfruits-page">
      <div className="banner">
        <img src={dryFruitsImage} alt={t("DRYFRUITS")} />
        <div className="overlay">
          <h1>{t("DRYFRUITS")}</h1>
          <p>{t("DRYFRUITS_DESC")}</p>
        </div>
      </div>

      <div className="content">
        <h2>{t("PRODUCTS")}</h2>
        <p>{t("PRODUCTS_DESC")}</p>

        <div className="features">
          <div className="feature-card">
            <h3>{t("ALMOND")}</h3>
            <p>{t("ALMOND_DESC")}</p>
          </div>
          <div className="feature-card">
            <h3>{t("FIG")}</h3>
            <p>{t("FIG_DESC")}</p>
          </div>
          <div className="feature-card">
            <h3>{t("DRIED_APRICOT")}</h3>
            <p>{t("DRIED_APRICOT_DESC")}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DryFruitsPage;
