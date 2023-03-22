const http = require("http");
const app = require("./app");
const server = http.createServer(app);

const { PORT } = process.env;
const port = process.env.PORT || 4001;

// server listening 
server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});