
const express = require("express");
const cors = require("cors");

app.use(cors());
app.use(express.json())
const mainRouter = require("./routes/index");
    const app = express();
  
    

    app.use("/api/v1", mainRouter);
//app.use("/api/v2", v2Router);
app.listen(3000);



