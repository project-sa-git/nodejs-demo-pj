const http = require("http");
const PORT = 8000;
const html = require("fs").readFileSync("./index.html");

// webサーバーを作ろう
const server = http.createServer((req, res) => {
  // ブラウザからアクセスが来たときの処理
  res.writeHead(200, { "Content-Type": "text/html" });
  // htmlのbody要素の内容
  res.write(html);
  res.end();

  if (req.method == "GET") {
    console.log("GET method");
  }
  if (req.method == "POST") {
    console.log("POST method");
  }
});

server.listen(PORT, () => {
  console.log("server-running!");
});
