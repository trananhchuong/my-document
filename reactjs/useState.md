### Định nghĩa: 
- Là 1 hook của reactjs
- Đơn giản hóa việc thể hiện trạng thái của dữ liệu ra giao diện người dùng (UI)
- Khi state thay đổi tự động React sẽ xử lý để UI được cập nhật lại (code thuần phải get DOM element rồi cập nhật lại thông qua setInnerText)

### Lưu ý
- Component được re-render lại sau khi setState
- Initial state chỉ dùng cho lần đầu
- Set state với callback: trả về preState
- Initial state với callback: gọi 1 lần
- Set state là thay thế state bằng giá trị mới