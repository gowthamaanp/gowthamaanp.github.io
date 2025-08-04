export const ParagraphWrapper: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => (
  <div className="space-y-1 text-justify font-normal">{children}</div>
);
