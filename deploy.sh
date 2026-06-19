#!/usr/bin/env bash
#
# Build the site and publish dist/ to the `prod` branch (served by GitHub Pages).
# Usage: ./deploy.sh "commit message"
#
set -euo pipefail

MSG="${1:-deploy: $(date -u +%Y-%m-%dT%H:%M:%SZ)}"
BRANCH="prod"
DIST="dist"
WORKTREE=".deploy-prod"

# 1. Build
echo "▶ Building…"
bun install
bun run build

if [ ! -f "$DIST/CNAME" ]; then
  echo "✖ $DIST/CNAME missing — aborting (custom domain would break)."
  exit 1
fi

# 2. Prepare a worktree checked out on the prod branch
echo "▶ Preparing $BRANCH worktree…"
git worktree remove --force "$WORKTREE" 2>/dev/null || true
rm -rf "$WORKTREE"

if git show-ref --quiet "refs/heads/$BRANCH"; then
  git worktree add "$WORKTREE" "$BRANCH"
else
  git worktree add --orphan -b "$BRANCH" "$WORKTREE"
fi

# 3. Replace its contents with the fresh build
echo "▶ Syncing build output…"
find "$WORKTREE" -mindepth 1 -maxdepth 1 ! -name '.git' -exec rm -rf {} +
cp -R "$DIST"/. "$WORKTREE"/

# 4. Commit & push
echo "▶ Publishing…"
git -C "$WORKTREE" add -A
if git -C "$WORKTREE" diff --cached --quiet; then
  echo "✓ Nothing changed — skipping commit."
else
  git -C "$WORKTREE" commit -m "$MSG"
  git -C "$WORKTREE" push origin "$BRANCH"
  echo "✓ Pushed to $BRANCH."
fi

# 5. Clean up
git worktree remove --force "$WORKTREE"
echo "✓ Done."
