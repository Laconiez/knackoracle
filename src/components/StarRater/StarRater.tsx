import React from 'react';

import Star from './Star';

const StarRater = () => (
  <div>
    <Star checked /> <Star checked={false} />
    <Star checked={false} />
  </div>
);

export default StarRater;
