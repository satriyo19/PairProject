var bcrypt = require('bcryptjs');
var salt = bcrypt.genSaltSync(3);
var hash = bcrypt.hashSync("konkon", salt);

console.log(hash)

console.log(bcrypt.compareSync("B4c0/\/", hash))
console.log(bcrypt.compareSync("konkon", hash))
