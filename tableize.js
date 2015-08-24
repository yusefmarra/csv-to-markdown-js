var data = require('./strings');
var people = data.mvp.people;
var companies = data.mvp.companies;

function makeTable(csv) {
  var longest = getLongest(csv);
  csv = csv.split('\n');
  var resultStr = '';
  for (var i = 0; i < csv.length; i++) {
    var temp = csv[i].split(',');
    if (i === 1) {
      for (var k = 0; k < longest.length; k++) {
        resultStr += pad("-", longest[k], "-");
        if (k !== longest.length-1) {
          resultStr += "|";
        }
      }
      resultStr += "\n";
    }
    for (var j = 0; j < temp.length; j++) {
      if (j === longest.length-1) {
        resultStr += pad(temp[j],longest[j]," ");
      } else {
        resultStr += pad(temp[j],longest[j]," ") + "|";
      }
    }
    resultStr += "\n"
  }
  return resultStr;
}

function getLongest(csv) {
  csv = csv.split("\n");
  var longest = new Array(csv[0].split(',').length);
  for (var i = 0; i < longest.length; i++) {
    longest[i] = 0
  }
  for (var i = 0; i < csv.length; i++) {
    var temp = csv[i].split(',');
    for (var j = 0; j < temp.length; j++) {
      if (temp[j].length > longest[j]) {
        longest[j] = temp[j].length+1;
      }
    }
  }
  return longest;
}

// console.log(getLongest(companies))
console.log(makeTable(people));

function pad(str, amt, char) {
  padNeeded = amt - str.length;
  while(padNeeded > 0){
    padNeeded--;
    str += char;
  }
  return str;
}
