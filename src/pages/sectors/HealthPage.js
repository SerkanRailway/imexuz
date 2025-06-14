import React from "react";
import { useTranslation } from "react-i18next";
import "./HealthPage.scss";
import healthBanner from "../../media/resize.jpg";

const HealthPage = () => {
  const { t } = useTranslation();

  return (
    <div className="health-page">
      <div className="banner">
        <img src={healthBanner} alt={t("Salomatlik Xizmatlari")} />
        <div className="overlay">
          <h1>{t("Salomatlik")}</h1>
          <p>{t("Eng yuqori sifatli tibbiy xizmatlar va ilg‘or texnologiyalar.")}</p>
        </div>
      </div>

      <div className="content">
        <h2>{t("Nega bizni tanlaysiz?")}</h2>
        <p>{t("Bizning sog‘liqni saqlash sohasidagi xizmatlarimiz bemorlar salomatligini birinchi o‘ringa qo‘yadi. Har bir bemorga individual yondashuv, zamonaviy texnologiyalar va yuqori malakali shifokorlar bilan xizmat ko‘rsatamiz.")}</p>

        <h2>{t("Xizmatlarimiz")}</h2>
        <ul>
          <li>🔬 {t("Diagnostika va laboratoriya tahlillari")}</li>
          <li>🏥 {t("Stasionar davolanish va ambulator xizmatlar")}</li>
          <li>🧑‍⚕️ {t("Mutaxassis maslahatlari")}</li>
          <li>💊 {t("Dorixona va tibbiy mahsulotlar")}</li>
          <li>🚑 {t("Tez tibbiy yordam xizmati")}</li>
        </ul>

        <h2>{t("Ishonchli, xavfsiz, professional")}</h2>
        <p>{t("Biz sizga va yaqinlaringizga g‘amxo‘rlik qilamiz. Barcha xizmatlarimiz xalqaro standartlarga javob beradi.")}</p>
      </div>
    </div>
  );
};

export default HealthPage;
