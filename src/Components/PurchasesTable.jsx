import React from "react";
import { useTranslation } from "react-i18next";
import { useAppContext } from "../Contexts/AppContext";

function PurchasesTable() {
  const { t } = useTranslation();
  const { filteredPurchasesData } = useAppContext();

  return (
    <div className="bg-base-100 p-6 shadow-sm rounded-xl overflow-x-auto">
      <table className="table w-full min-w-[900px] text-sm">
        <thead>
          <tr className="text-base-content/60 text-start">
            <th className="text-start">{t("purchasesId")}</th>
            <th className="text-start">{t("product")}</th>
            <th className="text-start">{t("category")}</th>
            <th className="text-start">{t("region")}</th>
            <th className="text-start">{t("supplier")}</th>
            <th className="text-start">{t("qty")}</th>
            <th className="text-start">{t("unitPrice")}</th>
            <th className="text-start">{t("total")}</th>
            <th className="text-start">{t("date")}</th>
          </tr>
        </thead>
        <tbody>
          {filteredPurchasesData.length === 0 ? (
            <tr>
              <td
                colSpan="9"
                className="text-center py-12 text-base-content/50"
              >
                {t("noResults")}
              </td>
            </tr>
          ) : (
            filteredPurchasesData.map((purchase) => (
              <tr key={purchase.id} className="border-t border-base-200">
                <td>{t(purchase.id)}</td>
                <td>{t(purchase.product)}</td>
                <td>{t(purchase.category)}</td>
                <td>{t(purchase.region)}</td>
                <td>{t(purchase.supplier)}</td>
                <td>{purchase.qty}</td>
                <td>{purchase.unitPrice}</td>
                <td>{purchase.total}</td>
                <td>{purchase.date}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default PurchasesTable;
