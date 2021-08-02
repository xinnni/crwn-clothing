import React, { useState } from "react";

import MenuItem from "../menu-item/menu-item.component";

import { dummyData } from "../../static/directory.data";

import "./directory.styles.scss";

function Directory() {
  const [sections, setSections] = useState(dummyData);

  return (
    <div className="directory-menu">
      {sections.map(({ title, imageUrl, id, size }) => (
        <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
      ))}
    </div>
  );
}

export default Directory;
