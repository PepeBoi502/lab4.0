function buildDefinitionList(list) {
  if (list.length === 0) {
    return '';
  }
  
  let result = '<dl>';
  
  for (let i = 0; i < list.length; i++) {
    result += `<dt>${list[i][0]}</dt><dd>${list[i][1]}</dd>`;
  }
  
  result += '</dl>';
  
  return result;
}
const definition = [
    ['Блямба', 'Выпуклость, утолщения на поверхности чего-либо'],
    ['Бобр', 'Животное из отряда грызунов'],
];
console.log(buildDefinitionList(definition));
