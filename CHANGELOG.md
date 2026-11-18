# Changelog

All notable changes to the Hero Affinity Level Calculator are listed here.
Format follows [Keep a Changelog](https://keepachangelog.com/). Newest version first.

## [V2]

Mobile-friendly redesign, progress bars, and a simpler default UI. The solver is unchanged: output is identical to V1 on the regression scenarios, and save files from V0/V1 still load.

### Added
- Combos > Gap limit: goal selector `gapMode` = `range` | `max` | `min`. `max` keeps A−B ≥ `lo` and picks the final counts with the largest A−B (`hi` stored as 9999 = open; gap chart shows ∞). `min` finds the tightest `hi` (binary search over `solveCombo`, memoised in `minGapHi`) that adds no shortfalls and no more milestones over `tol` than the unconstrained plan, then solves as `range` 0..hi (`gapBand(c)` exposes the effective band to the results code). Numeric preset chips kept for `range`. Saves without `gapMode`, or with an unknown value, load as `range`.
- Solver: `runPass` gap loop bounded by the high tier's cap (no result change); `scoreRows` returns a 5th objective used only by `max`.
- "Max Points Over Target" moved into the Gap limit group.
- "Use the gap limit from" chips: reached goals are muted/dashed with a tick, later targets use an accent border (dark theme contrast).
- Combos > Advanced Settings: "Max Gifts per Color" (`colorLimit`), a limit on favorite + non-favorite gifts together. It replaces the non-favorite-only "Set a Limit" mode (`nfMode:'limit'` loads as `auto`). The favorite is used first, then non-favorites up to the remainder.
- Results: gifts used are shown as icon chips grouped by color, favorites starred and outlined in the tier colour.
- Progress bars on the Targets tab: one bar per selected reward list, plus one for custom goals. The percentage equals the visual fill (milestones are evenly spaced).
- Progress bars on Results: the same bars with the plan overlaid, a pin per milestone coloured by outcome, an enlarged pulsing pin for the next goal, and a bubble for the current affinity.
- Tab navigation on every screen size (Gifts / Targets / Combos / Results). Phones (≤ 640 px) get a bottom tab bar with a floating Calculate button. Tablets and desktop get a left-side navigation rail with a Calculate button.
- Results summary tiles (exact hits, within tolerance, total overage, shortfall) and final-count pills.
- Gap range controls: live readout (`0 ≤ Green − Purple ≤ 10`), tinted colour pills, graduated slider, − / + steppers.
- Info tips: small (i) buttons replace inline helper sentences. Tap to open, tap elsewhere / scroll / Esc to close.
- Colour legend chips on Results (exact / within tolerance / ratio rule met).
- Icon size scale (14 / 18 / 24 / 36 px) applied to emoji, symbols, gift pictures and tab icons. Stars are SVG, same size filled or empty.
- Custom chevrons for dropdowns and folds.
- The "estimated gifts already used" box on Results now shows three colour-coded tiles (count, tier, favourite gift) instead of text lines; the number inputs sit in an "Edit counts" fold.
- Each combo on the Combos tab is its own standalone card instead of sitting inside one big panel.
- Combos tab: each combo is its own card with a numbered header band, a Remove button and more space between cards.
- Icon sizes re-checked at 16 screen sizes (320 to 1920 px, all five tabs, all five result views): the gap-direction arrow (28 to 24 px), the Calculate arrow in the side rail (12 to 14 px), the info (i) circle (20 to 18 px), the progress pins (16 to 14 px, so 19 pins no longer overlap on small phones) and the combo number badge (24 px) now use the 14 / 18 / 24 / 36 px scale.
- Gift spending order per combo (Combos tab, outside Advanced): Default lets the calculator choose; Custom order spends your chosen colour first, set by dragging the three tier cards (G green, P purple, Y gold) up or down, or with the arrow keys. Drop one card on another (or use the "Spend together with the next" button) to spend those colours at the same time, in proportion to what each has left. Stored as initials, for example `Y>P>G` (in turn) or `Y+P>G` (Y and P together, then G). It replaces the old "Use gold gifts first" checkbox: older saves with that box ticked load as `Y>P>G`. Early milestones ignore the gap and overage rules while the priority colours are spent; later ones follow them, and the final target still hits exactly.
- Colour themes in Settings: 11 presets (Blue, Cream, Pink, Rose, Orange, Green, Teal, Sky, Purple, Coffee, Graphite) plus one custom colour picker. Each theme tints the page, cards, borders and accent for both light and dark mode, and picks readable text on buttons automatically. The swatches are a soft version of the theme colour on a gray card (so every colour stays visible in light and dark mode); the custom swatch is a plain white "+" until a colour is picked. Remembered on the device. Everything that was fixed blue (next-milestone pin, plan stripes on the progress bar, "ratio rule" cells and legend, weighted-target chips) now follows the chosen colour; the green / purple / gold tier colours and the exact / near / short status colours stay fixed because they carry meaning.
- Two separate size options in Settings (90 / 100 / 115 / 130 / 150 %): "Text size" changes only the text, and "UI size" scales the whole layout like the browser's Ctrl + / Ctrl −. Both are remembered by the site. UI size is capped on narrow screens so the layout never overflows, and needs a browser that supports CSS `zoom` (Chrome, Edge, Safari, Firefox 126+).
- "Save as image" button (with a download icon) at the top of every result view (stage list, table, gifts, progress, gap chart): exports that view as a PNG at 2× resolution, titled with the combo and view name. Falls back to an SVG file in browsers that block canvas export of styled content.
- Globe icon inside the language selector.
- Settings tab (fifth tab): language selector (moved from the top bar), theme (Auto / Light / Dark, remembered on the device and applied before the page paints), save data (download / load / reset, moved from the Gifts tab) and an About card with the project and issue links.
- Input and data sections are now separate cards. On Targets, the progress bars sit in their own "Progress" card below the settings (hidden until a list is selected). On Results, the summary, the gift-estimate input, the plan advice and the View dropdown with its content are each their own card.
- Final goal selector on the Targets tab: choose which milestone the plan ends at (default: the highest). The plan hits it exactly, later milestones are ignored, and progress bars end there. Saved in the save file; older save files still load.
- Stage list on Results (replaces the plain stage table): one row per step with a separate line per tier (chip + bar) showing how much of that tier's total has been used, and the affinity gained with its percentage of the whole journey. A switch toggles between "Per stage" (what each step costs) and "Running total" (everything used so far).
- Footer: "unofficial fan-made tool" notice and a "Report a problem" link to the repository Issues page (translated in all 18 languages).
- Page metadata: description, light/dark theme colour, favicon, and Open Graph / Twitter tags for link previews.
- Project files: `README.md` (with screenshots), MIT `LICENSE`, issue template.

### AI import (Gifts tab)
- Prompt rewritten: lists all 12 item keys in the example shape, asks for plain-text JSON in the chat (no file/artifact/canvas, also on later replies), null for unreadable counts.
- New "Import From File" button reads a .json/.txt file; pasted text tolerates code fences, smart quotes and trailing commas.
- New lang keys: aiUpload (18 languages); aiStep2 reworded.
- Warning note above Step 1 (key aiWarn, 18 languages): AI can swap items / miss favorite / misread numbers; use one uncropped screenshot at a time and compare against the game.

### Targets tab
- Milestone list names are now "name | tier colors" and ordered by name (Value, Value, Character Shards, Character Shards, Bond). Display order only (PRESET_ORDER); preset ids and saves unchanged.
- Milestone list is rendered as groups: name as heading, one checkbox row per tier-colour set with its range pill (renderPresets groups by the text before " | ").

### Results tab
- Results are no longer recalculated automatically when the tab opens or settings change. They stay until you press Calculate (button now also at the top of the Results tab and in the bottom bar / rail / floating button via goCalc()).
- Status bar above results: none yet / settings changed since last calculation (stale) / up to date (keys resNone, resStale, resFresh in 18 languages). Switching language re-renders results only when they are up to date.

### Motion
- CSS-only animations: tab content fades/slides in, results cards rise in with a short stagger, advanced sections fade open, buttons/chips press-scale and ease colour changes, checkboxes pop when ticked. All disabled under prefers-reduced-motion.

### Performance
- Results: per-combo solve results are cached (SOLVE_CACHE) so switching the view picker / Step-Total no longer re-solves; cache key covers combo settings, stocks, targets, current affinity and history.
- minGapHi (Smallest gap possible) now searches only up to the gap of the unconstrained solution (same results on 40 random scenarios, ~2.5x faster).
- Calculate shows a busy state before the solver runs.

### Combos tab
- "Clear all limits" button under Max Amount per Gift (key itemMaxClear, 18 languages) resets every per-gift limit of that combo.

### Changed
- Gift Spending Order: the "Same Time as Above" checkbox inside every card is gone. Cards stay clean, and small "Spend Together" / "Spend Separately" buttons sit between them (drag and drop still works). The extra hint line for custom order was removed.
- Progress bar dots: the floating map-pin markers are now plain round dots on the bar. Every dot has a clear outline and a tinted fill (never white) in every color theme, light and dark; reached dots are solid, the next goal is a larger ring, and the current value keeps its bubble.
- Font Size / UI Size fit: gift quantity boxes, tier pills and hint text no longer stick out of their cards at large UI sizes or on 320 px screens; the size slider moves to its own row when the card is narrow; color swatches wrap to 4 per row instead of overflowing; bottom tab labels stop growing past 13 px so they never touch.
- Browser theme: the address-bar color (`theme-color`) now follows the chosen color theme and light/dark mode (before, it stayed on the default blue-gray). Native controls, scrollbars and checkboxes now follow dark mode (`color-scheme`), text no longer auto-resizes in landscape on iOS, and zoom buttons, sliders and footer links are larger on touch screens.
- Code layout: the single 440 KB file is now split into `index.html` + `css/` (6 files) + `js/` (16 files) + `lang/` (one file per language, loaded on demand). First load in English is about 240 KB instead of 441 KB, and only the selected language is downloaded. A standalone one-file build stays available in `download/`. Behavior and calculation results are unchanged (checked against 155 scenarios and screenshots).
- Results: one tab per combo plus a Compare tab (exact hits, within allowed overage, total overage, shortfall and final counts side by side, with the best combo marked). The extra "Calculate All Combos" button on the Results tab was removed; results refresh whenever you open the tab.
- Combos tab: the gap limit, "use from" milestone picker, gift options and allowed overage are now grouped inside Advanced Settings in a logical order; each tier card in the gift spending order has its own "Same Time as Above" toggle.
- Default combo names ("Combo 1", "Combo 2"…) follow the selected language; only names you typed yourself are kept.
- Progress bars follow the theme color. Target lists show only their range (for example 50–8000).
- Titles and labels use Title Case, sentences and hints use sentence case; US spelling ("color") everywhere.
- Font size / UI size presets show icons that grow with the percentage.
- Tab bar icons (and the Settings / Advanced gear) are now matching line icons instead of emoji, so they all have the same visual size; the info (i) icon is a drawn icon that is exactly centred in its circle.
- Font size and UI size: presets are 70 / 85 / 100 / 115 / 130 %, the slider/number range is 70–150 %, and the number box is a themed pill. Every dropdown (language, final goal, result view) now shares one look.
- Save data card: a short explanation, plus checkboxes (Gifts & current affinity / Targets / Combos / Language & appearance) that decide what Download, Load and Reset apply to. Files made from a subset only touch that subset when loaded.
- Combos tab: "Apply this rule to" became "Start balancing gifts at" (pick one milestone, with a sentence saying what happens before and after it); gift spending order shows a one-line note for the selected mode; all titles in the combo card (including Advanced settings) share one size.
- Font size and UI size now also accept (with − / + buttons) any value from 70% to 200% (slider + number box) besides the five presets; the page stays at the same scroll position while resizing.
- Text sizes now follow one scale (11 / 12 / 13 / 14 / 16 / 18 / 20 / 24 px). Checked at 16 screen sizes from 320 to 1920 px across all tabs and result views; previously 19 different sizes (10 to 22 px, with half-pixel steps) were in use.
- "Tolerance" renamed "Allowed overage (points)" (and "Within tolerance" to "Within allowed overage") in all 18 languages, with an info tip explaining that it is how many points a milestone may go over the target and still count as a near hit.
- "Use non-favorite gifts" moved from the main combo card into Advanced settings.
- Combo cards show only "Apply rule from" and "Use non-favorite gifts" by default. Gap range, "Use gold first", per-gift maximum and tolerance moved into an **Advanced settings** section with a one-line summary chip.
- Targets tab: the Advanced section is gone. "Custom target" is a small button under the milestone chips, and the "Show full path from 0" option was removed (passed milestones are already shown with a ✓).
- Results: a **View** dropdown picks what to show: stages (default, the gifts to use step by step), milestone results, gifts used, progress bars, or the gap chart. One view at a time, so the page is much shorter. The summary tiles, estimated-gifts box and gap advice stay on top.
- Calmer visual style: lighter weights, tinted badges, thin borders, higher contrast for small text (WCAG AA in light and dark).
- Gifts tab: Green gifts in a full-width card on top, Purple and Gold side by side below (single column under 760 px). Gift names wrap by whole words instead of one letter per line.
- AI-assisted fill is a highlighted quick-start card. Save data is a small collapsed strip at the bottom.
- Result rows are cards on phones and tablets (replaces the 7-column table); desktop keeps the table.
- Touch targets enlarged; inputs use 16 px text so iOS does not zoom on focus.
- Page footer shows only the version.
- The floating Calculate button has one shape and size on phones and tablets (it was a rounded rectangle on phones and a pill on tablets).
- Tablets (641–1099 px): the Calculate button leaves the rail and floats inside the page like on phones. The desktop rail (1100 px and up) keeps its own button.
- Side navigation rail made slimmer and flatter: narrower (76 px tablet, 196 px desktop), smaller icons, no filled boxes (thin marker plus tint for the active page), smaller Calculate button.
- Language selector restyled as a soft pill without an outline, and the header now has a fixed gap above the first section (they touched at tablet widths).
- Results: more space between the Calculate button and the first result section.
- Spacing between nested sections: Tolerance has its own block, "Usable amount per gift" has room under its heading, and the Targets tab has dividers between the lists, progress bars and milestone chips.
- Language menu grouped by region: English, East Asia (繁體中文, 简体中文, 日本語, 한국어), Southeast Asia (Tiếng Việt, ไทย, Bahasa Indonesia, Filipino), Europe (Español, Português, Français, Italiano, Deutsch, Polski, Русский, Türkçe), then العربية.
- Replaced two emoji that rendered as empty boxes on some devices (🤖 → ✨, 🥇 → 🏅).

### Removed
- The separate "Gifts needed" (gift usage), "Progress" and "Gap chart" views in the Results dropdown. Item-level gift usage now sits under the Total row of the stage list, progress stays on the Targets tab, and the gap chart moved into the combo summary card (with its own Save as image button). The dropdown keeps only Stages and Table.
- The explanatory note under the size settings.
- Intro sentence under the title, the grey notes on the Gifts, Targets and Combos tabs, and the save / current-affinity hints. The layout already conveys them. Matching strings were deleted from all 18 languages.
- The colour legend from every tab except Results.

### Fixed
- Gift names being squeezed into one-letter columns on narrow screens.
- Gift pictures shrinking in the Green card; favorite marker overlapping the picture.
- Horizontal overflow at 320 px caused by the language selector.
- Language selector arrow missing in light mode and repeated in dark mode.
- "Total" and "Gap" in result cards and the desktop table were not translated (now translated in all 18 languages).
- Page title leaving a single orphan character on its own line on phones.
- Arabic (RTL): progress counter displayed as "8000 / 0" instead of "0 / 8000".

### Testing
- 752 layout checks (widths 320–1440 px, light/dark, 18 languages): no overflow.
- 53 functional checks. The only failing item is a test-harness artifact (the two-click "Reset all" confirmation); it passes when tested on its own.
- Solver output compared against V1 on four scenarios: identical.
- Automated testing used a desktop Chromium emulator. Real-device testing (iPhone, iPad, Android) is still recommended.

### Known limits
- Only one gap rule (two colours) per combo.
- Still ~290 KB in a single file. A split into separate CSS / JS / language files is planned for V3.

## V1 — compared with V0

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

## V2
手機友善改版、進度條、更簡潔的預設畫面。計算邏輯不變：在回歸情境下輸出與 V1 完全相同，V0／V1 的存檔仍可載入。

**新增**
- 目標頁進度條：依勾選的清單各一條，另有自訂目標一條；百分比與畫面填色一致。
- 結果頁進度條：疊上方案、每個目標一個圖釘（依結果上色），下一個目標的圖釘較大並輕微跳動，另有目前好感度氣泡。
- 所有螢幕都用分頁（庫存／目標／組合／結果）：手機為底部分頁列＋浮動計算按鈕；平板與電腦為左側導覽列。
- 結果摘要方塊與最終數量標籤。
- 差距範圍：即時顯示「0 ≤ 綠 − 紫 ≤ 10」、彩色標籤、帶刻度拉桿、− / + 按鈕。
- (i) 小提示取代行內說明句；結果頁新增顏色圖例標籤。
- 階段清單可切換「每階段」（每一步的花費）與「累計」（到該目標為止共用多少）。
- 統一圖示尺寸（14／18／24／36 px），星號改為 SVG。
- 頁尾加入「非官方粉絲作品」聲明與「回報問題」連結（18 種語言）；加入網頁描述、圖示與分享預覽標籤；新增 README、MIT 授權與問題回報範本。

**調整**
- 組合預設只顯示「規則起算點」與「使用非喜愛禮物」；差距範圍、金色優先、各禮物上限、容差移到「進階設定」。
- 目標頁移除進階設定：「自訂目標」改為小按鈕、移除「顯示完整路徑」；新增「最終目標」下拉選單（預設為最高目標）；結果頁新增「檢視」下拉選單，一次只顯示一種內容（預設為階段：一步步要用的禮物；其餘依序為各目標結果、禮物使用量、進度條、差距圖）。
- 更柔和的配色與更高的文字對比；綠色禮物在上方整排、紫與金並排；禮物名稱不再被擠成單字一行。
- 手機與平板的結果改為卡片；觸控目標加大。
- 把兩個在部分裝置顯示成方框的 emoji 換掉（🤖→✨、🥇→🏅）。

**移除**
- 標題下說明句、各頁灰色說明、存檔與目前好感度提示；顏色圖例只留在結果頁（18 種語言的對應文字一併刪除）。

**修正**
- 窄螢幕禮物名稱被擠壓、綠色卡圖片縮小；320 px 語言選單造成的橫向溢出；語言選單箭頭異常。
- 結果中的「總計」「差距」未翻譯；手機標題單字換行；阿拉伯語進度數字順序顛倒。

## V1（相對 V0）

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
