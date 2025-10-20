import os
from PIL import Image

# 要處理的兩個資料夾
FOLDERS = [
    r"C:\Users\ldn97\OneDrive\文件\程式碼\才不是蘿莉控的blog2\themes\hexo-theme-Klise-glassy\source\img\bg-dark",
    r"C:\Users\ldn97\OneDrive\文件\程式碼\才不是蘿莉控的blog2\themes\hexo-theme-Klise-glassy\source\img\bg-light"
]

# 統一轉換格式
TARGET_FORMAT = "webp"   # 可改成 "jpg"、"png" 等

def format_and_rename(folder):
    if not os.path.exists(folder):
        print(f"❌ 資料夾不存在：{folder}")
        return

    prefix = os.path.basename(folder)
    valid_exts = (".jpg", ".jpeg", ".png", ".webp", ".bmp")

    files = [f for f in os.listdir(folder) if f.lower().endswith(valid_exts)]
    files.sort()
    if not files:
        print(f"⚠️ 資料夾 {prefix} 沒有圖片")
        return

    print(f"\n📁 開始處理 {prefix} ({len(files)} 張圖片)...")

    for i, file_name in enumerate(files, start=1):
        src_path = os.path.join(folder, file_name)
        new_name = f"{prefix}-{i}.{TARGET_FORMAT}"
        dst_path = os.path.join(folder, new_name)

        try:
            img = Image.open(src_path)
            img = img.convert("RGB")
            img.save(dst_path, TARGET_FORMAT, quality=90)
            os.remove(src_path)
            print(f"✅ {file_name} → {new_name}")
        except Exception as e:
            print(f"⚠️ 無法處理 {file_name}：{e}")

    print(f"✅ {prefix} 資料夾完成！")

def main():
    for folder in FOLDERS:
        format_and_rename(folder)
    print("\n🎉 全部完成！")

if __name__ == "__main__":
    main()
