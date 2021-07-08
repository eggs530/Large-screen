yarn build &&
cd dist &&
git init &&
git add . &&
git commit -m deploy &&
git remote add origin git@github.com:eggs530/Large-screen-website.git &&
git branch -M main &&
git push -uf origin main &&
cd -;