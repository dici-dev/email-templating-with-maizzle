/*
|-------------------------------------------------------------------------------
| Production config                       https://maizzle.com/docs/environments
|-------------------------------------------------------------------------------
|
| This is where you define settings that optimize your emails for production.
| These will be merged on top of the base config.js, so you only need to
| specify the options that are changing.
|
*/

/** @type {import('@maizzle/framework').Config} */
export default {
  baseURL: 'https://enbridgegaz.com/wp-content/uploads',
  images: {
    src: {
      query: {
        header: {
          bg: '/2024/10/banniere-scaled.jpeg',
          logo: '/2024/11/Enbridge2024_Gazifere-devient-EGQ-V3-BJ.logo.cropped.png'
        },
        page1: {
          facture: '/2024/10/facture.jpg'
        },
        page2: {
          waterHeater: '/2024/10/kp-enbridge-gazfinal-230801-011.jpeg'
        },
        page3: {
          heatSystem: '/2024/10/Tech-WH1.jpg'
        },
        footer: {
          email: '/2024/10/enveloppe.png',
          tel: '/2024/10/tel.png',
          location: '/2024/10/localisation.png',
          site: '/2024/10/clic.png'
        }
      }
    },
  },
  build: {
    content: ['src/templates/**/*.html'],
    output: {
      path: 'build_production',
    },
    static: [
      {
        source: ['src/images/optimized'],
        destination: 'images.optimized/',
      },
    ],
  },
  inlineCSS: true,
  removeUnusedCSS: true,
  shorthandCSS: true,
  prettify: true,
};
