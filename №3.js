const arr = (array, index, defaultValue) => {
    if (index >= 0 && index < array.length) return array[index];
    else if (defaultValue !== ' ') return defaultValue;
    else if (index > array.length - 1) return null;
}
const cities = ['moscow', 'london', 'berlin', 'porto'];
console.log(arr(cities, 5, 'paris'));
