# Lệnh ls, cd, clear trên Ubuntu/Linux 

1. ls:
- Lệnh xem danh sách các thư mục/file đang tồn tại
- ls -l: xem danh sách với dạng list 
- ls -a: xem danh sách bao gồm các file bị ẩn
	
> File ẩn: các file được đặt tên bắt đầu với dấu "."
> Ví dụ: .hide_file.txt, .test.txt

2. cd: 
- Lệnh di chuyển thư mục

- cd -: quay lại thư mục trước 
đó
- cd: quay về root

3. clear: 
- clear màn hình

4. mkdir: 
- Lệnh tạo thư mục
- mkdir "name folder" -p: tạo thư mục con và thư mục trung gian nếu các thư mục cha chưa tồn tại 

5. cat: 
- Mở content của file
- Nối content của nhiều file lại
- Edit (ghi đè, chèn) nội dung mới vào file

6. echo:
- Mở content của file
- Edit (ghi đè, chèn) nội dung mới vào file

7. tail:
- Lấy các content cuối dòng của file (default là 10 line)
- syntax: tail -n "số hàng muốn lấy" "tên file"

8. grep:
- Từ khóa hỗ trợ tìm kiếm trong file

9. cp:
- Lệnh copy file/folder 

> sp "path/name file source" "path/name file target"

10. mv:
- Lệnh dùng để di chuyển hoặc đổi tên file

> mv "path/name file source" "path/name file target" 

11. sudo:
- Chạy lệnh cần quyền admin, root, ...

12. chmod(change mod):
- Dùng để set quyền cho thư mục hay file
- Các loại user: 
    - User
    - Group
    - Other


- Các loại quyền hạn: 
    - Read
    - Write
    - Execute

 > drwx------@  3 chuongtran  staff  96 Oct 16  2021 Applications
 >> chuongtran: là owner(User) 
 >> staff: là Group
 >> "drwx------@":
 >>> d là directory (thư mục)
 >>> 9 ký tự còn lại thể hiện quyền hạn cho các nhóm (user, group, other)

 Syntax:
 >chmod options permissions file name

13. chown: 
- Dùng để cho quyền

 Syntax:
 >chmod chown "role:role"  "file name"

14. man:
- Dùng để xem description các lệnh khác

 Syntax:
 >man "tên lệnh"
