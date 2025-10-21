export const PageName: React.FC<{
  label: string;
}> = ({ label }) => (
  <p
    style={{ lineHeight: "normal" }}
    className="text-foreground dark:text-foreground text-xl sm:text-2xl md:text-[32px] font-semibold "
  >
    {label}
  </p>
);
