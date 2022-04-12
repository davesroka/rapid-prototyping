module.exports = () => {
    let tanks = [];
    for (let i = 0; i < 4; i++) {
        tanks.push({
            id: i,
            name: `Tank ${i}`,
        })
    }

    return {tanks};
}
