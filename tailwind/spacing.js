const { pxToRem } = require('@captaincss/captaincss/helpers');

exports.spacing = {
  0 : '0',
  gutter: pxToRem(16),
  xxs: pxToRem(5),
  xs: pxToRem(8),
  ssm: pxToRem(15),
  sm: pxToRem(20),
  md: pxToRem(30),
  lg: pxToRem(40),
	50 : pxToRem(50),
  xl: pxToRem(80),
  xxl: pxToRem(120),
};
