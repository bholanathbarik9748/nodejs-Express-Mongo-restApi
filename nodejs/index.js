const a = 300;
const b = {
    name: "a",
    age: 12
}

const c = {
    average: (a, b) => {
        console.log(a + b);
    },

    percentage: (a, b) => {
        console.log((a / b) * 100);
    },
}

module.exports = {
    a,
    b,
    c
};