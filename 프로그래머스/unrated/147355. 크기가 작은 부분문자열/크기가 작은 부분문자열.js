function solution(t, p) {
    // p의 length가 필요
    let getLength = p.length;
    // t를 p의 length만큼 길이로 잘라서 배열로 만들기
    const arr = [];
    for (let i in t) {
        let str = t.substr(i, getLength);
        str.length === getLength && arr.push(str);
    }
    // 배열을  map을 돌려 p의 크기와 비교해서 작은것만 추출
    const result = arr.filter((item) => item <= p);
    return result.length;
}