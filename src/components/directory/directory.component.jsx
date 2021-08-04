import React, { useState } from "react";

import MenuItem from "../menu-item/menu-item.component";

import { dummyData } from "../../static/dummyData";

import "./directory.styles.scss";

function Directory() {
  const [sections, setSections] = useState(dummyData);

  return (
    <div className="directory-menu">
      {sections.map(({ id, ...otherSectionProps }) => (
        <MenuItem key={id} {...otherSectionProps} />
      ))}
    </div>
  );
}

export default Directory;
