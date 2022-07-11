## What Are Popular Use Cases for a Distributed Cache?

There are many use cases for which an application developer may include a distributed cache as part of their architecture. These include:

Application acceleration. Applications that rely on disk-based relational databases can’t always meet today’s increasingly demanding transaction performance requirements. By storing the most frequently accessed data in a distributed cache, you can dramatically reduce the I/O bottleneck of disk-based systems. This ensures your applications run much faster, even with a large number of transactions when usage spikes.
Storing web session data. A site may store user session data in a cache to serve as inputs for shopping carts and recommendations. With a distributed cache, you can have a large number of concurrent web sessions that can be accessed by any of the web application servers that are running the system. This lets you load balance web traffic over several application servers and not lose session data should any application server fail.
Decreasing network usage/costs. By caching data in multiple places in your network, including on the same computers as your application, you can reduce network traffic and leave more bandwidth available for other applications that depend on the network.
Reducing the impact of interruptions. Depending on the architecture, a cache may be able to answer data requests even when the source database is unavailable. This adds another level of high availability to your system.
Extreme scaling. Some applications request significant volumes of data. By leveraging more resources across multiple machines, a distributed cache can answer those requests.

## What Technologies Enable Distributed Caching?

While there are many advantages to using a distributed cache, the main downside is the cost of RAM. Since RAM costs are significantly higher than disk or SSD costs, in-memory speed is not easily available to everyone. Businesses that use large distributed caches can typically justify the hardware expense through quantifiable gains of having a faster system. But with the ongoing decrease in RAM costs, in-memory processing is becoming more mainstream for all businesses. And new innovations around memory, such as the Intel® Optane™ DC Persistent Memory, businesses can adopt in-memory solutions like distributed caches at a much lower cost while leveraging RAM speeds.

On the software side, some distributed cache solutions are built on data stores such as in-memory data grids (e.g., Hazelcast IMDG) or in-memory databases. Some solutions are purpose-built for caching, but organizations deploying multiple in-memory use cases may find it more practical to leverage a consistent technology foundation where possible.
