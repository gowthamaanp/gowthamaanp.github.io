export const SectionHeading: React.FC<{
  heading: string;
  fontColor?: string;
}> = ({ heading }) => {
  return (
    <p className="text-lg font-medium underline underline-offset-4 font-poppins text-foreground dark:text-foreground">
      {heading}
    </p>
  );
};
