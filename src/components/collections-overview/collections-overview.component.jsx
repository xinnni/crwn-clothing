import React, { useContext } from "react";
import { Context } from "../../Context";

import CollectionPreview from "../collection-preview/collection-preview.component";

import "./collections-overview.styles.scss";

export default function CollectionsOverView() {
  const { allItems } = useContext(Context);

  return (
    <div className="collections-overview">
      {allItems.map(({ id, ...otherCollectionsProps }) => (
        <CollectionPreview key={id} {...otherCollectionsProps} />
      ))}
    </div>
  );
}
