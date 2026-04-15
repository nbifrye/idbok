#!/usr/bin/env bash
set -euo pipefail

PROJECT_DIR="${CLAUDE_PROJECT_DIR:-.}"

echo "=== idbok Session Status ==="

# --- 未レビュー記事の検出 ---
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

# --- OpenID Foundation 月次レポートのカバレッジ検出 ---
#
# WG/CG レジストリのミラー。`claude/skills/oidf/SKILL.md` の表が真の正典。
# 形式: "<wg-id>:<since-year>:<since-month>"
# 変更時は SKILL.md と本配列を同じコミットで同期更新すること。
oidf_registry=(
  "adt:2025:2"
  "aiim:2025:4"
  "authzen:2024:1"
  "connect:2024:1"
  "dade:2024:9"
  "dcp:2024:1"
  "ekyc-ida:2024:1"
  "escg:2024:1"
  "fapi:2024:1"
  "igov:2024:1"
  "ipsie:2024:10"
  "modrna:2024:1"
  "rande:2024:1"
  "sharedsignals:2024:1"
)

# 現在進行中の月を算出
current_year=$(date +%Y)
current_month=$(date +%-m)

# 直近完了月 = 現在進行中の一つ前
if [ "$current_month" -eq 1 ]; then
  latest_year=$(( current_year - 1 ))
  latest_month=12
else
  latest_year=$current_year
  latest_month=$(( current_month - 1 ))
fi

# 期待スロットを生成して、未カバーのものを (year, month, wg) でリストアップ
# ソート順: year DESC, month DESC, wg ASC（新しい月から古い月、同月内は WG ID 昇順）
sorted_wgs=$(printf '%s\n' "${oidf_registry[@]}" | sort)
missing_slots=()
for y in $(seq "$latest_year" -1 2020); do
  if [ "$y" -eq "$latest_year" ]; then
    m_start=$latest_month
  else
    m_start=12
  fi
  for m in $(seq "$m_start" -1 1); do
    while IFS= read -r entry; do
      wg=${entry%%:*}
      rest=${entry#*:}
      since_year=${rest%%:*}
      since_month=${rest##*:}
      # since 以降か判定: (y > since_year) OR (y == since_year AND m >= since_month)
      if [ "$y" -lt "$since_year" ]; then
        continue
      fi
      if [ "$y" -eq "$since_year" ] && [ "$m" -lt "$since_month" ]; then
        continue
      fi
      mm=$(printf '%02d' "$m")
      file="$PROJECT_DIR/docs/articles/${y}m${mm}-openid-${wg}.md"
      if [ ! -f "$file" ]; then
        missing_slots+=("${y}-${mm}:${wg}")
      fi
    done <<< "$sorted_wgs"
  done
done

missing_count=${#missing_slots[@]}
if [ "$missing_count" -eq 0 ]; then
  echo "OIDF_COVERAGE_MISSING: 0"
else
  head_n=10
  if [ "$missing_count" -lt "$head_n" ]; then
    head_n=$missing_count
  fi
  preview=""
  for ((i=0; i<head_n; i++)); do
    preview="${preview}${missing_slots[$i]} "
  done
  preview=${preview% }
  echo "OIDF_COVERAGE_MISSING: ${missing_count} slots (newest first, showing ${head_n}): ${preview}"
fi
