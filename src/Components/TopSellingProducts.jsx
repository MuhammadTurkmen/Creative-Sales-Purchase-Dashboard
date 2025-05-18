import React from "react";
import shoose from "../assets/sneakers.jpeg";
import iphone from "../assets/iphone12.jpeg";
import { useTranslation } from "react-i18next";

const topProducts = [
  {
    id: 1,
    name: "Shoes",
    price: "$87",
    image: shoose,
  },
  {
    id: 2,
    name: "iphone",
    price: "$987",
    image: iphone,
  },
];

export default function TopSellingProducts() {
  const { t } = useTranslation();

  return (
    <div className="bg-base-100 rounded-xl p-6 pb-14  shadow-sm">
      <h2 className="text-2xl font-semibold mb-8">{t("topSellingProducts")}</h2>
      <div className="flex flex-col gap-4">
        {topProducts.map((product) => (
          <div key={product.id} className="flex items-center gap-4">
            <img
              src={product.image}
              alt={product.name}
              className="w-[90px] h-[100px] object-contain rounded-lg"
            />
            <div>
              <h3 className="font-medium text-base">{t(product.name)}</h3>
              <div className="text-yellow-500 text-sm mb-1">★★★★★</div>
              <p className="font-semibold">{product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
