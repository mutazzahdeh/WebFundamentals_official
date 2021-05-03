function sigma(num){
    var sum=0
    for(num;num>0;num--){sum+=num;}
    return sum;
}

function factorial(num){
    var fa=1
    for(num;num>1;num--)fa*=num;
}
function fibonacci(num){
    var arr=[0,1]
    for(var i=2;i<=num;i++){
    arr.push(arr[i-2]+arr[i-1]);}

return(arr[arr.length-1]+"("+arr[arr.length-2]+"+"+arr[arr.length-3]+")")
}

function ArraySecond (arr){
    if(arr.length<=2)return null;
    else return arr[arr.length-2]

}
function Arraynthtolast(arr,num){
    if(arr.length<=3)return null;
    else return arr[arr.length-num]
}
function Arraynthtolast(arr){
    var max=arr[0];
       var max2=arr[1]
   if(arr.length<=3)return null;
   else {
      
       for(var i=0;i<arr.length;i++){
       if(arr[i]>max)max=arr[i];
       if(arr[i]<max&&arr[i]>max2)max2=arr[i];
}
   }
}
function DoubleTrouble(arr){
    var arr2=[]
    for(var i=0;i<arr.length;i++)
    {
    arr2.push(arr[i]);
    arr2.push(arr[i]);
    }
}
