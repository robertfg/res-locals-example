# Fetch Examples

Project:  This project is an exploration of res.locals.
Author:   Robert Glover
Date:     2018-08-09

## Build Process

1.  mkdir res-locals-example
2.  cd res-locals-example
3.  git init
4.  npm init -y
5.  Create folder:
    - routes
6.  Add server.js:
    - simple web server
7.  Add routes/index.js
8.  Modify package.json:
    - main: server.js
9.  Run with nodemon

### Note that there is no need to install Node or Express as they have been installed globally.
### Although, if I were going to distribute the App, I would need to install Express locally.

10. To handle sessions, e.g., req.session, install express-session:
    - npm install --save express-session

## Git Update Process
1.  Create repo on GitHub.
2.  Add .gitignore file with node_modules
3.  git add .
4.  git commit -a -m "Routing examples"
5.  git remote add origin https://github.com/robertfg/res-locals-examples.git
6.  git push --set-upstream origin master
