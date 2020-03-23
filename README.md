# React Boilerplate
Welcome to my React Boilerplate repo!
    
### Installation

* All [necessary tools](https://reactjs.org/docs/getting-started.html) to run a React 16.3 App
* And the usual following steps:

```sh
$ git clone https://github.com/MrBrownser/react-16-parcel-template
$ npm i
$ npm start
```

App will be automatically bundled and served from [http://localhost:1234/](http://localhost:1234/)

### Linting

To manually trigger and see linting results just run:

```sh
$ npm run lint
```

If you want linting results to be automatically applied, run:

```sh
$ npm run lint:fix
```

Anyway, and thanks to [husky](https://github.com/typicode/husky), every time you make a commit, linting (without fix) will be triggered and you'll see the results in your console/terminal.

### Creating a production bundle

As easy as:

```sh
$ npm run build
```

You will find a freshly created folder dist/ inside the repo folder with all required files.
