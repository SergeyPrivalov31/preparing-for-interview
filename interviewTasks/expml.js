var l = 25;
var x = 11;

function bar(foo){
    var x= 30;
    foo()
}
function foo(){
    console.log("x", x)
}

foo.x = 20;
bar.x = 40;

bar(foo);

l.x = 100;