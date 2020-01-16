import React, {PureComponent} from 'react';

const ICON = `M926 1693 c-9 -9 5 -115 19 -143 16 -31 119 -130 135 -130 9 0 11 23
9 79 -3 61 -8 84 -24 101 -28 31 -131 100 -139 93z M1230 1650 c-77 -56 -80 -62 -80 -158 l0 -83 61 53 c73 63 89 92 96
170 7 71 0 73 -77 18z M925 1440 c-9 -15 12 -126 29 -152 16 -24 120 -118 130 -118 13 0 5
142 -8 169 -8 15 -41 46 -74 69 -65 45 -68 47 -77 32z M1232 1405 c-34 -24 -66 -53 -72 -65 -6 -11 -10 -54 -8 -97 l3 -76
59 54 c33 30 67 72 77 94 19 41 26 135 10 135 -5 0 -36 -20 -69 -45z M926 1203 c-9 -9 5 -115 20 -144 15 -29 120 -129 136 -129 6 0 9 29
7 79 -3 61 -8 84 -24 101 -28 31 -131 100 -139 93z M1238 1165 c-37 -25 -72 -54 -78 -65 -6 -11 -10 -56 -8 -100 l3 -80
67 63 c72 67 92 111 86 188 l-3 39 -67 -45z M926 953 c-9 -10 5 -115 20 -144 14 -27 121 -129 136 -129 12 0 9
136 -3 164 -7 14 -37 43 -68 64 -73 50 -77 53 -85 45z M1229 911 c-36 -27 -69 -56 -72 -66 -10 -23 -9 -165 1 -165 4 0 35
27 69 59 42 41 65 71 72 98 12 44 15 123 4 123 -5 0 -38 -22 -74 -49z`;

const pinStyle = {
  cursor: 'pointer',
  fill: '#d00',
  stroke: 'none'
};

export default class CityPin extends PureComponent {

  render() {
    const {size = 20, onClick} = this.props;

    return (
      <svg 
        height={size}
        viewBox="0 0 24 24"
        style={{...pinStyle, transform: `translate(${-size / 2}px,${-size}px)`}}
        onClick={onClick}
      >
        <path d={ICON}/>
      </svg>
    );
  }
}