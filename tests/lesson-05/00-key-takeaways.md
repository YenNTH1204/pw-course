# I. JavaScript - Function Expression & Lambda Function

## 1. Function Expression là gì?

**Function Expression** là cách định nghĩa function bằng cách **gán function cho một biến**.

Trong JavaScript, ngoài cách khai báo hàm truyền thống bằng `function declaration`, ta còn có thể tạo function bằng:

- `function expression`
- `arrow function`, còn gọi là `lambda function`

Hiểu đơn giản:

```
Function Declaration: khai báo function trực tiếp bằng tên hàm.

Function Expression: tạo function rồi gán vào một biến.

Arrow Function / Lambda Function: cách viết function ngắn gọn hơn bằng dấu =>.
```

---

## 2. Function Declaration - Khai báo hàm truyền thống

Đây là cách khai báo hàm trực tiếp bằng từ khóa `function`.

### Cú pháp

```jsx
function tenHam(thamSo1, thamSo2) {
  // code xử lý
  return ketQua;
}
```

### Ví dụ

```jsx
function add(a, b) {
  return a + b;
}

console.log(add(2, 3)); // 5
```

---

## 3. Function Expression - Biểu thức hàm

**Function Expression** là cách tạo function rồi gán function đó cho một biến.

### Ví dụ

```jsx
const add = function(a, b) {
  return a + b;
};

console.log(add(2, 3)); // 5
```

Ở đây:

```jsx
const add = function(a, b) {
  return a + b;
};
```

có nghĩa là:

```
Tạo một function nhận 2 tham số a và b.
Sau đó gán function này vào biến add.
```

Khi muốn sử dụng, ta gọi:

```jsx
add(2, 3);
```

---

## 4. So sánh Function Declaration và Function Expression

| Tiêu chí | Function Declaration | Function Expression |
| --- | --- | --- |
| Cách viết | `function add(a, b) {}` | `const add = function(a, b) {};` |
| Bản chất | Khai báo hàm trực tiếp | Gán function cho một biến |
| Cách gọi | `add(2, 3)` | `add(2, 3)` |
| Có thể dùng trước khi khai báo không? | Có thể, do hoisting | Không nên dùng trước khi khai báo |
| Thường dùng khi | Viết hàm thông thường | Gán hàm vào biến, truyền hàm làm callback |

---

## 5. Lambda Function / Arrow Function là gì?

Trong JavaScript, nội dung thường gọi là **Lambda Function** thực tế chính là **Arrow Function**.

**Arrow Function** là cách viết function ngắn gọn hơn, dùng dấu:

```jsx
=>
```

Arrow Function xuất hiện từ **ES6 / ES2015**.

Đây là cách viết ngắn gọn hơn cho function, thường dùng trong các trường hợp:

- Viết function ngắn
- Viết callback
- Dùng với `map()`, `filter()`, `forEach()`, `find()`
- Khi không cần dùng `this` riêng

---

## 6. So sánh 3 cách viết function

### Function Declaration

```jsx
function add(a, b) {
  return a + b;
}
```

### Function Expression

```jsx
const add = function(a, b) {
  return a + b;
};
```

### Arrow Function / Lambda Function

```jsx
const add = (a, b) => {
  return a + b;
};
```

Nếu function chỉ có một dòng return, có thể viết ngắn hơn:

```jsx
const add = (a, b) => a + b;
```

---

## 7. Các cách viết Arrow Function

## 7.1. Không có tham số

Nếu function không có tham số, bắt buộc phải có cặp ngoặc tròn rỗng `()`.

```jsx
const greet = () => console.log("Hello!");

const getRandom = () => Math.random();
```

Gọi hàm:

```jsx
greet();

console.log(getRandom());
```

Ghi nhớ:

```
Không có tham số thì phải dùng dấu ngoặc tròn rỗng ().
```

---

## 7.2. Có một tham số

Nếu function chỉ có **một tham số**, có thể bỏ dấu ngoặc tròn.

```jsx
const double = x => x * 2;

const square = x => x * x;
```

Hoặc vẫn có thể giữ dấu ngoặc tròn nếu muốn code rõ ràng hơn:

```jsx
const triple = (x) => x * 3;
```

Cả hai cách đều đúng:

```jsx
const double = x => x * 2;

const double2 = (x) => x * 2;
```

Ghi nhớ:

```
Một tham số thì có thể bỏ ngoặc tròn.
```

---

## 7.3. Có nhiều tham số

Nếu function có từ **hai tham số trở lên**, bắt buộc dùng ngoặc tròn.

```jsx
const add = (a, b) => a + b;
```

Ví dụ khác:

```jsx
const calculatePrice = (price, quantity, discount) => {
  return price * quantity - discount;
};
```

Ghi nhớ:

```
Nhiều tham số thì bắt buộc dùng ngoặc tròn.
```

---

## 8. Implicit Return - Return ngầm định

Nếu arrow function chỉ có **một dòng xử lý**, có thể bỏ:

- Cặp ngoặc nhọn `{}`
- Từ khóa `return`

### Viết đầy đủ

```jsx
const add = (a, b) => {
  return a + b;
};
```

### Viết rút gọn

```jsx
const add = (a, b) => a + b;
```

Hai cách trên có cùng kết quả.

```jsx
console.log(add(2, 3)); // 5
```

Ghi nhớ:

```
Nếu chỉ có 1 dòng code trả về kết quả, có thể viết ngắn gọn bằng implicit return.
```

---

## 9. Khi nào phải dùng `return`?

Nếu dùng cặp ngoặc nhọn `{}` trong arrow function, thì phải viết `return` nếu muốn hàm trả về kết quả.

### Đúng

```jsx
const add = (a, b) => {
  return a + b;
};

console.log(add(2, 3)); // 5
```

### Sai logic

```jsx
const add = (a, b) => {
  a + b;
};

console.log(add(2, 3)); // undefined
```

Giải thích:

```
Function có thực hiện phép tính a + b.
Nhưng không return kết quả ra ngoài.
Vì vậy kết quả nhận được là undefined.
```

---

## 10. Lưu ý quan trọng về Arrow Function

Arrow Function viết ngắn gọn nhưng không hoàn toàn giống function truyền thống.

Một số điểm cần nhớ:

| Nội dung | Arrow Function |
| --- | --- |
| Có cú pháp ngắn gọn | Có |
| Có thể dùng làm callback | Có |
| Có `this` riêng không? | Không |
| Có `arguments` riêng không? | Không |
| Dùng làm constructor với `new` được không? | Không |
| Có dùng được `yield` để làm generator không? | Không |

---

## 11. Không nên dùng Arrow Function khi nào?

Không nên dùng arrow function khi function cần `this` riêng của object.

### Ví dụ không nên

```jsx
const person = {
  name: "Alex",
  sayHello: () => {
    console.log(this.name);
  }
};

person.sayHello(); // Không ra "Alex" như mong muốn
```

Lý do:

```
Arrow function không có this riêng.
Nó lấy this từ phạm vi bên ngoài nơi nó được tạo.
```

### Nên viết bằng method thông thường

```jsx
const person = {
  name: "Alex",
  sayHello() {
    console.log(this.name);
  }
};

person.sayHello(); // Alex
```

---

## 12. Khi nào nên dùng Arrow Function?

Nên dùng arrow function khi:

- Function ngắn, đơn giản
- Dùng làm callback
- Dùng với `map()`, `filter()`, `forEach()`, `find()`
- Không cần dùng `this` riêng
- Muốn code gọn hơn

### Ví dụ với `map()`

```jsx
const numbers = [1, 2, 3, 4, 5];

const doubled = numbers.map(num => num * 2);

console.log(doubled); // [2, 4, 6, 8, 10]
```

### Ví dụ với `filter()`

```jsx
const numbers = [5, 12, 8, 130, 44];

const greaterThanTen = numbers.filter(num => num > 10);

console.log(greaterThanTen); // [12, 130, 44]
```

---

## 13. Bài thực hành

## Bài 1

Khai báo hàm có tham số `name`.

Trả về chuỗi:

```
Hello <name>
```

### Cách 1: Function Declaration

