export const Multiply = () => {
    const Arr = [1, 5, -3, -1, 7, 20];
    let a = Arr[0] * Arr[1];
    let x = 0;
    for (let i = 0; i < Arr.length - 1 ; i++) {
        let b = Arr[i] * Arr[i+1];
        if (a > b) {
            x = a;
        } else {
            x = b;
            a = b;
        }
    }
    console.log("Tích to nhất bằng: " + x);
}