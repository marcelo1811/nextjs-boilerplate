const size = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1440px',
  desktop: '2560px'
}

const Device = {
  maxMobileS: `(max-width: ${size.mobileS})`,
  maxMobileM: `(max-width: ${size.mobileM})`,
  maxMobileL: `(max-width: ${size.mobileL})`,
  maxTablet: `(max-width: ${size.tablet})`,
  maxLaptop: `(max-width: ${size.laptop})`,
  maxLaptopL: `(max-width: ${size.laptopL})`,
  maxDesktop: `(max-width: ${size.desktop})`,
  maxDesktopL: `(max-width: ${size.desktop})`,
  minMobileS: `(min-width: ${size.mobileS})`,
  minMobileM: `(min-width: ${size.mobileM})`,
  minMobileL: `(min-width: ${size.mobileL})`,
  minTablet: `(min-width: ${size.tablet})`,
  minLaptop: `(min-width: ${size.laptop})`,
  minLaptopL: `(min-width: ${size.laptopL})`,
  minDesktop: `(min-width: ${size.desktop})`,
  minDesktopL: `(min-width: ${size.desktop})`,
}

export default Device
