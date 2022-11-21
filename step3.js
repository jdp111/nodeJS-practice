const fs = require('fs');
const axios = require('axios');

function cat(file){
    let text = 'noefwene'
    
    fs.readFile(file,'utf8',(err,data)=>{
        if (err){
            console.log(err)
            text =  err;
            return
        }
        console.log(data);
        text =  data;
        })
    
    return text
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
    return content.data
}


async function write(file1, file2){
    const text = await cat(file1)
    console.log(text)
    fs.writeFile(file2,text,(err)=> {
        return
    })
    return text
}


async function combine(one,two){
    const text = await decide(two)
    fs.writeFile(one,text,(err)=> {
        return
    })
    return text
}


function decide(args){

    if(args.slice(args.length-4) == '.txt'){
        return cat(args)
    }

    else if (args.slice(0,8) === 'https://'||args.slice(0,7) === 'http://'){
        
        return webCat(args)
    }

    else if(args == '--out'){
        return combine(process.argv[3], process.argv[4])
    }

    else{
        return console.log('invalid command')
    }
}

module.exports = decide(process.argv[2])