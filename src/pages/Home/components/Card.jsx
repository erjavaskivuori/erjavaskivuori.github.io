import React from "react"

const Card = ({
  title,
  description,
  link,
  linkText,
  link2,
  linkText2,
  openNew
}) => {
  return (
    <div className="bg-gray flex flex-col justify-between rounded-lg p-6 shadow">
      <div>
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
          {title}
        </h5>
        <p className="mb-7 mt-3 font-normal text-gray-200">{description}</p>
      </div>
      <div>
        <a
          href={link}
          rel={openNew ? "noreferrer" : undefined}
          target={openNew ? "_blank" : undefined}
          className="button-color button-hover mr-5 inline-flex items-center self-start rounded-lg px-3 py-2 text-center text-sm font-medium text-white"
        >
          {linkText}
          <svg
            className="ms-2 h-3.5 w-3.5 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </a>
        {link2 && (
          <a
            href={link2}
            rel="noreferrer"
            target="_blank"
            className="button-color button-hover inline-flex items-center self-start rounded-lg px-3 py-2 text-center text-sm font-medium text-white"
          >
            {linkText2}
          </a>
        )}
      </div>
    </div>
  )
}

export default Card
