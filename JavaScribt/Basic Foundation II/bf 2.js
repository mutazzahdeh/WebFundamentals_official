function BiggieSize (arr){
	var 
	for(var i=0;i<arr.length;i++)if(arr[i]>0)arr[i]="big";
	return arr;
}
function printlaw(arr){
	var max=arr[0];
	var min=arr[0];

	for(var i=0;i<arr.length;i++){if(arr[i]>max)max=arr[i];
	if(arr[i]<min)min=arr[i];
	
	}

console.log(min)
	return max;
}
function printlaw(arr){

	var bool=1;
    var odd;
	for(var i=0;i<arr.length;i++){if(i>=2)console.log(arr[i]);
	if(bool && arr[i]%2){odd=arr[i];bool=0;}
	}
	return odd;
}

function DoubleVision(arr){
    
	for(var i=0;i<arr.length;i++){arr[i]*=2
	
	}
	return arr;
}
function EvensandOdd(arr){
    
	for(var i=0;i<arr.length-2;i++){
        if(arr[i]%2 && arr[i+1]%2 && arr[i+2]%2){console.log("That's odd!")}
        
        if(!(arr[i]%2) && !(arr[i+1]%2) && !(arr[i+2]%2)){console.log("Even more so!")}

	
	}
	
}

function addsecond(arr){
    
	for(var i=0;i<arr.length;i++){
        if(i%2){arr[i]+=1}
        console.log(arr[i]);
	}
	return arr
}
function PreviousLengths(arr){
    for(var i=0;i<arr.length;i++){
        arr[i+1]=arr[i].length;
    }
    
return arr;
}
function AddSeven(arr){
for(var i=0;i<arr.length-i;i++)arr[i]+=7;
return arr;
}
function ReverseArray(arr){
    var temp;
    for(var i=0;i<=arr.length;i++)
    {temp=arr[i];
    arr[i]=arr[arr.length-1-i];
    arr[arr.length-1-i];
        
    }
    return arr;
}
function OutlookNegative(arr){
for(var i=0;i<arr.length;i++){
    if(arr[i]>0)arr[i]*=-1
}
return arr
}

function AlwaysHungry(arr){
    var bool=true;
    for(var i=0;i<arr.length;i++{
        if(arr[i]=="food"){console.log("yummy");bool=false;}
    }
    if(bool){console.log("i'm hungry");}
  return 0;
}

function tocent(arr){
    var temp;
    for(var i=0;i<=arr.length;i+=2)
    {temp=arr[i];
    arr[i]=arr[arr.length-1-i];
    arr[arr.length-1-i]
        
    }
    return arr;
}
function ScaletheArray(arr,num){
    for(var i=0;i<arr.lengt)arr[i]*=num;
    return arr;
} 