```jsx
function sayHello(name) {
  return `Hello ${name}`;
}

console.log(sayHello("Alex")); // Hello Alex
```

### Cách 2: Arrow Function

```jsx
const sayHello = name => `Hello ${name}`;

console.log(sayHello("Alex")); // Hello Alex
```

---

## Bài 2

Khai báo hàm có tham số:

```
price, quantity, discount
```

Trả về giá trị:

```
price * quantity - discount
```

### Cách 1: Function Declaration

```jsx
function calculateTotal(price, quantity, discount) {
  return price * quantity - discount;
}

console.log(calculateTotal(100, 3, 50)); // 250
```

### Cách 2: Arrow Function

```jsx
const calculateTotal = (price, quantity, discount) => price * quantity - discount;

console.log(calculateTotal(100, 3, 50)); // 250
```

---

## 14. Bảng tổng hợp nhanh

| Cách viết | Ví dụ | Ghi chú |
| --- | --- | --- |
| Function Declaration | `function add(a, b) { return a + b; }` | Cách khai báo truyền thống |
| Function Expression | `const add = function(a, b) { return a + b; };` | Gán function cho biến |
| Arrow Function đầy đủ | `const add = (a, b) => { return a + b; };` | Dùng `=>`, có block `{}` |
| Arrow Function rút gọn | `const add = (a, b) => a + b;` | Return ngầm định |
| Không tham số | `const greet = () => console.log("Hello");` | Cần `()` rỗng |
| Một tham số | `const double = x => x * 2;` | Có thể bỏ `()` |
| Nhiều tham số | `const add = (a, b) => a + b;` | Bắt buộc có `()` |

---

## 15. Ghi nhớ nhanh

```
Function Expression = gán function cho một biến.

Arrow Function = cách viết function ngắn gọn bằng dấu =>.

Không có tham số:
const fn = () => ...

Một tham số:
const fn = x => ...

Nhiều tham số:
const fn = (a, b) => ...

Một dòng return:
const add = (a, b) => a + b;

Có nhiều dòng code:
const add = (a, b) => {
  return a + b;
};
```

---

## 16. Kết luận

Function Declaration, Function Expression và Arrow Function đều dùng để tạo function, nhưng khác nhau về cách viết và một số hành vi.

Với người mới học, nên nhớ:

```
Dùng Function Declaration khi muốn viết hàm rõ ràng, dễ hiểu.

Dùng Function Expression khi muốn lưu hàm vào biến.

Dùng Arrow Function khi function ngắn, đơn giản, đặc biệt khi làm việc với array utils như map, filter, forEach.
```

Không nên thay toàn bộ function thường bằng arrow function, đặc biệt khi function cần dùng:

- `this`
- `arguments`
- constructor với `new`

---

## 17. Tài liệu tham khảo

- MDN - Function expression:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/function
- MDN - Arrow function expressions:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions

---

# 18. Named Function và Anonymous Function

## 18.1. Named Function là gì?

**Named Function** là function **có tên**.

Ví dụ:

```jsx
function namedFunction() {
  console.log("I have a name!");
}
```

Trong ví dụ trên, function có tên là:

```jsx
namedFunction
```

Khi muốn sử dụng, ta gọi hàm bằng tên:

```jsx
namedFunction();
```

---

## 18.2. Anonymous Function là gì?

**Anonymous Function** là function **không có tên**.

Ví dụ sau là function không có tên:

```jsx
function() {
  console.log("I'm anonymous!");
}
```

Tuy nhiên, cách viết này **không thể đứng một mình** trong JavaScript.

Nếu viết như sau, JavaScript sẽ báo lỗi cú pháp:

```jsx
function() {
  console.log("I'm anonymous!");
}
```

Lý do:

```
Anonymous function không có tên, nên JavaScript không biết gọi hoặc sử dụng function đó như thế nào.
```

---

## 18.3. Anonymous Function phải được sử dụng ngay

Anonymous function thường được dùng theo 2 cách phổ biến:

| Cách dùng | Ý nghĩa |
| --- | --- |
| Gán cho biến | Lưu function vào một biến để gọi lại sau |
| Dùng làm callback | Truyền function vào một function khác để chạy sau |

---

## 18.4. Gán Anonymous Function cho biến

Ví dụ:

```jsx
const anonymousFunc = function() {
  console.log("I'm anonymous but stored in a variable!");
};
```

Ở đây:

```jsx
function() {
  console.log("I'm anonymous but stored in a variable!");
}
```

là một anonymous function.

Function này được gán vào biến:

```jsx
anonymousFunc
```

Khi muốn gọi hàm, ta gọi thông qua tên biến:

```jsx
anonymousFunc();
```

Kết quả:

```
I'm anonymous but stored in a variable!
```

---

## 18.5. Dùng Anonymous Function làm callback

Anonymous function cũng thường được dùng làm callback.

Ví dụ:

```jsx
setTimeout(function() {
  console.log("Anonymous callback!");
}, 1000);
```

Trong ví dụ trên:

```jsx
function() {
  console.log("Anonymous callback!");
}
```

là anonymous function.

Function này được truyền vào `setTimeout()` để chạy sau `1000` milliseconds, tức là sau 1 giây.

---

## 19. So sánh Named Function và Anonymous Function

| Tiêu chí | Named Function | Anonymous Function |
| --- | --- | --- |
| Có tên hàm không? | Có | Không |
| Có thể đứng độc lập không? | Có | Không |
| Cách gọi | Gọi bằng tên hàm | Gọi thông qua biến hoặc được function khác gọi |
| Thường dùng khi | Cần tái sử dụng nhiều lần | Chỉ dùng một lần hoặc làm callback |
| Ví dụ | `function sayHello() {}` | `const sayHello = function() {}` |

---

## 20. Ví dụ tổng hợp

```jsx
// Named function
function namedFunction() {
  console.log("I have a name!");
}

namedFunction();

// Anonymous function gán cho biến
const anonymousFunc = function() {
  console.log("I'm anonymous but stored in a variable!");
};

anonymousFunc();

// Anonymous function làm callback
setTimeout(function() {
  console.log("Anonymous callback!");
}, 1000);
```

---

## 21. Ghi nhớ nhanh

```
Named Function:
- Là function có tên
- Có thể gọi trực tiếp bằng tên function
- Phù hợp khi cần tái sử dụng nhiều lần

Anonymous Function:
- Là function không có tên
- Không thể đứng một mình
- Thường được gán cho biến hoặc dùng làm callback
```

---

## 22. Liên hệ với Function Expression

Function Expression thường sử dụng anonymous function:

```jsx
const add = function(a, b) {
  return a + b;
};
```

Trong ví dụ trên:

```jsx
function(a, b) {
  return a + b;
}
```

là anonymous function.

Còn `add` là tên biến đang lưu function đó.

Vì vậy, khi gọi:

```jsx
add(2, 3);
```

thực chất là đang gọi function được lưu trong biến `add`.

---

## 23. Liên hệ với Arrow Function

Arrow Function cũng thường là một dạng anonymous function được gán cho biến.

Ví dụ:

```jsx
const add = (a, b) => a + b;
```

Ở đây, function không có tên riêng, mà được gán vào biến `add`.

Có thể hiểu tương tự Function Expression:

```jsx
const add = function(a, b) {
  return a + b;
};
```

Nhưng Arrow Function viết ngắn gọn hơn:

```jsx
const add = (a, b) => a + b;
```

---

## 24. Tổng kết bổ sung

```
Function Declaration thường là Named Function.

Function Expression thường dùng Anonymous Function.

Arrow Function cũng thường là Anonymous Function.

Anonymous Function không đứng một mình được.
Nó cần được gán vào biến hoặc truyền vào function khác làm callback.
```

# II . DOM - Các thẻ HTML thường gặp

## 1. Link demo

Demo tất tần tật các thẻ HTML:

```
<https://material.playwrightvn.com/035-DOM-elements.html>
```

---

## 2. HTML tag là gì?

**HTML tag** là thẻ dùng để mô tả cấu trúc và nội dung của một trang web.

Ví dụ:

