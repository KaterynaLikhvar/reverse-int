module.exports = function reverse (n) {
    
 if (n < 0) {
    n *= -1;
  }

str = '' + n;
str2 = '';

for (let i = str.length-1; i >= 0; i--){
  str2 += str[i];
}
return +str2;
}
