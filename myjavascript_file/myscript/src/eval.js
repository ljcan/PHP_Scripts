/**
 * Created by Shinelon on 2017/8/2.
 */
var geval=eval;    //ʹ�ñ�������eval����ȫ��eval
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

