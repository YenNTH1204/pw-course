# PHẦN 1. GIT, GITHUB VÀ JAVASCRIPT BASIC

## 1. Version Control System

### 1.1. Version Control System là gì?

**Version Control System** là hệ thống quản lý phiên bản, dùng để theo dõi lịch sử thay đổi của mã nguồn hoặc tài liệu trong quá trình làm việc.

Nhờ Version Control System, chúng ta có thể:

* Biết file đã thay đổi lúc nào
* Biết ai là người thay đổi
* Quay lại phiên bản cũ khi cần
* Làm việc nhóm dễ hơn
* Tránh ghi đè hoặc mất lịch sử thay đổi

---

### 1.2. Các loại Version Control System

```text
Version Control System
│
├── 1. Local VCS
│   └── Quản lý phiên bản trên máy cá nhân
│
├── 2. Centralized VCS
│   └── Quản lý phiên bản trên một server trung tâm
│
└── 3. Distributed VCS
    └── Mỗi máy đều có đầy đủ repository và lịch sử thay đổi
```

| Loại VCS            | Đặc điểm                                                     | Ví dụ                  |
| ------------------- | ------------------------------------------------------------ | ---------------------- |
| **Local VCS**       | Quản lý phiên bản trực tiếp trên máy cá nhân                 | Lưu file thủ công, RCS |
| **Centralized VCS** | Có một server trung tâm lưu mã nguồn và lịch sử thay đổi     | SVN, CVS, Perforce     |
| **Distributed VCS** | Mỗi máy đều có đầy đủ repository và toàn bộ lịch sử thay đổi | Git, Mercurial         |

Trong thực tế hiện nay, **Git** là một trong những Distributed Version Control System phổ biến nhất.

---

## 2. Git và GitHub

### 2.1. Git và GitHub khác nhau thế nào?

| Tiêu chí                    | Git                                                           | GitHub                                                                      |
| --------------------------- | ------------------------------------------------------------- | --------------------------------------------------------------------------- |
| **Bản chất**                | Là một phần mềm                                               | Là một dịch vụ web                                                          |
| **Nơi sử dụng**             | Cài đặt và chạy trên máy cá nhân                              | Hoạt động trên nền tảng website                                             |
| **Cách sử dụng**            | Chủ yếu dùng qua command line                                 | Có giao diện web trực quan                                                  |
| **Vai trò chính**           | Quản lý phiên bản mã nguồn và lưu thay đổi vào Git repository | Lưu trữ, chia sẻ và quản lý Git repository online                           |
| **Chức năng**               | Có các tính năng của Version Control System                   | Có các tính năng của Version Control System và thêm nhiều tính năng mở rộng |
| **Ví dụ tính năng mở rộng** | Commit, branch, merge, log, checkout                          | GitHub Actions, Pull Request, Issues, GitHub Copilot                        |
| **Mục đích sử dụng**        | Theo dõi lịch sử thay đổi code trên máy local                 | Đưa repository lên online để làm việc nhóm, review code và quản lý dự án    |

Ghi nhớ ngắn gọn:

```text
Git là công cụ quản lý phiên bản.
GitHub là nơi lưu trữ Git repository online.
```

---

## 3. Ba trạng thái chính trong Git

Khi làm việc với Git, file thường đi qua 3 trạng thái chính:

| **Working Directory**                                        | **Staging Area**                                                         | **Repository**                                                   |
| ------------------------------------------------------------ | ------------------------------------------------------------------------ | ---------------------------------------------------------------- |
| **Các file mới hoặc file có thay đổi**                       | **Các file đưa vào vùng chuẩn bị commit**                                | **Các commit đã được lưu lại**                                   |
| Đây là nơi bạn đang trực tiếp chỉnh sửa file trên máy local. | Đây là nơi Git tạm ghi nhận những file sẽ được đưa vào commit tiếp theo. | Đây là nơi lưu lịch sử các phiên bản đã commit.                  |
| File ở trạng thái này **chưa được Git lưu chính thức**.      | File ở trạng thái này **đã được chọn để commit**.                        | File ở trạng thái này **đã trở thành một phiên bản chính thức**. |
| Lệnh thường dùng: `git status`                               | Lệnh đưa file vào staging: `git add .`                                   | Lệnh tạo commit: `git commit -m "message"`                       |

