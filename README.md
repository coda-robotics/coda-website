## TODO 

( 05/22/2025 )

- [X] On the main page, move the logo and the highlights to the right to properly center
- [X] Each blog on the infrastructure page needs to have some vertical spacing when it's horizontally shrunk.

Notes:

- I feel like the image on the main page has to go, it doesn't look right -- but will need to come up with an alternative way of structuring the main page
  - I can find something and send it back to julian
- Mission, Values, and Culture don't seem to be presented properly, the link on top of the sections also feels out of place, feel like it looks a litle too small over their sections. Each section should also be a bit more explanatory.
  - I can write a draft and send it back to Julian.
- Are we going to provide an ashby page?


### Modifications

- Added Graphs / Charts / etc similar to pi_clone website.
- Added simple about page.
- Blogs under infrastructure are now created on the fly as we create new files under posts/*.md and provide a link in it's yaml (infrastructure/{name}) that links to the actual page of the blog (you must create a file under infrastructure/{name}/page.tsx) where page.tsx is the blog post you want to render.
  - Not using markdown this time around, due to complexity of adding different graphs / charts / etc
- [ ] The about page needs to be written, but there is a placeholder paragraph.


This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
