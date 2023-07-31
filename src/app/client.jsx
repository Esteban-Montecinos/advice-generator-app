"use client";

import { useEffect, useState } from "react";

const API_ADVICE = "https://api.adviceslip.com/advice";

export default function HomeClient() {
  const [advice, setAdvice] = useState();
  function handleClick() {
    fetch(API_ADVICE)
      .then((res) => res.json())
      .then((dato) => {
        const { slip } = dato;
        setAdvice(slip);
      });
  }

  useEffect(() => {
    handleClick();
  }, []);
  return (
    <article className="px-12 bg-gray-700 flex flex-col gap-4 items-center justify-center rounded-2xl shadow-lg">
      <section className="min-[600px]:max-w-md max-w-[15rem] w-full gap-4 tracking-widest flex flex-col items-center justify-center mb-[1.7rem] mt-12">
        <h1 className="text-emerald-300 text-center text-xs tracking-[0.2rem]">
          ADVICE #{advice ? advice?.id : "0"}
        </h1>
        <p className="text-blue-100 text-center text-[28px] my-4">{`"${
          advice ? advice?.advice : "🤔"
        }"`}</p>
        {/** SVG desktop  */}
        <svg className="max-[600px]:hidden min-[600px]:block" width="444" height="16" xmlns="http://www.w3.org/2000/svg">
          <g fill="none" fill-rule="evenodd">
            <path fill="#4F5D74" d="M0 8h196v1H0zM248 8h196v1H248z" />
            <g transform="translate(212)" fill="#CEE3E9">
              <rect width="6" height="16" rx="3" />
              <rect x="14" width="6" height="16" rx="3" />
            </g>
          </g>
        </svg>
        {/** SVG mobile  */}
        <svg className="max-[600px]:block min-[600px]:hidden" width="295" height="16" xmlns="http://www.w3.org/2000/svg">
          <g fill="none" fill-rule="evenodd">
            <path fill="#4F5D74" d="M0 8h122v1H0zM173 8h122v1H173z" />
            <g transform="translate(138)" fill="#CEE3E9">
              <rect width="6" height="16" rx="3" />
              <rect x="14" width="6" height="16" rx="3" />
            </g>
          </g>
        </svg>
      </section>
      <button
        onClick={handleClick}
        aria-label="Get new advice"
        className="bg-emerald-300 rounded-full p-[1.2rem] -mb-8 hover:shadow-[0px_1px_35px_rgba(0,0,0,0.2)] hover:shadow-emerald-300"
      >
        <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M20 0H4a4.005 4.005 0 0 0-4 4v16a4.005 4.005 0 0 0 4 4h16a4.005 4.005 0 0 0 4-4V4a4.005 4.005 0 0 0-4-4ZM7.5 18a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z"
            fill="#202733"
          />
        </svg>
      </button>
    </article>
  );
}
