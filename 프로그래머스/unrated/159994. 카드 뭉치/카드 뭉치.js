function solution(cards1, cards2, goal) {
    const a = [];
    const b = [];
    // goal에서 요소가 cards1,2에 있는지 확인
    goal.map((item) => {
        if (cards1.includes(item)) {
            a.push(item);
        } else if (cards2.includes(item)) {
            b.push(item);
        } else {
            return "No";
        }
    });
    return cards1.join("").includes(a.join("")) &&
        cards2.join("").includes(b.join(""))
        ? "Yes"
        : "No";
}