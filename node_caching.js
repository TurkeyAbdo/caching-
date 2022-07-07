import express from 'express';
import nodeCache from 'node-cache';
import fetch from 'node-fetch';

const myCache = new nodeCache({stdTTL:10});

const app = express();
const port = 3000;

app.use(express.json());

const todoURL = 'https://jsonplaceholder.typicode.com/todos';

app.get('/todos',(req,res) => {
    if(myCache.has('todos')) {
        return res.json(myCache.get('todos'))
    }else{
        fetch(todoURL)
        .then((response) => response.json())
        .then((data) =>{
            myCache.set("todos",data)
            res.json(data);
        })
    }
})



app.listen(port || 3000,() => {
    console.log("the server is now listening at port 3000")
});