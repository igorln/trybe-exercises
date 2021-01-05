function hydrate(drink) {
  let water = drink.replace(/\D/g, "");
  let total = 0;
  for (let i = 0; i < water.length; i++) {
    let convert = water[i];
    total += parseInt(convert);
  }
  if (total === 1) {
    return `${total} copo de água`;
  }
    return `${total} copos de água`;
}

module.exports = hydrate;
