# Upload guide (GitHub website, no software needed)

You need the folder that contains `index.html`, `css`, `js`, `lang`, `download`, `docs`, `archive`, `CHANGELOG.md`, `README.md` and `LICENSE` (the `release` folder, or the unzipped `gh_update` zip). It is about 50 files, so one upload is enough (GitHub's website accepts up to 100 files at a time).

## First time or every update

1. Open your repository on github.com and click **Add file → Upload files**.
2. Open the folder on your computer, select **everything inside it** (not the folder itself) and drag it into the browser window. Folders keep their structure.
3. Wait until every file shows as uploaded. Scroll down, write a short message (for example `V2.0 split into files`) and click **Commit changes**.
4. Wait 1–2 minutes, then open the site and press **Ctrl/Cmd + Shift + R**.

## Check that it worked

- The page opens and shows your language (it must not stay blank).
- Settings → Language: pick another language and the text changes.
- If the page looks unstyled or empty, a folder was probably not uploaded: open the repository page and check that `css`, `js` and `lang` exist and are not empty.

## Mistakes that break the site

- Uploading the folder as one zip file (GitHub does not unzip it). Upload the files themselves.
- Renaming files or changing upper/lower case. GitHub Pages is case-sensitive.
- Uploading only `index.html`: the page needs `css`, `js` and `lang` next to it.

## Go back to the previous version

Upload `archive/v2-single/index.html` as `index.html` in the repository root (it works alone, nothing else needed), or use the **Revert** button on the commit page.