```html
<option value="usa">United States</option>
```

Trong ví dụ trên:

| Thành phần | Ý nghĩa |
| --- | --- |
| `<option` | Thẻ/tag mở |
| `value` | Thuộc tính |
| `"usa"` | Giá trị của thuộc tính |
| `United States` | Text hiển thị |
| `</option>` | Thẻ đóng |

---

## 3. Element là gì?

Một **element** là một phần tử HTML hoàn chỉnh, thường bao gồm:

```
Thẻ mở + nội dung + thẻ đóng
```

Ví dụ:

```html
<option>United States</option>
```

Trong đó:

| Thành phần | Ý nghĩa |
| --- | --- |
| `<option>` | Thẻ mở |
| `United States` | Nội dung / text |
| `</option>` | Thẻ đóng |

Toàn bộ đoạn sau được gọi là **một element**:

```html
<option>United States</option>
```

---

## 4. Thẻ mở và thẻ đóng

Một số thẻ HTML có cấu trúc đầy đủ gồm **thẻ mở** và **thẻ đóng**.

Ví dụ:

```html
<option value="usa">United States</option>
```

| Thành phần | Ý nghĩa |
| --- | --- |
| `<option value="usa">` | Thẻ mở |
| `United States` | Text |
| `</option>` | Thẻ đóng |

---

## 5. Thẻ tự đóng

Một số thẻ không cần thẻ đóng riêng, gọi là **thẻ tự đóng**.

Ví dụ:

```html
<img src="image.jpg" alt="Image description" />

<br />

<hr />
```

| Thẻ | Ý nghĩa |
| --- | --- |
| `<img />` | Hiển thị hình ảnh |
| `<br />` | Xuống dòng |
| `<hr />` | Tạo đường kẻ ngang |

Lưu ý:

```
Trong HTML hiện đại, có thể gặp cách viết:
<img src="image.jpg" alt="Image description">
<br>
<hr>
```

---

## 6. Thuộc tính trong HTML

**Thuộc tính** giúp bổ sung thông tin cho thẻ HTML.

Ví dụ:

```html
<option value="usa">United States</option>
```

Trong đó:

```html
value="usa"
```

là thuộc tính của thẻ `<option>`.

| Thành phần | Ý nghĩa |
| --- | --- |
| `value` | Tên thuộc tính |
| `"usa"` | Giá trị của thuộc tính |

---

# 7. Các thẻ HTML tiêu chuẩn thường gặp

## 7.1. Thẻ cấu trúc cơ bản

| Thẻ | Ý nghĩa |
| --- | --- |
| `<html>` | Thẻ gốc của trang |
| `<head>` | Chứa metadata, tiêu đề website, thông tin hiển thị trên Google |
| `<body>` | Chứa nội dung chính được hiển thị trên website |
| `<div>` | Khối / container chung |
| `<span>` | Inline container |
| `<header>` | Phần đầu trang hoặc đầu một khu vực |
| `<footer>` | Phần cuối trang hoặc cuối một khu vực |
| `<nav>` | Khu vực điều hướng |
| `<section>` | Một khu vực nội dung có ý nghĩa |

---

## 7.2. Thẻ nội dung

| Thẻ | Ý nghĩa |
| --- | --- |
| `<h1>` đến `<h6>` | Tiêu đề |
| `<p>` | Đoạn văn |
| `<a>` | Liên kết |
| `<img>` | Hình ảnh |
| `<ul>` | Danh sách không có thứ tự |
| `<ol>` | Danh sách có thứ tự |
| `<li>` | Một phần tử trong danh sách |

Ví dụ:

```html
<h1>Tiêu đề chính</h1>

<p>Đây là một đoạn văn.</p>

<a href="<https://example.com>">Đi tới website</a>

<img src="image.jpg" alt="Mô tả ảnh">

<ul>
  <li>Item 1</li>
  <li>Item 2</li>
</ul>
```

---

## 7.3. Thẻ Form - Quan trọng cho Testing

Các thẻ form rất quan trọng khi làm automation test vì thường xuyên phải nhập liệu, click, chọn option hoặc kiểm tra dữ liệu.

| Thẻ | Ý nghĩa |
| --- | --- |
| `<form>` | Biểu mẫu |
| `<input>` | Ô nhập liệu: text, password, checkbox, radio, etc. |
| `<button>` | Nút bấm |
| `<select>` | Dropdown |
| `<option>` | Một lựa chọn trong dropdown |
| `<textarea>` | Vùng văn bản nhiều dòng |

Ví dụ:

```html
<form>
  <input type="text" placeholder="Nhập tên">

  <input type="password" placeholder="Nhập mật khẩu">

  <input type="checkbox">

  <input type="radio">

  <select>
    <option value="usa">United States</option>
    <option value="vn">Vietnam</option>
  </select>

  <textarea></textarea>

  <button>Submit</button>
</form>
```

---

# 8. Thẻ tiêu chuẩn và thẻ tự định nghĩa

Trên thực tế, có rất nhiều loại thẻ khác nhau.

| Loại thẻ | Ý nghĩa |
| --- | --- |
| Thẻ tiêu chuẩn | Thẻ có trong chuẩn HTML, được tài liệu như MDN mô tả |
| Thẻ tự định nghĩa | Thẻ do lập trình viên hoặc website tự định nghĩa |

Ví dụ thẻ tiêu chuẩn:

```html
<div></div>
<button></button>
<input>
```

Ví dụ thẻ tự định nghĩa:

```html
<app-header></app-header>
<custom-button></custom-button>
<user-card></user-card>
```

Ghi nhớ:

```
Khi test web, không chỉ gặp thẻ HTML tiêu chuẩn.
Một số framework có thể sinh ra thẻ tự định nghĩa.
```

---

# 9. DOM là gì?

**DOM** là viết tắt của:

```
Document Object Model
```

Hiểu đơn giản:

```
DOM là cách trình duyệt biểu diễn trang HTML thành một cấu trúc dạng cây,
để JavaScript hoặc automation tool có thể truy cập và thao tác.
```

Ví dụ HTML:

```html
<option>United States</option>
```

Khi trình duyệt đọc HTML, nó sẽ biến đoạn này thành một phần tử trong DOM.

#### Cấu trúc DOM cơ bản của một trang web

Một tài liệu HTML được trình duyệt phân tích và xây dựng thành **DOM Tree (Document Object Model)**. Cấu trúc cơ bản của một trang web thường như sau:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Tiêu đề trang</title>
  </head>

  <body>
    <header>
      Phần đầu trang
    </header>

    <nav>
      Menu điều hướng
    </nav>

    <main>
      <section>
        <h1>Tiêu đề chính</h1>
        <p>Nội dung đoạn văn</p>
      </section>

      <article>
        Nội dung độc lập
      </article>

      <aside>
        Nội dung phụ
      </aside>
    </main>

    <footer>
      Phần cuối trang
    </footer>
  </body>
</html>
```

---

# Giải thích các thẻ chính

| Thẻ | Chức năng |
| --- | --- |
| `<!DOCTYPE html>` | Khai báo tài liệu HTML5 |
| `<html>` | Phần tử gốc của toàn bộ trang |
| `<head>` | Chứa metadata, CSS, JavaScript, title... |
| `<title>` | Tiêu đề hiển thị trên tab trình duyệt |
| `<body>` | Chứa toàn bộ nội dung hiển thị |
| `<header>` | Phần đầu trang hoặc đầu của một khu vực |
| `<nav>` | Thanh điều hướng (menu) |
| `<main>` | Nội dung chính của trang |
| `<section>` | Một nhóm nội dung theo chủ đề |
| `<article>` | Nội dung độc lập (bài viết, tin tức...) |
| `<aside>` | Nội dung phụ (sidebar, quảng cáo...) |
| `<footer>` | Phần cuối trang |

---

# Các thẻ HTML thường gặp

## Nhóm hiển thị nội dung

| Thẻ | Mục đích |
| --- | --- |
| `<h1>` ~ `<h6>` | Tiêu đề |
| `<p>` | Đoạn văn |
| `<span>` | Nội dung inline |
| `<div>` | Khối nội dung |

---

## Nhóm liên kết & hình ảnh

| Thẻ | Mục đích |
| --- | --- |
| `<a>` | Liên kết |
| `<img>` | Hiển thị hình ảnh |

---

## Nhóm danh sách

| Thẻ | Mục đích |
| --- | --- |
| `<ul>` | Danh sách không thứ tự |
| `<ol>` | Danh sách có thứ tự |
| `<li>` | Một phần tử trong danh sách |

---

## Nhóm biểu mẫu

| Thẻ | Mục đích |
| --- | --- |
| `<form>` | Biểu mẫu |
| `<input>` | Ô nhập dữ liệu |
| `<textarea>` | Ô nhập nhiều dòng |
| `<select>` | Danh sách lựa chọn |
| `<button>` | Nút bấm |

---

# Cây DOM (DOM Tree)

Sau khi trình duyệt phân tích HTML, DOM sẽ có dạng cây như sau:

```
document
└── html
    ├── head
    │   └── title
    └── body
        ├── header
        ├── nav
        ├── main
        │   ├── section
        │   │   ├── h1
        │   │   └── p
        │   ├── article
        │   └── aside
        └── footer
