import React from "react";
import { Route, useRouteMatch } from "react-router-dom";

import CollectionsOverView from "../../collections-overview/collections-overview.component";
import CollectionPage from "../../pages/collection/collection.component";

export default function ShopPage() {
  const { url } = useRouteMatch();

  return (
    <div className="shop-page">
      <Route exact path={`${url}`}>
        <CollectionsOverView />
      </Route>
      <Route path={`${url}/:collectionId`}>
        <CollectionPage />
      </Route>
    </div>
  );
}
