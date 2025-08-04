export const SubSectionHeading: React.FC<{
  heading?: string;
  fontColor: string;
}> = ({ heading, fontColor }) => {
  return (
    heading && (
      <p
        className="text-lg font-medium font-poppins mt-6 mb-3"
        style={{
          color: fontColor,
        }}
      >
        {heading}
      </p>
    )
  );
};