```

---

# Lưu ý

DOM không chỉ bao gồm các **thẻ HTML (Element)** mà còn bao gồm nhiều loại **Node** khác nhau:

- **Document Node** (`document`)
- **Element Node** (`<div>`, `<button>`, `<input>`...)
- **Text Node** (nội dung văn bản)
- **Attribute Node** (`id`, `class`, `name`, `type`...)
- **Comment Node** (`<!-- comment -->`)

Ví dụ:

```html
<button id="login-btn" class="primary">
    Đăng nhập
</button>
```

DOM của phần tử trên sẽ gồm:

```
Element Node: button
├── Attribute: id="login-btn"
├── Attribute: class="primary"
└── Text Node: "Đăng nhập"
```

---

# Tóm tắt

```
Document
    ↓
<html>
    ↓
<head>       <body>
                ↓
    Layout (header, nav, main, footer)
                ↓
    Nội dung (div, section, article...)
                ↓
    Thành phần (button, input, img, a...)
                ↓
    Text + Attributes
```

Đây là cấu trúc DOM cơ bản mà hầu hết các website hiện đại đều tuân theo, dù quy mô và mức độ lồng nhau có thể khác nhau.

---

## 10. Node là gì?

Trong DOM, mỗi thành phần có thể được xem là một **node**.

Ví dụ:

```html
<option value="usa">United States</option>
```

Có thể hiểu gồm nhiều node/thành phần:

| Thành phần | Loại |
| --- | --- |
| `<option>` | Element node |
| `value="usa"` | Attribute |
| `United States` | Text node |

---

# 11. Vì sao DOM quan trọng trong Automation Test?

Khi làm automation test với Playwright, Selenium hoặc các tool tương tự, mình thường thao tác với DOM.

Ví dụ:

```jsx
await page.locator("button").click();

await page.locator("input").fill("Hello");

await page.locator("select").selectOption("usa");
```

Các câu lệnh trên đều cần tìm phần tử trong DOM.

Cấu trúc DOM cơ bản của một trang web bao gồm các thẻ gì ?

---

# 12. Bảng tổng hợp nhanh

| Khái niệm | Ý nghĩa | Ví dụ |
| --- | --- | --- |
| Tag | Thẻ HTML | `<button>` |
| Opening tag | Thẻ mở | `<option>` |
| Closing tag | Thẻ đóng | `</option>` |
| Attribute | Thuộc tính | `value` |
| Attribute value | Giá trị thuộc tính | `"usa"` |
| Text | Nội dung hiển thị | `United States` |
| Element | Một phần tử HTML hoàn chỉnh | `<option>United States</option>` |
| Self-closing tag | Thẻ tự đóng | `<img />`, `<br />`, `<hr />` |
| DOM | Mô hình biểu diễn HTML của trình duyệt | Document Object Model |
| Node | Một thành phần trong DOM | Element node, text node |

---

# 13. Ghi nhớ nhanh

```
HTML tag = thẻ HTML.

Element = thẻ HTML hoàn chỉnh.

Attribute = thuộc tính của thẻ.

Text = nội dung hiển thị giữa thẻ mở và thẻ đóng.

DOM = Document Object Model.

DOM giúp JavaScript và automation tool truy cập, kiểm tra, click, nhập liệu và thao tác với trang web.
```

---

# 14. Kết luận

Khi học automation test, cần nắm chắc các thẻ HTML thường gặp, đặc biệt là nhóm thẻ form:

```
form
input
button
select
option
textarea
```

Vì đây là các thẻ thường xuyên xuất hiện trong các thao tác test như:

- Nhập dữ liệu
- Click button
- Chọn dropdown
- Tick checkbox
- Chọn radio
- Kiểm tra text hiển thị
- Validate trạng thái của form

# III . Playwright Basic Syntax - Selector và Tương tác cơ bản

## 1. Automation là gì?

**Automation = tương tác + verify**

Trong automation test, ta thường làm 2 việc chính:

- Tương tác với các phần tử trên trang web
- Kiểm tra kết quả sau khi tương tác

Ví dụ các thao tác tương tác thường gặp:

- Input
- Fill
- Click
- Select
- Upload file
- Radio / checkbox

Để tương tác được, trước tiên cần **tìm được phần tử** trên trang web.

**Selector** là công cụ giúp ta tìm phần tử.

---

## 2. Selector là gì?

**Selector** là cách dùng để xác định / tìm một phần tử trên trang web.

Có 3 loại selector thường dùng:

| Loại selector | Ý nghĩa |
| --- | --- |
| XPath | Tìm phần tử bằng đường dẫn XML / DOM |
| CSS selector | Tìm phần tử bằng cú pháp CSS |
| Playwright selector | Selector riêng của Playwright, gần với cách người dùng nhìn thấy UI |

Thứ tự ưu tiên nên dùng:

```
Playwright selector > CSS selector > XPath
```

Tuy nhiên vẫn cần hiểu cả 3 loại vì mỗi dự án có thể có convention khác nhau.

---

## 3. XPath selector

**XPath = XML Path**

XPath dùng để tìm phần tử dựa trên đường dẫn hoặc đặc điểm của phần tử trong DOM.

XPath có 2 loại chính:

| Loại XPath | Đặc điểm | Ví dụ |
| --- | --- | --- |
| XPath tuyệt đối | Đi dọc theo cây DOM, bắt đầu bằng `/` | `/html/body/div/input` |
| XPath tương đối | Tìm dựa vào đặc tính, bắt đầu bằng `//` | `//input[@id="email"]` |

Nên ưu tiên dùng **XPath tương đối**.

### Cú pháp XPath tương đối

```jsx
//tenthe[@thuoctinh="gia tri"]
```

Ví dụ:

```jsx
//input[@id="email"]
```

Ý nghĩa:

```
Tìm thẻ input có thuộc tính id bằng email.
```

#### So sánh XPath tuyệt đối và XPath tương đối

| Tiêu chí | XPath tuyệt đối | XPath tương đối |
| --- | --- | --- |
| **Ký hiệu bắt đầu** | Bắt đầu bằng `/` | Bắt đầu bằng `//` |
| **Cách tìm phần tử** | Đi từ gốc DOM xuống từng tầng HTML | Tìm phần tử dựa trên đặc điểm của phần tử |
| **Ví dụ** | `/html/body/div[1]/form/input[1]` | `//input[@id="email"]` |
| **Mức độ phụ thuộc vào DOM** | Phụ thuộc rất nhiều vào cấu trúc DOM | Ít phụ thuộc vào cấu trúc DOM |
| **Độ ổn định** | Dễ bị hỏng khi UI thay đổi | Ổn định hơn khi UI thay đổi nhẹ |
| **Khả năng đọc hiểu** | Khó đọc, khó biết đang tìm phần tử nào | Dễ đọc, nhìn vào biết đang tìm phần tử nào |
| **Khả năng maintain** | Khó maintain | Dễ maintain hơn |
| **Khi dev thêm `div` hoặc đổi layout** | Dễ sai XPath | Thường vẫn chạy được nếu thuộc tính/text không đổi |
| **Phù hợp automation test không?** | Không nên ưu tiên | Nên dùng hơn nếu bắt buộc dùng XPath |
| **Nên dùng khi nào?** | Hiếm khi dùng, chỉ dùng khi không còn cách khác | Dùng khi cần tìm phần tử theo `id`, `name`, `text`, `class`, `placeholder`, thuộc tính... |

