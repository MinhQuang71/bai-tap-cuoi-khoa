export const TotalWeight = () => {
    const weight = [60, 40, 55, 75, 64];
    const teamWeight = [0, 0]
    for (let i = 0; i < weight.length; i++) {
        if (i % 2 == 0) {
        teamWeight[0] += weight[i];
        } else {
            teamWeight[1] += weight[i];
        }
    }
    console.log("cân nặng của mọi người là: " + weight);
    console.log("tổng cân nặng của team 1 và team 2 lần lượt là: " + teamWeight);
}