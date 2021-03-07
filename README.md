# VueRG

This project is an implementation of Rubens Gomes personal web site using [VueJS 3](https://v3.vuejs.org/) and [Bootstrap 5](https://getbootstrap.com/docs/5.0/getting-started/introduction/).  One of the goals of this project is to use CI/CD.

## Potential Technologies

* Node.JS <https://nodejs.org/en/>
* KrakenJS <http://krakenjs.com/>
* Express.JS <https://expressjs.com/>
* Grunt Task Runner <https://gruntjs.com/>
* MongoDB <https://www.mongodb.com/>
* VueJS 3 <https://v3.vuejs.org/>
* Bootstrap 5 <https://getbootstrap.com/>

## Source Code Repository

The code for this project is stored in a Rubens Gomes  
[GitHub private repo](https://github.com/rubensgomes/vuerg)

## Potential  User Stories

Contact Form:

1. When submitting a contact form validate the UI captcha on 
the server using Google ReCaptcha server APIs
2. Send email with given message and form data

# Installation

## Set Up Develoment Environment

### Visual C++ Libraries

- Download and install [Microsoft Visual C++ Redistributable for Visual Studio 2015-2019](https://support.microsoft.com/en-us/help/2977003/the-latest-supported-visual-c-downloads)

### Visual Studio Code

- Download and install [Microsoft Visual Studio Code](https://code.visualstudio.com/)
- Download and install [Visual Studio Code Settings Sync](https://marketplace.visualstudio.com/items?itemName=Shan.code-settings-sync)

#### Configure Visual Code Settings Sync:

1. "sync.gist": " 454924095dee3e4a1444c6692c54c661"
2. Github personal access token <https://github.com/settings/tokens>
3. To see the "Settings Sync" configuration
    - Go to [GitHub](https://gist.github.com) and login with your GitHub account
    - After login, ensure you are on the [GitHub Gist page](https://gist.github.com/)
    - Or click on the navigation bar link that says "GitHub Gisst".

### Configuring Hosts

- Add following entries to the Windows hosts file (C:\Windows\System32\drivers\etc\hosts)

- These entries will come handy when configuring virtual hosts during local testing:

```
127.0.0.1       ezlista.localhost
127.0.0.1       softlagos.localhost
127.0.0.1       rubens-gomes.localhost
127.0.0.1       restportal.localhost
127.0.0.1       template.localhost
```

### Configure GitHub Page

* A user GitHub Page is being set up as follows:

1. Create new public repository named "rubensgomes.github.io" to be used to publish this User GitHub Page site: <https://rubensgomes.github.io/vuerg>
2. Create 'stable' branch from 'master' branch in this vuerg git repository.
3. A branch 'gh-pages' will be initialized during build (deploy.sh)  in order to deploy to GitHub Pages.
4. Configure the project GitHub 'Settings', under the 'GitHub Pages' to use the branch 'gh-pages'  and the root '/(root)' path folder.
5. Then, after a successful deployment, you may see the page rendered at <https://rubensgomes.github.io/vuerg/>

### Install NodeJS / NPM Tools

- Download and install the latest version of NodeJS supported by your operating system from <https://nodejs.org/en/download/>

- Install NPX, Gulp-CLI, Vue-CLI, and Others

```bash
npm install -g npx
npm install -g gulp-cli
npm install -g @vue/cli
npm install -g @vue/cli @vue/cli-service-global
npm install -g serve
```

## Project Set Up

### Create Git Repository

1. Login to the [GitHub Account](https://github.com/rubensgomes)
2. Select and click on the [Repositories link](https://github.com/rubensgomes?tab=repositories)
3. Create a new repository called "rubensgomes/vuerg
4. Then follow commands below locally

```bash
git init
git add README.md
git commit -m "first commit"
git branch -M master
git remote add origin https://github.com/rubensgomes/vuerg.git
git push -u origin master
```

### Install Local Packages

```
cd vuerg
npm install
```

### Scaffold Project (Select Vue 3)

FYI, this project was scaffolded already


```bash
vue create rgsite
```

### Build (Static Analysis)

```bash
cd vuerg
npm run lint
npm run build
```

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

## Run Server

```
npm run serve
```

### Stop server listening on port 8080.

On Microsoft Windows after CTRL-C, locate and copy the PID (process ID):

```bash
netstat -ano | findstr :8080
taskkill /PID <PID> /F
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

```bash
vue create vuerg
```
