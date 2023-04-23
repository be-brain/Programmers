function solution(n, m, section) {
    // n의 length만큼의 벽이 있다(1~8)
    // section의 value가 필요 = 칠해야할 벽면번호
    // 벽면갯수와 m(롤러길이)를 비교
    const arr = Array.from({ length: n }, (_, i) => i + 1);
    // arr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    const result = [];

    for (let i = 0; i < arr.length; i++) {
        if (section.includes(arr[i]) && !result.includes(arr[i])) {
            const a = arr.slice(i, i + m);
            result.push(...a);
        }
    }
    const answer = Math.ceil(result.length / m);
    return answer;
}