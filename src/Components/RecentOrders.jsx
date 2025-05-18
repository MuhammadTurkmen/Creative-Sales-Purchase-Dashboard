import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";

import { recentOrders } from "../utiles";

export default function RecentOrders() {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    document.documentElement.dir = i18n.dir();
  }, [i18n.language]);

  return (
    <div className="bg-base-100 rounded-xl p-6 shadow-sm overflow-x-auto">
      <h2 className="text-2xl font-semibold mb-4">{t("recentOrders")}</h2>
      <table className="table w-full text-sm">
        <thead>
          <tr className="text-base-content/60 text-left">
            <th className="text-start">{t("trackingNo")}</th>
            <th className="text-start">{t("productName")}</th>
            <th className="text-start">{t("price")}</th>
            <th className="text-start">{t("totalOrder")}</th>
            <th className="text-start">{t("totalAmount")}</th>
          </tr>
        </thead>
        <tbody>
          {recentOrders.map((order) => (
            <tr key={order.id} className="border-t border-base-200">
              <td>{order.id}</td>
              <td className="flex gap-2 items-center">
                <img
                  className="w-[30px] h-[30px] object-cover rounded-sm"
                  src={order.img}
                  alt="hello"
                />{" "}
                {t(order.name)}
              </td>
              <td>{order.price}</td>
              <td>
                <span className="bg-violet-100 text-violet-600 px-2 py-1 rounded-full">
                  {order.total}
                </span>
              </td>
              <td>{order.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
