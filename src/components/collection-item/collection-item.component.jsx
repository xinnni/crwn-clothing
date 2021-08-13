import React, { useContext } from "react";
import { Context } from "../../Context";

import CustomButton from "../custom-button/custom-button.component";

import "./collection-item.styles.scss";

export default function CollectionItem({ item }) {
  const { name, price, imageUrl } = item;
  const { addCartItems } = useContext(Context);
  return (
    <div className="collection-item">
      <div
        className="image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <CustomButton onClick={() => addCartItems(item)} inverted>
        Add to cart
      </CustomButton>
    </div>
  );
}