---

## Ví dụ so sánh

| Trường hợp | XPath tuyệt đối | XPath tương đối |
| --- | --- | --- |
| Tìm ô email | `/html/body/div[1]/form/input[1]` | `//input[@id="email"]` |
| Tìm button Login | `/html/body/div[2]/button[1]` | `//button[text()="Login"]` |
| Tìm input theo name | `/html/body/main/div/form/input[2]` | `//input[@name="username"]` |
| Tìm thẻ select country | `/html/body/div/form/select[1]` | `//select[@id="country"]` |

---

## Ghi nhớ nhanh

| Loại XPath | Cách nhớ |
| --- | --- |
| XPath tuyệt đối | Đi từ đầu trang HTML xuống đúng vị trí phần tử |
| XPath tương đối | Tìm phần tử theo đặc điểm nhận diện của nó |

---

## Kết luận

| Nên ưu tiên | Lý do |
| --- | --- |
| **XPath tương đối** | Dễ đọc, dễ sửa, ít bị hỏng khi giao diện thay đổi |
| **Không nên ưu tiên XPath tuyệt đối** | Quá phụ thuộc vào cấu trúc DOM, dễ fail khi dev thay đổi layout |

Thứ tự ưu tiên khi viết selector trong Playwright:

```
Playwright selector > CSS selector > XPath tương đối > XPath tuyệt đối
```

---

## 4. CSS selector

CSS selector dùng để tìm phần tử theo cú pháp CSS.

Ưu điểm:

- Ngắn gọn
- Performance tốt
- Dễ dùng trong các trường hợp đơn giản

Nhược điểm:

- Không linh hoạt bằng XPath trong một số tình huống phức tạp

Ví dụ:

```jsx
.add-to-cart
```

Ý nghĩa:

```
Tìm phần tử có class là add-to-cart.
```

---

## 5. Playwright selector

Playwright selector là cách chọn phần tử riêng của Playwright.

Đặc điểm:

- Chỉ dùng riêng cho Playwright
- Cú pháp ngắn gọn
- Ít phụ thuộc vào cấu trúc DOM
- Hướng tới cách người dùng nhìn thấy / tương tác với giao diện

Ví dụ:

```jsx
page.getByText("Add to cart");
```

Ý nghĩa:

```
Tìm phần tử có text là Add to cart.
```

---

# 6. Cấu trúc cơ bản của một test trong Playwright

## 6.1. `test` là gì?

`test` là đơn vị cơ bản để khai báo một test case.

### Cú pháp

```jsx
import { test } from '@playwright/test';

test('<tên test>', async ({ page }) => {
  // Code của test
});
```

Trong đó:

| Thành phần | Ý nghĩa |
| --- | --- |
| `test` | Khai báo một test case |
| `<tên test>` | Tên của test case |
| `async ({ page }) => {}` | Function chứa nội dung test |
| `page` | Đại diện cho một tab / page trên trình duyệt |

---

## 6.2. `step` là gì?

`step` là đơn vị nhỏ hơn `test`, dùng để chia test case thành từng bước rõ ràng.

Nên map step 1-1 với test case để dễ maintain.

### Cú pháp

```jsx
await test.step('Tên step', async () => {
  // Code here
});
```

### Ví dụ đầy đủ

```jsx
import { test } from '@playwright/test';

test('<tên test>', async ({ page }) => {
  await test.step('Tên step', async () => {
    // Code here
  });
});
```

---

# 7. Navigate - Điều hướng tới trang web

Dùng `page.goto()` để mở một URL.

```jsx
await page.goto('<https://pw-practice.playwrightvn.com/>');
```

Ý nghĩa:

```
Mở trang <https://pw-practice.playwrightvn.com/>
```

---

# 8. Locate - Tìm phần tử trên trang

Dùng `page.locator("<selector>")` để chọn phần tử trên trang.

Ví dụ:

```jsx
page.locator("//input[@id='email']");
```

Ý nghĩa:

```
Tìm input có id là email.
```

Khi thao tác thực tế, thường viết kèm `await` và hành động phía sau:

```jsx
await page.locator("//input[@id='email']").fill("test@example.com");
```

---

# 9. Click

## 9.1. Single click

Click một lần.

```jsx
await page.locator("//button").click();
```

---

## 9.2. Double click

Click đúp.

```jsx
await page.locator("//button").dblclick();
```

---

## 9.3. Click chuột phải

```jsx
await page.locator("//button").click({
  button: 'right'
});
```

---

## 9.4. Click kèm phím khác

Ví dụ click kèm phím `Shift`:

```jsx
await page.locator("").click({
  modifiers: ['Shift']
});
```

---

# 10. Input

## 10.1. `fill()`

`fill()` giống việc bạn paste toàn bộ nội dung vào một ô input.

```jsx
await page.locator("//input").fill("Playwright Viet Nam");
```

---

## 10.2. `pressSequentially()`

`pressSequentially()` giống việc bạn gõ từng chữ cái vào ô input.

Có thể thêm `delay` để mô phỏng tốc độ gõ.

```jsx
await page.locator("//input").pressSequentially("Playwright Viet Nam", {
  delay: 100
});
```

Trong đó:

| Thành phần | Ý nghĩa |
| --- | --- |
| `"Playwright Viet Nam"` | Nội dung cần nhập |
| `delay: 100` | Mỗi ký tự cách nhau 100ms |

---

# 11. Radio / Checkbox

## 11.1. Kiểm tra checkbox/radio có đang được check không

Dùng `isChecked()`.

```jsx
const isChecked = await page.locator("//input").isChecked();
```

Kết quả trả về là boolean:

```
true hoặc false
```

---

## 11.2. Check checkbox/radio

```jsx
await page.locator("//input").check();
```

---

## 11.3. Uncheck checkbox

Có thể dùng `setChecked(false)`.

```jsx
await page.locator("//input").setChecked(false);
```

Hoặc nếu là checkbox, có thể dùng:

```jsx
await page.locator("//input").uncheck();
```

---

# 12. Select dropdown

Dùng `selectOption()` để chọn giá trị trong dropdown.

Ví dụ chọn option có label là `USA`:

```jsx
await page.locator('//select[@id="country"]')
  .selectOption({ label: 'USA' });
```

Ý nghĩa:

```
Tìm thẻ select có id là country.
Sau đó chọn option có label hiển thị là USA.
```

Ngoài `label`, có thể chọn theo `value`:

```jsx
await page.locator('//select[@id="country"]')
  .selectOption({ value: 'usa' });
```

---

# 13. Upload file

Dùng `setInputFiles()` để upload file.

```jsx
await page.locator("//input[@id='profile']")
  .setInputFiles("<file-path>");
```

Trong đó:

| Thành phần | Ý nghĩa |
| --- | --- |
| `//input[@id='profile']` | Selector của input upload file |
| `<file-path>` | Đường dẫn tới file cần upload |

Ví dụ:

```jsx
await page.locator("//input[@id='profile']")
  .setInputFiles("tests/fixtures/avatar.png");
```

---

# 14. Bảng tổng hợp thao tác cơ bản

| Nhóm thao tác | Câu lệnh | Ý nghĩa |
| --- | --- | --- |
| Navigate | `page.goto(url)` | Mở trang web |
| Locate | `page.locator(selector)` | Tìm phần tử |
| Click | `.click()` | Click một lần |
| Double click | `.dblclick()` | Click đúp |
| Right click | `.click({ button: 'right' })` | Click chuột phải |
| Fill | `.fill(text)` | Nhập / paste nội dung vào input |
| Type từng ký tự | `.pressSequentially(text)` | Gõ từng ký tự |
| Check trạng thái | `.isChecked()` | Kiểm tra checkbox/radio có được chọn không |
| Check | `.check()` | Tick checkbox/radio |
| Uncheck | `.uncheck()` hoặc `.setChecked(false)` | Bỏ tick checkbox |
| Select | `.selectOption()` | Chọn option trong dropdown |
| Upload file | `.setInputFiles(filePath)` | Upload file |

