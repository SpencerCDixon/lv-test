import css from 'next/css';

export const colors = {
  primary: '#52BAD5',
  error: '#e85c41',
  lightGray: '#979797',
}

export const fonts = {
  primary: 'Montserrat',
};

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
