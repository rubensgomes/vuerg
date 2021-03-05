#!/bin/sh -aux

# abort on errors
set -e

#echo "build vuejs dynamic site"
#echo "linting..."
#npm run lint
#echo "builing..."
#npm run build
# navigate into the build output directory
#cd dist

echo "build static HTML site"
gulp install
cd static/dist

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

echo "deploying"
git init
git add -A
git commit -m 'deploy'

# if you are deploying to https://<USERNAME>.github.io/<REPO>
echo "pushing changes..."
git push -f git@github.com:rubensgomes/vuerg.git master:gh-pages

cd -
