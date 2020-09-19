# Next BasicAuth Starter

---

🛡️This is a starter app managing Basic authentification. The app is coded in Typescript within the Next.js framework. The CSS is managed with Bulma to have a simple yet nice interface. The user session is manage with the next-iron-session utility, which is designed specially for next.js. It is simple but secure.

_But Basic Authentification is not good for security ?_

Actually, if your application is serve with HTTPS, you have no reasons to have security concerns. Once the user is authentified, the connexion is secured with a next-iron cookie. Then, authentification of the user is super-fast and secure.

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

## Deploy

_This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/zeit/next.js/tree/canary/packages/create-next-app)._

This application can be deployed on the [Vercel Platform](https://vercel.com/import?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme). It can also be deployed locally with `npm run build & npm start` command.

Be sure to set the environment variable to enable next-iron encryption of the sessions cookies.

To do that, copy the ```.env.example```file into ```.env```, and set your own 32 character long password for IRON_PASSWORD.


