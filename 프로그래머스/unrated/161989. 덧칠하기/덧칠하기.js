function solution(n, m, section) {
  let answer = 0;
  let count = 0;
  section.forEach((item) => {
    if (item > count) {
      answer++;
      count = item + m - 1;
    }
  });
  return answer;
}