module.exports = function reverse (n) {
  nstr = n.toString().split("");
  nstr.reverse();
  revstr = nstr.join("");
  return parseInt(revstr);
}
