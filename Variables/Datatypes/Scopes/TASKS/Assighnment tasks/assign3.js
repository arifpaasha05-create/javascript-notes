let customerName = prompt("Enter customer name:");
let age = Number(prompt("Enter age:"));
let salary = Number(prompt("Enter monthly salary:"));
let experience = Number(prompt("Enter work experience:"));
let existingLoan = prompt("Do you have an existing loan? (Yes/No)");
existingLoan = existingLoan.toLowerCase();
let loanStatus;
let eligibleLoanAmount;
if (age >= 18 && salary >= 20000 && experience >= 1 && existingLoan == "no") {
    loanStatus = "Eligible";
}
else {
    loanStatus = "NotEligible";
}
if (loanStatus == "Eligible") {
    eligibleLoanAmount = salary * 20;
}
else {
    eligibleLoanAmount = 0;
}
document.getElementById("loan").innerHTML = `<h1> Loan Eligibility Portal</h1>` + `Customer Name:${customerName}<br>` + `Loan Status:${loanStatus}<br>` + `Eligible Loan Amount:${eligibleLoanAmount}<br>`;