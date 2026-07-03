# Lesson 3 : Git & JavaScript Continue

**Git Undo: Đưa file ra khỏi vùng chờ Commit (Staging Area)**

**1. Khái niệm cơ bản cần nhớ**

- **Working Directory:** Nơi chứa các file bạn đang chỉnh sửa.
- **Staging Area (Vùng chờ):** Nơi chứa các file đã sẵn sàng để lưu lại (commit).

Luồng làm việc chuẩn: Sửa file ➔ **`git add`** (đưa vào Staging) ➔ **`git commit`** (Lưu lại).

**2. Xử lý khi lỡ tay "add nhầm"** Nếu bạn lỡ dùng **`git add .`** hoặc add nhầm một file (như **`package.json`**) vào vùng Staging Area nhưng chưa muốn commit nó, hãy dùng lệnh sau để rút file đó ra:

```
git restore --staged <tên_file>
```

**⚠️ Lưu ý cực kỳ quan trọng:**

- Lệnh này **không xóa file** và **không làm mất nội dung** bạn đã sửa.
- Nó chỉ đưa file từ Staging Area quay ngược trở lại Working Directory.

**3. Bảng tóm tắt các lệnh liên quan**

| **Lệnh** | **Công dụng** |
| --- | --- |
| **`git status`** | Kiểm tra trạng thái các file |
| **`git add <tên_file>`** | Đưa 1 file cụ thể vào vùng chờ commit |
| **`git add .`** | Đưa **toàn bộ** file thay đổi vào vùng chờ commit |
| **`git restore --staged <tên_file>`** | Gỡ **1 file cụ thể** ra khỏi vùng chờ commit |
| **`git restore --staged .`** | Gỡ **toàn bộ** file ra khỏi vùng chờ commit |
| **`git commit -m "lời nhắn"`** | Lưu (commit) các file đang có trong vùng chờ |

**4. Ví dụ thực tế trong 4 bước**

1. Bạn lỡ add tất cả: **`git add .`**
2. Bạn nhận ra file **`package.json`** chưa cần commit lúc này, rút nó ra: **`git restore --staged package.json`**
3. Kiểm tra lại trạng thái xem đã rút thành công chưa: **`git status`**
4. Commit các file còn lại một cách an toàn: **`git commit -m "add lesson 02 notes"`**

1. **Tóm tắt phân biệt (Mẹo ghi nhớ)**

| **Mục đích** | **Câu lệnh sử dụng** | **Vùng bị tác động** |
| --- | --- | --- |
| **Bỏ file khỏi vùng chờ** (Khi vừa **`git add`** nhầm) | **`git restore --staged <file>`** | Kéo từ **Staging Area** quay về Working Directory. |
| **Hủy bỏ commit** (Khi đã **`git commit`** nhưng muốn làm lại) | **`git reset HEAD ~N`** | Xóa từ **Repository**, đẩy code quay về Working Directory. |
- Commit đầu tiên không thể bị reset.
- Nếu muốn reset → xoá thư mục .git đi rồi init lại
- Lấy code từ server về:  git pull origin main

1. **Bảng tổng hợp câu lệnh branch**

| Câu lệnh | Ý nghĩa |
| --- | --- |
| `git branch` | Xem danh sách nhánh |
| `git branch <tên_branch>` | Tạo nhánh mới |
| `git checkout <tên_branch>` | Chuyển sang nhánh khác |
| `git checkout -b <tên>` | Vừa tạo nhánh mới, vừa chuyển sang nhánh đó |
| `git branch -D <tên_nhánh>` | Xóa nhánh |
| `git pull origin main` | Kéo code mới nhất từ nhánh `main` trên GitHub về |
| `git push origin <tên_branch>` | Đẩy nhánh local lên GitHub |

# 7. Git: Cú pháp file `.gitignore`

