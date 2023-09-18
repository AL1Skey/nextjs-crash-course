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
