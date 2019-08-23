module.exports = function (str) {
  // TODO
  // reg=/^\\0[xX](?:[A-Fa-f0-9]){2,5}(?:,\\0[xX](?:[a-fA-F0-9]){2,5})*$/;
  var reg=/(\b0x[a-fA-F0-9][a-fA-F0-9]\s+){8}/;
  var reg2=/(\b0x[a-fA-F0-9][a-fA-F0-9]\s+){9,}/
  return reg.test(str)&&(!reg2.test(str));
}