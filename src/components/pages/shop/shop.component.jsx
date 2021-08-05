import React, { useState } from "react";

import { dummyCollections } from "../../../static/dummyCollections";
import CollectionPreview from "../../../components/collection-preview/collection-preview.component";

function ShopPage() {
  const [collections, setCollections] = useState(dummyCollections);
  return (
    <div className="shop-page">
      {collections.map(({ id, ...otherCollectionsProps }) => (
        <CollectionPreview key={id} {...otherCollectionsProps} />
      ))}
    </div>
  );
}

export default ShopPage;
