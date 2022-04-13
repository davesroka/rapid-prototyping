module.exports = () => {
    let tanks = [];
    for (let i = 0; i < 4; i++) {
        tanks.push({
            id: i,
            name: `Tank ${i}`,
            amount: 100,
            temp: 78
        })
    }

    return {tanks};
}
