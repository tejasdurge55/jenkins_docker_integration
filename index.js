// var express = require("express");
// const os = require("os");
// const hostname = os.hostname();
// var app = express();
// app.use(express.static("public"));
// app.get("/", (req, res) => {
//   res.sendFile(__dirname + "/index.html");
// });
// app.listen(3000, "0.0.0.0");
///////////////////////////////////////////////////////
// const express = require("express");
// const os = require("os");

// const app = express();
// const port = 3000;

// app.get("/", (req, res) => {
//   const hostname = os.hostname();
//   res.send(`
//         <!DOCTYPE html>
//         <html>
//         <head>
//             <title>Hostname Display</title>
//         </head>
//         <body>
//             <h1>Hostname:</h1>
//             <p id="hostname">${hostname}</p>
//         </body>
//         </html>
//     `);
// });

// app.listen(port, "0.0.0.0", () => {
//   console.log(`Server is running on port ${port}`);
// });

const express = require("express");
const os = require("os");
const path = require("path");
const fs = require("fs");
const app = express();
const port = 3000;
app.use(express.static("public"));

app.get("/", (req, res) => {
  const hostname = os.hostname();

  const filePath = path.join(__dirname, "index.html");

  // Read the HTML file
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send("Error reading HTML file");
    } else {
      // Inject the hostname directly into the HTML content
      const htmlWithHostname = data.replace("</p>", `${hostname}</p>`);
      res.send(htmlWithHostname);
    }
  });
});

app.listen(port, "0.0.0.0", () => {
  console.log(`Server is running on port ${port}`);
});
