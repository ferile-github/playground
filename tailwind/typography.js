const { pxToRem } = require('@captaincss/captaincss/helpers');

let base = 16;

/*
Fluid type generated with this tool :
@link https://utopia.fyi/type/calculator?c=375,36,1.25,1280,70,1.25,5,2,&s=0.75|0.5|0.25,1.5|2|3|4|6,s-l&g=s,l,xl,12
*/

exports.fontSize = {
	'sm': pxToRem(14, base),
	'md': pxToRem(15, base),
	'base': `${base}Px`,
  'h1' : 'clamp(1.75rem, 1.3615rem + 1.6575vw, 2.6875rem)', // 28 -> 43
  'h2' : 'clamp(1.75rem, 1.4163rem + 1.4239vw, 3.125rem)', // 28 -> 50
  'h3' : 'clamp(1.25rem, 1.0376rem + 0.9061vw, 2.125rem)', // 20 -> 34
  'h4' : 'clamp(1.25rem, 1.1464rem + 0.442vw, 1.5rem)', // 20 - 24
  'h5' : pxToRem(20, base),
  'h6' : pxToRem(20, base),
};

exports.fontWeight = {
  light: '300',
  normal: '300',
  medium: '300',
  semibold: '400',
  bold: '400',
  black: '400',
};

exports.lineHeight = {
  none: 1,
  tight: 1.25,
  snug: 1.3,
  normal: 1.5,
  relaxed: 1.625,
  loose: 2,
};

exports.letterSpacing = {
  normal: '0',
  wide: '0.01em',
  wider: '0.05em',
};
