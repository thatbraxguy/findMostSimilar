// dist :: String, Int, String, Int -> Int
function dist(s, sLen, t, tLen) { 
  if (sLen === 0) {
    return tLen;
  } else if(tLen === 0) {
    return sLen;
  }
  
  const cost = (s[sLen -1] === t[tLen - 1]) ? 0 : 1;
  return Math.min(
    dist(s, sLen - 1, t, tLen) + 1,
    dist(s, sLen, t, tLen - 1) + 1,
    dist(s, sLen - 1, t, tLen - 1) + cost,
  );
}

// findClosest :: String, [String] -> String
function findMostSimilar(source, targets) {
  const sLen = source.length;
  
  // scoreStruct :: { score: Int, target: String }
  const { target } = targets.reduce((acc, target) => {
    const score = dist(source, sLen, target, target.length);
    return score > acc.score ? acc : ({ score, target});
  });

  return target;
}

export default findMostSimilar;
