import express, { Request, Response } from "express"
//import { ENUM } from "./myFolder/declaration"
import { ENUM } from "@library/declaration"

var app = express();

app.get("/", (req : Request, res: Response) => {
    console.log("Here is the enum problem : " + ENUM.ONE)
    res.send("Hello")
})

app.listen(3400, () => {
    console.log(`App listening on port ${3400}`);
});
