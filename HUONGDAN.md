<p align="center">
  <img src="https://github.com/bongsusu/banner/blob/main/Purple%20and%20Black%20Modern%20Game%20Streamer%20Twitch%20Banner.jpg" alt="Banner" width="100%">
</p>

> ⚠️ **Cảnh báo**  
Không được sử dụng nội dung trong kho lưu trữ này vào mục đích vi phạm pháp luật!  
Nếu muốn chia sẻ, vui lòng ghi rõ tác giả hoặc nguồn gốc.

# 📦 Giới thiệu - SoundCloudPlus

Kho này cung cấp file cấu hình để **mở khóa SoundCloud Go+** dành cho ứng dụng **Shadowrocket** trên iOS.

---

## 📌 Thông tin chi tiết

- Hỗ trợ: Shadowrocket 
- Chức năng: Mở khóa tính năng SoundCloud Go+ thông qua script và MITM
- Gồm: file cấu hình, script, hostname và hướng dẫn cài đặt

---
 
## 2️⃣ Hướng dẫn sử dụng

1. Tải file `.module`
2. Mở Shadowrocket, chọn **Modules → Import**
3. Thêm hostname vào mục **MITM**
4. Bật **Script** và dán link script

---

## 🧾 Nội dung file `soundcloud.module`

```ini
#!name=SoundCloudGo+
#!desc=SoundCloudGo+
[Script]
SoundCloudGo+=type=http-response,pattern=https://api-mobile.soundcloud.com/configuration/ios,requires-body=1,script-path=https://raw.githubusercontent.com/yourusername/SoundCloudPlus/main/SoundCloudGo+.js

[MITM]
hostname= %APPEND% api-mobile.soundcloud.com

