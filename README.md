# SoundCloudPlus
<p align="center">
  <img src="https://link-ảnh-banner-của-bạn.com/banner.jpg" alt="Banner" width="100%">
</p>

> ⚠️ **Caution**  
禁止使用本仓库任何内容侵犯法律权益！  
如需转载请 标明作者 或 注明来源

# SoundCloudPlus 简介

> 提供适用于 Shadowrocket 的 SoundCloud 解锁模块。

---

## 📌 说明

本仓库主要提供 `SoundCloud` 解锁模块配置文件，使用 Shadowrocket 搭配解锁 `SoundCloud Go+` 功能。  
模块支持配置文件、MITM、脚本等内容。

---

## 📁 项目目录

### 01️⃣ SoundCloud 解锁模块

- 模块文件: [`soundcloud.module`](./soundcloud.module)
- 解锁规则: `api-mobile.soundcloud.com`

### 02️⃣ 使用方法

1. 下载 `.module` 文件
2. 在 Shadowrocket 中导入配置
3. 添加 MITM 规则与脚本地址

---

## 📜 模块内容预览

```ini
#!name=SoundCloudGo+
#!desc=SoundCloudGo+
[Script]
SoundCloudGo+=type=http-response,pattern=https://api-mobile.soundcloud.com/configuration/ios,requires-body=1,script-path=https://raw.githubusercontent.com/yourusername/SoundCloudPlus/main/SoundCloudGo+.js

[MITM]
hostname= %APPEND% api-mobile.soundcloud.com