Luồng dễ nhớ:

```text
Working Directory → Staging Area → Repository
Sửa file → Chọn file để commit → Lưu thành phiên bản
```

Ví dụ luồng lệnh thường dùng:

```bash
git status
git add .
git commit -m "init project"
```

---

## 4. Git - Cấu hình cơ bản

### 4.1. Khởi tạo Git repository

Lệnh:

```bash
git init
```

Ý nghĩa:

```text
git init dùng để khởi tạo một Git repository trong thư mục hiện tại.
```

Nói dễ hiểu:

```text
Trước khi chạy git init:
Thư mục chỉ là một folder bình thường.

Sau khi chạy git init:
Thư mục trở thành Git repository và được Git quản lý phiên bản.
```

Sau khi chạy `git init`, Git sẽ tạo một thư mục ẩn tên là:

```bash
.git
```

Thư mục `.git` dùng để lưu thông tin quản lý version của project, ví dụ:

* Lịch sử commit
* Thông tin branch
* Cấu hình Git của repository
* Trạng thái file
* Thông tin remote nếu có

---

### 4.2. Cấu hình username và email

Trước khi commit code, nên cấu hình username và email cho Git.

Lệnh cấu hình username:

```bash
git config --global user.name "Tên bạn"
```

Lệnh cấu hình email:

```bash
git config --global user.email "email của bạn"
```

Hai lệnh này dùng để đặt mặc định **username** và **email** cho toàn bộ repository trên máy tính.

Ví dụ:

```bash
git config --global user.name "Nguyen Van A"
git config --global user.email "nguyenvana@example.com"
```

---

### 4.3. Kiểm tra cấu hình Git

Sau khi cấu hình xong, có thể kiểm tra bằng lệnh:

```bash
git config --global --list
```

Hoặc kiểm tra riêng từng thông tin:

```bash
git config --global user.name
git config --global user.email
```

---

## 5. Quy trình đưa code lên GitHub

Khi đã có project local và muốn đưa code lên GitHub, thường làm theo các bước sau.

### 5.1. Làm một lần khi bắt đầu project

Khởi tạo Git repository local:

```bash
git init
```

Liên kết repository local với repository trên GitHub:

```bash
git remote add origin <url>
```

Trong đó `<url>` là đường dẫn repository trên GitHub.

Ví dụ:

```bash
git remote add origin git@github.com:username/demo-1.git
```

---

### 5.2. Làm mỗi khi có thay đổi code

Đưa file vào Staging Area:

```bash
git add .
```

Commit thay đổi:

```bash
git commit -m "nội dung commit"
```

Push code lên GitHub:

```bash
git push origin main
```

Nếu là lần push đầu tiên, thường dùng:

```bash
git push -u origin main
```

---

## 6. Tổng hợp lệnh Git cơ bản

| Lệnh                                             | Ý nghĩa                                              |
| ------------------------------------------------ | ---------------------------------------------------- |
| `git init`                                       | Khởi tạo Git repository                              |
| `git status`                                     | Kiểm tra trạng thái file                             |
| `git add .`                                      | Đưa toàn bộ file thay đổi vào Staging Area           |
| `git commit -m "message"`                        | Lưu thay đổi thành một commit                        |
| `git remote add origin <url>`                    | Liên kết repository local với repository trên GitHub |
| `git push origin main`                           | Đẩy code từ local lên GitHub                         |
| `git config --global user.name "Tên bạn"`        | Cấu hình username mặc định cho Git                   |
| `git config --global user.email "email của bạn"` | Cấu hình email mặc định cho Git                      |
| `git config --global --list`                     | Kiểm tra cấu hình Git hiện tại                       |

---

## 7. Ghi nhớ nhanh

```text
Version Control System giúp quản lý lịch sử thay đổi.

Git là công cụ quản lý phiên bản trên máy local.

GitHub là nền tảng lưu trữ repository online.

Working Directory là nơi sửa file.

Staging Area là nơi chuẩn bị file trước khi commit.

Repository là nơi lưu các commit chính thức.

git init dùng để khởi tạo Git repository.

git config dùng để cấu hình thông tin người commit.

git add, git commit, git push là bộ ba lệnh thường dùng để đưa code lên GitHub.
```
