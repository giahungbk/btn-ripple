# Button ripple
Thư viện hỗ trợ tạo hiệu ứng sóng nước cho các phần tử được click trong HTML.


## Live Demo
Bạn có thể thử nghiệm hiệu ứng sóng nước [Test ripple](https://hunghg255.github.io/btn-ripple/)

## Installation
Bạn cần dẫn đủ **02** file thư viện của chúng tôi vào file HTML của bạn.

File thứ 1: `btnRipple.css` hoặc `btnRipple.min.css`

File thứ 2: `btnRipple.js` hoặc `btnRipple.min.js`
## Nếu bạn không muốn tải file thì có thể dùng link CDN
Bạn chỉ cần thêm 2 link này vào phần `<head></head>` là được

`<link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/gh/hunghg255/btn-ripple@v1.0/btnRipple.min.css">`
`<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/hunghg255/btn-ripple@v1.0/btnRipple.min.js"></script>`

## Hướng dẫn sử dụng
Các phần tử có thể được áp dụng sự kiện `click` đều có thể áp dụng hiệu ứng sóng nước.

Chỉ cần thêm **class** `.ripple` vào phần tử muốn sử dụng hiệu ứng sóng nước.

Ví dụ: `<button class="ripple">Click Me</button>`

Các phần tử có thể được áp dụng sự kiện `mousemove` đều có thể áp dụng hiệu ứng sóng nước.

Chỉ cần thêm **class** `.ripple` vào phần tử muốn sử dụng hiệu ứng sóng nước.

Ví dụ: `<button class="ripple-mousemove">Mouse move</button>`

### Thay đổi màu sắc của sóng nước

Bạn có thể chủ động thay đổi màu sắc của sóng nước bằng cách thêm thuộc tính `ripple-color` kèm theo giá trị màu.

Ví dụ: `<button class="ripple" ripple-color="#fff">Click Me</button>`
