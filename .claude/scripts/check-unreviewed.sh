#!/usr/bin/env bash
set -euo pipefail

REPO_ROOT="$(cd "$(dirname "$0")/../.." && pwd)"

is_reviewed() {
  local file="$1"
  local first_line
  first_line=$(head -1 "$file")
  [ "$first_line" != "---" ] && return 1
  awk 'NR==1{next} /^---/{exit} /reviewed/{found=1} END{exit !found}' "$file"
}

find_first_unreviewed() {
  for dir in "$REPO_ROOT/docs/specs" "$REPO_ROOT/docs/articles"; do
    [ -d "$dir" ] || continue
    for f in "$dir"/*.md; do
      [ -f "$f" ] || continue
      [ "$(basename "$f")" = "index.md" ] && continue
      if ! is_reviewed "$f"; then
        echo "${f#$REPO_ROOT/}"
        return
      fi
    done
  done
}

FIRST=$(find_first_unreviewed)

echo "=== idbok SessionStart ==="
if [ -z "$FIRST" ]; then
  echo "NEXT_WORK_ACTION=write"
  echo "→ 全記事レビュー済み。次回 /work は新規記事を執筆します。"
else
  echo "NEXT_WORK_ACTION=review:$FIRST"
  echo "→ 未レビュー記事あり: $FIRST を次回 /work でレビューします。"
fi
