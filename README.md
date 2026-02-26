# ryoh827.com

React + Vite + TypeScript implementation of the `ryoh827.com` top page.

The React app is already in the repository root. The temporary `frontend/` phase from the migration plan has been completed.

## Development

```bash
npm install
npm run dev
```

## Quality checks

```bash
npm run typecheck
npm run lint
npm run test
npm run build
```

## Cutover Checklist

1. Run all quality checks locally and confirm success.
2. Deploy the `dist/` output to the production static hosting target.
3. Verify `https://ryoh827.com/` renders the React page.
4. Verify Scrapbox, GitHub, and X links.
5. Verify the visitor counter image loads.
6. Verify layout at key widths (820px, 625px, 510px, 420px, 350px).
