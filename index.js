const fs = require("fs");

// Bloking, synchronous way
const input = fs.readFileSync("./txt/input.txt", "utf-8");
console.log(input);

const txtOut = `This is waht we know about the avocado: ${input}\nCreated on ${Date.now()}`;
fs.writeFileSync("./txt/output.txt", txtOut);

// Non-bloking, async way
