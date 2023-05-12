#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
# set -e

# 生成静态文件
# pnpm build

# 进入生成的文件夹
cd dist

# 如果是发布到自定义域名
# echo 'www.example.com' > CNAME

git init
git remote add origin https://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@github.com/YangChaoJie/yalteruiio.git/
git add -A
git remote set-url origin https://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@github.com/YangChaoJie/yalteruiio.git/
git add -A
git commit -m 'deploy press docs'

git push
# 如果发布到 https://<USERNAME>.github.io
# git config --global user.name "YangChaoJie"
# git config --global user.email "1126913855@qq.com"
# git push -f https://github.com/YangChaoJie/yalteruiio.git master

# 如果发布到 https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages

cd -

# sudo scp -r /Users/yangchaojie/Downloads/test/flask/flasky-yang/frontend/my-blog-vuepress/dist/  root@118.89.187.115:/home/git/repos
# https://cloud.tencent.com/developer/article/1175803  部署
# https://linux.cn/article-9506-1.html
# http://pro3times.cn/?p=43
