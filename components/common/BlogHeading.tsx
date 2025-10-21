import getFormattedDate from "@/utils/utils";

export const BlogHeading: React.FC<{
  heading: string;
  fontColor?: string;
  date: string;
  read: string;
}> = ({ heading, date, read }) => {
  const formattedDate = getFormattedDate(date);
  return (
    <div>
      <p className="text-2xl leading-9 font-semibold font-poppins text-foreground dark:text-foreground">
        {heading}
      </p>
      <p className="text-base mt-4 text-foreground dark:text-foreground">
        {formattedDate} - {read}
      </p>
    </div>
  );
};
