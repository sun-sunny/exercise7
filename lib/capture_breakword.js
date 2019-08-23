module.exports = function (str) {
  // TODO
  var reg=/(?<=\s)x=(\w+)|^x=(\w+)/;
  let data=reg.exec(str)!=null?(reg.exec(str)[1]!=undefined?reg.exec(str)[1]:reg.exec(str)[2]):reg.exec(str);
  var reg2=/^\d+$/;
  return data!=null?reg2.exec(data):data;
}