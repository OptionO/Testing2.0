import os
import requests

BASE_URL = "https://10231666843952456950.allownetworkplayables.usercontent.goog/v/assets/game-resources/songlist/" 

for folder in os.listdir():
    if os.path.isdir(folder):
        print(f"\n📁 Entering folder: {folder}")
        for filename in ["main.mp3", "preview.mp3"]:
            filepath = f"{folder}/{filename}"
            url = f"{BASE_URL}{filepath}"
            try:
                print(f"⬇️  Downloading {filename} from {url}")
                response = requests.get(url)
                response.raise_for_status()
                with open(filepath, "wb") as f:
                    f.write(response.content)
                print(f"✅ Saved {filepath}")
            except Exception as err:
                print(f"❌ Failed to download {filename}: {err}")

        # Handle level.encrypted or fallback to level.bin
        for level_file in ["level.encrypted", "level.bin"]:
            filepath = f"{folder}/{level_file}"
            url = f"{BASE_URL}{filepath}"
            try:
                print(f"⬇️  Attempting {level_file} from {url}")
                response = requests.get(url)
                response.raise_for_status()
                with open(filepath, "wb") as f:
                    f.write(response.content)
                print(f"✅ Saved {filepath}")
                break  # Don't try .bin if .encrypted succeeded
            except Exception as err:
                print(f"❌ {level_file} failed: {err}")
