let obj={
    fname:"john",
    lastname:"singh",
    fulldetails:function (a,b) {
        console.log(a+b)
        console.log(a-b)
        console.log(a*b)
    }

}
let child=Object.create(obj)
child.fulldetails(4,5)