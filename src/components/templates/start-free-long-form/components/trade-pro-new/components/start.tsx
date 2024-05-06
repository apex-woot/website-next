import React, { type FC } from 'react';
import type { StarProps } from './types';

const Star: FC<StarProps> = ({ starColor, className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 380 380" xmlSpace="preserve" className={className}>
        <path
            fill={starColor}
            d="M200,0,255.83959896778495,123.14338553437999,390.21130325903073,
      138.19660112501052,290.35036904803957,229.35661446562,317.55705045849464,361.8033988749895,
      200,295,82.4429495415054,361.8033988749895,109.64963095196042,229.35661446562,9.7886967409693,
      138.19660112501046,144.16040103221505,123.14338553438Z"
        />
    </svg>
);

export default Star;
