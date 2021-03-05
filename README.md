# Introduction

This project is an implementation of Rubens Gomes personal web site using [VueJS 3](https://v3.vuejs.org/) and [Bootstrap 5](https://getbootstrap.com/docs/5.0/getting-started/introduction/).  One of the goals of this project is to use CI/CD.

# Source Code Repository

The code for this project is stored in a Rubens Gomes  
[GitHub private repo](https://github.com/rubensgomes/vuerg)

# Installation

## Configure GitHub Page

A user GitHub Page needs to configured as follows:

1. Create new public repository named "rubensgomes.github.io" to be used to publish this project User GitHub Page site: <https://rubensgomes.github.io/vuerg>
2. Create 'stable' branch from 'master' branch in this vuerg git repository.
3. Under the branch 'Settings', configure the 'stable' branch and '/docs' folder to be used for the 'User GitHub Page Site'.

* TODO: GitHub Page custom subdomain: new.rubens-gomes.com

## Install NodeJS

* Download and install the latest version of NodeJS supported by your operating system from <https://nodejs.org/en/download/>

## Install Global Packages

* Install Vue CLI, Serve, NPX, Gulp

```bash
npm install -g @vue/cli
npm install -g serve
npm install -g npx
npm install -g gulp-cli
```

## Install Local Packages

```
cd vuerg
npm install
```

# Build and Running Software

## VueJS - Static Analysis

```
cd vuerg
npm run lint
```

## Sass Files

### Compile SASS Files

```bash
cd vuerg
npx gulp sass
```

### Watch Sass File Changes

```bash
cd vuerg
npx gulp watch
```

### Browsersync Watch

```bash
cd vuerg
npx gulp browser
```

## TODO Compile and Run Server

```
npm run serve
```

## Production Build

```
npm run build
```

## Customize Configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

## Miscellaneous Commands

```bash
node --version
node -p process.versions
node -p process.platform
node -p process.arch
npm --version
npx --version
npm config --global get prefix
serve -s dist
```


### How to Scaffold a VueJS Project

FYI, This project was scaffolded using the following command:

```bash
vue create vuerg
```
