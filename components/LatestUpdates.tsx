"use client";

import { updates } from "@/constants/updates";
import UpdateItem from "@/components/UpdateItem";
import { useState } from "react";

const LatestUpdates = () => {
  const [showAll, setShowAll] = useState(false);

  // Sort updates by date (most recent first)
  const sortedUpdates = [...updates].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  // Show only the latest 2 updates initially for a cleaner look
  const displayedUpdates = showAll ? sortedUpdates : sortedUpdates.slice(0, 2);

  if (updates.length === 0) {
    return (
      <div className="w-full text-center py-8">
        <p className="text-gray-500 dark:text-gray-400 text-sm">
          No updates yet. Check back soon!
        </p>
      </div>
    );
  }

  return (
    <div className="w-full max-w-3xl mx-auto">
      <div className="flex flex-col gap-4">
        {displayedUpdates.map((update) => (
          <UpdateItem key={update.id} update={update} />
        ))}
      </div>

      {updates.length > 2 && (
        <div className="mt-6 text-center">
          <button
            onClick={() => setShowAll(!showAll)}
            className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 bg-blue-50 dark:bg-blue-900/20 hover:bg-blue-100 dark:hover:bg-blue-900/30 rounded-lg transition-all duration-200"
          >
            {showAll ? (
              <>
                Show Less
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 15l7-7 7 7"
                  />
                </svg>
              </>
            ) : (
              <>
                Show {updates.length - 2} More Update
                {updates.length - 2 > 1 ? "s" : ""}
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </>
            )}
          </button>
        </div>
      )}
    </div>
  );
};

export default LatestUpdates;
