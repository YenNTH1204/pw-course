// Bài tập 1
console.log("Bài tập 1 : Tính tích của hai số");
function multiply (a, b) {
    return a * b;
    }
const result = multiply(5, 3);
console.log(result);
console.log("\n");

// Bài tập 2
console.log("Bài tập 2 : Tìm số nhỏ nhất trong ba số");
function findMin (a,b,c) {
    return Math.min(a,b,c);
}
const min = findMin(5, 3, 8);
console.log(min);
console.log("\n");

// Bài tập 3
console.log("Bài tập 3 : Tính điểm học sinh ");
function getTopStudents (students) {
    const topStudents = [{students : "Nguyen Van A", grade : 9.5}, {students : "Tran Thi B", grade : 8.0}, {students : "Le Van C", grade : 9.0}, {students : "Pham Thi D", grade : 7.5}, {students : "Nguyen Van E", grade : 8.5}];
    const threshold = 8.5;
    return topStudents; 
};

for (let i = 0; i < getTopStudents().length; i++) {
    if (getTopStudents()[i].grade >= 8.5) {
        console.log(getTopStudents()[i].students + " is a top student with grade " + getTopStudents()[i].grade);
    }
};
console.log("\n");


// Bài tập 4
console.log("Bài tập 4 : Tính tổng số tiền ")
function calculateInterest (principal, rate, years) {
    return principal + principal * rate * years/100;
}
const totalAmount = calculateInterest(1000, 5, 3);
console.log(totalAmount);
console.log("\n");