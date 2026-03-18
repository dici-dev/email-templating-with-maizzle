# Email Templating
Build templates with frameworks:
- [Maizzle](https://maizzle.com)
- [Tailwind CSS](https://tailwindcss.com/)

Test sending email: [Mailtrap](https://mailtrap.io)

## Getting Started
### Installation
```bash
$ yarn
```

### Build
```bash
$ yarn run build
```

### Local Development
To see the render on the browser. The compiled templates are in `build_local` folder.
```bash
$ yarn run dev
```

## Project Folders
### `build_production`
This is where the compiled/built templates reside.

### `src/layout`
Component that contains code (`doctype`, `head`, `body` tags) that changes rarely and can be reused.

### `src/templates`
HTML file that typically contains the body of an email: the HTML that defines the design and the content.


## Documentation
Maizzle documentation is available at https://maizzle.com/docs/introduction

## Issues

Please open all issues in the [framework repository](https://github.com/maizzle/framework).

## License

The Maizzle framework is open-sourced software licensed under the [MIT license](https://opensource.org/licenses/MIT).

[npm]: https://www.npmjs.com/package/@maizzle/framework
[npm-stats]: https://npm-stat.com/charts.html?package=%40maizzle%2Fframework&from=2019-03-27
[npm-version-shield]: https://img.shields.io/npm/v/@maizzle/framework.svg
[npm-stats-shield]: https://img.shields.io/npm/dt/@maizzle/framework.svg?color=6875f5
[github-ci]: https://github.com/maizzle/framework/actions
[github-ci-shield]: https://github.com/maizzle/framework/actions/workflows/nodejs.yml/badge.svg
[license]: ./LICENSE
[license-shield]: https://img.shields.io/npm/l/@maizzle/framework.svg?color=0e9f6e
