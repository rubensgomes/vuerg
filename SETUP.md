## Install NodeJS

* Download and install the latest version of NodeJS supported by your 
  operating system from <https://nodejs.org/en/download/>

## Configure GitHub Page

A user GitHub Page was configured as follows:

1. Created new public repository named "rubensgomes.github.io" to be used to
   publish this project User GitHub Page site: <https://rubensgomes.github.io/vuerg>
2. Created 'stable' branch from 'master' branch in this vuerg git repository.
3. Under the branch 'Settings', configured the 'stable' branch and '/docs' folder
   to be used for the 'User GitHub Page Site'.

## Tools Installation

1. Install Vue CLI

```bash
npm install -g @vue/cli
```

2. Install serve

```bash
npm install -g serve
```

3. Install NPX

```bash
npm install -g npx
```

4. Install Gulp

```bash
npm install -g gulp-cli
```

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
