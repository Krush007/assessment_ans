// part 1
// j1
// a
var courses = items.fillter((course)=>{course.price>1000 && course.stock > 0 });
var name = courses.name;
import {items} from './data.js'
// b
var dataset;
var sum = items.reduce((sum,course)=>{sum = sum + course.price*course.stock});

// c
var course = items.find((course)=>{course.id == 3});
function stock_increase(...c)
{
  stock = stock+1;
  return c;
}
var ans = stock_increase(course);

//d
items.map((course)=> {}

//j2

function createLimiter(max)
{
  return use()
  {
    max = max-1;
    if(max>=0)
      {
        return true;
      }
    else
      {
        return false;
      }
  };
}
var f1 = createLimiter(3);
for(let i = 0; i<5; i++)
{
  f1();
}
//j3
asyn function loadDashboard()
{
  try{
    var object = promise.all({fackApi(items,ms,shouldFail=  false),fackApi(categories,ms,shouldFail=false)});
  object.resolve().then(console.log(item.size()+"courses across"+categories.size()));
  }
  catch(e && shouldFail==true)
  {
      console.log("failed: "+e.mesessage);
  }

}
//output
"S"
"P1"
"T1"
"T2"

//j4
class Course {
  constructor(id, name, price) {
    this.id = id;
    this.name = name;
    this.price = price;
  }
  
  discountedPrice(pct) {
    return this.price * (1 - pct / 100);
  }
}



class LiveCourse extends Course {
  
  constructor(id, name, price, instructor) {
    super(id, name, price);
    this.instructor = instructor;
  }
  discountedPrice(pct) {
    return super.discountedPrice(pct) * 0.95; 
  }
}

const c = new Course(1, "JS Basics", 1000);

const l = new LiveCourse(2, "React Live", 1000, "Amit");

console.log(c.discountedPrice(10)); 

console.log(l.discountedPrice(10)); 



//j5
1."53" , 2 
2. false
3."hi"
4.true false

//j6
//debounce  & throttle
// 
function debounce(fn, delay) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
}

function throttle(fn, limit) {
  let last = 0;
  return (...args) => {
    const now = Date.now();
    if (now - last >= limit) {
      last = now;
      fn(...args);
    }
  };

const d = debounce(() => console.log("debounced"), 300);
const t = throttle(() => console.log("throttled"), 300);

for (let i = 0; i < 5; i++) {
  d();
  t();
}
}
Debounce means "wait until the calls stop."
Every call cancels the previous timer and starts a new one. The function runs only once, after no new call has come for delay ms.
Use it for search boxes (wait until the user stops typing).

Throttle means "at most once per time window."
The first call runs immediately. Any call within the next limit ms is ignored.
Use it for scroll or resize events.

In the demo loop (5 quick calls):
debounced prints once, after 300 ms, because the timer kept resetting.
throttled prints once, immediately, because the other 4 calls came too soon.

both return a new function that remembers timer or last through a closure, so the state is kept between calls.


