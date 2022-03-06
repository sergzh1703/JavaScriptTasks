const l = '[{"user1":1},{"user2":2}"user2"]';
let patern = /user\d+/g;
findList = l.match(patern)
console.log(findList)
console.log(findList.length)
let uniqueList = [...new Set(findList)]
console.log(uniqueList)
console.log(uniqueList.length)
