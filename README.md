# Portfolio Website

A simple static portfolio (plain HTML/CSS/JS, no build step) that works on GitHub Pages.

## Editing your content

Open [`content.js`](content.js). All text, links, jobs, projects, skills and certifications live there. Save the file and refresh the page.

- Add a project: copy a `{ ... }` block inside `projects` and edit it.
- Add a project link: fill in the `link: ""` field. Empty links are hidden.
- Update your resume: replace the PDF and keep `resume` in `content.js` pointing to its filename.

## Preview locally

Double-click `index.html`, or run `python -m http.server` in this folder and open http://localhost:8000.

## Host on GitHub Pages

1. Create a repository on GitHub (for a root URL, name it `<your-username>.github.io`).
2. Push these files to the `main` branch.
3. Go to **Settings → Pages → Build and deployment**, choose **Deploy from a branch**, branch `main`, folder `/ (root)`, then Save.
4. Your site will be live at `https://<your-username>.github.io/` in a minute or two.

## Customising the look

Colors and fonts are CSS variables at the top of [`assets/style.css`](assets/style.css).

## Structure

```
index.html        page skeleton
content.js        YOUR CONTENT (edit this)
assets/style.css  styling
assets/main.js    renders content.js into the page
```
