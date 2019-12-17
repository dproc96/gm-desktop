module.exports = (number, size, bonus = 0) => {
    let total = 0;
    for (let i = 0; i < number; i++) {
        total += Math.ceil(Math.random() * size);
    }
    total += bonus;
    return total
}