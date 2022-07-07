# caching-

this Repository is for caching what is caching and how does it work

## What is Caching?

In computing, a cache is a high-speed data storage layer which stores a subset of data, typically transient in nature, so that future requests for that data are served up faster than is possible by accessing the data’s primary storage location. Caching allows you to efficiently reuse previously retrieved or computed data.

## How does Caching work?

The data in a cache is generally stored in fast access hardware such as RAM (Random-access memory) and may also be used in correlation with a software component. A cache's primary purpose is to increase data retrieval performance by reducing the need to access the underlying slower storage layer.

Trading off capacity for speed, a cache typically stores a subset of data transiently, in contrast to databases whose data is usually complete and durable.

## What are 3 nodes for caching which you should know

First is the node-cache which is that you use node js to cache your data <br/>
Second is memory cache which is a chip-based computer component that makes retrieving data from the computer's memory more efficient. It acts as a temporary storage area that the computer's processor can retrieve data from easily. This temporary storage area, known as a cache, is more readily available to the processor than the computer's main memory source, typically some form of DRAM. <br/>
Third is Distributed cache whic is A distributed cache is a system that pools together the random-access memory (RAM) of multiple networked computers into a single in-memory data store used as a data cache to provide fast access to data. While most caches are traditionally in one physical server or hardware component, a distributed cache can grow beyond the memory limits of a single computer by linking together multiple computers–referred to as a distributed architecture or a distributed cluster–for larger capacity and increased processing power.<br/>

**if your js file doesn't support the import method just go to the package.json file and add "type":"module"**

## How to node cache

```javascript
import nodeCache from "node-cache";
import fetch from "node-fetch";

const myCache = new nodeCache({ stdTTL: 10 });
const todoURL = "https://jsonplaceholder.typicode.com/todos";

if (myCache.has("todos")) {
  return myCache.get("todos");
} else {
  fetch(todoURL)
    .then((res) => res.json)
    .then((data) => {
      myCache.set("todos", data);
      return data;
    });
}
```

######resourses
https://aws.amazon.com/caching/ <br/>
https://www.youtube.com/watch?v=ae617vL5DyM <br/>
https://www.youtube.com/results?search_query=node +caching+explain <br/>
