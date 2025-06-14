import React from "react";
import { useTranslation } from "react-i18next";
import tourismBanner from "../../media/tourism.jpg";
import "./TourismPage.scss";

const TourismPage = () => {
  const { t } = useTranslation();

  return (
    <div className="tourism-page">
      <div className="banner">
        <img src={tourismBanner} alt={t("Turizm")} />
        <div className="overlay">
          <h1>{t("Turizm")}</h1>
          <p>{t("Unutilmas safarlar va mehmondo‘stlik bilan boyitilgan tajribalar.")}</p>
        </div>
      </div>
      <div className="content">
        <h2>{t("Nega bizni tanlaysiz?")}</h2>
        <p>{t("Bizning turizm xizmatlarimiz mehmonlarga madaniyat, tarix va tabiat go‘zalligini uyg‘un tarzda taqdim etadi. Har bir sayohat qulaylik, xavfsizlik va samimiy xizmat bilan ajralib turadi.")}</p>

        <h2>{t("Xizmatlarimiz")}</h2>
        <ul>
          <li>{t("Ichki va xalqaro sayohat turlari")}</li>
          <li>{t("Mehmonxonalar va transport xizmatlari")}</li>
          <li>{t("Professional gidlar va ekskursiyalar")}</li>
          <li>{t("Vizalar va hujjatlar bilan yordam")}</li>
          <li>{t("Oilaviy va biznes sayohatlar")}</li>
        </ul>

        <h2>{t("Esdaliklar yaratamiz")}</h2>
        <p>{t("Har bir mijoz uchun qulay, xavfsiz va unutilmas sayohat tashkil etamiz. Siz dam olganingizda biz siz uchun hammasini rejalashtiramiz.")}</p>
      </div>
    </div>
  );
};

export default TourismPage;
