# Hero Affinity Level Calculator — Patch Notes

## V1 (current) — compared with V0

### New
- **Save data** — inputs and settings are saved automatically in the browser. You can also download a save file, load it back, or reset everything (two-tap confirm).
- **Plan from your current affinity** — enter the hero's current affinity and the tool:
  - estimates which gifts you probably already used (editable),
  - treats your inventory as the stock that is left,
  - plans only the milestones still ahead (passed milestones are hidden unless you choose to show them).
- **Stage table** — shows how many gifts each step needs to reach the next milestone.
- **Gift usable amounts** — every combo can set a maximum for each individual gift (blank = all you own, 0 = don't use). Replaces the old "choose gifts" option.
- **New gap rule UI** (green vs purple)
  - the gap is always zero or more; pick which color is larger by tapping the ＞ / ＜ symbol (≥ ≤ ＝ appear automatically),
  - one two-handle slider sets the smallest and largest gap, with quick presets (0–5, 0–10, 0–25, 10–30),
  - gold is no longer part of the gap rule.
- **Apply-from milestone chips** — tap a milestone: the rule applies to it and every later one ("All" is also available). Replaces "every / final only / from value".
- **Gap advice** — shows the tightest gap range your stock can satisfy. If your range is impossible, the results use a suggested range and an "Apply suggestion" button copies it into your settings.
- **Use gold first (optional per combo)** — spends gold gifts early, ignoring the gap and overage rules in the early milestones. Later milestones follow the rules and the final target is still exact.
- **Results**
  - gap-per-milestone chart (green = inside the range, red = outside),
  - per-gift usage bars showing "% · gift ×count" and the cap, red when a gift is used up.
- **AI-assisted fill** (recommended) — copy (or preview) a ready-made prompt, send it with your screenshot to any AI chat, paste the JSON reply back to fill gift counts, favorites and current affinity.
- New texts translated into all 18 languages.

### Changed
- The final milestone is always hit exactly (no option to turn it off) and has the highest priority.
- Among possible plans the tool now prefers the one with the most exact hits, then the least overage.
- Old save/combo settings are converted automatically (negative minimum gap → 0, gold in the gap pair → green/purple, "final only" → starts at the last milestone, "choose gifts" → per-gift amounts).

### Removed
- Built-in screenshot recognition. It needs a rework; use the AI-assisted fill or type the numbers in. V0 still keeps the old version.

### Known limits
- Only one gap rule (two colors) per combo.
- "Use gold first" can leave a few middle milestones with a little more overage than the normal plan.
- Used-gift estimates from your current affinity are a best guess (favorites assumed at their bonus value); edit them if you know the real numbers.

---

## V0 — first public build
Gift counter with 3 tiers and favorite gifts, selectable milestone lists, multi-combo solver with a per-combo ratio rule, current-affinity input, non-favorite gift modes, screenshot recognition in the browser, 18 languages. Kept in `archive/v0/index.html`.

---

# 更新紀錄（繁體中文）

## V1（目前版本）相對 V0

### 新增
- 存檔：自動儲存在瀏覽器，並可下載、載入存檔檔案或全部重設。
- 依現有好感度規劃：推估已使用的禮物（可手動修改）、庫存視為剩餘、只規劃尚未達成的目標。
- 階段表：顯示到達下一個目標所需的使用數量。
- 各禮物可使用數量（留空＝全部、0＝不使用），取代「指定禮物」。
- 新的差距規則介面（綠 vs 紫）：差距一定是 0 或更多，點 ＞／＜ 符號切換較多的一方；雙把手拉桿設定最小與最大差距，附快速預設；金色不再參與差距規則。
- 「從哪個目標開始套用」目標晶片，取代「每個／只有最後／從某值起」。
- 差距建議：顯示庫存能達成的最緊差距；設定做不到時改用建議範圍計算，並可一鍵套用。
- 「優先使用金色」選項：前期先用金色（暫時忽略差距與超額），之後依規則補足，最終目標仍剛好命中。
- 結果新增：各目標差距圖、各禮物使用量與上限百分比。
- AI 助手填入（推薦）：複製／預覽提示詞，把截圖和提示詞交給任一 AI，再貼回 JSON 自動填入。
- 新增文字已翻成 18 種語言。

### 調整
- 最後一個目標一律剛好命中，優先級最高，不可關閉。
- 在可行方案中優先選「剛好命中最多」的，其次是超額最少。
- 舊存檔／舊組合設定會自動轉換。

### 移除
- 內建截圖辨識（需要重做；請改用 AI 助手填入或手動輸入，舊版保留在 V0）。
