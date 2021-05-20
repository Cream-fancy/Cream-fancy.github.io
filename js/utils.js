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
  requestGraphql: (reqObj, token) => {
    return new Promise((resolve, reject) => {
      fetch('https://api.github.com/graphql', {
        method: 'POST',
        body: JSON.stringify(reqObj),
        headers: new Headers({
          'content-type': 'application/json',
          'Authorization': `bearer ${token}`
        }),
      }).then(response => response.json())
        .then(data => resolve(data))
        .catch(error => reject(error))
    })
  },
  markdownPreview(reqText, token) {
    return new Promise((resolve, reject) => {
      fetch('https://api.github.com/markdown', {
        method: 'POST',
        body: JSON.stringify({ text: reqText }),
        headers: new Headers({
          'accept': 'application/vnd.github.v3+json',
          'content-type': 'application/json',
          'Authorization': `bearer ${token}`
        })
      }).then(response => resolve(response.text()))
    })
  },
  generateToken: key => CryptoJS.AES.decrypt(CryptoJS.enc.Base64.stringify(CryptoJS.enc.Hex.parse('9509d8f55f0aefd4e4ea3c79f9990f08325d4f71483ad96d02411791f39e95acd640cdbae6a907572a0b719d170c08c2')), CryptoJS.enc.Utf8.parse(key), { mode: CryptoJS.mode.ECB, padding: CryptoJS.pad.Pkcs7 }).toString(CryptoJS.enc.Utf8)
}