---

# 15. Ví dụ tổng hợp

```jsx
import { test } from '@playwright/test';

test('Demo thao tác cơ bản', async ({ page }) => {
  await test.step('Mở trang web', async () => {
    await page.goto('<https://pw-practice.playwrightvn.com/>');
  });

  await test.step('Nhập dữ liệu vào input', async () => {
    await page.locator("//input[@id='email']").fill("test@example.com");
  });

  await test.step('Click button', async () => {
    await page.locator("//button").click();
  });

  await test.step('Chọn dropdown', async () => {
    await page.locator('//select[@id="country"]')
      .selectOption({ label: 'USA' });
  });

  await test.step('Upload file', async () => {
    await page.locator("//input[@id='profile']")
      .setInputFiles("tests/fixtures/avatar.png");
  });
});
```

---

# 16. Ghi nhớ nhanh

```
Muốn automation một phần tử, cần tìm được phần tử đó trước.

Selector là công cụ để tìm phần tử.

Thứ tự ưu tiên:
Playwright selector > CSS selector > XPath

Các thao tác cơ bản:
goto()           → mở trang
locator()        → tìm phần tử
click()          → click
fill()           → nhập nhanh / paste text
pressSequentially() → gõ từng ký tự
check()          → tick checkbox/radio
isChecked()      → kiểm tra trạng thái checked
selectOption()   → chọn dropdown
setInputFiles()  → upload file
```

# IV . Playwright - Handle Dialog

## 1. Dialog là gì?

**Dialog** là popup native của browser, thường xuất hiện từ các hàm JavaScript như:

| Loại dialog | Hàm JS thường gặp | Ý nghĩa |
| --- | --- | --- |
| `alert` | `alert("message")` | Hiển thị thông báo |
| `confirm` | `confirm("message")` | Hỏi xác nhận OK / Cancel |
| `prompt` | `prompt("message")` | Hỏi và cho phép nhập text |
| `beforeunload` | Khi rời trang / đóng tab | Hỏi xác nhận trước khi rời trang |

---

## 2. Nguyên tắc quan trọng khi handle dialog

Khi thao tác trên UI làm bật dialog, ví dụ click button, cần **đăng ký dialog handler trước hành động tạo ra dialog**.

```jsx
page.on('dialog', async dialog => {
  await dialog.accept();
});

await page.locator('//button[text()="Delete"]').click();
```

Nếu có `page.on('dialog')` listener thì trong listener đó cần xử lý dialog bằng:

```jsx
dialog.accept();
```

hoặc:

```jsx
dialog.dismiss();
```

Nếu chỉ log message mà không xử lý, action như `click()` có thể bị treo vì dialog đang chặn trang.

---

## 3. Các method thường dùng của `dialog`

| Method | Ý nghĩa | Dùng khi nào |
| --- | --- | --- |
| `dialog.accept()` | Bấm OK / Accept | Đồng ý với dialog |
| `dialog.dismiss()` | Bấm Cancel / Dismiss | Hủy dialog |
| `dialog.message()` | Lấy nội dung message của dialog | Verify text dialog |
| `dialog.type()` | Lấy loại dialog | Check là `alert`, `confirm`, `prompt`, `beforeunload` |
| `dialog.defaultValue()` | Lấy giá trị mặc định của prompt | Dùng với `prompt` |
| `dialog.accept("text")` | Nhập text vào prompt rồi OK | Dùng với `prompt` |

---

## 4. Handle `alert`

`alert` thường chỉ có nút OK.

```jsx
page.on('dialog', async dialog => {
  console.log(dialog.message());
  await dialog.accept();
});

await page.locator('//button[text()="Alert"]').click();
```

Ý nghĩa:

```
Khi dialog xuất hiện:
1. Lấy message ra để kiểm tra/log.
2. Bấm OK bằng dialog.accept().
```

---

## 5. Handle `confirm`

`confirm` thường có 2 lựa chọn:

```
OK / Cancel
```

### Bấm OK

```jsx
page.on('dialog', async dialog => {
  console.log(dialog.message());
  await dialog.accept();
});

await page.locator('//button[text()="Delete"]').click();
```

### Bấm Cancel

```jsx
page.on('dialog', async dialog => {
  console.log(dialog.message());
  await dialog.dismiss();
});

await page.locator('//button[text()="Delete"]').click();
```

---

## 6. Handle `prompt`

`prompt` là dialog có ô nhập text.

```jsx
page.on('dialog', async dialog => {
  console.log(dialog.message());
  await dialog.accept('Nguyen Van A');
});

await page.locator('//button[text()="Prompt"]').click();
```

Trong đó:

```jsx
dialog.accept('Nguyen Van A')
```

nghĩa là:

```
Nhập "Nguyen Van A" vào prompt rồi bấm OK.
```

---

## 7. Verify nội dung dialog

Khi test, thường không chỉ accept/dismiss mà còn cần kiểm tra message dialog có đúng không.

```jsx
import { test, expect } from '@playwright/test';

test('Handle alert dialog', async ({ page }) => {
  await page.goto('<https://example.com>');

  page.on('dialog', async dialog => {
    expect(dialog.message()).toBe('Bạn có chắc chắn muốn xóa?');
    await dialog.accept();
  });

  await page.locator('//button[text()="Delete"]').click();
});
```

---

## 8. Verify loại dialog

Có thể dùng `dialog.type()` để kiểm tra dialog đang xuất hiện là loại gì.

```jsx
page.on('dialog', async dialog => {
  expect(dialog.type()).toBe('confirm');
  await dialog.accept();
});

await page.locator('//button[text()="Delete"]').click();
```

Các type thường gặp:

```
alert
confirm
prompt
beforeunload
```

---

## 9. `page.on()` và `page.once()` khác nhau thế nào?

| Cách dùng | Ý nghĩa | Khi nào dùng |
| --- | --- | --- |
| `page.on('dialog', handler)` | Lắng nghe mọi dialog xuất hiện | Khi trong test có thể có nhiều dialog |
| `page.once('dialog', handler)` | Chỉ xử lý dialog đầu tiên, sau đó tự bỏ listener | Khi chỉ muốn handle đúng 1 dialog |

Ví dụ dùng `page.once()`:

```jsx
page.once('dialog', async dialog => {
  expect(dialog.message()).toBe('Xóa thành công');
  await dialog.accept();
});

await page.locator('//button[text()="Delete"]').click();
```

Với test case thông thường, nếu chỉ có **một dialog**, dùng `page.once()` sẽ sạch hơn vì tránh listener bị áp dụng nhầm cho các dialog sau.

---

## 10. Handle `beforeunload`

`beforeunload` thường xuất hiện khi người dùng rời trang, reload hoặc đóng tab mà trang muốn hỏi xác nhận.

```jsx
page.on('dialog', async dialog => {
  expect(dialog.type()).toBe('beforeunload');
  await dialog.dismiss();
});

await page.close({ runBeforeUnload: true });
```

---

## 11. Lỗi thường gặp

| Lỗi | Nguyên nhân | Cách sửa |
| --- | --- | --- |
| Test bị treo ở bước `click()` | Có dialog hiện ra nhưng chưa `accept()` hoặc `dismiss()` | Thêm `dialog.accept()` hoặc `dialog.dismiss()` |
| Không bắt được dialog | Đăng ký `page.on('dialog')` sau khi click | Đặt listener trước hành động tạo dialog |
| Chỉ log message nhưng không xử lý dialog | Dialog vẫn đang mở và block page | Sau khi log phải accept/dismiss |
| Dùng `accept("text")` với `alert` hoặc `confirm` | Text chỉ có ý nghĩa với `prompt` | Chỉ truyền text khi dialog là `prompt` |

