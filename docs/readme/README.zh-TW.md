# 💖 英雄好感度計算器

[English](../../README.md) | **繁體中文** | [简体中文](README.zh-CN.md) | [日本語](README.ja.md) | [한국어](README.ko.md) | [Español](README.es.md) | [Français](README.fr.md) | [Deutsch](README.de.md) | [Português](README.pt.md) | [Tiếng Việt](README.vi.md) | [ไทย](README.th.md) | [Bahasa Indonesia](README.id.md) | [Русский](README.ru.md) | [Türkçe](README.tr.md) | [Italiano](README.it.md) | [Polski](README.pl.md) | [العربية](README.ar.md) | [Filipino](README.fil.md)

《Pixel Brave Idle》的免費網頁計算器：輸入你擁有的禮物，選擇想達成的好感度獎勵，就能算出每種禮物最少需要幾個。

完全在瀏覽器中執行，不需要帳號、不需要伺服器，也不會上傳任何資料。

**線上使用:** https://ghg-jam.github.io/PBI-hero-affinity-calculator/

> 非官方粉絲製作工具，與遊戲開發商無任何關係，亦未獲其背書。

<p>
  <img src="../phone-gifts.png" width="240">
  <img src="../phone-results.png" width="240">
</p>

## 功能

- 統計三種等級（綠／紫／金）的禮物，並標記最愛禮物。
- 從內建的里程碑清單挑選獎勵目標，也可自訂目標與最終目標。
- 多個組合（方案），每個都有自己的禮物平衡規則：哪種顏色較多，以及差距要維持在**範圍內**（有 0–25、0–200 等快速預設）、盡可能**拉大**，或盡可能**縮小**。
- 從目前好感度開始規劃：自動估算已用掉的禮物，只計算剩下的里程碑。
- 結果：每個里程碑的剛好達成、超出與不足、每階段所需禮物（附上使用禮物的圖示）、差距圖與進度條。結果只會在你按下「計算所有組合」時更新，過期時上方會有提示列。
- 進階選項（預設隱藏）：差距限制從哪個里程碑開始、「目標超出上限」、非最愛禮物、每種顏色的總量上限、每個禮物的上限（可一鍵清除）以及自訂使用順序。
- AI 輔助填寫：複製提示詞，連同截圖傳給**新的** AI 對話，再貼上 JSON 回覆（或從檔案匯入）。AI 可能看錯數字，請務必與遊戲核對。另有資料儲存／載入、18 種語言、淺色／深色模式與 11 種色彩主題。

## 使用方式

1. **禮物**：輸入每種禮物的數量，點星星標記最愛。
2. **目標**：輸入目前好感度（可不填），勾選想要的獎勵清單。
3. **組合**：保持預設，或選擇差距規則（範圍、最大或最小差距），並開啟「進階設定」。
4. **結果**：按下「計算所有組合」，再查看每種禮物要用多少。

## 在本機執行

- 下載 `download/combo_calculator_single.html`，直接雙擊開啟。
- 或下載整個專案，保持 `css`、`js`、`lang` 資料夾在 `index.html` 旁，再開啟 `index.html`。

## 部署到 GitHub Pages

1. 把資料夾內的**所有內容**上傳到儲存庫根目錄（保留資料夾結構）。
2. 前往 **Settings → Pages**，選擇 main 分支與根目錄。
3. 更新後請強制重新整理（Ctrl/Cmd + Shift + R）。

## 開發者資訊

專案結構、翻譯貢獻方式與更新日誌請見[英文 README](../../README.md)。

## 授權

MIT 授權（僅限程式碼）。
