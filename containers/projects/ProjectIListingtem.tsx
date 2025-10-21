"use client";
import {
  DivWBorderWrapper,
  LinkWrapper,
  ListWrapper,
  Tag,
} from "@/components/common";
import { IProject } from "@/interface/projects";
import Image from "next/image";
import { useState } from "react";
import {
  FiChevronDown,
  FiChevronUp,
  FiGithub,
  FiExternalLink,
  FiPlay,
} from "react-icons/fi";

interface IProjectItemProps {
  project: IProject;
  isLastItem?: boolean;
}

const ProjectListingItem: React.FC<IProjectItemProps> = ({
  project,
  isLastItem = false,
}) => {
  const {
    tags,
    code,
    preview,
    demo,
    title,
    description,
    thumbnail,
    images,
    screenshots,
    type,
    techStack,
    features,
    links,
    status,
    date,
  } = project;

  const [isExpanded, setIsExpanded] = useState(false);
  const [selectedImage, setSelectedImage] = useState(0);

  const allImages = [
    ...(thumbnail ? [thumbnail] : []),
    ...(images || []),
    ...(screenshots || []),
  ];

  const hasExpandedContent = features || techStack || allImages.length > 1;

  return (
    <DivWBorderWrapper className={isLastItem ? "!border-b-0" : ""}>
      <div className="space-y-4">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3">
          <div className="flex-1">
            <div className="flex items-start gap-3">
              <div className="flex-1">
                <p className="project-title text-lg font-semibold font-poppins mb-1">
                  {title}
                </p>
                <div className="flex items-center gap-2 flex-wrap">
                  {type && (
                    <span className="text-xs px-2.5 py-1 rounded-md font-medium border bg-opacity-10">
                      {type}
                    </span>
                  )}
                  {status && (
                    <span
                      className={`text-xs px-2.5 py-1 rounded-md font-medium ${
                        status === "Completed"
                          ? "bg-green-500/10 text-green-700 dark:text-green-400 border border-green-500/30"
                          : status === "Published"
                          ? "bg-blue-500/10 text-blue-700 dark:text-blue-400 border border-blue-500/30"
                          : "bg-yellow-500/10 text-yellow-700 dark:text-yellow-400 border border-yellow-500/30"
                      }`}
                    >
                      {status}
                    </span>
                  )}
                  {date && (
                    <span className="text-xs text-gray-600 dark:text-gray-400 font-medium">
                      {date}
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Action Links */}
          <div className="flex items-center gap-2 text-sm flex-wrap">
            {code && (
              <LinkWrapper
                href={code}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800/50 hover:bg-gray-100 dark:hover:bg-gray-700/70 hover:border-gray-400 dark:hover:border-gray-500 transition-all duration-200"
              >
                <FiGithub className="w-4 h-4" />
                Code
              </LinkWrapper>
            )}
            {preview && (
              <LinkWrapper
                href={preview}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800/50 hover:bg-gray-100 dark:hover:bg-gray-700/70 hover:border-gray-400 dark:hover:border-gray-500 transition-all duration-200"
              >
                <FiExternalLink className="w-4 h-4" />
                Preview
              </LinkWrapper>
            )}
            {demo && (
              <LinkWrapper
                href={demo}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800/50 hover:bg-gray-100 dark:hover:bg-gray-700/70 hover:border-gray-400 dark:hover:border-gray-500 transition-all duration-200"
              >
                <FiPlay className="w-4 h-4" />
                Demo
              </LinkWrapper>
            )}
            {links?.map((link, idx) => (
              <LinkWrapper
                key={idx}
                href={link.url}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800/50 hover:bg-gray-100 dark:hover:bg-gray-700/70 hover:border-gray-400 dark:hover:border-gray-500 transition-all duration-200"
              >
                <FiExternalLink className="w-4 h-4" />
                {link.label}
              </LinkWrapper>
            ))}
          </div>
        </div>

        {/* Thumbnail/Main Image */}
        {allImages.length > 0 && (
          <div className="relative rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/30">
            <Image
              src={allImages[selectedImage]}
              alt={title}
              width={1200}
              height={600}
              className={`w-full h-auto object-cover transition-all duration-300 ${
                type === "Mobile"
                  ? "max-h-96 object-contain bg-gradient-to-br from-gray-100 dark:from-gray-800 to-gray-50 dark:to-gray-900"
                  : "max-h-[400px]"
              }`}
              priority={selectedImage === 0}
            />
            {allImages.length > 1 && (
              <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex gap-2 bg-black/60 backdrop-blur-sm px-3 py-2 rounded-full">
                {allImages.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImage(idx)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      selectedImage === idx
                        ? "bg-white w-6"
                        : "bg-white/50 hover:bg-white/75"
                    }`}
                    aria-label={`View image ${idx + 1}`}
                  />
                ))}
              </div>
            )}
          </div>
        )}

        {/* Description */}
        <div className="space-y-2">
          <ListWrapper>
            {description.map((item, index) => (
              <li
                key={`p${index}list-${index}`}
                dangerouslySetInnerHTML={{ __html: item }}
                className="text-sm leading-relaxed"
              />
            ))}
          </ListWrapper>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, i) => (
            <span
              key={`proTag-${tag}`}
              className="inline-flex items-center px-3 py-1.5 text-xs font-medium rounded-md transition-all duration-200 hover:-translate-y-0.5 hover:shadow-sm cursor-default"
              style={{
                borderWidth: "1.5px",
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Expandable Section */}
        {hasExpandedContent && (
          <>
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors w-full justify-center py-2"
            >
              {isExpanded ? (
                <>
                  <span>Show Less</span>
                  <FiChevronUp className="w-4 h-4" />
                </>
              ) : (
                <>
                  <span>Show More Details</span>
                  <FiChevronDown className="w-4 h-4" />
                </>
              )}
            </button>

            {isExpanded && (
              <div className="space-y-4 pt-4 animate-in fade-in slide-in-from-top-2 duration-300">
                {/* Tech Stack */}
                {techStack && techStack.length > 0 && (
                  <div>
                    <h4 className="text-sm font-semibold mb-3 flex items-center gap-2 text-gray-900 dark:text-gray-100">
                      <span className="w-1 h-4 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full" />
                      Tech Stack
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {techStack.map((tech, idx) => (
                        <span
                          key={idx}
                          className="text-xs px-3 py-1.5 rounded-md bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Features */}
                {features && features.length > 0 && (
                  <div>
                    <h4 className="text-sm font-semibold mb-3 flex items-center gap-2 text-gray-900 dark:text-gray-100">
                      <span className="w-1 h-4 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full" />
                      Key Features
                    </h4>
                    <ListWrapper>
                      {features.map((feature, idx) => (
                        <li
                          key={idx}
                          className="text-sm text-gray-700 dark:text-gray-300"
                        >
                          {feature}
                        </li>
                      ))}
                    </ListWrapper>
                  </div>
                )}

                {/* Image Gallery/Screenshots */}
                {allImages.length > 1 && (
                  <div>
                    <h4 className="text-sm font-semibold mb-3 flex items-center gap-2 text-gray-900 dark:text-gray-100">
                      <span className="w-1 h-4 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full" />
                      {type === "Mobile" ? "Screenshots" : "Gallery"}
                    </h4>
                    <div
                      className={`grid gap-3 ${
                        type === "Mobile"
                          ? "grid-cols-2 sm:grid-cols-3 md:grid-cols-4"
                          : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
                      }`}
                    >
                      {allImages.map((img, idx) => (
                        <button
                          key={idx}
                          onClick={() => {
                            setSelectedImage(idx);
                            window.scrollTo({ top: 0, behavior: "smooth" });
                          }}
                          className={`relative rounded-lg overflow-hidden border-2 transition-all hover:scale-105 hover:shadow-lg ${
                            selectedImage === idx
                              ? "border-blue-500 dark:border-blue-400 shadow-md"
                              : "border-gray-200 dark:border-gray-700"
                          }`}
                        >
                          <Image
                            src={img}
                            alt={`${title} - Image ${idx + 1}`}
                            width={type === "Mobile" ? 200 : 400}
                            height={type === "Mobile" ? 400 : 300}
                            className={`w-full h-auto object-cover ${
                              type === "Mobile"
                                ? "aspect-[9/16] object-contain bg-gray-100 dark:bg-gray-800"
                                : "aspect-video"
                            }`}
                          />
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}
          </>
        )}
      </div>
    </DivWBorderWrapper>
  );
};

export default ProjectListingItem;
