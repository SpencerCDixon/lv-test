import { css } from 'glamor';
import Color from 'color';

// Important 'Theme'/variables used throughout application
export const mq = {
  small: '@media(min-width: 768px)',
  medium: '@media(min-width: 992px)',
  large: '@media(min-width: 1200px)',
};

export const colors = {
  white: '#fff',
  black: '#000',
  primary: '#52BAD5',    // main blue color
  error: '#e85c41',      // orangish red error color
  lightGray: '#979797',  
}

export const fonts = {
  primary: 'Andada',
  secondary: 'Ubuntu',
  landing: 'Montserrat',
};

export const boxShadow = [
  '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
  '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)',
  '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)',
  '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)',
  '0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)',
];

// Forms
export const placeholder = (css) => ({
  '::-webkit-input-placeholder': css,
  '::-moz-placeholder': css,
  ':-ms-input-placeholder': css,
  ':-moz-placeholder': css,
})

// Reusable Animations
const shadowPulse = color => css.keyframes({
  '0%':   { boxShadow: `4px 4px 20px ${color}` },
  '50%':  { boxShadow: `4px 4px 40px ${color}` },
  '100%': { boxShadow: `4px 4px 20px ${color}` }
});

const fadeIn = css.keyframes({
  from: {opacity: 0, top: 0},
  to: {opacity: 1, top: 15},
});

export const animations = {
  primaryPulse: shadowPulse(colors.primary),
  errorPulse: shadowPulse(colors.error),
  fadeIn,
};

// Utility Functions
export function lighten(col, amt) {
  return Color(col).lighten(amt).hsl().string();
}

export function darken(col, amt) {
  return Color(col).darken(amt).hsl().string();
}
