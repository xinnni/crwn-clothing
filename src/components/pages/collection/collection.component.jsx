import React, { useContext } from "react";
import { useParams } from "react-router";

import { Context } from "../../../Context";

import CollectionItem from "../../collection-item/collection-item.component";

import "./collection.styles.scss";

export default function CollectionPage() {
  const { allItems } = useContext(Context);
  const { collectionId } = useParams();

  const collections = allItems.find(
    (collection) =>
      collectionId.toUpperCase() === collection.title.toUpperCase()
  );

  const { title, items } = collections;

  return (
    <div className="collection-page">
      <h2 className="title">{title.toUpperCase()}</h2>
      <div className="items">
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
