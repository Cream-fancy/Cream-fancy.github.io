export default {
  test() {
    try {
      const auth = JSON.parse(localStorage.getItem('auth'));
      if (auth) { Cream.auth = auth }
    } catch (e) { }
    console.log(Cream);
    if (Cream && Cream.auth && Cream.auth.username !== '' && Cream.auth.token !== '' && CryptoJS.MD5(Cream.auth.token).toString() === '6aba0fc69dc17b1e924db551851d48ca') {
      this.success();
    } else {
      this.error();
    }
  },

  success() {
    Cream.auth.username = this.usernameMap(Cream.auth.username);
    localStorage.setItem('auth', JSON.stringify(Cream.auth));
    switch (location.pathname) {
      case '/talk/':
        Cream.talk.init();
        break;
      case '/auth/':
        pjax.loadUrl('/');  // TODO: 返回跳转来的页面
        break;
      case '/music/':
        Cream.music.loadMusic();
        break;
      default:
        break;
    }
  },

  error() {
    switch (location.pathname) {
      case '/auth/':
        $('#auth-login').on('click', ev => {
          Cream.auth.username = $('#auth-username').val();
          Cream.auth.token = Cream.utils.generateToken($('#auth-password').val());
          localStorage.clear();/** 清空本地存储 */
          this.test();
        });
        break;
      default:
        pjax.loadUrl('/auth/');
        break;
    }
  },

  usernameMap(usn) {
    usn = usn.toLowerCase();
    if (['forrest', '怼怼', 'gzm'].some(v => v == usn)) {
      return 'Forrest'
    } else {
      return 'Cream'
    }
  }
}