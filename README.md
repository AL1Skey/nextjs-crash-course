This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Render

It rende on layout file that have page.js

## Routing

Inside root folder(where layout and page there), create directory and name it according to name of your endpoint and create page.js file

or

Create javascript file inside root folder and name it according to name of your endpoint

## Dynamic Routing

Create [name] directory and create page.js

## Get Parameter from url

Insert {params} inside

Ex
```js
import React from "react";
import Repos from "@/app/components/Repos";
import { Suspense } from "react";
const page = ({ params }) => {
  console.log(params.name);
  return (
    <div className="repos-singular">
      <Suspense fallback={<h1>LOADING...</h1>}>
        <Repos name={params.name} type="link" />
      </Suspense>
    </div>
  );
};

export default page;
```

## Using Promise

Create async function inside React Hook component (useEffect, useCallback) and then call it inside Hook function

Ex:
```js
.....
 useEffect(() => {
    // Create async function as workaround to promise
    // If I not do it, next will fetching twice every render
    async function invoke() {
      const output = await getData(link, "http://127.0.0.1:8000/results");
      setData(output);
      console.log("output:",output)
    }
    // If data is empty
    if (!data.length) {
      invoke()
      console.log(data)
    }
  });
.....
```

# Tips for React

- Use React Hook Component to avoid re-rendering problem

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
