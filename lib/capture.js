module.exports = function (str) {
  // TODO
  var reg=/\d+/;
  return reg.exec(str)!=null?reg.exec(str)[0]:reg.exec(str);
}