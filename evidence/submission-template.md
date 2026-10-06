# My lab evidence / 我的實作紀錄

- Group code / 組別：Not provided
- Tool / 工具：Codex
- Route / 路線：individual 個人（Codex-assisted; student review still needed）
- Tasks completed / 完成題目：A, B, C, D
- Material / 素材：NDHU classroom tasks 東華課堂版
- My role and what I checked / 我的角色與實際檢查：Codex prepared the task files at the user's request. Automated checks are listed below; the student should inspect the results before claiming personal review.

## Scope and plan / 範圍與計畫

Allowed input and output folders / 可讀取與輸出的資料夾：Supplied files in `practice/01-club-files/input`, `practice/02-campus-picker/activities.json`, `practice/03-equipment/equipment.json`, and `practice/04-review/bad-plan.txt`; generated outputs only in the relevant task folders and `evidence/`.

What I asked for / 原始需求：Complete the supplied classroom assignment, preserve originals, build the offline activity picker, clean the fictional equipment data without guessing, reject the flawed plan, and prepare the learning record.

What I checked before execution / 動手前我檢查了什麼：Confirmed the nested repository folder, read the task directions/template and relevant inputs, and found that this workspace has no `.git` directory.

## Tests actually performed / 我真的做過的測試

| Test / 測試 | Expected / 預期 | Observed / 實際 | Evidence / 證據 |
|---|---|---|---|
| A: manifest and copied inputs | 12 unique source entries and 12 copies; originals retained | 12 manifest entries and one copy per source; identical pairs retained | `practice/01-club-files/output/manifest.json`; file/hash check described in `evidence/verification.md` |
| B: six specified picker behaviors | Filters constrain choices; no-match keeps filters; history caps at five; reset preserves it; clear/language work | All six harness checks passed | `evidence/test-picker.cjs` and `evidence/verification.md` |

## One revision / 一次修改

Before / 原來的情況：B v1 used 16px base text and had no narrow-screen layout adjustment.

Request / 我提出的修改：Improve readability and phone layout; verify the functional requirements again.

After and retest / 修改後與重測結果：B v2 uses 18px base text and a single-column layout below 560px. The six interaction checks passed again against the final page JavaScript.

New requirement or defect? / 新需求還是原規格未做到：New usability requirement.

## One rejection / 一次退回

Which action I reject and why / 退回哪個動作、為什麼：Reject broad Downloads access, deleting suspected duplicates, assuming `final2` is authoritative, guessing missing values, and automatic publishing because they exceed the approved scope, destroy evidence, or invent/externally expose information.

An acceptable alternative / 可以怎麼改：Stay in the selected task folder, preserve originals and versions, flag uncertainty, produce local outputs for review, and request authorization before publication.

## Still unverified / 還沒驗證

What I cannot claim is complete / 哪些事不能說已完成：Rendered browser/mobile layout was not visually inspected because this browser session blocked local `file:` URLs. No screenshots or personal student observations were captured. Git commits and pushes were unavailable because this workspace has no Git repository or configured remote. See `evidence/verification.md`.
