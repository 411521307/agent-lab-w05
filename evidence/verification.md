# Verification record

- **A:** PowerShell verification confirmed 12 input files, 12 manifest entries, 12 output copies, and byte-for-byte matches between each copied file and its source. Originals remained present. The two identical-content pairs and the two differing proposal versions were reviewed.
- **B:** `node evidence/test-picker.cjs` executed the embedded picker script with a lightweight DOM mock. Results: six PASS checks (four permitted indoor picks; no-match and unchanged filters; A09-only filter; five-entry newest-first history; reset retaining history; clear and bilingual controls/activity names). This harness does not validate actual rendering or browser accessibility.
- **C:** Compared input rows with normalized output and issues report: 10 input rows, 9 retained rows, 1 all-empty row removed; missing and negative quantities remain unchanged and are flagged; unknown status is mapped/reported; repeated EQ01/EQ02 retained and compared.
- **D:** Compared the rejection against `bad-plan.txt` and wrote an alternative that stays within the task folder and requires review before publication.
- No screenshot evidence was produced. A local file URL was blocked by the browser policy; no workaround was attempted.
- No Git commits or pushes were made because the selected folder is not a Git repository and has no origin remote.
