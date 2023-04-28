function solution(wallpaper) {
    // x, y의 시작점과 끝점이 필요
    // #의 index가 필요
    const x = [];
    const y = [];
    const resultX = wallpaper.filter((item) => item.includes("#"));
    x.push(
        Math.min(...resultX.map((item) => item.indexOf("#"))),
        Math.max(...resultX.map((item) => item.lastIndexOf("#") + 1))
    );
    const resultY = wallpaper.map((item) =>
        item.includes("#") ? (item = 1) : (item = 0)
    );
    y.push(resultY.indexOf(1), resultY.lastIndexOf(1) + 1);

    const answer = [];
    answer.push(y[0], x[0], y[1], x[1]);
    return answer;
}