| Cú pháp | Ý nghĩa | Ví dụ |
| --- | --- | --- |
| `# nội dung ghi chú` | Dòng bắt đầu bằng `#` là comment, Git sẽ bỏ qua dòng này | `# Ignore log files` |
| `<tên_file>` | Ignore một file cụ thể | `secret.txt` |
| `*.đuôi_file` | Ignore tất cả file có phần mở rộng tương ứng | `*.log` |
| `<tên_thư_mục>/` | Ignore toàn bộ thư mục | `node_modules/` |
| `**/*.đuôi_file` | Ignore file trong mọi thư mục con | `**/*.tmp` |
| `!<tên_file>` | Ngoại lệ, không ignore file này | `!important.log` |
| `/<tên_file>` | Ignore file chỉ ở thư mục gốc của repository | `/TODO` |
| `<folder>/**/*.đuôi_file` | Ignore tất cả file có đuôi tương ứng trong một thư mục và các thư mục con bên trong | `doc/**/*.txt` |

# 8. Convention - Quy ước đặt tên

| Convention | Cách viết | Ví dụ |
| --- | --- | --- |
| `snake_case` | Các từ viết thường, ngăn cách bằng dấu gạch dưới `_` | `user_name`, `total_price` |
| `kebab-case` | Các từ viết thường, ngăn cách bằng dấu gạch ngang `-` | `login-page`, `test-results` |
| `camelCase` | Từ đầu viết thường, các từ sau viết hoa chữ cái đầu | `userName`, `totalPrice` |
| `PascalCase` | Mỗi từ đều viết hoa chữ cái đầu | `LoginPage`, `UserProfile` |

---

## 

**Object (Đối tượng)** là một cấu trúc dữ liệu cốt lõi trong JavaScript, được sử dụng để lưu trữ một tập hợp các giá trị có liên quan với nhau vào cùng một biến hoặc hằng số.

**1. Đặc điểm cấu trúc**

- Dữ liệu bên trong Object được mô tả bằng cặp **key: value** (tên_thuộc_tính: giá_trị).
- Các cặp giá trị được đặt bên trong dấu ngoặc nhọn **`{ }`** và cách nhau bởi dấu phẩy **`,`**.

**2. Khai báo và Ví dụ**

Bạn có thể khai báo một Object bằng từ khóa **`let`** (nếu dự định gán lại giá trị cho biến) hoặc **`const`** (nếu là hằng số).

**Ví dụ 1: Khai báo đối tượng cơ bản**

Lưu trữ thông tin của một người dùng (user):

```
let user = {
  "name": "Alex",
  "age": 10,
  "email": "alex@gmail.com"
};
```

**Ví dụ 2: Khai báo đối tượng lồng nhau (Nested Object)**

Một Object có thể chứa nhiều kiểu dữ liệu khác nhau, thậm chí chứa cả một Object khác ở bên trong nó (như ví dụ **`manufacturer`** dưới đây):

```
const product = {
  "name": "Laptop",
  "price": 500,
  "isWindow": true,
  "manufacturer": {
    "name": "Acer",
    "year": 2024
  }
};
```

**3. Array (Mảng)**

**Array (Mảng)** là một biến đặc biệt, có thể lưu trữ nhiều giá trị cùng một lúc theo một thứ tự nhất định.

**3.1. Tạo mảng (Khai báo & Sử dụng)**

- **Khai báo:** Mảng được tạo bằng cách bọc các phần tử bên trong cặp dấu ngoặc vuông **`[ ]`**, mỗi phần tử cách nhau bởi dấu phẩy **`,`**.
- **Sử dụng:** Có thể lưu trữ chuỗi (string), số (number), boolean, object, hoặc thậm chí là một mảng khác bên trong mảng.

```
// Ví dụ khai báo mảng các hãng xe
let cars = ["Toyota", "Ford", "BMW"];
```

**3.2. Truy xuất mảng**

Mỗi phần tử trong mảng được đánh số thứ tự (gọi là **index**), bắt đầu từ số **0**.

- **Độ dài mảng (length):** Trả về tổng số phần tử đang có trong mảng.
- **Lấy phần tử theo index:** Sử dụng cú pháp **`tên_mảng[index]`**

