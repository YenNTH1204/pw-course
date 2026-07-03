// Bài tập 1
car = {
  nake: "Toyota",
  model: "Corolla",
  year: 2021,
};
console.log(car.year);

// Bài tập 2
person = {
    name : "Nguyen Thi Hai Yen",
    address : {
        street: "181 Tran Quoc Vuong",
        city: "Hanoi",
        country: "Vietnam"
    }

};
console.log(person.address.street);

// Bài tập 3
const student = {
    name : "Nguyen Van A",
     grades : {
        math : 8.5,
        english : 9.0
    }
};
console.log(student.grades["math"]);


// Bài tập 4
let settings = {
    volume : 50,
    brightness : 70
};
settings.volume = 80;
console.log(settings);


// Bài tập 5
let bike ={
    brand: "Yamaha",
    model: "R15",
    year: 2022
};
bike.color = "Red";
console.log(bike);

// Bài tập 6
let employee = {
    name: "Nguyen Van B",
    age : 30
}
delete employee.age;
console.log(employee);

// Bài tập 7
const school  = {
    classA : ["Nguyen Van An", "Tran Thi Binh", "Le Van Chau"],
    classB : ["Pham Thi Dao", "Nguyen Van Huong", "Tran Van Giang"]
};
console.log(school.classA);
console.log(school.classB);