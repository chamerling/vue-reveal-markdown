# VueJS + Reveal + Markdown

- Put your slides content in `public/slides/index.md`
- `---` is the slide separator
- Images MUST be referenced with `./slides/` href, for example `<img class="stretch" src="./slides/vue.png"/>`

Changes to your markdown file will hot reload in dev mode.

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

## Docker

### Build

Before building the image for production, you will have to configure it from an environment file. By default, vue-cli (used by `npm run build`) will set the `NODE_ENV` to production on build step. In order to define production environment values, you will have to create a `.env.production.local` file at the root or the repository and set the required values (copy, paste and adapt `.env` file properties). Once done, you can build the image like:

```
docker build -t chamerling/vue-reveal-markdown .
```

### Run

```
docker run -it -p 8888:80 --rm --name vue-reveal-markdown chamerling/vue-reveal-markdown
```

You can mount your own markdown file to display it by mounting a volume. For example, if your markdown file is in your current directory, you can do it just like:

```
docker run -it -p 8888:80 --rm --name vue-reveal-markdown -v $PWD:/usr/share/nginx/html/slides chamerling/vue-reveal-markdown
```
