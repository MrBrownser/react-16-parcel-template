# Sales Admin
Welcome to the Sales Admin repo!

This project is going to be used by all myO stakeholders in order to create and manage tenants.
Basic features include:
* Log in with a special role user "salesadmin" in gorilo
* List all existing tenants on the running cluster (local, dev, test, prod)
* Create new tenants, one by one, through a form
* See and update each tenant's feature flags and limitations
    
### Installation

* All [necessary tools](https://reactjs.org/docs/getting-started.html) to run a React 16.3 App
* The [salesadmin BFF](https://gitlab.haufedev.systems/myonboarding/my-salesadmin-service) running locally
* A valid salesadmin user already on your database (ask @castanya or @frutosj)
* And the usual following steps:

```sh
$ git clone https://gitlab.haufedev.systems/myonboarding/sales-admin
$ npm i
$ npm start
```

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