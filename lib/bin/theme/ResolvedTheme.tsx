type Props = {
  children: React.ReactNode;
};

function ResolvedTheme({ children }: Props) {
  return (
    <div className="h-screen bg-gray-300 text-black dark:bg-gradient-to-l from-[#191a47] via-[#060a33] to-[#04082b] dark:text-white">
      {children}
    </div>
  );
}

export default ResolvedTheme;
