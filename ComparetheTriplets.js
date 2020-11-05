let aliceData = [5, 6, 7];
let bobData = [3, 6, 10];

const compareTriplets = (aliceData, bobData) => {
  const results = [0, 0];
  for (i = 0; i < aliceData.length; i++) {
    if (aliceData[i] > bobData[i]) {
      results[0] += 1;
    } else if (aliceData[i] < bobData[i]) {
      results[1] += 1;
    }
  }
  return results;
};

console.log(compareTriplets(aliceData, bobData));
