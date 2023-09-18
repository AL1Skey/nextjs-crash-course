import React from "react";
import Link from "next/link";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faStar } from "@fortawesome/free-solid-svg-icons";
// import { faCodeBranch } from "@fortawesome/free-solid-svg-icons";
// import { faEye } from "@fortawesome/free-solid-svg-icons";
import { FaStar, FaCodeBranch, FaEye } from "react-icons/fa";
import { Suspense } from "react";
import { resolve } from "styled-jsx/css";
import Repos from "../components/Repos";

async function fetchData() {
  const data = await fetch(
    "https://api.github.com/users/newrivaladam/repos"
  ).then((data) => data.json());
  return data;
}
const te = [1, 2, 4];
const page = async () => {
  const data = await fetchData();
  return (
    // <ul className="repos-list">
    //   {te.map((t) => (
    //     <li>
    //       <Link key={t} href={`as`}>
    //         <div className="icon-list">
    //           <div>
    //             <FaStar />
    //             <span>spa</span>
    //           </div>
    //         </div>
    //       </Link>
    //     </li>
    //   ))}
    // </ul>

    <div className="repos">
      <h1 className="title">Repositories</h1>

      <ul className="repos-list">
        {data.map((el) => (
          <li key={el.id}>
            <Link href={`repos/${el.name}`}>
              <Suspense fallback={<p>Loading...</p>}>
                <Repos name={el.name} />
              </Suspense>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default page;
