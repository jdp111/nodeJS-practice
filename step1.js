const fs = require('fs');

const file = process.argv[2]

function cat(file){
    var text = 'none'
    fs.readFile(file,'utf8',(err,data)=>{
        if (err){
            console.log(err)
            return
        }
        text = data;
        console.log(data);
    })
    }
module.exports = cat(file)