### Memo - định nghĩa: 
- Là 1 HOC của reactjs
- Xử lý 1 Component để tránh bị re-render trong những tình huống không cần thiết

### Case sử dụng:
- Component có nhiều props, độ phức tạp cao 

### Lưu ý
- Sử dụng toán tử "===" để so sánh
- Tương tự như pure Component như React class


### useCallBack - định nghĩa: 
- Tránh tạo ra các function không cần thiết trong function Component dẫn tới các Component con bị re-render không cần thiết mặc dù đã sử dụng react.Memo
