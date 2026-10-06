# Data cleaning issues

- Input rows: 10. Valid rows retained: 9. Removed: source row 6, whose fields are all null/empty.
- Quantity at source row 7 is an empty string. Preserved as supplied and flagged; it is not treated as zero.
- Quantity at source row 8 is `-1`. Preserved as supplied and flagged as invalid; it is not replaced.
- Status at source row 9 is `待盤點`, which is not a recognized available/borrowed label. Mapped to `unknown` and flagged.
- Repeated item ID `EQ01` occurs at rows 1 and 4. ID, name, qty, and normalized status match.
- Repeated item ID `EQ02` occurs at rows 2 and 5. ID, name, and normalized status match; quantities conflict (2 vs 3).
- Identical item names alone were not used to merge records. No rows were removed except the all-empty row 6.

Text fields were trimmed, except `qty`, which remains exactly as supplied. The original `equipment.json` is unchanged.
