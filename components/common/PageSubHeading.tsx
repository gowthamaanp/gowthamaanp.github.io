export const PageSubHeading: React.FC<{
  description: string;
}> = ({ description }) => (
  <p
    className="text-gray-600 dark:text-gray-400 text-base sm:text-lg md:text-[21px] font-medium font-poppins"
    style={{
      lineHeight: "normal",
    }}
  >
    {description}
  </p>
);
