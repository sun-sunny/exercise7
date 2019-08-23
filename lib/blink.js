var marked = require('marked')

module.exports = function (str) {
  var md = marked(str)
  // TODO
  let array=md.split("@@");
  let strs="";
  array.forEach((element,index) => {
    strs+=(index%2==1)?'<blink>'+element+'</blink>':element;
  });
  return strs;
}