# JavaScript - Function (Hàm)

## 1. Function (Hàm) là gì?

**Function (Hàm)** là một khối mã, hay một đoạn code, được đặt tên và có thể tái sử dụng nhiều lần.

Mỗi hàm thường được viết ra để thực hiện **một nhiệm vụ cụ thể** hoặc **một phép tính toán cụ thể**.

Sử dụng hàm giúp code:

- Gọn gàng hơn
- Dễ quản lý hơn
- Tránh việc phải viết đi viết lại một đoạn code giống nhau

---

## 2. Khai báo và sử dụng hàm

### 2.1. Cú pháp khai báo hàm

Sử dụng từ khóa `function`, theo sau là tên hàm và cặp ngoặc đơn `()`.

Phần thân hàm chứa các đoạn code thực thi, được đặt trong cặp ngoặc nhọn `{ }`.

```jsx
function <nameFunction>() {
  // code thực thi nhiệm vụ
}
```

### 2.2. Ví dụ khai báo và gọi hàm

```
// 1. Khai báo hàm
functionsayHello() {
console.log("Xin chào các bạn K19!");
}

// 2. Sử dụng hàm: gọi hàm - call/invoke
sayHello();// Kết quả in ra: Xin chào các bạn K19!
```

Ghi nhớ:

```
Khai báo hàm: tạo ra hàm
Gọi hàm: thực thi đoạn code bên trong hàm
```

## 3. Parameter (Tham số)

**Parameter (Tham số)** là các biến được truyền vào bên trong dấu ngoặc đơn `()` khi khai báo hàm.

Tham số giúp hàm trở nên linh hoạt hơn, vì hàm có thể nhận các giá trị khác nhau mỗi khi được gọi.

---

### 3.1. Ví dụ về parameter

```
// 'name' ở đây chính là một parameter
functiongreet(name) {
console.log("Xin chào "+name);
}

// Khi gọi hàm, ta truyền vào các giá trị thực tế
// Các giá trị thực tế này gọi là argument - đối số
greet("Alex");// Kết quả: Xin chào Alex
greet("Peter");// Kết quả: Xin chào Peter
```

---

### 3.2. Parameter và Argument khác nhau thế nào?

| Khái niệm | Ý nghĩa | Ví dụ |
| --- | --- | --- |
| **Parameter** | Biến được khai báo trong định nghĩa hàm | `name` trong `function greet(name)` |
| **Argument** | Giá trị thực tế truyền vào khi gọi hàm | `"Alex"` trong `greet("Alex")` |

Lưu ý:

```
Một hàm có thể nhận nhiều tham số.
Các tham số được ngăn cách nhau bằng dấu phẩy.
```

Ví dụ:

```
functionintroduce(name,age) {
console.log("Tôi là "+name+", "+age+" tuổi.");
}

introduce("Alex",10);
```

---

## 4. Return value (Giá trị trả về)

Trong nhiều trường hợp, ta không chỉ muốn hàm thực hiện một hành động như `console.log`, mà muốn hàm **tính toán và trả về một kết quả** để sử dụng tiếp ở phần khác của chương trình.

Khi đó, ta dùng từ khóa:

```
return
```

Khi gặp `return`, hàm sẽ:

- Dừng thực thi
- Trả về kết quả

---

### 4.1. Ví dụ về return value

```
// Khai báo hàm tính tổng với 2 tham số a và b
// Hàm có trả về kết quả
functioncalculateSum(a,b) {
letsum=a+b;
returnsum;// Trả về giá trị của biến sum
}

// Gọi hàm và lưu kết quả trả về vào một biến khác
lettotal=calculateSum(5,10);

console.log("Tổng là: "+total);// Kết quả: Tổng là: 15
```

---

## 5. Ghi nhớ nhanh

