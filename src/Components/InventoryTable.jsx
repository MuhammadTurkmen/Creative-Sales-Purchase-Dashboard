import React from "react";
import { useTranslation } from "react-i18next";
import { inventoryTableData } from "../utiles";

const statusColor = {
  inStock: "text-green-600",
  lowStock: "text-yellow-600",
  outOfStock: "text-red-600",
};

const InventoryTable = () => {
  const { t } = useTranslation();

  return (
    <div className="overflow-x-auto bg-base-100 rounded-xl shadow-md p-4">
      <table className="table">
        <thead>
          <tr>
            <th>{t("productId")}</th>
            <th>{t("productName")}</th>
            <th>{t("category")}</th>
            <th>{t("stockQty")}</th>
            <th>{t("supplierName")}</th>
            <th>{t("unitPrice")}</th>
            <th>{t("status")}</th>
            <th>{t("lastRestocked")}</th>
          </tr>
        </thead>
        <tbody>
          {inventoryTableData.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{t(item.name)}</td>
              <td>{t(item.category)}</td>
              <td>{item.stock}</td>
              <td>{t(item.supplier)}</td>
              <td>{item.price}</td>
              <td className={`${statusColor[item.status]} font-medium`}>
                {t(item.status)}
              </td>
              <td>{item.restocked}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default InventoryTable;
