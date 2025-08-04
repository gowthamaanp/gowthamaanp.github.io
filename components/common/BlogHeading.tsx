import getFormattedDate from "@/utils/utils";

export const BlogHeading: React.FC<{
  heading: string;
  fontColor: string;
  date: string;
  read: string;
}> = ({ heading, fontColor, date, read }) => {
  const formattedDate = getFormattedDate(date);
  return (
    <div>
      <p
        className="text-2xl leading-9 font-semibold font-poppins"
        style={{
          color: fontColor,
        }}
      >
        {heading}
      </p>
      <p className="text-base mt-4">
        {formattedDate} - {read}
      </p>
    </div>
  );
};
