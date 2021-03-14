export default {
  test() {
    try {
      const auth = JSON.parse(localStorage.getItem('auth'));
      if (auth) { Cream.auth = auth }
    } catch (e) { }
    if (Cream && Cream.auth && Cream.auth.username !== '' && Cream.auth.token !== '' && CryptoJS.MD5(Cream.auth.token).toString() === '64e20078dc036be1685f955b32a1a14c') {
      this.success();
    } else {
      this.error();
    }
  },

  success() {
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
          this.test();
        });
        break;
      default:
        pjax.loadUrl('/auth/');
        break;
    }
  }
}