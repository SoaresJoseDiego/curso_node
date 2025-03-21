// const http = require("http");
// const fs = require("fs");
// const port = 3000;

// const server = http.createServer((req, res) => {
//   const urlInfo = require("url").parse(req.url, true);
//   const name = urlInfo.query.name;

//   if (!name) {
//     fs.readFile("index.html", function (err, data) {
//       res.writeHead(200, { "Content-Type": "text/html" });
//       res.write(data);
//       return res.end();
//     });
//   } else {
//     fs.writeFile("arquivo.txt", name, function (err, data) {
//       res.writeHead(302, {
//         Location: "/",
//       });
//       return res.end();
//     });
//   }
// });

// server.listen(port, () => {
//   console.log(`Server rodando na porta: ${port}`);
// });

const http = require("http");
const fs = require("fs");
const url = require("url");
const port = 3000;

const server = http.createServer((req, res) => {
  const q = require("url").parse(req.url, true);
  const filename = q.pathname.substring(1);

  if (filename.includes('html')) {
   if(fs.existsSync(filename)){
    fs.readFile(filename, function(err, data) {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      return res.end();
    });
   }else {
    fs.readFile('404.html', function(err, data) {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      return res.end();
    })
   }
  } 
});

server.listen(port, () => {
  console.log(`Server rodando na porta: ${port}`);
});
