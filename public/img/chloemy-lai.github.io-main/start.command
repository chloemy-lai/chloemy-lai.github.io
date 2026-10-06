#!/usr/bin/env bash
# macOS / Linux launcher for the portfolio dev server
set -euo pipefail
cd "$(dirname "$0")"

if [[ ! -d node_modules ]]; then
  echo "Installing dependencies..."
  npm install
fi

echo "Starting portfolio (Vite)..."
npm start
