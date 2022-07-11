import express from "express";
import fetch from "node-fetch";
import redis from "redis";

const PORT  = process.env.PORT || 5000;
const REDIS_PORT = process.env.REDIS_PORT || 6379;

const client = redis.createClient(REDIS_PORT)

const app = express();

// create a function to send response
const setResponse = (username,repo) =>{
    return  `<h1>the user ${username} has ${repo} repos</h1>`
}

// create a function to fetch data 
const getRepos = async(req,res) => {
    try{
        const {username} = req.params;

        const response = await fetch(`https://api.github.com/users/${username}`);

        const data = await response.json();

        const repos = data.public_repos;
        // console.log(repos,username)

        // set data to redis
        client.set(username,repos);

        res.send(setResponse(username, repos))  
        // res.json(repos);      

    }catch(err) {
        console.log(err);
        res.status(500);
    }

}

// cache middleware
const cacheMiddle = (req,res,next) => {
    const {username} = req.params;
    client.get(username,(err,data) => {
        if(err) {
            console.log(err);
        }
        if(data !== null) {
            res.send(setResponse(username,data));
        }else{
            next();
        }
    })
}

app.get("/users/:username", cacheMiddle,getRepos)

app.listen(PORT|| 5000 , () => {
    console.log(`app is listening at PORT ${PORT}`)
})