### Ví dụ sai

```jsx
page.on('dialog', dialog => {
  console.log(dialog.message());
});

await page.locator('//button').click();
```

Sai vì chỉ log message, không xử lý dialog.

### Ví dụ đúng

```jsx
page.on('dialog', async dialog => {
  console.log(dialog.message());
  await dialog.accept();
});

await page.locator('//button').click();
```

---

## 12. Template dùng nhanh

### Accept dialog

```jsx
page.once('dialog', async dialog => {
  console.log(dialog.message());
  await dialog.accept();
});

await page.locator('//button').click();
```

### Dismiss dialog

```jsx
page.once('dialog', async dialog => {
  console.log(dialog.message());
  await dialog.dismiss();
});

await page.locator('//button').click();
```

### Prompt dialog

```jsx
page.once('dialog', async dialog => {
  await dialog.accept('Nội dung nhập vào prompt');
});

await page.locator('//button').click();
```

### Verify message rồi accept

```jsx
page.once('dialog', async dialog => {
  expect(dialog.message()).toBe('Message mong muốn');
  await dialog.accept();
});

await page.locator('//button').click();
```

---

## 13. Ghi nhớ nhanh

```
Handle dialog trong Playwright:

1. Đăng ký page.on/page.once trước hành động tạo dialog.
2. Khi dialog xuất hiện, phải accept hoặc dismiss.
3. Dùng dialog.message() để lấy nội dung.
4. Dùng dialog.type() để kiểm tra loại dialog.
5. Với prompt, dùng dialog.accept("text") để nhập giá trị.
6. Nếu chỉ có một dialog, nên dùng page.once().
```

---

## 14. Kết luận

Với automation test, handle dialog không chỉ là bấm OK/Cancel. Cần nhớ 3 việc chính:

| Việc cần làm | Câu lệnh |
| --- | --- |
| Bắt dialog | `page.on('dialog', async dialog => {})` |
| Kiểm tra nội dung | `dialog.message()` |
| Xử lý dialog | `dialog.accept()` hoặc `dialog.dismiss()` |

Mẫu chuẩn dễ nhớ nhất:

```jsx
page.once('dialog', async dialog => {
  console.log(dialog.message());
  await dialog.accept();
});

await page.locator('//button').click();
```

# V. Playwright `evaluate()` - Tóm tắt lý thuyết

## `evaluate()` là gì?

`evaluate()` cho phép **thực thi JavaScript trực tiếp bên trong trình duyệt (Browser Context)**.

Nói cách khác:

- Các API của Playwright (`click()`, `fill()`, `check()`,...) chạy từ **Node.js**
- `evaluate()` sẽ chuyển sang **Browser** để thao tác trực tiếp với DOM.

```
Node.js (Playwright)
        │
        │ evaluate()
        ▼
Browser (Chrome)
        │
        ▼
DOM / JavaScript
```

---

# Khi nào sử dụng `evaluate()`?

Dùng khi Playwright **không có API hỗ trợ trực tiếp**, hoặc cần:

- Thay đổi thuộc tính của phần tử
- Đọc dữ liệu từ DOM
- Thực thi JavaScript
- Trigger Event
- Thao tác với Slider, Canvas,...
- Scroll theo ý muốn

---

# Cú pháp

```tsx
await locator.evaluate((element) => {
    // JavaScript chạy trong Browser
});
```

Trong đó:

- `locator` : phần tử cần thao tác
- `element` : chính là DOM Element

---

# Ví dụ 1. Thay đổi giá trị Slider

```tsx
await page.locator('#rating').evaluate((el: HTMLInputElement) => {
    el.value = '8';
});
```

---

# Ví dụ 2. Trigger Event

Sau khi thay đổi value, nhiều website yêu cầu phát sinh Event.

```tsx
await page.locator('#rating').evaluate((el: HTMLInputElement) => {
    el.value = '8';

    el.dispatchEvent(new Event('input', {
        bubbles: true
    }));

    el.dispatchEvent(new Event('change', {
        bubbles: true
    }));
});
```

---

# Ví dụ 3. Scroll xuống cuối trang

```tsx
await page.evaluate(() => {
    window.scrollTo(0, document.body.scrollHeight);
});
```

---

# Ví dụ 4. Lấy nội dung bằng JavaScript

```tsx
const text = await page.locator('#title').evaluate(
    el => el.textContent
);

console.log(text);
```

---

# Ví dụ 5. Lấy thuộc tính

```tsx
const href = await page.locator('a').evaluate(
    el => el.getAttribute('href')
);
```

---

# Ví dụ 6. Đổi màu phần tử

```tsx
await page.locator('#title').evaluate((el: HTMLElement) => {
    el.style.color = 'red';
});
```

---

# Truyền dữ liệu từ Node.js vào Browser

```tsx
const age = 30;

await page.locator('#age').evaluate(
    (el, value) => {
        el.textContent = value.toString();
    },
    age
);
```

---

# Giá trị trả về

`evaluate()` có thể trả về dữ liệu.

```tsx
const value = await page.locator('#username').evaluate(
    (el: HTMLInputElement) => el.value
);

console.log(value);
```

---

# Khi nào KHÔNG nên dùng?

Không nên dùng để làm những việc Playwright đã có API riêng.

Ví dụ:

❌

```tsx
await locator.evaluate(el => el.click());
```

Nên dùng:

```tsx
await locator.click();
```

---

❌

```tsx
await locator.evaluate(el => el.value = 'Admin');
```

Nên dùng:

```tsx
await locator.fill('Admin');
```

---

# Khi nào NÊN dùng?

| Trường hợp | Có nên dùng `evaluate()`? |
| --- | --- |
| Textbox | ❌ |
| Password | ❌ |
| Textarea | ❌ |
| Checkbox | ❌ |
| Radio | ❌ |
| Dropdown | ❌ |
| Button | ❌ |
| Link | ❌ |
| Slider (`input type="range"`) | ✅ |
| Canvas | ✅ |
| SVG | ✅ |
| Scroll | ✅ |
| Thực thi JavaScript | ✅ |
| Trigger Event | ✅ |
| Đọc dữ liệu đặc biệt từ DOM | ✅ |

---

# Quy tắc ghi nhớ

> **Ưu tiên sử dụng API có sẵn của Playwright (`click()`, `fill()`, `check()`, `selectOption()`...) vì chúng có cơ chế Auto-wait và đáng tin cậy hơn. Chỉ dùng `evaluate()` khi cần chạy JavaScript trực tiếp trên DOM hoặc khi Playwright không có API phù hợp.**
> 

### Playwright - dispatchEvent()

#### dispatchEvent() là gì?

`dispatchEvent()` là phương thức của DOM dùng để **tự phát sinh (trigger) một sự kiện (Event)** trên một phần tử HTML.

Nó giúp mô phỏng hành động của người dùng để JavaScript của website xử lý như bình thường.

---

#### Cú pháp

```tsx
element.dispatchEvent(event);
```

Ví dụ:

```tsx
el.dispatchEvent(new Event('input'));
```

---

# Tại sao cần dispatchEvent()?

Giả sử có Slider:

```html
<input type="range" id="rating">

<span id="ratingValue">5</span>
```

Website có JavaScript:

```jsx
rating.addEventListener('input', () => {
    ratingValue.textContent = rating.value;
});
```

Nếu chỉ thay đổi value:

```tsx
el.value = '8';
```

Kết quả:

```
Slider = 8
RatingValue = 5 ❌
```

Lý do:

> JavaScript của website **không biết** giá trị đã thay đổi.
> 

---

# dispatchEvent() giải quyết vấn đề gì?

Sau khi đổi value:

```tsx
el.value = '8';

el.dispatchEvent(new Event('input'));
```

Quá trình diễn ra:

```
Thay đổi value
        │
        ▼
dispatchEvent('input')
        │
        ▼
Website nhận được sự kiện input
        │
        ▼
JavaScript được thực thi
        │
        ▼
RatingValue cập nhật thành 8
```

---

# Phân tích từng phần

```tsx
el.dispatchEvent(
    new Event('input', {
        bubbles: true
    })
);
```

