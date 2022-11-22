function doSomething(val){
    return (val-32)*(5/9);
}

const doSomething1 = function(val){
    return (val-32)*(5/9);
}

const res = doSomething1(23);

const doSomething3 = (val)=> {
    return (val-32)*(5/9);
}

const doSomething4 = (val)=> (val-32)*(5/9);
const abcd = (x,y)=>x+y;

const chitkarafn = (x,fn)=> {
    let res = fn(x);
    console.log("SuperStar.")
    return res
}

//chitkarafn(10,doSomething4);
//console.log(chitkarafn(10,(val)=> (val-32)*(5/9)));

let names = ["superstar","rajinikanth"];

console.log(names[0]);

names.push("chitkara");

console.log(names);


const newArray = names.map(x=>{
    x = "ER."+x;
    return x;
}).map(x=>{
    x = x + " San";
    return x;
});

console.log(newArray);

let n=[1,2,3,4,5];

let x = [6,7,8,9,10,...n];

console.log(x);



