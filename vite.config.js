import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'

// Auto-detect base path for GitHub Pages
// - If repo is <user>.github.io → base '/'
// - Otherwise (project site) → base '/<repo-name>/'
const isGitHubPages = process.env.GITHUB_PAGES === 'true' || !!process.env.GITHUB_REPOSITORY
let base = '/'

if (isGitHubPages) {
  const repo = process.env.GITHUB_REPOSITORY?.split('/')[1] || ''
  if (repo && !repo.endsWith('.github.io')) {
    base = `/${repo}/`
  }
}

// https://vite.dev/config/
export default defineConfig({
  base,
  plugins: [react(), tailwindcss()],
})
