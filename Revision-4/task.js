let a =true;
setTimeout(() => {
    let count=0;
    while(a)
    {
        count++;
        console.log(count);
    }
},0);
a=!a;

// console.log("one");
// setTimeout(() => {
//     console.log("one.one")
// },5000)

// console.log("two");
// setTimeout(() => {
//     console.log("two.one")
// },0);

// console.log("three");
// setTimeout(() => {
//     console.log("three.one")
// },1000);