| Nội dung | Ý nghĩa |
| --- | --- |
| **Function** | Đoạn code được đặt tên và có thể tái sử dụng |
| **Khai báo hàm** | Tạo ra hàm bằng từ khóa `function` |
| **Gọi hàm** | Thực thi hàm bằng cách viết tên hàm kèm `()` |
| **Parameter** | Biến nhận dữ liệu đầu vào khi khai báo hàm |
| **Argument** | Giá trị thực tế truyền vào khi gọi hàm |
| **Return value** | Giá trị mà hàm trả về sau khi xử lý |
| **return** | Từ khóa dùng để trả kết quả và kết thúc hàm |

---

## 6. Công thức dễ nhớ

```
functiontenHam(thamSo1,thamSo2) {
// xử lý logic
returnketQua;
}

constbienNhanKetQua=tenHam(giaTri1,giaTri2);
```

# Bài giảng: Git Amend

## 1. Giới thiệu

`git commit --amend` là lệnh cho phép bạn **sửa đổi commit gần nhất** — thay đổi message, thêm/bớt file, hoặc cả hai.

Thay vì tạo commit mới, nó **viết lại commit cuối cùng**.

---

## 2. Khi nào dùng `git amend`?

- Viết sai commit message: lỗi chính tả, thiếu thông tin.
- Quên thêm một file vào commit.
- Muốn bỏ bớt file khỏi commit cuối.
- Cần sửa nhỏ mà không muốn tạo commit mới “rác”.

> ⚠️ **Nguyên tắc vàng:** Chỉ amend commit **chưa push** lên remote.
> 
> 
> Nếu đã push, amend có thể gây conflict cho người khác.
> 

---

## 3. Các trường hợp sử dụng

### 3.1. Sửa commit message

```bash
git commit --amend -m "Message mới chính xác hơn"
```

Hoặc chỉ chạy:

```bash
git commit --amend
```

để mở editor và sửa commit message.

---

### 3.2. Thêm file quên stage

Ví dụ quên thêm file `utils.py` vào commit trước:

```bash
# Quên thêm file utils.py vào commit trước
git add utils.py
git commit --amend --no-edit
```

Trong đó:

```bash
--no-edit
```

giữ nguyên message cũ, chỉ thêm file vào commit.

---

### 3.3. Vừa thêm file vừa sửa message

```bash
git add forgotten_file.py
git commit --amend -m "feat: thêm chức năng login và utils"
```

### 3.4. Bỏ file khỏi commit cuối

```bash
git reset HEAD~ -- file_to_remove.py
git commit --amend --no-edit
```

Ý nghĩa:

- `git reset HEAD~ -- file_to_remove.py`: đưa file `file_to_remove.py` về trạng thái trước commit cuối, tức là bỏ file này khỏi commit gần nhất.
- `git commit --amend --no-edit`: cập nhật lại commit cuối mà vẫn giữ nguyên commit message cũ.

---

## 4. Cách hoạt động bên trong

Khi chạy `git commit --amend`, Git thực chất sẽ:

1. Lấy nội dung của commit cuối.
2. Kết hợp với **Staging Area hiện tại**.
3. Tạo một **commit mới với hash khác** để thay thế commit cũ.
4. Commit cũ vẫn tồn tại trong `reflog`, nhưng không còn nằm trực tiếp trên branch hiện tại.

Ví dụ:

```
Trước amend:        Sau amend:
A -- B -- C         A -- B -- C'
```

Trong đó:

```
C' thay thế C và có hash khác.
```

---

## 5. Amend với commit đã push

Nếu bắt buộc phải amend commit đã push lên remote, có thể dùng:

```bash
git commit --amend -m "message sửa"
git push --force-with-lease
```

Trong đó:

| Lệnh | Ý nghĩa |
| --- | --- |
| `git commit --amend -m "message sửa"` | Sửa lại commit gần nhất |
| `git push --force-with-lease` | Push đè commit đã sửa lên remote một cách an toàn hơn |
- `-force-with-lease` an toàn hơn `-force` vì nó kiểm tra xem remote có thay đổi từ người khác không trước khi ghi đè.

> ⚠️ **Cảnh báo:** Chỉ làm điều này trên branch cá nhân. Không bao giờ force push lên `main` hoặc `develop` chung.
>