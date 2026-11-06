# kaueprata

One repository for the owner's site:

| Folder | Site | Was |
| --- | --- | --- |
| `main/` | https://kaueprata.com | `github.com/sonderzudo-lab/kaueprata.com` (full history kept) |
| `lab/` | https://lab.kaueprata.com | `github.com/sonderzudo-lab/lab.kaueprata.com` (full history kept; the Corrida da Tabuada game lives in `lab/tabuada/`) |

Both folders were added with `git subtree add` (no squash), so every earlier commit is here. `git log` shows them all; `git log -- main/index.html` stops at the import because the old commits used root paths (use `git log --follow`).

## Hosting (Vercel)

Each site keeps its own Vercel project and domain. In each project's settings, set **Root Directory** to `main` or `lab`. Each folder keeps its own `vercel.json`. To rebuild only the site that changed, set the project's **Ignored Build Step** to:

```bash
git diff HEAD^ HEAD --quiet -- .
```

## Tests

```bash
cd lab
node --test tests/game-core.test.cjs
```
