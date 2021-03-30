let x = "thsla"
console.log(x);

let myarray = [];
var i;
for(i=0;i<=4;i++){
    console.log(i);
    myarray.push(
        function(){
            return i;
        }
    )

}
 console.log("after i= "+i);
 console.log(myarray[1]());
 console.log(myarray[2]());
 console.log(myarray[3]());
 console.log(myarray[4]());

 

