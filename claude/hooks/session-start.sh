#!/usr/bin/env bash
set -euo pipefail

PROJECT_DIR="${CLAUDE_PROJECT_DIR:-.}"

echo "=== idbok Session Status ==="

unreviewed=()
for f in "$PROJECT_DIR"/docs/specs/*.md "$PROJECT_DIR"/docs/articles/*.md; do
  [ -f "$f" ] || continue
  basename=$(basename "$f")
  [ "$basename" = "index.md" ] && continue
  if ! grep -q '^reviewed:\s*true' "$f"; then
    unreviewed+=("$f")
  fi
done

if [ ${#unreviewed[@]} -eq 0 ]; then
  echo "STATUS: ALL_REVIEWED"
  echo "All articles are reviewed. Ready to write new content."
else
  echo "STATUS: UNREVIEWED_EXISTS"
  echo "Unreviewed articles (${#unreviewed[@]}):"
  for f in "${unreviewed[@]}"; do
    echo "  - $f"
  done
fi
