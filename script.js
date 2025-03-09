// const getSumBtn = document.createElement("button");
// getSumBtn.append("Get Total Price");
// document.body.appendChild(getSumBtn);

// // const resultDisplay = document.createElement("p");
// // document.body.appendChild(resultDisplay);

// let table=document.querySelector("table")
// let row=document.createElement("tr")
// let cell1=document.createElement("td")
// let cell2=document.createElement("td")




// const getSum = () => {
// //Add your code here
// 	let arr=document.querySelectorAll(".price");
// 	let sum=0
// 	for(i=0;i<arr.length;i++){
// 		sum=sum+parseInt(arr[i].innerHTML);
		
// 	}
// 	cell1.innerHTML="Total value"
// 	cell2.innerText=sum
  
// };

// row.appendChild(cell1)
// row.appendChild(cell2)
// table.append(row)

// getSumBtn.addEventListener("click", getSum);




const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

// Create the total row but don't append it yet
let table = document.querySelector("table");
let totalRow = document.createElement("tr");
let totalCell1 = document.createElement("td");
let totalCell2 = document.createElement("td");
totalCell2.id = "ans"; // Add ID for Cypress test

totalRow.appendChild(totalCell1);
totalRow.appendChild(totalCell2);

const getSum = () => {
    let arr = document.querySelectorAll(".price");
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        sum += parseInt(arr[i].innerText); // Ensure conversion to integer
    }

    totalCell1.innerText = "Total Price";
    totalCell2.innerText = sum;

    // Append the row only if it's not already in the table
    if (!document.getElementById("ans")) {
        table.appendChild(totalRow);
    }
};

// Attach event listener
getSumBtn.addEventListener("click", getSum);


