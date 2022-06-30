## Khái niệm:
Nó được dùng để kiểm soát tầm hoạt động của những biến

- Javascript has three types of scope:
   - Global scope
   - Function scope *// var, function*
   - Block scope *// let, const*
- When calling a function **always** a new scope is created
- Khi nào một biến được xoá khỏi bộ nhớ?
  - Biến toàn cầu: khi web/app được tắt/refresh
  - Biến trong code block & trong hàm: sau khi thoát khỏi phạm vi của biến đó
  - Biến trong hàm được tham chiếu bởi một hàm: closure
