import type { Config } from 'tailwindcss';

export default {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			screens: {
				sm: '375px',
				md: '744px',
				lg: '1920px',
			},
			fontFamily: {
				sans: ['Pretendard', 'sans-serif'],
			},
			fontSize: {
				/** 명시적으로 작성 */
				xs: ['12px', '16px'],
				sm: ['14px', '20px'],
				base: ['16px', '24px'],
				lg: ['18px', '28px'],
				xl: ['20px', '28px'],
				'2xl': ['24px', '32px'],
				'3xl': ['30px', '36px'],
			},
		},
	},
} satisfies Config;
