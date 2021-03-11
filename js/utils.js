export default {
  dateFormat(date, fmt) {
    fmt = fmt || "YYYY年mm月dd日 HH:MM";
    let ret;
    const opt = {
      "Y+": date.getFullYear().toString(),
      "m+": (date.getMonth() + 1).toString(),
      "d+": date.getDate().toString(),
      "H+": date.getHours().toString(),
      "M+": date.getMinutes().toString(),
      "S+": date.getSeconds().toString()
    };
    for (let k in opt) {
      ret = new RegExp("(" + k + ")").exec(fmt);
      if (ret) {
        fmt = fmt.replace(ret[1], (ret[1].length == 1) ? (opt[k]) : (opt[k].padStart(ret[1].length, "0")))
      };
    };
    return fmt;
  },
  requestGraphql: (jsonStr, token) => {
    return new Promise((resolve, reject) => {
      fetch('https://api.github.com/graphql', {
        method: 'POST',
        body: jsonStr,
        headers: new Headers({
          'content-type': 'application/json',
          'Authorization': `bearer ${token}`
        }),
      }).then(response => response.json())
        .then(data => resolve(data))
        .catch(error => reject(error))
    })
  },
  generateToken: key => CryptoJS.AES.decrypt(CryptoJS.enc.Base64.stringify(CryptoJS.enc.Hex.parse('d761690d21d9e1aee509d7aa1f0697ead8d9850bed741be45fc2ffc60ec647c1a7683e2642872a8fa18ffb6bde1d7580')), CryptoJS.enc.Utf8.parse(key), { mode: CryptoJS.mode.ECB, padding: CryptoJS.pad.Pkcs7 }).toString(CryptoJS.enc.Utf8)
}