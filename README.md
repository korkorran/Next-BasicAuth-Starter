# Next BasicAuth Starter


_ This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/zeit/next.js/tree/canary/packages/create-next-app). _

---

<p align="center"><b>Online demo at <a href="https://next-basicauth-starter.vercel.app/">https://next-basicauth-starter.vercel.app/</a> </b></p>

## Getting Started

First, run the development server:

```bash
cp .env.example .env
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.



## Deploy

This application can be deployed on the [Vercel Platform](https://vercel.com/import?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme). It can also be deployed locally with `npm run build & npm start` command.

Be sure to set the environment variable to enable next-iron encryption of the sessions cookies.

To do that, copy the ```.env.example```file into ```.env```, and set your own 32 character long password for IRON_PASSWORD.


