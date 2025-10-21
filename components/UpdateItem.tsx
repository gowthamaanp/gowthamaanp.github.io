import { IUpdate } from "@/interface/updates";
import { LinkWrapper } from "@/components/common";
import getFormattedDate from "@/utils/utils";
import {
  HiNewspaper,
  HiMicrophone,
  HiAcademicCap,
  HiDocumentText,
  HiTrophy,
  HiSparkles,
} from "react-icons/hi2";

interface IUpdateItemProps {
  update: IUpdate;
}

const getTypeIcon = (type: IUpdate["type"]) => {
  switch (type) {
    case "blog":
      return <HiNewspaper className="w-5 h-5" />;
    case "talk":
      return <HiMicrophone className="w-5 h-5" />;
    case "conference":
      return <HiAcademicCap className="w-5 h-5" />;
    case "paper":
      return <HiDocumentText className="w-5 h-5" />;
    case "award":
      return <HiTrophy className="w-5 h-5" />;
    default:
      return <HiSparkles className="w-5 h-5" />;
  }
};

const getTypeColor = (type: IUpdate["type"]) => {
  switch (type) {
    case "blog":
      return "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30 border-blue-200 dark:border-blue-800";
    case "talk":
      return "text-purple-600 dark:text-purple-400 bg-purple-50 dark:bg-purple-900/30 border-purple-200 dark:border-purple-800";
    case "conference":
      return "text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/30 border-green-200 dark:border-green-800";
    case "paper":
      return "text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-900/30 border-amber-200 dark:border-amber-800";
    case "award":
      return "text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-900/30 border-red-200 dark:border-red-800";
    default:
      return "text-gray-600 dark:text-gray-400 bg-gray-50 dark:bg-gray-900/30 border-gray-200 dark:border-gray-800";
  }
};

const getTypeBadgeColor = (type: IUpdate["type"]) => {
  switch (type) {
    case "blog":
      return "bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300";
    case "talk":
      return "bg-purple-100 dark:bg-purple-900/40 text-purple-700 dark:text-purple-300";
    case "conference":
      return "bg-green-100 dark:bg-green-900/40 text-green-700 dark:text-green-300";
    case "paper":
      return "bg-amber-100 dark:bg-amber-900/40 text-amber-700 dark:text-amber-300";
    case "award":
      return "bg-red-100 dark:bg-red-900/40 text-red-700 dark:text-red-300";
    default:
      return "bg-gray-100 dark:bg-gray-900/40 text-gray-700 dark:text-gray-300";
  }
};

const getTypeLabel = (type: IUpdate["type"]) => {
  switch (type) {
    case "blog":
      return "Blog";
    case "talk":
      return "Talk";
    case "conference":
      return "Conference";
    case "paper":
      return "Paper";
    case "award":
      return "Award";
    default:
      return "Update";
  }
};

const getStatusBadgeColor = (status?: IUpdate["status"]) => {
  switch (status) {
    case "spotlight":
      return "bg-gradient-to-r from-yellow-100 to-orange-100 dark:from-yellow-900/40 dark:to-orange-900/40 text-orange-700 dark:text-orange-300 border border-orange-300 dark:border-orange-600";
    case "oral":
      return "bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/40 dark:to-pink-900/40 text-purple-700 dark:text-purple-300 border border-purple-300 dark:border-purple-600";
    case "accepted":
      return "bg-green-100 dark:bg-green-900/40 text-green-700 dark:text-green-300 border border-green-300 dark:border-green-600";
    case "published":
      return "bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 border border-blue-300 dark:border-blue-600";
    case "poster":
      return "bg-cyan-100 dark:bg-cyan-900/40 text-cyan-700 dark:text-cyan-300 border border-cyan-300 dark:border-cyan-600";
    case "preprint":
      return "bg-gray-100 dark:bg-gray-800/40 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600";
    default:
      return "";
  }
};

const getStatusLabel = (status?: IUpdate["status"]) => {
  switch (status) {
    case "spotlight":
      return "🌟 Spotlight";
    case "oral":
      return "🎤 Oral";
    case "accepted":
      return "✓ Accepted";
    case "published":
      return "📄 Published";
    case "poster":
      return "📋 Poster";
    case "preprint":
      return "📝 Preprint";
    default:
      return "";
  }
};

const UpdateItem: React.FC<IUpdateItemProps> = ({ update }) => {
  const { type, title, description, date, link, venue, status } = update;
  const formattedDate = getFormattedDate(date);
  const typeColor = getTypeColor(type);
  const badgeColor = getTypeBadgeColor(type);
  const statusBadgeColor = getStatusBadgeColor(status);
  const statusLabel = getStatusLabel(status);

  const content = (
    <div
      className={`flex gap-4 p-4 rounded-xl border-2 ${typeColor} hover:shadow-lg transition-all duration-300 group ${
        link ? "cursor-pointer" : ""
      }`}
    >
      <div className="flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center bg-white dark:bg-gray-900 shadow-sm">
        <div className={`${typeColor.split(" ")[0]}`}>{getTypeIcon(type)}</div>
      </div>

      <div className="flex-1 min-w-0">
        <div className="flex items-start justify-between gap-3 mb-2">
          <h3
            className={`font-semibold text-base leading-snug text-foreground dark:text-foreground ${
              link
                ? "group-hover:text-blue-600 dark:group-hover:text-blue-400"
                : ""
            }`}
          >
            {title}
          </h3>
        </div>

        <div className="flex flex-wrap items-center gap-2 mb-2">
          <span
            className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium ${badgeColor}`}
          >
            {getTypeLabel(type)}
          </span>
          {status && statusLabel && (
            <span
              className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold ${statusBadgeColor}`}
            >
              {statusLabel}
            </span>
          )}
          <span className="text-sm text-gray-600 dark:text-gray-400">
            {formattedDate}
          </span>
        </div>

        {description && (
          <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed mb-1 text-justify">
            {description}
          </p>
        )}

        {venue && (
          <p className="text-sm text-gray-600 dark:text-gray-400 italic">
            📍 {venue}
          </p>
        )}
      </div>
    </div>
  );

  if (link) {
    return (
      <LinkWrapper
        href={link}
        target={link.startsWith("http") ? "_blank" : "_self"}
        className="block !no-underline hover:!no-underline"
      >
        {content}
      </LinkWrapper>
    );
  }

  return content;
};

export default UpdateItem;
