import React, { useEffect, Suspense } from "react";
import { useMatchesDispatch } from "../../context/matches/context";
import { fetchMatches } from "../../context/matches/action";
import ErrorBoundary from "../../components/ErrorBoundary";
const LiveMatchList = React.lazy(() => import("./LiveMatchList"));

export default function LiveMatch() {
  const matcheDispatch = useMatchesDispatch();

  useEffect(() => {
    fetchMatches(matcheDispatch);
  }, [matcheDispatch]);

  return (
    <div>
      <h1 className="text-gray-900 dark:text-white font-bold text-xl">
        Live Games
      </h1>
      <ErrorBoundary>
        <Suspense fallback={<div className="suspense-loading">Loading...</div>}>
          <div className="overflow-x-auto mt-2 flex items-center w-full">
            <LiveMatchList />
          </div>
        </Suspense>
      </ErrorBoundary>
    </div>
  );
}
