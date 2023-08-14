import React, { useEffect, useState } from "react";
import { FunnelIcon } from "@heroicons/react/24/outline";
import ArticleList from "./ArticleList";
import { fetchNews } from "../../context/news/action";
import { useNewsDispatch } from "../../context/news/context";
import { useSportState } from "../../context/sport/context";
import { Sport } from "../../context/sport/reducer";

export default function NewsContainer() {
  const [filter, setFilter] = useState("");
  const [sortBy, setSortBy] = useState("");

  const newsDispatch = useNewsDispatch();

  const state: any = useSportState();

  const { sports, isLoading, isError, errorMessage } = state;

  const chnageFilter = (e: any) => {
    setFilter(e.target.textContent);
  };

  useEffect(() => {
    fetchNews(newsDispatch);
  }, []);

  return (
    <div className="mt-4 relative">
      <h1 className="text-xl font-bold text-gray-900 my-2">Treading News</h1>
      <div className="w-10/12">
        <div className="flex justify-between">
          <div className="flex items-center text-gray-800 p-3 overflow-x-auto ">
            <p
              onClick={() => {
                setFilter("");
              }}
              className={`cursor-pointer px-4 py-1 text-center ${
                filter === ""
                  ? "border-gray-800 border-b-4 border-grey-900 font-bold bg-gray-100 rounded"
                  : ""
              }`}
            >
              All news
            </p>
            {!isLoading &&
              sports.map((sport: Sport) => (
                <p
                  className={`cursor-pointer px-4 py-1 text-center ${
                    filter === sport.name
                      ? "border-gray-800 border-b-4 border-grey-900 font-bold bg-gray-100 rounded"
                      : ""
                  }`}
                  onClick={chnageFilter}
                >
                  {sport.name}
                </p>
              ))}
          </div>
          <div className="flex justify-between items-center">
            <select
              name=""
              id=""
              className="py-2 px-3 text-gray-600 bg-gray-100"
              onChange={(e) => {
                setSortBy(e.target.value);
              }}
            >
              <option value="">Sort By :</option>
              <option value="date">Date</option>
              <option value="name">Title</option>
              <option value="sports">Sports</option>
            </select>
            <div className="bg-gray-100 rounded mx-2 p-3 text-gray-600">
              <FunnelIcon className="h-4 w-4" />
            </div>
          </div>
        </div>
      </div>

      <ArticleList sortBy={sortBy} filter={filter} />
    </div>
  );
}
