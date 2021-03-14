class GraphQL {
  constructor(owner, repo, repoId) {
    this.owner = owner || "Cream-fancy";
    this.repo = repo || "blog-talk";
    this.repoId = repoId || "MDEwOlJlcG9zaXRvcnkzNDE5MDE0NzA=";
  }


  addIssue(vars) {
    const ql = `
    mutation addIssue($repoId: ID!, $title: String!, $body: String!, $label: ID!) {
      createIssue(input: {repositoryId: $repoId, title: $title, body: $body, labelIds: [$label]}) {
        issue {
          id
          number
          createdAt
          bodyHTML
          comments(first: 1) {
            totalCount
          }
          labels(first: 1) {
            nodes {
              name
              color
            }
          }
        }
      }
    }
    `

    vars.repoId = vars.repoId || this.repoId;

    return {
      operationName: 'addIssue',
      query: ql,
      variables: vars
    }
  }


  getIssues(vars) {
    const ql = `
    query getIssues($owner: String!, $repo: String!, $cursor: String, $pageSize: Int!) {
      repository(owner: $owner, name: $repo) {
        issues(first: $pageSize, after: $cursor, orderBy: {field: CREATED_AT, direction: DESC}, filterBy: {createdBy: $owner, states: OPEN}) {
          pageInfo {
            hasNextPage
            endCursor
          }
          nodes {
            id
            number
            createdAt
            title
            bodyHTML
            comments(first: 1) {
              totalCount
            }
            labels(first: 1) {
              nodes {
                name
                color
              }
            }
          }
        }
      }
    }
    `
    if (vars.cursor === null) delete vars.cursor
    vars.owner = vars.owner || this.owner;
    vars.repo = vars.repo || this.repo;

    return {
      operationName: 'getIssues',
      query: ql,
      variables: vars
    }
  }

  getLabels() {
    return {
      operationName: 'getLabels',
      query: `
      query getLabels($owner: String!, $repo: String!) {
        repository(owner: $owner, name: $repo) {
          labels(first: 10) {
            nodes {
              id
              name
              color
            }
          }
        }
      }
      `,
      variables: { owner: this.owner, repo: this.repo }
    }
  }


  unlike = id => ({
    operationName: 'RemoveReaction',
    query: `
    mutation RemoveReaction {
      removeReaction(input: {subjectId: "${id}", content: HEART}) {
        reaction {
          content
        }
      }
    }
    `
  })


  like = id => ({
    operationName: 'AddReaction',
    query: `
    mutation AddReaction {
      addReaction(input: {subjectId: "${id}", content: HEART}) {
        reaction {
          user {
            login
          }
        }
      }
    }
    `
  })
}

export default GraphQL