## el

Phần tử DOM.

Ví dụ:

```html
<input id="rating">
```

Trong TypeScript:

```tsx
el: HTMLInputElement
```

---

## dispatchEvent()

Phát sinh một Event trên phần tử.

```tsx
element.dispatchEvent(event);
```

---

## new Event('input')

Tạo một Event tên là:

```
input
```

Giống như người dùng vừa thay đổi giá trị Input.

---

## bubbles: true

Cho phép Event lan truyền lên phần tử cha.

```
input
   │
   ▼
div
   │
   ▼
form
   │
   ▼
document
```

Nhiều website bắt Event ở:

```jsx
document.addEventListener(...)
```

nên thường nên để:

```tsx
{ bubbles: true }
```

---

# input vs change

## input

Xảy ra **ngay khi giá trị thay đổi**.

Ví dụ:

```
5 → 6 → 7 → 8
```

Mỗi lần thay đổi đều phát sinh `input`.

```tsx
new Event('input')
```

---

## change

Xảy ra khi **người dùng hoàn thành thao tác**.

Ví dụ:

```
Kéo Slider
↓
Thả chuột
↓
change
```

```tsx
new Event('change')
```

---

# Khi nào dùng cả input và change?

Một số website:

- Chỉ xử lý `input`
- Chỉ xử lý `change`
- Hoặc xử lý cả hai

Do đó thường viết:

```tsx
await page.locator('#rating').evaluate((el: HTMLInputElement) => {
    el.value = '8';

    el.dispatchEvent(new Event('input', { bubbles: true }));
    el.dispatchEvent(new Event('change', { bubbles: true }));
});
```

---

# dispatchEvent() của Playwright

Ngoài JavaScript thuần, Playwright cũng hỗ trợ:

```tsx
await page.locator('#rating').dispatchEvent('input');
```

Hoặc:

```tsx
await page.locator('#rating').dispatchEvent('change');
```

Ví dụ:

```tsx
const slider = page.locator('#rating');

await slider.evaluate((el: HTMLInputElement) => {
    el.value = '8';
});

await slider.dispatchEvent('input');
```

---

# Khi nào cần dùng dispatchEvent()?

| Trường hợp | Có cần không? |
| --- | --- |
| click() | ❌ Không |
| fill() | ❌ Không |
| check() | ❌ Không |
| selectOption() | ❌ Không |
| evaluate() thay đổi value | ✅ Có |
| Slider | ✅ Có |
| Canvas | ✅ Có |
| Tự sửa DOM | ✅ Có |
| Trigger JavaScript của website | ✅ Có |

---

# Ghi nhớ

```
value = Thay đổi dữ liệu

dispatchEvent = Báo cho website biết dữ liệu đã thay đổi

JavaScript của website sẽ xử lý sau khi nhận được Event
```

> **Quy tắc:** Nếu bạn thay đổi DOM bằng `evaluate()`, hãy kiểm tra xem website có cần `dispatchEvent()` để cập nhật giao diện hoặc kích hoạt logic xử lý hay không.
> 

# Playwright - `boundingBox()`

## `boundingBox()` là gì?

`boundingBox()` là phương thức của Playwright dùng để **lấy vị trí và kích thước của một phần tử (Element) trên màn hình trình duyệt**.

Nó thường được sử dụng khi cần thao tác chuột theo **tọa độ (x, y)** thay vì click trực tiếp vào phần tử.

---

# Cú pháp

```tsx
const box = await locator.boundingBox();
```

Ví dụ:

```tsx
const box = await page.locator('#starRating').boundingBox();
```

---

# Giá trị trả về

`boundingBox()` trả về một object:

```tsx
{
    x: 520,
    y: 180,
    width: 250,
    height: 40
}
```

| Thuộc tính | Ý nghĩa |
| --- | --- |
| `x` | Tọa độ mép trái của phần tử |
| `y` | Tọa độ mép trên của phần tử |
| `width` | Chiều rộng phần tử |
| `height` | Chiều cao phần tử |

Có thể hình dung:

```
(x, y)
   ┌───────────────────────────┐
   │                           │
   │        Element DOM        │
   │                           │
   └───────────────────────────┘
          ←──── width ────→
             ↑
           height
```

---

# Khi nào sử dụng?

`boundingBox()` thường được dùng khi cần thao tác theo **vị trí cụ thể** trên phần tử.

Ví dụ:

- Click vào Slider
- Chọn Star Rating
- Canvas
- Drag & Drop
- Signature Pad
- Click đúng một vùng của Image/SVG

---

# Click vào giữa phần tử

```tsx
const box = await page.locator('#starRating').boundingBox();

if (!box) {
    throw new Error('Không tìm thấy phần tử');
}

await page.mouse.click(
    box.x + box.width / 2,
    box.y + box.height / 2
);
```

---

# Click theo tỷ lệ %

Giả sử muốn click tại **90% chiều rộng**.

```tsx
const box = await page.locator('#starRating').boundingBox();

await page.mouse.click(
    box.x + box.width * 0.9,
    box.y + box.height / 2
);
```

---

# Ví dụ thực tế - Star Rating

Muốn chọn **4.5/5 sao**.

Ta có:

```
4.5 / 5 = 90%
```

Code:

```tsx
const rating = 4.5;
const maxRating = 5;

const box = await page.locator('#starRating').boundingBox();

if (!box) {
    throw new Error('Không tìm thấy vùng Star Rating');
}

await page.mouse.click(
    box.x + box.width * (rating / maxRating),
    box.y + box.height / 2
);
```

Ý nghĩa:

```
Lấy vị trí của vùng Rating
        ↓
Tính vị trí tương ứng với 90%
        ↓
Click chuột tại vị trí đó
        ↓
Website xử lý như người dùng thật
```

---

# Giải thích công thức

```tsx
box.x + box.width * (rating / maxRating)
```

Ví dụ:

```
x = 500
width = 200
rating = 4.5
```

Kết quả:

```
500 + 200 × (4.5 / 5)

= 500 + 180

= 680
```

Chuột sẽ click tại:

```
(x = 680, y = giữa phần tử)
```

---

# `page.mouse.click()`

Sau khi có tọa độ:

```tsx
await page.mouse.click(x, y);
```

Playwright sẽ click giống như người dùng thật.

---

# Vì sao cần kiểm tra `box == null`?

`boundingBox()` có thể trả về:

```tsx
null
```

Nếu:

- Phần tử không tồn tại
- Phần tử bị ẩn (`display: none`)
- Chưa render
- Không có kích thước

Do đó luôn nên kiểm tra:

```tsx
if (!box) {
    throw new Error('Không tìm thấy phần tử');
}
```

---

# boundingBox() vs click()

## Click thông thường

```tsx
await locator.click();
```

Playwright tự click vào giữa phần tử.

---

## Click theo vị trí

```tsx
const box = await locator.boundingBox();

await page.mouse.click(
    box.x + 50,
    box.y + 20
);
```

Cho phép click vào:

- Nửa trái
- Nửa phải
- Góc trên
- Góc dưới
- Theo tỷ lệ %

---

# Khi nào nên dùng?

| Control | Có dùng `boundingBox()` không? |
| --- | --- |
| Button | ❌ |
| Textbox | ❌ |
| Checkbox | ❌ |
| Radio | ❌ |
| Dropdown | ❌ |
| Slider | ✅ |
| Star Rating | ✅ |
| Canvas | ✅ |
| Signature Pad | ✅ |
| Drag & Drop | ✅ |
| SVG | ✅ |

---

# Tổng kết

```
boundingBox()

        ↓

Lấy vị trí + kích thước của phần tử

        ↓

Tính toán tọa độ cần click

        ↓

page.mouse.click(x, y)

        ↓

Mô phỏng thao tác chuột của người dùng thật
```

> **Quy tắc:** Chỉ sử dụng `boundingBox()` khi cần thao tác theo **tọa độ** trên một phần của phần tử. Nếu chỉ cần click vào chính phần tử, hãy ưu tiên `locator.click()` vì Playwright đã tự động xử lý vị trí click, auto-wait và các điều kiện tương tác.
>