export const Tag: React.FC<{
  label: string;
  tagProps?: any;
}> = ({ label, tagProps }) => (
  <span
    className="inline-flex items-center px-3 py-1.5 text-xs font-medium text-gray-700 dark:text-gray-200 bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700/70 hover:border-gray-300 dark:hover:border-gray-600 hover:shadow-sm hover:-translate-y-0.5 transition-all duration-200 cursor-default"
    aria-label={`tag-${label}`}
    {...tagProps}
  >
    {label}
  </span>
);
