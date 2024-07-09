const express = require("express") //to use express
const app = express() 
const bodyP = require("body-parser") //to use body parser
const compiler = require("compilex") //to use compilex
const options = { stats: true }
compiler.init(options) //to initialise variable compiler
app.use(bodyP.json()) //to use body parser
app.use("/codemirror-5.65.9", express.static("C:/Users/Dell/OneDrive/Desktop/ONLINE COMPILER PROJECT/codemirror-5.65.9")) //access files of codemirror folder
app.get("/", function (req, res) { //we will host index.html file through this API
    compiler.flush(function () {
        console.log("deleted")
    })
    res.sendFile("C:/Users/Dell/OneDrive/Desktop/ONLINE COMPILER PROJECT/index.html")
})
//using compilex to run the code
app.post("/compile", function (req, res) { //create an end point with name compile
    var code = req.body.code //we will request api for particular language code
    var input = req.body.input //get input from user
    var lang = req.body.lang // which language we want
    try {

        if (lang == "Cpp") {
            if (!input) {
                var envData = { OS: "windows", cmd: "g++", options: { timeout: 10000 } }; // (uses g++ command to compile )
                compiler.compileCPP(envData, code, function (data) {
                    if (data.output) {
                        res.send(data); //create a folder named temp and will create a file that it will execute
                    }
                    else {
                        res.send({ output: "error" })
                    }
                });
            }
            else {
                var envData = { OS: "windows", cmd: "g++", options: { timeout: 10000 } }; // (uses g++ command to compile )
                compiler.compileCPPWithInput(envData, code, input, function (data) {
                    if (data.output) {
                        res.send(data);
                    }
                    else {
                        res.send({ output: "error" })
                    }
                });
            }
        }
        else if (lang == "Java") {
            if (!input) {
                var envData = { OS: "windows" };
                compiler.compileJava(envData, code, function (data) {
                    if (data.output) {
                        res.send(data);
                    }
                    else {
                        res.send({ output: "error" })
                    }
                })
            }
            else {
                //if windows  
                var envData = { OS: "windows" };
                //else
                compiler.compileJavaWithInput(envData, code, input, function (data) {
                    if (data.output) {
                        res.send(data);
                    }
                    else {
                        res.send({ output: "error" })
                    }
                })
            }
        }
        else if (lang == "Python") {
            if (!input) {
                var envData = { OS: "windows" };
                compiler.compilePython(envData, code, function (data) {
                    if (data.output) {
                        res.send(data);
                    }
                    else {
                        res.send({ output: "error" })
                    }
                });
            }
            else {
                var envData = { OS: "windows" };
                compiler.compilePythonWithInput(envData, code, input, function (data) {
                    if (data.output) {
                        res.send(data);
                    }
                    else {
                        res.send({ output: "error" })
                    }
                });
            }
        }
    }
    catch (e) {
        console.log("error")
    }
})

app.listen(9090) // in which port we want to listen