export default {
  loadMusic() {
    if (!window.APlayer) {
      let customScript = document.getElementById('cream-script');
      let jsAplayer = document.createElement('script');
      jsAplayer.src = 'https://cdn.jsdelivr.net/npm/aplayer@1.10/dist/APlayer.min.js';
      jsAplayer.onload = function () {
        if (!window.MetingJSElement) {
          let jsMeting = document.createElement('script');
          jsMeting.src = 'https://cdn.jsdelivr.net/npm/meting@2.0/dist/Meting.min.js';
          jsMeting.onload = () => { window.volantis.APlayerLoaded = 1 }
          customScript.insertAdjacentElement('beforeend', jsMeting);
        }
      }
      customScript.insertAdjacentElement('beforeend', jsAplayer);
    }
  },
  queryMusic() {
    // http://musicapi.leanapp.cn/search?keywords=
  },
  queryTv() {
    document.getElementById('custom-music-btn').addEventListener('click', () => {
      console.log(document.getElementById('custom-music-kw').value);
      fetch('http://www.zdziyuan.com/inc/api.php')
        .then(response => response.text())
        .then(str => (new window.DOMParser()).parseFromString(str, "text/xml"))
        .then(data => {
          console.log(data);
          let vlist = [];
          $(data).find('list video').each((i, e) => {
            const v = $(e);
            vlist.push({
              id: v.find('id').text(),
              name: v.find('name').text(),
              type: v.find('type').text(),
              note: v.find('note').text(),
              last: v.find('last').text()
            })
          })
          console.log(vlist);
        })
        .catch(e => console.error('获取失败，跨域', e))
    })
  }
}