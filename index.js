var input = process.argv.slice(2, process.argv.length);
console.log("input: " + input);
var sum,
    mean,
    median,
    mode;

function calcMean(numArray) {
  if (numArray.length === 0) return null;
  sum = numArray.reduce(function (a, b) {
    return +a + +b;
  });
  // console.log("sum: " + sum);
  mean = sum / numArray.length;
  return mean;
}

function calcMedian(numArray) {
  if (numArray.length === 0) return null;
  var sorted = numArray.sort(function (a, b) {
    return a - b;
  });
  // console.log("sorted: " + sorted);
  if (sorted.length % 2) {
    median = sorted[Math.floor(sorted.length / 2)];
  } else {
    median = calcMean([sorted[Math.floor(sorted.length / 2)], sorted[Math.floor((sorted.length - 1) / 2)]]);
  }
  return median;
}

function calcMode(numArray) {
  // Shamelessly stolen from Stack Overflow: http://goo.gl/yxed6U
  // and tweaked to fix bug adding extra "1" when all elements are unique.
  // Assumes multiple modes are possible. If all inputs unique, all are modes.
  if (numArray.length == 0)
        return null;
    var modeMap = {},
        maxCount = 0, // changed from 1 to 0
        modes = [numArray[0]];

    for(var i = 0; i < numArray.length; i++)
    {
        var el = numArray[i];

        if (modeMap[el] == null)
            modeMap[el] = 1;
        else
            modeMap[el]++;

        if (modeMap[el] > maxCount)
        {
            modes = [el];
            maxCount = modeMap[el];
        }
        else if (modeMap[el] == maxCount)
        {
            modes.push(el);
            maxCount = modeMap[el];
        }
    }
    mode = modes;
    return mode;
}

calcMean(input);
console.log("mean: " + mean);
calcMedian(input);
console.log("median: " + median);
calcMode(input);
console.log("mode: " + mode);


