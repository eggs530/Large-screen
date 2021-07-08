yarn build &&
cd dist &&
git init &&
git add . &&
git commit -m deploy &&
git remote add origin git@gitee.com:yoona530/big-screen-1.git&&
git push -u origin master&&
cd -;
