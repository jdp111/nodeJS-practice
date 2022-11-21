const fs = require('fs');
const axios = require('axios');

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



async function webCat(url){
    var content = 'none'
    try{
       content = await axios.get(url)
    }catch (error){
        console.log(error.cause)
        return
    }
    console.log(content.data)
}




const args = process.argv.slice(1)

if(args[0].slice(args.length-4) == '.txt'){
    module.exports = cat(args[0])
}

if(args[0] == '--out'){
    module.exports = cat(args[0])
}
else{
    module.exports = webCat(args[0])
}
