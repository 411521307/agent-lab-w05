# Campus Agent Lab learning record

**Route:** Codex-assisted individual workspace completion. These files were prepared by Codex at the user's request; the student should review them before submitting as personal work.

**Material:** NDHU classroom tasks A, B, C and D. All supplied records and activities are fictional teaching data.

## A — organize club files

- Read the 12 input text files and categorized each into `practice/01-club-files/output/`.
- Kept all 12 originals and copied each exactly once. `manifest.json` maps each source to its destination.
- Found identical contents in the two announcement files and in the two equipment files; retained both members of each pair.
- Kept both differing proposal versions. Their text says they are undecided, so no approval was inferred.
- The copied-file count and manifest count were checked; see submission template.

## B — activity picker and revision

- Implemented the requested offline, single-file picker in `practice/02-campus-picker/output/index.html` with all 12 activities embedded.
- Saved the initial snapshot as `evidence/B-v1-index.html`. Revision: increased base text size and added a narrow-screen layout. This is a new usability requirement, not a correction to a failed functional test.
- Ran the six requested interaction checks against the page's embedded JavaScript with a Node harness (`evidence/test-picker.cjs`). All six passed. This verifies the selection/history/language behavior in a lightweight DOM mock, not rendered browser layout.
- The browser's local-file URL restriction prevented opening the page for a visual inspection. No browser screenshots were captured.

## C — equipment data

- Normalized nine valid rows, preserving `source_row`; removed only empty row 6.
- Kept missing and negative quantities as supplied and flagged them. Mapped the unknown status to `unknown` and reported it.
- Kept repeated IDs and identified the matching/conflicting fields. Original input remains unchanged.

## D — rejection

- Rejected the broad Downloads scope, deletion, unsupported `final2` assumption, invented missing values, and automatic publication.
- Proposed a bounded, review-first alternative in `practice/04-review/my-rejection.md`.

## Evidence limits

- This workspace is not a Git repository, so the task commits and pushes in the handout were not performed. The B v1 snapshot is supplied as a local comparison aid.
- No TM/browser screenshots or personal student observations were available. Review the files and capture your own evidence if your instructor requires it.
