import clsx from "clsx";

export const DivWBorderWrapper: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className }) => {
  return (
    <div className={clsx("border-b-2 border-black pb-8 px-4", className)}>
      {children}
    </div>
  );
};
