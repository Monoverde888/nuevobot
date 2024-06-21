const Keyv = require('keyv');
const keyv = new Keyv("sqlite:///home/mono/bot/db.sqlite");
console.log(keyv.get("keyv", "gente"));
