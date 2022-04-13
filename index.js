const ULID = require("ulid");
const { ulid } = ULID;

for (let i = 0; i < 10; i++) console.log(ulid());
