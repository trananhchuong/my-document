### Side Effect: 
#### Side effects là gì?
- Gọi API lấy dữ liệu.
- Tương tác với DOM.
- Subscriptions.
- setTimeout, setInterval.

Theo tài liệu chính thức thì chia làm 2 loại side effects:
- Effects không cần clean up: gọi API, tương tác DOM
- Effects cần clean up: subscriptions, setTimeout, setInterval.


### Định nghĩa useEffect():
- Là một hook cơ bản trong React hooks.
- Sử dụng cho side effects.
- Mỗi hook gồm 2 phần: side effect và clean up (optional)
- Được thực thi sau mỗi lần render.
- Được thực thi ít nhất một lần sau lần render đầu tiên.
- Những lần render sau, chỉ được thực thi nếu có dependencies thay đổi.
- Effect cleanup sẽ được thực thi trước run effect lần tiếp theo hoặc unmount.

### Dependencies:
Nothing: 
- Side Effect code: thực thi sau mỗi lần re-render
- Clean up function: thực thi sau mỗi lần re-render

Empty array([]): 
- Side Effect code: thực thi một lần khi first render
- Clean up function: thực thi một lần khi Component unmount

Has dependencies ([filters]): 
- Side Effect code: thực thi một lần khi first render hoặc filters thay đổi
- Clean up function:  thực thi trước khi lần effect tiếp theo or Component unmount.


### useLayoutEffect:

#### Định nghĩa:
Là một hook hoạt động tương tự như useEffect hook. Điểm khác nhau giữa 2 hooks này là thứ tự thực hiện các công việc mình đã liệt kê dưới đây:

#useEffect
1. Cập nhật lại state
2. Cập nhật DOM (mutated)
3. Render lại UI
4. Gọi cleanup nếu deps thay đổi
5. Gọi useEffect callback

#useLayoutEffect
1. Cập nhật lại state
2. Cập nhật DOM (mutated)
3. Gọi cleanup nếu deps thay đổi (sync)
4. Gọi useLayoutEffect callback (sync)
5. Render lại UI
