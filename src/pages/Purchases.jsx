import React from "react";
import { useTranslation } from "react-i18next";

function Purchases() {
  const { t } = useTranslation();

  return (
    <div>
      {/* title of the page */}
      <h1 className="text-3xl font-medium">{t("purchases")}</h1>
    </div>
  );
}

export default Purchases;
