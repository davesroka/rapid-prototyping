module.exports = () => {
    let widgets = [];
    for (let i = 0; i < 100; i++) {
        widgets.push({
            id: i,
            name: `Widget ${i}`,
        })
    }

    return {widgets};
}
