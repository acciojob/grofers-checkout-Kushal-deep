const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

// const resultDisplay = document.createElement("p");
// document.body.appendChild(resultDisplay);

let table=document.querySelector("table")
let row=document.createElement("tr")
let cell1=document.createElement("td")
let cell2=document.createElement("td")




const getSum = () => {
//Add your code here
	let arr=document.querySelectorAll(".price");
	let sum=0
	for(i=0;i<arr.length;i++){
		sum=sum+parseInt(arr[i].innerHTML);
		
	}
	cell1.innerHTML="Total value"
	cell2.innerText=sum
  
};

row.appendChild(cell1)
row.appendChild(cell2)
table.append(row)

getSumBtn.addEventListener("click", getSum);

