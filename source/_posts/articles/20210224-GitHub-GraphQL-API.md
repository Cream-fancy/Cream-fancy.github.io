---
title: 使用 GitHub GraphQL API
date: 2021-02-24 18:54:35
updated: 2021-02-24 18:54:35
author: Forrest
tags:
- GitHub
---

## 1. GraphQL

GraphQL 是一种 API 规范，相比于 REST，它最强大的优势在于，用户能够精确的定义所需要的数据，并且毫无冗余。通过 GraphQL 一次请求就能取到通过多个 REST 请求才能获得的数据。

## 2. 一个简单的例子

[GitHub Explorer](https://docs.github.com/en/graphql/overview/explorer) 在授权后，可在线编辑并发送 GraphQL 请求，而且支持补全和纠错，对于初学者十分友好，该例子将会通过 GraphQL 完成以下的流程

- 创建一个仓库
- 在该仓库中新增 issue
- 查询该仓库全部 issue 和指定的 issue
- 删除 issue
- 删除仓库

具体用法可参阅 [GitHub GraphQL 文档](https://docs.github.com/cn/graphql)，如果不是为了深入学习，并不推荐阅读文档提供的参考和指南，而是到编辑器中根据提示来查看对象需要提供的参数，以及返回类型。

### 2.1 编辑器提示

在编辑器中输入

```graphql
mutation{
  createIssue(){
  }
}
```

此时想了解 `createIssue` 如何使用，只需悬停鼠标，提示如下

```
Mutation.createIssue: CreateIssuePayload
Creates a new issue.
```

内容大致有 3 部分

- Mutation.createIssue 点击可查看详细信息
- CreateIssuePayload 返回类型
- Creates a new issue. 提示信息

点击查看 `createIssue` 的详细信息，其中感叹号是必填项

```
TYPE
CreateIssuePayload

ARGUMENTS
input: CreateIssueInput!
```

所以 `createIssue` 调用必须提供一个 CreateIssueInput 参数，它返回一个 CreateIssuePayload 对象。继续点击 CreateIssueInput 查看详细信息。

```
repositoryId: ID!
The Node ID of the repository.

title: String!
The title for the issue.

body: String
The body for the issue description.

...
```

可以看到参数必须提供 `repositoryId` 和 `title`，其他可省略。点击 CreateIssuePayload 查看返回值信息。

```
clientMutationId: String
A unique identifier for the client performing the mutation.

issue: Issue
The new issue.
```

剩下以此类推

### 2.2 创建仓库

GitHub 的 GraphQL API 中允许的两种操作类型为查询和突变，`query` 就像 `GET` 请求，而 `mutation` 则像 `POST/PATCH/DELETE` 请求。

```graphql
mutation {
  createRepository(input: {name: "graphql-test", visibility: PRIVATE}) {
    repository {
      id
      name
      owner {
        login
      }
      createdAt
    }
  }
}
```

```json
{
  "data": {
    "createRepository": {
      "repository": {
        "id": "MDEwOlJlcG9zaXRvcnkzNDE5MDE0NzA=",
        "name": "graphql-test",
        "owner": {
          "login": "Cream-fancy"
        },
        "createdAt": "2021-02-24T12:59:14Z"
      }
    }
  }
}
```

### 2.3 创建 issue

**普通的 issue**

```graphql
mutation {
  createIssue(input: {repositoryId: "MDEwOlJlcG9zaXRvcnkzNDE5MDE0NzA=", title: "Issue 测试", body: "利用 GraphQL API 创建 Issue"}) {
    issue {
      title
      body
    }
  }
}
```

```json
{
  "data": {
    "createIssue": {
      "issue": {
        "title": "Issue 测试",
        "body": "利用 GraphQL API 创建 Issue"
      }
    }
  }
}
```

**带有 labels 的 issue**

带标签的 issue 需要提供标签 ID，首先查找标签。`query` 可缺省。

```graphql
{
  repository(name: "graphql-test", owner: "Cream-fancy") {
    labels(first: 3) {
      nodes {
        id
        color
        name
      }
    }
  }
}
```

```json
{
  "data": {
    "repository": {
      "labels": {
        "nodes": [
          {
            "id": "MDU6TGFiZWwyNzY4ODYwMjc3",
            "color": "d73a4a",
            "name": "bug"
          },
          {
            "id": "MDU6TGFiZWwyNzY4ODYwMjgw",
            "color": "0075ca",
            "name": "documentation"
          },
          {
            "id": "MDU6TGFiZWwyNzY4ODYwMjgz",
            "color": "cfd3d7",
            "name": "duplicate"
          }
        ]
      }
    }
  }
}
```

插入含 `bug documentation` 的标签

```graphql
mutation {
  createIssue(input: {repositoryId: "MDEwOlJlcG9zaXRvcnkzNDE5MDE0NzA=", title: "带标签 Issue", body: "创建带标签的 Issue", labelIds: ["MDU6TGFiZWwyNzY4ODYwMjc3", "MDU6TGFiZWwyNzY4ODYwMjgw"]}) {
    issue {
      title
      body
      labels(first: 5) {
        nodes {
          name
        }
      }
    }
  }
}
```

```json
{
  "data": {
    "createIssue": {
      "issue": {
        "title": "带标签 Issue",
        "body": "创建带标签的 Issue",
        "labels": {
          "nodes": [
            {
              "name": "bug"
            },
            {
              "name": "documentation"
            }
          ]
        }
      }
    }
  }
}
```

### 2.4 查询 issue

```graphql
{
  repository(name: "graphql-test", owner: "Cream-fancy") {
    issues(orderBy: {field: UPDATED_AT, direction: DESC}, first: 10) {
      nodes {
        id
        title
        bodyHTML
        updatedAt
        labels(first: 5) {
          nodes {
            name
            color
          }
        }
      }
      edges {
        cursor
      }
    }
  }
}
```

```json
{
  "data": {
    "repository": {
      "issues": {
        "nodes": [
          {
            "id": "MDU6SXNzdWU4MTU1MTYwMzA=",
            "title": "带标签 Issue",
            "bodyHTML": "<p>创建带标签的 Issue</p>",
            "updatedAt": "2021-02-24T14:13:18Z",
            "labels": {
              "nodes": [
                {
                  "name": "bug",
                  "color": "d73a4a"
                },
                {
                  "name": "documentation",
                  "color": "0075ca"
                }
              ]
            }
          },
          {
            "id": "MDU6SXNzdWU4MTU0OTcxNDU=",
            "title": "Issue 测试",
            "bodyHTML": "<p>利用 GraphQL API 创建 Issue</p>",
            "updatedAt": "2021-02-24T13:50:43Z",
            "labels": {
              "nodes": []
            }
          },
          {
            "id": "MDU6SXNzdWU4MTU0OTU2OTg=",
            "title": "测试一下标签",
            "bodyHTML": "",
            "updatedAt": "2021-02-24T13:49:01Z",
            "labels": {
              "nodes": []
            }
          }
        ],
        "edges": [
          {
            "cursor": "Y3Vyc29yOnYyOpK5MjAyMS0wMi0yNFQyMjoxMzoxOCswODowMM4wm8l-"
          },
          {
            "cursor": "Y3Vyc29yOnYyOpK5MjAyMS0wMi0yNFQyMTo1MDo0MyswODowMM4wm3-5"
          },
          {
            "cursor": "Y3Vyc29yOnYyOpK5MjAyMS0wMi0yNFQyMTo0OTowMSswODowMM4wm3oS"
          }
        ]
      }
    }
  }
}
```

### 2.5 删除 issue

```graphql
mutation {
  deleteIssue(input: {issueId: "MDU6SXNzdWU4MTU0OTU2OTg="}) {
    clientMutationId
  }
}
```

```
{
  "data": {
    "deleteIssue": {
      "clientMutationId": null
    }
  }
}
```

### 2.6 删除仓库

