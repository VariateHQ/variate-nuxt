![npm (scoped with tag)](https://img.shields.io/npm/v/@variate/nuxt/latest?color=%234EC723)
![NPM](https://img.shields.io/npm/l/@variate/nuxt)
![GitHub package.json dependency version (prod)](https://img.shields.io/github/package-json/dependency-version/VariateHQ/variate-nuxt/@variate/vue)
[![Actions Status](https://github.com/VariateHQ/variate-vue/workflows/Build/badge.svg)](https://github.com/VariateHQ/variate-nuxt/actions)
[![Actions Status](https://github.com/VariateHQ/variate-vue/workflows/Publish/badge.svg)](https://github.com/VariateHQ/variate-nuxt/actions)

# Variate Nuxt

## Installation

- Install the package:

```bash
$ npm install @variate/nuxt
```

- Register the module in `nuxt.config.js`:

```javascript
buildModules: [
    '@variate/nuxt'
]
```

- Create the `middleware/variate.js` file, it will be used to initialize Variate, 
pass in the `route` object and any targeting values of your choice: 

```javascript
export default function ({ app: { $variate }, route }) {
  if($variate) {
    $variate.initialize({
      view: route,
      targeting: {
        ...
      }
    });
  }
};
```

## Configuration

You can override any options from Variate in `nuxt.config.js`: 

```javascript
variate: {
    debug: true,
    tracking: true,
    pageview: true,
    reporter: () => {
        // your custom reporting function
    }   
}
```

By default, this module will attempt to load any configuration file named `variate.json` in the source directory of Nuxt directory.

If you would like to customize this path, specify the `configPath` in the variate config block in `nuxt.config.js`.
