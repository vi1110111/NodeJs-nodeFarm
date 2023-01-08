const fs = require("fs");
const http = require("http");

////////// FIELS
// Bloking, synchronous way
// const input = fs.readFileSync("./txt/input.txt", "utf-8");
// console.log(input);

// const txtOut = `This is waht we know about the avocado: ${input}\nCreated on ${Date.now()}`;
// fs.writeFileSync("./txt/output.txt", txtOut);

// Non-bloking, async way
// fs.readFile("./txt/start.txt", "utf-8", (error, data1) => {
//   fs.readFile(`./txt/${data1}.txt`, "utf-8", (error, data2) => {
//     console.log(data2);
//     fs.readFile(`./txt/append.txt`, "utf-8", (error, data3) => {
//       console.log(data3);

//       fs.writeFile("./txt/final.txt", `${data2}\n${data3}`, "utf-8", (err) => {
//         console.log("Final file created!");
//       });
//     });
//   });
// });

///////// SERVER
const server = http.createServer((req, res) => {
  console.log(req);
  res.end("Hello grom the Server!");
});

server.listen(8000, "127.0.0.1", () => {
  console.log("listening to request on port 8000");
});
