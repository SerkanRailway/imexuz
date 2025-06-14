import React from "react";
import { useTranslation } from "react-i18next";
import "./ConstructionPage.scss";
import constructionImg from "../../media/construction.jpg";

const ConstructionPage = () => {
  const { t } = useTranslation();

  return (
    <div className="construction-page">
      <div className="banner">
        <img src={constructionImg} alt={t("CONSTRUCTION")} />
        <div className="overlay">
          <h1>{t("CONSTRUCTION")}</h1>
          <p>{t("CONSTRUCTION_DESC")}</p>
        </div>
      </div>

      <div className="content">
        <h2>{t("SERVICES")}</h2>
        <p>{t("SERVICES_DESC")}</p>

        <div className="features">
          <div className="feature-card">
            <h3>{t("ARCHITECTURE")}</h3>
            <p>{t("ARCHITECTURE_DESC")}</p>
          </div>
          <div className="feature-card">
            <h3>{t("LARGE_SCALE")}</h3>
            <p>{t("LARGE_SCALE_DESC")}</p>
          </div>
          <div className="feature-card">
            <h3>{t("RECONSTRUCTION")}</h3>
            <p>{t("RECONSTRUCTION_DESC")}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConstructionPage;
