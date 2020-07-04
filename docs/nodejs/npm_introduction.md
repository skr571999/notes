# NPM Introduction

## Basic Commands

- to save packages as the dev dependencies

```cmd
npm i -D nodemon
npm i --save-dev nodemon
```

- global commands

```cmd
npm i -g <package_name>
npm uninstall -g <package_name>
npm update -g <package_name>
npm outdated -g <package_name>
```

- to install the dependencies not the devdependencies `npm i --production`

## Npm Scripts

- scripts are to be written in `package.json` file in the script property
- to run a script from cmd `npm run <SCRIPT_NAME>`

## Npm versioning

- ^ - for most recent version
- ~ - for most recent minor version
- `npm i loadash@4.17.4` - to install the specific version
- `npm i loadash@^4.0.0` - to install the latest 4.x.x version
