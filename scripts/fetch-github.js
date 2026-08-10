/*
 * Build-time GitHub snapshot.
 *
 * The site used to call the GitHub REST API from every visitor's browser.
 * Unauthenticated calls are capped at 60 per hour per IP, and the page made two
 * of them per load, so roughly 30 views from one address (a company NAT, a
 * mobile carrier, a few refreshes) returned 403 and the site had no data.
 *
 * This runs once per build and bakes the result into the bundle, so a visitor
 * needs zero API calls. The app still refreshes from the live API in the
 * background and silently keeps this snapshot when that fails.
 *
 * Failing to fetch here never fails the build: an existing snapshot is kept.
 */
const fs = require("fs");
const path = require("path");

const DATA_FILE = path.join(__dirname, "..", "src", "data.js");
const OUT_FILE = path.join(__dirname, "..", "src", "github-snapshot.json");

function readUsername() {
  const source = fs.readFileSync(DATA_FILE, "utf8");
  const match = source.match(/export const githubUsername = "([^"]+)"/);
  if (!match) throw new Error("githubUsername not found in src/data.js");
  return match[1];
}

// Keep only what the UI renders, so the snapshot stays small.
function pickUser(user) {
  return {
    name: user.name,
    bio: user.bio,
    blog: user.blog,
    location: user.location,
    html_url: user.html_url,
  };
}

function pickRepo(repo) {
  return {
    id: repo.id,
    name: repo.name,
    description: repo.description,
    html_url: repo.html_url,
    language: repo.language,
    stargazers_count: repo.stargazers_count,
    forks_count: repo.forks_count,
    pushed_at: repo.pushed_at,
  };
}

async function getJson(url) {
  const response = await fetch(url, {
    headers: {
      Accept: "application/vnd.github+json",
      "User-Agent": "portfolio-build-script",
    },
  });
  if (!response.ok) {
    throw new Error(`${response.status} ${response.statusText} for ${url}`);
  }
  return response.json();
}

async function main() {
  const username = readUsername();
  const [user, repos] = await Promise.all([
    getJson(`https://api.github.com/users/${username}`),
    getJson(`https://api.github.com/users/${username}/repos?per_page=100`),
  ]);

  const snapshot = {
    fetchedAt: new Date().toISOString(),
    user: pickUser(user),
    repos: repos.map(pickRepo),
  };

  fs.writeFileSync(OUT_FILE, JSON.stringify(snapshot, null, 2) + "\n");
  console.log(
    `[github] snapshot written: ${snapshot.repos.length} repos for ${username}`
  );
}

main().catch((error) => {
  const hasExisting = fs.existsSync(OUT_FILE);
  console.warn(`[github] fetch failed: ${error.message}`);

  if (hasExisting) {
    console.warn("[github] keeping the existing snapshot; build continues.");
    return;
  }

  fs.writeFileSync(
    OUT_FILE,
    JSON.stringify({ fetchedAt: null, user: null, repos: [] }, null, 2) + "\n"
  );
  console.warn(
    "[github] no snapshot available; the app will fall back to a live fetch."
  );
});
