import React from 'react';

import { AnchorProps } from "../../types/types";

const Anchor: React.FC<AnchorProps> = ({ id }) => {
  if(!id) {
    return null;
  }
  return (
    <div id={id} data-testid={`anchor-${id}`} style={{ position: 'relative', top: '-20px' }} aria-hidden="true"  />
  );
};

export default Anchor;
