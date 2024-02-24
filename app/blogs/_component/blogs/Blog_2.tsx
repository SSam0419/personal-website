"use client";
import {
  Button,
  Code,
  Input,
  Select,
  SelectItem,
  Spacer,
} from "@nextui-org/react";
import Link from "next/link";
import React from "react";
import { CiLink } from "react-icons/ci";
import { RiQuestionAnswerLine } from "react-icons/ri";
import { TfiBlackboard } from "react-icons/tfi";
import { CopyBlock } from "react-code-blocks";

const Blog_2 = () => {
  return (
    <>
      <div className="flex flex-col gap-5 py-5">
        <Link
          href="https://tanstack.com/query/latest/docs/framework/react/overview"
          target="_blank"
          className="flex items-center gap-2 text-xl"
        >
          <CiLink size={30} />
          What is React Query (TanStack Query)
        </Link>
        <p>
          This is a third party library of fetching or updating data in a
          holistic way, the 2 most used feature by me is useQuery hook and
          useMutation hook.
        </p>
        <div className="flex items-center gap-2 text-xl">
          <RiQuestionAnswerLine size={30} />
          Why do I use ReactQuery
        </div>
        <div>
          <p>
            React Query is a powerful library that I rely on for data fetching
            in my projects. One of the main reasons I use React Query is because
            of its convenient custom hook called useQuery. This hook provides me
            with essential parameters such as isLoading, refetch, and data,
            which greatly simplify my UI handling. For example I can display a
            spinner if isLoading is True such as
            <Code className="mx-1">{`{ isLoading && <Spinner/> }`}</Code> or
            <Code className="mx-1">{`{ data && <InvoicesTable data={data}/> }`}</Code>
          </p>
        </div>
        <div className="flex items-center gap-2 text-xl">
          <TfiBlackboard size={30} />
          Example
        </div>

        <div className="my-2">
          <CopyBlock
            text={`{ isLoading, refetch, data } = 
  useQuery([ "retrieveInvoices", page],   
  async () => {
      const route = "/api/invoices";
      const data = await axios.get(route);
      return data as any;
    },
    {
      onSuccess: (data) => {
        if (data) {
          setInvoices(data)
        } else {
          setInvoices([])
        }
      },
    }
  );`}
            language={"typescript"}
            showLineNumbers={true}
            codeBlock
          />
        </div>
      </div>
    </>
  );
};

export default Blog_2;
