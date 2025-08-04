export const SectionHeading: React.FC<{
  heading: string;
  fontColor: string;
}> = ({ heading, fontColor }) => {
  return (
    <p
      className="text-lg font-medium underline underline-offset-4 font-poppins"
      style={{
        color: fontColor,
      }}
    >
      {heading}
    </p>
  );
};
