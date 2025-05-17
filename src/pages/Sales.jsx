import React from "react";
import { useTranslation } from "react-i18next";

function Sales() {
  const { t } = useTranslation();

  return (
    <div>
      {/* title of the page */}
      <h1 className="text-3xl font-medium">{t("sales")}</h1>
    </div>
  );
}

export default Sales;
