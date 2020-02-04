import React from "react";

type Items = {
  id: number;
  sku: number;
  title: string;
  type: string;
  color: string[];
  price: number;
};

interface Props {
  item: Items;
}

const ProductListingCard = ({ item }: Props) => {
  return (
    <div className="product-card">
      <p>
        {item.title} ${item.price}
      </p>
    </div>
  );
};

export default ProductListingCard;
