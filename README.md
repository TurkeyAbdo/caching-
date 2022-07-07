# caching-

this Repository is for caching what is caching and how does it work

## What is Caching?

In computing, a cache is a high-speed data storage layer which stores a subset of data, typically transient in nature, so that future requests for that data are served up faster than is possible by accessing the data’s primary storage location. Caching allows you to efficiently reuse previously retrieved or computed data.

## How does Caching work?

The data in a cache is generally stored in fast access hardware such as RAM (Random-access memory) and may also be used in correlation with a software component. A cache's primary purpose is to increase data retrieval performance by reducing the need to access the underlying slower storage layer.

Trading off capacity for speed, a cache typically stores a subset of data transiently, in contrast to databases whose data is usually complete and durable.

**if your js file doesn't support the import method just go to the package.json file and add "type":"module"**

## How to node cache

```
import nodeCache from 'node-cache';
import fetch from 'node-fetch';

const myCache = new nodeCache({stdTTL:10});
const todoURL = 'https://jsonplaceholder.typicode.com/todos';

if(myCache.has('todos')) {
    return myCache.get('todos')
}else{
    fetch(todoURL)
    .then(res => res.json)
    .then(data => {
        myCache.set('todos',data)
        return data
    })
}

```
