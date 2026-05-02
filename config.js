/*
|-------------------------------------------------------------------------------
| Development config                      https://maizzle.com/docs/environments
|-------------------------------------------------------------------------------
|
| The exported object contains the default Maizzle settings for development.
| This is used when you run `maizzle build` or `maizzle serve` and it has
| the fastest build time, since most transformations are disabled.
|
*/

/** @type {import('@maizzle/framework').Config} */
export default {
  baseURL: '',
  client: {
    number: '@CUSTOMERNUMBER@ - @ACCOUNTNUMBER@', // the value will be replaced by Gazifere's CRM system.
    address: '@SERVICEADDRESS@', // the value will be replaced by Gazifere's CRM system.
  },
  images: {
    src: {
      query: {
        header: {
          bg: 'images.optimized/banniere-scaled.jpeg',
          logo: 'images.optimized/ENB-LOGO-Gaz-Quebec-B-J.png',
          logoEnov: 'images.optimized/ENB-LOGO-Enov-BJ.png'
      },
        page1: {
          facture: 'images.optimized/facture.jpg',
          facebook: 'images.optimized/fbIcon1.png',
          linkedin: 'images.optimized/linkedinIcon.png',
        },
        page2: {
          waterHeater: 'images.optimized/kp-enbridge-gazfinal-230801-011.jpeg'
        },
        page3: {
          heatSystem: 'images.optimized/Tech-WH1.jpg'
        },
        footer: {
          email: 'images.optimized/enveloppe.png',
          tel: 'images.optimized/tel.png',
          location: 'images.optimized/localisation.png',
          site: 'images.optimized/clic.png'
        }
      }
    },
  },
  css: {
    tailwind: {
      config: './tailwind.config.cjs',
    },
  },
  build: {
    content: ['src/templates/**/*.html'],
    output: {
      path: 'build_local',
    },
    static: [
      {
        source: ['src/images/optimized'],
        destination: 'images.optimized/',
      },
    ],
  },
};
