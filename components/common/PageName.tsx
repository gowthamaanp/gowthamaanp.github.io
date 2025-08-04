export const PageName: React.FC<{
  label: string;
}> = ({ label }) => (
  <p
    style={{ lineHeight: "normal" }}
    className="text-[#0a0a0a] text-xl sm:text-2xl md:text-[32px] font-semibold font-poppins"
  >
    {label}
  </p>
);
