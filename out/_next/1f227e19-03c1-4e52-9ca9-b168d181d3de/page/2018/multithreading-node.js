
          window.__NEXT_REGISTER_PAGE('/2018/multithreading-node', function() {
            var comp = module.exports=webpackJsonp([11],{461:function(e,t,a){e.exports=a(462)},462:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=a(1),o=l(n),r=a(34),u=l(r),i=a(35),s=l(i),d=a(21),c=l(d),h=a(36),f=l(h),m=a(37),p=l(m),g=a(38),w=a(39),y=a(40),E=a(41),b=l(E),v=a(26),I=a(27),k=l(I);t.default=function(){return o.default.createElement(s.default,null,o.default.createElement(p.default,{category:"/essays",id:"multithreading-node",hasCover:!0}),o.default.createElement(c.default,null,"When I wrote one of my first projects for"," ",o.default.createElement(f.default,{href:"https://zeit.co"},"ZEIT")," somewhere in the middle of 2016, I was doing a lot of sychronous operations, although I already had put a transpilation setup for ",o.default.createElement(g.InlineCode,null,"async")," and"," ",o.default.createElement(g.InlineCode,null,"await")," in place. The reason being that I just didn","'","t see a difference between these two."),o.default.createElement(c.default,null,"Then, a few days later, when it was time to publish the package,"," ",o.default.createElement(f.default,{href:"https://twitter.com/rauchg"},"rauchg")," wrote me on Slack saying that I should write more asynchronous code because I would otherwise be making ",'"',"the concurrency of the process plummet",'"',"."),o.default.createElement(c.default,null,"Back then, I simply did what he told me and immediately noticed a slight performance boost. From there on, I never used any native synchronous functions (or packages) again and went completely asynchronous."),o.default.createElement(c.default,null,"However, I didn","'","t manage to ask him why it","'","s like that. We were shipping a lot of stuff at that time and I simply forgot about it."),o.default.createElement(c.default,null,"Now, nearly a year later, I came across this topic again because native support for both keywords"," ",o.default.createElement(f.default,{href:"https://twitter.com/notquiteleo/status/834330621107433472"},"has landed")," ","and I spent a lot of time thinking about how we could take advantage of that at ",o.default.createElement(f.default,{href:"https://zeit.co"},"ZEIT"),". So I collected my thoughts and we had a detailed discussion about why everyone should ",o.default.createElement(g.InlineCode,null,"await")," asynchronous functions, rather than using sychronous ones (like"," ",o.default.createElement(g.InlineCode,null,"fs.statSync"),")."),o.default.createElement(c.default,null,"The reason why I","'","m writing this post is because this newly aquired skill seems very valuable to me, since it brings me closer to understanding the backbone of Node.js and allows me to improve the performance of my code drastically."),o.default.createElement(c.default,null,"Therefore, I thought making my learning progress public could make others - who","'","re in the same position - profit from this knowledge as well. At the same time, it helps me to strengthen my understanding of it."),o.default.createElement(w.H2,null,"Node.js Code Is Run Concurrently, Not in Parallel"),o.default.createElement(c.default,null,"When I first heard about this statement, I got a little confused. Because, initially, I thought both words would mean the same."),o.default.createElement(c.default,null,"In the context of computing processes, however, I learned that this assumption is not always true:"),o.default.createElement(c.default,null,"While ",o.default.createElement("b",null,"parallel")," operations are both started at the same time and literally run simultaneously (which is only possible with multi-core CPUs), ",o.default.createElement("b",null,"concurrent")," ones might both make process regardless of the other, but cannot run at the same time (suitable for single-core CPUs).",o.default.createElement(y.Ref,{id:"1"})),o.default.createElement(c.default,null,"Let me clarify that with an example:"),o.default.createElement(g.Code,{language:"javascript",syntax:u.default},"setInterval(() => {\n  console.log('Interval dispatched')\n}, 1000)\n\nloadDataSync()\nconsole.log('Data downloaded')"),o.default.createElement(c.default,null,"As you can see, I","'","m handling two tasks: The first three lines introduce an interval that gets executed every 1000 milliseconds (one second) and the last line calls an arbitrary function which is doing something in a synchronous way."),o.default.createElement(c.default,null,"Now the interesting part:"),o.default.createElement(c.default,null,"Although the code for starting the interval gets executed ",o.default.createElement("b",null,"before")," ","the synchronous function gets called, the callback inside"," ",o.default.createElement(g.InlineCode,null,"setInterval()")," won","'","t be run before ",o.default.createElement(g.InlineCode,null,"loadDataSync()")," has returned something."),o.default.createElement(c.default,null,"This is because of Node/JavaScript","'","s concurrent nature. Its backbone consists of a single-threaded event loop and therefore doesn","'","t allow for operations running in parallel out of the box."),o.default.createElement(c.default,null,"Or as Panu from ",o.default.createElement(f.default,{href:"https://bytearcher.com"},"Byte Archer")," ","puts it:"),o.default.createElement(b.default,null,"The event-loop repeatedly takes an event and fires any event handlers listening to that event one at a time. No JavaScript code is ever executed in parallel.",o.default.createElement("br",null),o.default.createElement("br",null),"As long as the event handlers are small and frequently wait for yet more events themselves, all computations (for example fulfilling and serving a HTTP request) can be thought as advancing one small step at a time - concurrently. This is beneficial in web applications where the majority of the time is spent waiting for I/O to complete. It allows single Node.js process to handle huge amounts of requests."),o.default.createElement(c.default,null,"So technically, nothing can guarantee you that intervals in Node.js will always get executed on the exact times you","'","ve defined. Instead, the execution of the callback will be enqueued on a certain point in time, but will only start once the thread isn","'","t handling any other operation."),o.default.createElement(c.default,null,"As an example, the ",o.default.createElement(g.InlineCode,null,"loadDataSync()")," function call shown in the snippet above might take - let","'","s say - ",o.default.createElement("b",null,"five seconds")," to download some data. This would mean that the callback of ",o.default.createElement(g.InlineCode,null,"setInterval()")," will get enqueued after ",o.default.createElement("b",null,"1000 milliseconds"),", but not actually executed until ",o.default.createElement("b",null,"five seconds")," have passed."),o.default.createElement(c.default,null,"Because 1000 milliseconds fit into five seconds - guess what - five times",o.default.createElement(y.Ref,{id:"2"}),", in our example, the callback execution would therefore get enqueued that often. In turn, you","'","ll get the message logged to the console five times, immediately after ",'"',"the data was downloaded",'"',":"),o.default.createElement(v.Image,{src:"/static/essays/2017/multithreading-node/blocking.gif",width:"380",isWindow:!0}),o.default.createElement(w.H2,null,"Quick! ",o.default.createElement(g.InlineCode,null,"await")," To the Rescue!"),o.default.createElement(c.default,null,"To solve this problem, we need to make the operation for pulling the data non-blocking. At the moment, it","'","s still synchronous and therefore making the process","'"," performance plummet."),o.default.createElement(c.default,null,"Here","'","s how it looks with ",o.default.createElement(g.InlineCode,null,"await"),":"),o.default.createElement(g.Code,{language:"javascript",syntax:u.default},"setInterval(() => {\n  console.log('Interval dispatched')\n}, 1000)\n\nawait loadData()\nconsole.log('Data downloaded')"),o.default.createElement(c.default,null,"To make this work, you would also have to rewrite your sychronous function into an asynchronous one (either a ",o.default.createElement(g.InlineCode,null,"Promise")," or a function prefixed with ",o.default.createElement(g.InlineCode,null,"async"),")."),o.default.createElement(c.default,null,"To make my point clear, I came up with an arrow function that simulates the case of ",o.default.createElement(g.InlineCode,null,"loadData()")," taking 5000 milliseconds to finish:"),o.default.createElement(g.Code,{language:"javascript",syntax:u.default},"const loadData = () => new Promise(resolve => {\n  setTimeout(resolve, 5000)\n})"),o.default.createElement(c.default,null,"Now the data is being downloaded ",o.default.createElement("b",null,"concurrently")," with the interval","'","s callback getting executed every 1000 milliseconds. The operation can be called ",'"',"non-blocking",'"'," now. In turn, our script just got much faster:"),o.default.createElement(v.Image,{src:"/static/essays/2017/multithreading-node/non-blocking.gif",width:"380",isWindow:!0}),o.default.createElement(c.default,null,"As you can see, even though the function is now acting asynchronously, the interval output never shows up after exact 1000 milliseconds. It","'","s always a slightly different number."),o.default.createElement(c.default,null,"That","'","s because the callback WILL get triggered after that time, but Node.js takes some time to actually execute the code inside it. This, however, is as close as we can get to raw performance using"," ",o.default.createElement(g.InlineCode,null,"async")," and ",o.default.createElement(g.InlineCode,null,"await"),"."),o.default.createElement(w.H2,null,"Making Our Way into the Light"),o.default.createElement(c.default,null,"However, speeding up our code to the maximum isn","'","t quite so easy. There","'","s still a lot room left for improvement!"),o.default.createElement(c.default,null,"Although we","'","ve fixed the problem of blocking the code by using asynchronous operations (a.k.a. ",'"',"unblocking it",'"',"), part of it is still run concurrently."),o.default.createElement(c.default,null,"To understand this, we need to dive a little deeper:"),o.default.createElement(c.default,null,"In our example, we","'","re handling two operations: Dispatching an interval every 1000 milliseconds and downloading data."),o.default.createElement(c.default,null,"Now the tricky part:"),o.default.createElement(c.default,null,"The code I","'","ve shown you above introduces a function call of"," ",o.default.createElement(g.InlineCode,null,"loadData()")," preceded by the"," ",o.default.createElement(g.InlineCode,null,"await")," keyword. As indicated by the name, it could be used for loading some data from a certain origin (like the web)."),o.default.createElement(c.default,null,"This means that we","'","re dealing with a special kind of operation. Why? Because it won","'","t happen entirely inside that single thread we","'","ve talked about."),o.default.createElement(c.default,null,"Instead, actions like fetching raw data and such are processed directly by the"," ",o.default.createElement(f.default,{href:"https://en.wikipedia.org/wiki/Kernel_(operating_system)"},"kernel")," ","(which can be thought of as a separate ",'"',"thread",'"'," or ",'"',"process",'"'," - independent from the thread the interval is running in)."),o.default.createElement(c.default,null,"Only the remaining ",'"',"sub operations",'"'," required for loading the data (like processing the JavaScriptON response, which is mostly blocking) will be left to Node.js and are therefore run in that single-threaded event loop."),o.default.createElement(c.default,null,"In turn, part of our code is still running concurrently. Both the processing of the response received from the kernel and the interval are sharing the same thread and are therefore not able to run"," ",o.default.createElement("b",null,"truly in parallel"),". Instead, they","'","re basically only ",o.default.createElement("b",null,"swapping turns")," (that","'","s the essence of the term ",'"',"concurrency",'"',")."),o.default.createElement(w.H2,null,"The Holy Performance Grail"),o.default.createElement(c.default,null,"A process can contain multiple threads. Each of these threads can only handle one operation at the time. As a consequence, running the two operations in parallel would require creating two threads: One for the inverval and one for downloading the data. Right?"),o.default.createElement(c.default,null,"Yep, that","'","s correct."),o.default.createElement(c.default,null,"But sadly, a Node.js process only comes"," ",o.default.createElement("b",null,"with a single thread out of the box")," (like mentioned"," ",o.default.createElement(f.default,{href:"#node-JavaScript-code-is-run-concurrently-not-in-parallel"},"before"),"). This means that we can","'","t increase the number of threads and will therefore only ever be able to handle ",o.default.createElement("b",null,"a single operation")," at the same time."),o.default.createElement(c.default,null,"As a result, we need to extend its default behavior if we want to run things truly in parallel. And that","'","s where the native"," ",o.default.createElement(f.default,{href:"https://nodeJavaScript.org/api/cluster.html"},"cluster")," ","module comes in:"),o.default.createElement(c.default,null,"Since we can only have one operation per thread (and therefore per process in the case of Node.js), we need to create multiple processes to achieve our goal of parallelism. But that","'","s not very hard."),o.default.createElement(c.default,null,"Here","'","s an example how this could look:"),o.default.createElement(g.Code,{language:"javascript",syntax:u.default},"const cluster = require('cluster')\n\nif (cluster.isMaster) {\n  setInterval(() => {\n    console.log('Interval dispatched')\n  }, 1000)\n\n  cluster.fork()\n} else {\n  await loadData()\n  console.log('Data downloaded')\n}"),o.default.createElement(c.default,null,"Now we","'","re taking advantage of"," ",o.default.createElement(f.default,{href:"https://nodeJavaScript.org/api/cluster.html"},"cluster"),"'","s built-in ",o.default.createElement(g.InlineCode,null,".fork")," method to make a copy of the current process. In addition, we","'","re checking if we","'","re still on the main one or on a clone. If we are, we create the interval and if we","'","re not, we load the data."),o.default.createElement(c.default,null,"The result of these few lines of code are operations that are actually running in parallel. They","'","re not started at the exact same time, bot are both running in separate processes. In turn, they can both make process at the same time."),o.default.createElement(w.H3,null,"A Butter Biscuit"),o.default.createElement(c.default,null,"If adding that module to your project wasn","'","t easy enough, we actually made multithreading even more straightforward by equipping ",o.default.createElement(f.default,{href:"https://zeit.co/now"},"now")," with a really neat scaling algorithm, which seamlessly spawns multipe copies of your project without you even having to touch any code."),o.default.createElement(c.default,null,"Hence, you don","'","t even need"," ",o.default.createElement(f.default,{href:"https://nodeJavaScript.org/api/cluster.html"},"cluster")," if your project is running on our platform. Just ensure that you","'","re applying ",o.default.createElement(f.default,{href:"#quick-await-to-the-rescue"},"this technique")," ","wherever it","'","s possible."),o.default.createElement(w.H3,null,"That","'","s It!"),o.default.createElement(c.default,null,"By now, you should understand why ",o.default.createElement(g.InlineCode,null,"await")," is a much better idea than synchronous operations what to do if that","'","s not enough."),o.default.createElement(c.default,null,"I hope this post helped you to sharpen your mindset for being able to choose the best direction when it comes to achieving the maximum of performance for your future projects."),o.default.createElement(k.default,null),o.default.createElement(c.default,null,"Big 🤗 to ",o.default.createElement(f.default,{href:"https://twitter.com/OVanhoja"},"Olli")," and"," ",o.default.createElement(f.default,{href:"https://twitter.com/rauchg"},"Guillermo")," for taking the time to clear up the confusion I had in my mind about this topic (+ proofreading this essay) and"," ",o.default.createElement(f.default,{href:"https://twitter.com/nVoidRayy"},"Matthias")," for the cute cover image!"),o.default.createElement(c.default,null,"I","'","m truly happy to have such amazing mentors!"),o.default.createElement(y.FootNotes,null,o.default.createElement(y.Note,{id:"1"},"If you want to deeply understand the difference between concurrency and parallelism and why Node.js only comes with the former way of processing code, I highly recommend reading"," ",o.default.createElement(f.default,{href:"https://bytearcher.com/articles/parallel-vs-concurrent/"},"this"),"."),o.default.createElement(y.Note,{id:"2"},"WOW, we","'","re doing some really heavy stuff here...")))}}},[461]);
            return { page: comp.default }
          })
        