import colors from 'tailwindcss/colors'
import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

export default {
	content: [
		"./src/**/*.{js,jsx,ts,tsx}",
		"node_modules/daisyui/dist/**/*.js",
		"node_modules/react-daisyui/dist/**/*.js",
	],
	plugins: [require("daisyui")],
      corePlugins: {
        fontSize: true,
    },
    variants: {
        extend: {
            opacity: ['active'],
            cursor: ['hover', 'focus', 'disabled'],
        },
    },
    darkMode: 'class', // or 'media' or 'class'
    theme: {
        extend: {
      			fontFamily: {
				    primary: ["Inter", ...defaultTheme.fontFamily.sans],
      },
            screens: {
                xs: '375px',
            },
            backgroundImage: {
                // rectangle: "url('src/assets/images/rectangle-5.png')",
                // freeFormMaskGroup:
                //     "url('src/assets/images/free-form-mask-group.png')",
                // wieDigital:
                //     'url("src/assets/images/landing-pages/template-selection/wie-digital-ist-handwerk-web_0.jpg")',
                // vectorMobile: 'url("src/assets/images/Vector_Mobile_5.png")',
                // vectorDesktop: 'url("src/assets/images/Vector-bg5.png")',
                // ringFull: 'url("src/assets/images/ring-full.png")',
                // blurPlumber:
                //     'url("/images/landing-pages/limit-offer-form/blur-plumber.png")',
            },
            colors: {
                cyan: '#e0ffff',
                black: '#151515',
                light: '#77c5e3',
                button: '#618faf',
                darkGray: '#1f2937',
                lightGrey: '#f8f8f8',
                sky: '#4da2dc',
                redLanding: '#eb4443',
                blue: { ...colors.blue, DEFAULT: colors.blue[600] },
            },
        },
    },
    daisyui: {
        themes: [
            {
                light: {
                    ...require('daisyui/src/colors/themes')[
                        '[data-theme=light]'
                    ],
                    primary: '#618faf',
                    // 'primary-content': '#ffffff',

                    secondary: '#f8f8f8',
                    // 'secondary-content': '#ffffff',

                    '--btn-text-case': 'normal',

                    // 'accent': '#f3f4f6',
                    // 'accent-content': '#4b5563',

                    // 'neutral': '#374151',
                    // 'neutral-content': '#ffffff',

                    // 'base-100': '#ffffff',
                    // 'base-200': '#f3f4f6',
                    // 'base-content': '#1f2937',

                    // 'info': '#3ABFF8',
                    // 'info-content': '#ffffff',

                    // 'success': '#4ade80',
                    // 'success-content': '#ffffff',

                    // 'warning': '#ca8a04',
                    // 'warning-content': '#ffffff',

                    // 'error': '#f87171',
                    // 'error-content': '#ffffff',
                },
            },
        ],
    },
} satisfies Config;
