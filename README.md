# Huron Hedge Fund Club — Website

A static site (no build step, no framework) ready to publish on GitHub Pages.

## File map

```
index.html          Home page
performance.html    Fund performance page
members.html        Members page
insights.html       Insights page
join.html           Application form page
css/style.css        All styling
js/data.js            <-- EDIT THIS to update content (desks, members, positions, insights, join form)
js/main.js            Site behavior (nav menu, renders data.js onto the pages) — you shouldn't need to touch this
assets/logo.png       The club crest
```

## Making changes during the year

Almost everything you'll want to change — member names/roles, desk descriptions,
performance numbers, insight write-ups, the join-form dropdown, contact email —
lives in **`js/data.js`**. Open that file, edit the text between the quotes, save,
and push to GitHub. No other file needs to change.

A few rules to avoid breaking it:
- Keep the commas between items in a list.
- Keep text wrapped in `"double quotes"`.
- Don't delete `{ }` or `[ ]` brackets.
- If something looks wrong after you publish, undo your last edit and check for
  a missing comma or quote — that's almost always the cause.

If you ever want to edit the *design* (colors, layout, fonts) or add a new page,
that requires touching `css/style.css` or the `.html` files — happy to help with
that anytime, just ask.

## Before you publish: two things to customize

1. **Contact info** — replace `huronhedgeclub@example.com` in `js/data.js`
   (`contact.email`) and in the `mailto:` links in each page's footer, and add
   your real LinkedIn/Instagram URLs.
2. **Join form** — see "Connecting the join form" below. Until you do this,
   the form will show a friendly "not connected yet" message instead of
   silently losing applications.

## Connecting the join form (~5 minutes, no code)

The form doesn't send anywhere until you give it a destination. The easiest
free option is **Formspree**:

1. Go to formspree.io and sign up (free tier is enough for a club).
2. Create a new form — it'll give you an endpoint URL like
   `https://formspree.io/f/abcd1234`.
3. Open `js/data.js`, find `join.formEndpoint`, and paste the URL in:
   ```js
   formEndpoint: "https://formspree.io/f/abcd1234"
   ```
4. Save, push to GitHub. Applications will now land in your Formspree inbox
   (and can be forwarded to your club email in Formspree's settings).

Google Forms is another option, but it requires swapping the whole form
markup in `join.html` for a Google Forms embed rather than just adding a URL —
ask if you'd like that instead.

## Publishing on GitHub Pages

1. Create a new repository on GitHub (e.g. `huron-hedge-fund-club`).
2. Push everything in this folder to that repository's `main` branch:
   ```
   git init
   git add .
   git commit -m "Initial site"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<repo-name>.git
   git push -u origin main
   ```
3. In the repo on GitHub: **Settings → Pages**. Under "Build and deployment",
   set Source to "Deploy from a branch", branch `main`, folder `/ (root)`.
   Save.
4. GitHub will give you a URL like
   `https://<your-username>.github.io/<repo-name>/` within a minute or two.

Every time you push new changes to `main`, the live site updates automatically
— usually within a minute.

## Editing the code yourself

The whole site is plain HTML/CSS/JS, no build tools or dependencies. Any code
editor (VS Code is a good free option) will let you open this folder and edit
directly. Reloading the HTML file in a browser (or re-publishing) is all you
need to see changes.
