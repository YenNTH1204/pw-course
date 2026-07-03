// Bài tập 1
console.log("Bài tập 1 : Tổng các số từ 1 đến 100");
let sum = 0;
for (let i = 1; i <=100; i++) {
    sum += i;
}
console.log(sum);
console.log("\n");


// Bài tập 2
console.log("Bài tập 2 : Bảng cửu chương từ 2 đến 9");
let arr1 = [];
let arr2 = [];
for (let i = 2; i <= 9; i++) {
    for (let j = 1; j <= 9; j++) {
        arr2.push(i * j);
        console.log(`${i} x ${j} = ${i * j}`);
    }
    console.log("--------------");
}
console.log("\n");


// Bài tập 3
console.log("Bài tập 3 : Các số lẻ từ 1 đến 99");
let arr = [];
for (let i = 1; i < 100; i++) {

    if (i%2 != 0) {
        arr.push(i);
    }   
}
console.log(arr);
console.log("\n");

// Bài tập 4
console.log("Bài tập 4 : Tạo email");
for (let i = 1; i <= 10; i++) {
  const email = `user${i}@example.com`;
  console.log(email);
};
console.log("\n");


// Bài tập 5
console.log("Bài tập 5 : Tổng doanh thu");
const revenue = [
    {month : 1,total : 1000},
    {month : 2,total : 1500},
    { month : 3,total : 2000},
    {month : 4,total : 2500},
    {month : 5,total : 3000},
    {month : 6,total : 3500},
    {month : 7,total : 4000},
    {month : 8,total : 4500},
    {month : 9,total : 5000},
    {month : 10,total : 5500},
    {month : 11,total : 6000},
    {month : 12,total : 6500}
];
let totalRevenue = 0;
for (let i = 0; i < revenue.length; i++) {
     totalRevenue += revenue[i].total; 
};
console.log(`Total revenue is : ${totalRevenue}`)