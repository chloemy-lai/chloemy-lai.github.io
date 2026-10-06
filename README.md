# ACE UTSC

Official website for ACE UTSC (Achieve, Connect, Empower UTSC Chapter). 
ACE UTSC, formerly known as DECA UTSC, is the UTSC’s chapter for the largest undergraduate case competition in Canada. Our club prepares emerging leaders and entrepreneurs in various industries, including consulting, finance, and management by integrating classroom learning into real-life case scenarios during the 2-day Nationals competition at Sheraton hotel.. ACE UTSC has contributed to the professional development of hundreds of university students within our community through rigorous training sessions, networking events, and more. 
Our mission is to create a community where students can expand, grow, and practice their communication, presentation, and problem-solving skills to ultimately make them better within their own careers. As one of the many chapters under ACE Canada, ACE UTSC has strong ties with other universities across Canada. Join an awesome community within UTSC and a larger community across Canada by becoming a member of our team!

## Tech Stack

- React
- Vite
- CSS

## Project Structure

```text
public/         Static assets (images, fonts)
src/components/ Reusable React components such as Navbar, Footer, animations, and UI elements
src/pages/      Page sections of the website
src/data/       Website data for events and our team
```

## Development
```bash
npm install
npm run dev
```

## Deploy via GitHub Pages (IMPORTANT)

Pushing code to `master` (or `main`) is **not enough**. GitHub Pages must be told to use the workflow.

### Step-by-step

1. Push your changes to `master` (or `main`).

2. Go to your repo on GitHub → **Settings → Pages**

3. Under "Build and deployment", change **Source** to **GitHub Actions**  
   (Do NOT leave it on "Deploy from a branch")

4. Go to the **Actions** tab.
   - You should see a "Deploy Vite site to GitHub Pages" run.
   - If it didn't start, click "Run workflow" → "Run workflow".

5. Wait for the green check (usually 1-2 minutes).

6. Visit your site:
   - If the repo itself is named `yourname.github.io` → `https://yourname.github.io`
   - If the repo is named `ace-utsc` → `https://yourname.github.io/ace-utsc/`

### Still nothing / blank / 404?

- Check the Actions tab for errors (red X).
- Make sure you changed the Pages Source to GitHub Actions.
- First deploy can take a bit. Hard refresh (Cmd/Ctrl + Shift + R).
- Confirm the exact URL you're visiting.

The workflow builds automatically and publishes only the `dist/` folder.