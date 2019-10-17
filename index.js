require("dotenv").config();
const server = require("./server.js");

const PORT = process.env.PORT || 5001;
server.listen(PORT, function() {
  console.log(`\n=== Web API Listening on http://localhost:${PORT} ===\n`);
});
