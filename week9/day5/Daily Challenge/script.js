function isAnagram(str1, str2) {

  str1 = str1.replace(/\s/g, "");
  str2 = str2.replace(/\s/g, "");
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();

if (str1.length !== str2.length) {
  return false;
  }

let count = {};
for (let letter of str1) {
  count[letter] = (count[letter] || 0) + 1;
  }
for (let letter of str2) {
  count[letter] = (count[letter] || 0) - 1;
  }

for (let value of Object.values(count)) {
if (value !== 0) {
  return false;
  }
  }
  return true;
  }