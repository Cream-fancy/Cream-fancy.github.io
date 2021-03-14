export default {
  el: {
    loader: null,
    more: null,
    issues: null,
    tabIdx: 1,
    content: null,
    preview: null,
    labels: null,
  },
  pageInfo: {
    hasNextPage: true,
    endCursor: null
  },

  init() {
    this.el = {
      loader: $('.is-loader').eq(0),
      more: $('.is-more').eq(0),
      issues: $('#talk-issues'),
      tabIdx: 1,
      content: $('#talk-markdown-content'),
      preview: $('#talk-markdown-preview'),
      labels: $('#talk-labels')
    }
    $('#talk-release').on('click', ev => {
      if (confirm('确定发布该说说')) {
        this.addTalk();
      }
    })
    $('#talk-more').on('click', ev => {
      this.getTalk();
    })
    $('.tabs .nav-tabs').on('click', 'a', async ev => {
      let target = $(ev.target);
      console.log(this.el.tabIdx, target);
      if (this.el.tabIdx == 1 && target.hasClass('#talk-markdown-2')) {
        let htmlText = await Cream.utils.markdownPreview(this.el.content.val().trim(), Cream.auth.token);
        this.el.preview.html(htmlText);
      }
      this.el.tabIdx = target.hasClass('#talk-markdown-2') ? 2 : 1;
    })
    this.pageInfo.hasNextPage = true, this.pageInfo.endCursor = null;
    this.getLabels();
    this.getTalk();
  },

  getLabelColor(color) {
    let rgb = [];
    for (let i = 0; i < 6; i += 2) {
      rgb.push(parseInt("0x" + color.slice(i, i + 2)));
    }
    const lightness = Math.max(0, Math.min((((rgb[0] * 0.2126 + rgb[1] * 0.7152 + rgb[2] * 0.0722) / 255) - 0.453) * -1000, 1))
    return `hsl(0, 0%, calc(${lightness} * 100%))`;
  },

  async getLabels() {
    const res = await Cream.utils.requestGraphql(Cream.graphql.getLabels(), Cream.auth.token);
    res.data.repository.labels.nodes.forEach(o => {
      this.el.labels.append($(`<div class="labels-label ${o.name == '👀小声哔哔' ? 'label-active' : ''}" data-id="${o.id}" style="background-color: #${o.color}; color: ${this.getLabelColor(o.color)}">${o.name}</div>`))
    })
    this.el.labels.on('click', ev => {
      let target = $(ev.target);
      if (!target.hasClass('is-labels')) {
        $(ev.currentTarget).children('.label-active').removeClass('label-active');
        target.addClass('label-active');
      }
    })
  },

  async getTalk() {
    if (this.pageInfo.hasNextPage) {
      this.el.loader.show();
      this.el.more.hide();
      const res = await Cream.utils.requestGraphql(Cream.graphql.getIssues({ cursor: this.pageInfo.endCursor, pageSize: 8 }), Cream.auth.token);
      let issues = res.data.repository.issues;
      this.pageInfo = issues.pageInfo;
      issues.nodes.forEach((o) => { this.insertDOM(o) });
      this.el.loader.hide();
      if (issues.pageInfo.hasNextPage) {
        this.el.more.show();
      }
    }
  },

  async addTalk() {
    const talkContent = this.el.content.val().trim();
    if (talkContent != '') {
      this.el.loader.show();
      this.el.more.hide();
      this.el.content.val('');
      this.el.issues.html('');
      const res = await Cream.utils.requestGraphql(Cream.graphql.addIssue({
        title: Cream.auth.username,
        body: talkContent,
        label: this.el.labels.find('.label-active')[0].dataset.id
      }), Cream.auth.token);
      res.data.createIssue.issue;
      this.pageInfo.hasNextPage = true, this.pageInfo.endCursor = null;
      this.getTalk();
    }
  },

  insertDOM(o) {
    let labels = o.labels.nodes;
    let label = labels.length ? labels[0] : { name: '暂无标签', color: '077a54' };
    let date = Cream.utils.dateFormat(new Date(o.createdAt));
    // <span class="is-verified-badge"><svg class="is-badge" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"> <path d="m512 268c0 17.9-4.3 34.5-12.9 49.7s-20.1 27.1-34.6 35.4c.4 2.7.6 6.9.6 12.6 0 27.1-9.1 50.1-27.1 69.1-18.1 19.1-39.9 28.6-65.4 28.6-11.4 0-22.3-2.1-32.6-6.3-8 16.4-19.5 29.6-34.6 39.7-15 10.2-31.5 15.2-49.4 15.2-18.3 0-34.9-4.9-49.7-14.9-14.9-9.9-26.3-23.2-34.3-40-10.3 4.2-21.1 6.3-32.6 6.3-25.5 0-47.4-9.5-65.7-28.6-18.3-19-27.4-42.1-27.4-69.1 0-3 .4-7.2 1.1-12.6-14.5-8.4-26-20.2-34.6-35.4-8.5-15.2-12.8-31.8-12.8-49.7 0-19 4.8-36.5 14.3-52.3s22.3-27.5 38.3-35.1c-4.2-11.4-6.3-22.9-6.3-34.3 0-27 9.1-50.1 27.4-69.1s40.2-28.6 65.7-28.6c11.4 0 22.3 2.1 32.6 6.3 8-16.4 19.5-29.6 34.6-39.7 15-10.1 31.5-15.2 49.4-15.2s34.4 5.1 49.4 15.1c15 10.1 26.6 23.3 34.6 39.7 10.3-4.2 21.1-6.3 32.6-6.3 25.5 0 47.3 9.5 65.4 28.6s27.1 42.1 27.1 69.1c0 12.6-1.9 24-5.7 34.3 16 7.6 28.8 19.3 38.3 35.1 9.5 15.9 14.3 33.4 14.3 52.4zm-266.9 77.1 105.7-158.3c2.7-4.2 3.5-8.8 2.6-13.7-1-4.9-3.5-8.8-7.7-11.4-4.2-2.7-8.8-3.6-13.7-2.9-5 .8-9 3.2-12 7.4l-93.1 140-42.9-42.8c-3.8-3.8-8.2-5.6-13.1-5.4-5 .2-9.3 2-13.1 5.4-3.4 3.4-5.1 7.7-5.1 12.9 0 5.1 1.7 9.4 5.1 12.9l58.9 58.9 2.9 2.3c3.4 2.3 6.9 3.4 10.3 3.4 6.7-.1 11.8-2.9 15.2-8.7z" fill="#1da1f2"></path> </svg></span>
    this.el.issues.append($(`<div class="is-issue" style="transform-origin: center top;" data=id="${o.id}"> <div class="is-issue-content"> <div class="is-issue-header"><span class="is-issue-username">${o.title} ${o.title == 'Forrest' ? '🙈' : '🦄'}</span><span class="is-issue-text">·</span><span class="is-issue-date">${date}</span><span class="is-issue-label" style="background-color: #${label.color}; color: ${this.getLabelColor(label.color)}">${label.name}</span></div> <div class="is-issue-body markdown-body"> ${o.bodyHTML} </div> <div class="is-issue-footer"><a class="is-issue-icon is-issue-reaction  "> <div class="is-icon-reaction-wrap"><svg class="is-icon" aria-hidden="true"> <use xlink:href="#icon-like"></use> </svg></div><span class="is-reaction-count">1</span> </a><a class="is-issue-icon is-issue-comment"> <div class="is-icon-comment-wrap"><svg class="is-icon" aria-hidden="true"> <use xlink:href="#icon-comment"></use> </svg></div><span class="is-comment-count">0</span> </a></div> </div> </div>`));
  }
}