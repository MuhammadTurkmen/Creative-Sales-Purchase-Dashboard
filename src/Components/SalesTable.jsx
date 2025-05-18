import React from "react";
import { useTranslation } from "react-i18next";
import { useAppContext } from "../Contexts/AppContext";

function SalesTable() {
  const { t, i18n } = useTranslation();
  const { filteredSalesData } = useAppContext();

  return (
    <div className="bg-base-100  p-6 shadow-sm rounded-xl overflow-x-auto">
      <table className="table w-full min-w-[900px] text-sm ">
        <thead>
          <tr className="text-base-content/60 text-start">
            <th className="text-start">{t("salesId")}</th>
            <th className="text-start">{t("product")}</th>
            <th className="text-start">{t("category")}</th>
            <th className="text-start">{t("region")}</th>
            <th className="text-start">{t("customerName")}</th>
            <th className="text-start">{t("qty")}</th>
            <th className="text-start">{t("unitPrice")}</th>
            <th className="text-start">{t("total")}</th>
            <th className="text-start">{t("date")}</th>
          </tr>
        </thead>
        <tbody>
          {filteredSalesData.length === 0 ? (
            <tr>
              <td colSpan="9" className="text-center py-4 text-base-content/50">
                {t("noResults")}
              </td>
            </tr>
          ) : (
            filteredSalesData.map((sale) => (
              <tr key={sale.id} className="border-t border-base-200">
                <td>{t(sale.id)}</td>
                <td>{t(sale.product)}</td>
                <td>{t(sale.category)}</td>
                <td>{t(sale.region)}</td>
                <td>{t(sale.customer)}</td>
                <td>{sale.qty}</td>
                <td>{sale.unitPrice}</td>
                <td>{sale.total}</td>
                <td>{sale.date}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default SalesTable;
