import app from "./app/app"
const { Client } = require('pg')

app.listen(app.get("port"), () => {
  console.log("Server on port", app.get("port"));
});

