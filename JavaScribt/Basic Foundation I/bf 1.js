function get1_255(){
	var arr=[];
	for(var i=1;i<=255;i++)arr.push(i);
	return arr;
}

function geteven1000(){
	var sum=0;
	for(var i=1;i<=1000;i++)if(!(i%2))sum+=i;
return sum;
}

function getodd5000(){
	var sum=0;
	for(var i=1;i<=5000;i++)if(i%2)sum+=i;
return sum;
}

function itrarr(arr){
	var sum=0
	for(var i=0;i<arr.length;i++)sum+=arr[i];
return sum;
}

function maxa(arr){
	var max=arr[0]
	for(var i=1;i<arr.length;i++)if(arr[i]>max)max=arr[i]
	return max;

}
function avr(arr){
	var sum=0;
	var av;
	for(var i=0;i<arr.length;i++)sum+=arr[i];
av=sum/arr.length;
return av;
}

function arrodd(){
	var arrodd=[];
	for(var i=1;i<=50;i++)if(i%2)arrodd.push(i);
return arrodd;
}


function gretar(arr,y){
	var count=0
	for(var i=0;i<arr.length;i++)if(arr[i]>y)count++;
	return count;

}
function sqarr(arr){
	var 
	for(var i=0;i<arr.length;i++)arr[i]*=arr[i];
	return arr;
}
function Negatives (arr){
	var 
	for(var i=0;i<arr.length;i++)if(arr[i]<0)arr[i]=0
	return arr;
}


function maxminavr(arr){
	var max=arr[0];
	var min=arr[0];
	var sum=0;

	for(var i=0;i<arr.length;i++){if(arr[i]>max)max=arr[i];
	if(arr[i]<min)min=arr[i];
	sum+=arr[i]
	}
var a=sum/arr.length
var mma=[max,min,a]
	return mma;
}

function sawp(arr){
	
	
	arr[0]=arr[0]+arr[arr.length-1]
	arr[arr.length-1]=arr[0]+arr[arr.length-1];
	arr[0]=arr[0]-arr[arr.length-1];
	
	
return arr;
}
function Negativesaee (arr){
	var 
	for(var i=0;i<arr.length;i++)if(arr[i]<0)arr[i]="dojo";
	return arr;
}