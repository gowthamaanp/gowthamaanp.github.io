"use client";

import React, { useEffect, useState } from "react";
import { Publication, PublicationsProps } from "@/interface/publication";
import { HiOutlineLink } from "react-icons/hi2";

const Publications: React.FC<PublicationsProps> = ({
  bibFilePath = "/assets/publications.bib",
}) => {
  const [publications, setPublications] = useState<Publication[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchAndParseBib = async () => {
      try {
        setLoading(true);
        const response = await fetch(bibFilePath);

        if (!response.ok) {
          throw new Error("Failed to load publications file");
        }

        const bibText = await response.text();
        const parsedPublications = parseBibtex(bibText);

        // Sort by year (descending)
        parsedPublications.sort((a, b) => parseInt(b.year) - parseInt(a.year));

        setPublications(parsedPublications);
        setError(null);
      } catch (err) {
        console.error("Error loading publications:", err);
        setError("Failed to load publications");
      } finally {
        setLoading(false);
      }
    };

    fetchAndParseBib();
  }, [bibFilePath]);

  // Simple BibTeX parser
  const parseBibtex = (bibText: string): Publication[] => {
    const entries: Publication[] = [];

    // Match each BibTeX entry
    const entryRegex = /@(\w+)\{([^,]+),\s*([\s\S]*?)\n\}/g;
    let match;

    while ((match = entryRegex.exec(bibText)) !== null) {
      const type = match[1];
      const id = match[2];
      const fields = match[3];

      const publication: Publication = {
        id,
        type,
        title: "",
        author: "",
        year: "",
      };

      // Parse fields
      const fieldRegex = /(\w+)\s*=\s*\{([^}]+)\}/g;
      let fieldMatch;

      while ((fieldMatch = fieldRegex.exec(fields)) !== null) {
        const fieldName = fieldMatch[1].toLowerCase();
        const fieldValue = fieldMatch[2].trim();

        if (
          fieldName === "title" ||
          fieldName === "author" ||
          fieldName === "year" ||
          fieldName === "journal" ||
          fieldName === "booktitle" ||
          fieldName === "pages" ||
          fieldName === "organization" ||
          fieldName === "volume" ||
          fieldName === "number" ||
          fieldName === "doi" ||
          fieldName === "url"
        ) {
          (publication as any)[fieldName] = fieldValue;
        }
      }

      entries.push(publication);
    }

    return entries;
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center py-8">
        <p className="text-gray-600 dark:text-gray-400">
          Loading publications...
        </p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center py-8">
        <p className="text-red-600 dark:text-red-400">{error}</p>
      </div>
    );
  }

  if (publications.length === 0) {
    return (
      <div className="flex justify-center items-center py-8">
        <p className="text-gray-600 dark:text-gray-400">
          No publications found.
        </p>
      </div>
    );
  }

  // Helper function to format authors
  const formatAuthors = (author: string) => author.replace(/ and /g, ", ");

  // Helper function to get publication type info
  const getTypeInfo = (type: string) => {
    switch (type.toLowerCase()) {
      case "article":
        return {
          label: "Journal Article",
          color: "#3b82f6",
          bgColor: "bg-blue-50 dark:bg-blue-950/30",
        };
      case "inproceedings":
      case "conference":
        return {
          label: "Conference",
          color: "#8b5cf6",
          bgColor: "bg-purple-50 dark:bg-purple-950/30",
        };
      case "book":
        return {
          label: "Book",
          color: "#10b981",
          bgColor: "bg-green-50 dark:bg-green-950/30",
        };
      case "phdthesis":
        return {
          label: "PhD Thesis",
          color: "#f59e0b",
          bgColor: "bg-amber-50 dark:bg-amber-950/30",
        };
      case "mastersthesis":
        return {
          label: "Master's Thesis",
          color: "#f97316",
          bgColor: "bg-orange-50 dark:bg-orange-950/30",
        };
      default:
        return {
          label: "Publication",
          color: "#6b7280",
          bgColor: "bg-gray-50 dark:bg-gray-950/30",
        };
    }
  };

  // Helper to extract arXiv ID from journal field
  const getArxivUrl = (journal?: string) => {
    if (!journal) return null;
    const arxivMatch = journal.match(/arXiv:(\d+\.\d+)/);
    return arxivMatch ? `https://arxiv.org/abs/${arxivMatch[1]}` : null;
  };

  // Group publications by year
  const groupedPublications = publications.reduce<
    Record<string, Publication[]>
  >((acc, pub) => {
    const year = pub.year || "Unknown Year";
    if (!acc[year]) {
      acc[year] = [];
    }
    acc[year].push(pub);
    return acc;
  }, {});

  const sortedYears = Object.keys(groupedPublications).sort((a, b) =>
    b.localeCompare(a)
  );

  return (
    <div className="space-y-12">
      {sortedYears.map((year) => (
        <section key={year}>
          <h2 className="mb-8 text-3xl font-bold tracking-tighter">{year}</h2>
          <div className="grid gap-6">
            {groupedPublications[year].map((publication, index) => {
              const { type, title, author, journal, booktitle, doi, url } =
                publication;

              const formattedAuthors = formatAuthors(author);
              const typeInfo = getTypeInfo(type);
              const arxivUrl = getArxivUrl(journal);
              const paperUrl = url || arxivUrl;

              return (
                <div
                  key={publication.id || `pub-${index}`}
                  className="group rounded-lg border p-6 transition-colors hover:bg-muted/50"
                >
                  <div className="flex items-start gap-2">
                    <h3 className="font-semibold text-lg flex-1">{title}</h3>
                    {paperUrl && (
                      <a
                        href={paperUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-foreground transition-colors"
                        aria-label="View paper"
                      >
                        <HiOutlineLink className="w-5 h-5" />
                      </a>
                    )}
                  </div>

                  <p className="mt-2 text-sm text-muted-foreground">
                    {formattedAuthors}
                  </p>

                  <div className="mt-1 flex items-center gap-2 flex-wrap">
                    <span className="text-sm font-medium">
                      {typeInfo.label}
                    </span>
                    {(journal || booktitle) && (
                      <>
                        <span className="text-sm text-muted-foreground">•</span>
                        <span className="text-sm text-muted-foreground">
                          {booktitle || journal}
                        </span>
                      </>
                    )}
                    {arxivUrl && (
                      <>
                        <span className="text-sm text-muted-foreground">•</span>
                        <a
                          href={arxivUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-muted-foreground hover:text-foreground"
                        >
                          {journal?.match(/arXiv:(\d+\.\d+)/)?.[0] || "arXiv"}
                        </a>
                      </>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      ))}
    </div>
  );
};

export default Publications;
