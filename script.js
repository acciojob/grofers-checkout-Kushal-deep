const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const resultDisplay = document.createElement("p");
document.body.appendChild(resultDisplay);

const getSum = () => {
//Add your code here
	let arr=document.querySelectorAll(".price");
	let sum=0
	for(i=0;i<arr.length;i++){
		sum=sum+parseInt(arr[i].innerHTML);
		
	}
	resultDisplay.innerText=sum
  
};

getSumBtn.addEventListener("click", getSum);

