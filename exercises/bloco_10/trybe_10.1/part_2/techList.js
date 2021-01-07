function techList(array, name) {
  if (array == '') {
    return 'Vazio!';
  }
  const list = [];
  array.sort().forEach((tech) => {
    const temp = {
      tech: tech,
      name: name,
    };
    list.push(temp);
  });
  return list;
}

module.exports = techList;
