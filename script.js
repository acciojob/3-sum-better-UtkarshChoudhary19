function threeSum(arr, target) {
// write your code here
	let sum =0;
	for(let i=0; i<arr.length; i++){
		if(arr[i] == 1){
			let target = arr[i];
			sum = arr[i-1]+ arr[i] + arr[i+1]; 
		}
	return sum;
		
	}
	
  
}

module.exports = threeSum;
