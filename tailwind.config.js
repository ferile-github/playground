const defaultTheme = require('tailwindcss/defaultTheme')
const { colors } = require('./tailwind/colors.js');
const { screens } = require('./tailwind/screens.js');
const { zIndex } = require('./tailwind/zindex.js');
const { safelist } = require('./tailwind/safelist.js');
const { spacing } = require('./tailwind/spacing.js');
const { transitionTimingFunction } = require('./tailwind/animation.js');
const { fontSize, fontWeight, lineHeight, letterSpacing } = require('./tailwind/typography.js');
const { pxToRem } = require('@captaincss/captaincss/helpers');

module.exports = {
	content: ["./**/*.php"],
	safelist,
	theme: {
		extend: {
			fontFamily: {
				'sans': ['"Manrope"', ...defaultTheme.fontFamily.sans],
				'serif': ['"Manrope"', ...defaultTheme.fontFamily.serif],
				'heading': ['"Manrope"'],
				'button': ['"Manrope"'],
			},
			fontSize,
			spacing,
			zIndex,
			transitionTimingFunction,
			aspectRatio: {
        'landscape': '2 / 1',
      }
		},
		backgroundImage: {
			'image1': "url('../images/image-1.jpg')",
			'image2': "url('../images/image-2.jpg')",
			'image3': "url('../images/image-3.jpg')",
		},
		screens,
		colors,
		fontWeight,
		lineHeight,
		letterSpacing,
		container: {
			center: true,
			padding: {
				DEFAULT: pxToRem(10),
				sm: pxToRem(16),
				lg: pxToRem(24),
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [
	],
}
