## Khái niệm:

Từ khóa this sẽ đề cập đến đối tượng mà nó thuộc về.

## Đặc tính:

1. Trong 1 phương thức, this tham chiếu đến đối tượng truy cập phương thức (đối tượng trước dấu '.')
2. Đứng ngoài phương thức, this tham chiếu đến đối tượng global

## Lưu ý
- this trong hàm tạo sẽ đại diện cho đối tượng được tạo
- this trong một hàm là undefined khi ở strict mode
- các phương thức bind(), call(), apply() có thể tham chiếu this đến đối tượng khác
