function getWeekends(format = 'long') {  
  if (format === 'short') {
    return ['sat', 'sun'];
  } else {
    return ['saturday', 'sunday'];
  }
}

console.log(getWeekends('short'));
