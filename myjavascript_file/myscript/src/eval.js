/**
 * Created by Shinelon on 2017/8/2.
 */
var geval=eval;    //使用别名调用eval将是全局eval
var x="global",y="global";
function f(){
    var x="local";
    eval("x+='changed';");
    return x;
}
function g(){
    var y="local";
    geval("y+='changed';");
    return y;
}
console.log(f(),x);
console.log(g(),y);

