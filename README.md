# 🛡️Next BasicAuth Starter

---

This is a starter app managing Basic authentification. The app is coded in Typescript within the Next.js framework. The CSS is managed with Bulma to have a simple yet nice interface. The user session is managed with the next-iron-session utility, which is designed specially for next.js. It is simple but secure.

_But Basic Authentification is not good for security ?_

Actually, if your application is serve with HTTPS, you have no reasons to have security concerns. Once the user is authentified, the connexion is secured with a next-iron cookie. Then, authentification of the user is super-fast and secure.

## Features

* This app uses Next.js static generation for all its pages. The main advantage is that the application is super-fast.
* All the dynamic data is fetch within the pages with the great [useSWR](https://swr.vercel.app/) hook. It enables data caching and make the app even faster.
* Pages that should not be access from public user are protected inside a protected route. If a public user attemps to access to these pages, he is redirected to the login page.
* privates API routes are protected with the [next-iron-session](https://github.com/vvo/next-iron-session) utility. If the user is not authentified, the data from the API endpoint is not returned.
* For the sake of simplicity, there is only one user that can be logged in. But this application is made to be extended with a user/password store to enable authentification from any registered user.
* Also, the sign up form is not effective. It will only return errors if emails do not match / password is not long enough.

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

## API docs

_All the API endpoints work within Next.js API routes. They can be found in `src/pages/api` folder. The complex types of JSON body returned by API endpoints can be found in the [`src/utils/types.ts`](https://github.com/Fredestrik/Next-BasicAuth-Starter/blob/master/src/utils/types.ts) file._

URL| HTTP method | returned Type | Public | Description
-|-|-|-|-
`/api/log-in` | `POST` | `LoginResponse` | ✅ | If the user is successfully authentified or not. Gives also details about the user.
`/api/me` | `GET` | `UserData`| ❌ | Details about the user
`/api/private` | `GET` | `string` | ❌ | Example text
`/api/public`| `GET` | `string` | ✅| Example text
`/api/sign-up` | `POST` | `SignupResponse` | ✅ | If the user is successfully registered or not. *Not effective*.

## Further work

Please add any issue if you think the app can be improved !
