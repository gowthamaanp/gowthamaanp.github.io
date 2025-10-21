export const SubSectionHeading: React.FC<{
  heading?: string;
}> = ({ heading }) => {
  return (
    heading && (
      <p className="text-lg font-medium font-poppins mt-6 mb-3">{heading}</p>
    )
  );
};
