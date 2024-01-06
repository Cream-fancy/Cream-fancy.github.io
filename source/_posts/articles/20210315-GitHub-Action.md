---
title: GitHub Action
date: 2021-03-15 20:37:13
updated: 2021-03-15 20:37:13
author: Forrest
tags:
categories:
---

### GitHub Action 实现每日体温自动上报

采用 Python + Workflow 实现自动上报，[项目地址](https://github.com/Cream-fancy/yzdx-temperature-report)

首先在 GitHub 创建一个仓库 yzdx-temperature-report

给 Pycharm 安装 .ignore 插件 settings > plugins

```bash
git init
git add *
git commit -m "init"
git branch -M master
git remote add origin git@github.com:Cream-fancy/yzdx-temperature-report.git
git push -u origin master
```

### 采坑

**手动触发 workflow**

GitHub Ac­tions 默认是不开启手动触发的，需要在 work­flow 文件中设置 workflow_dispatch 触发事件。
