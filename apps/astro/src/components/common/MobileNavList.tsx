const sections = ["INTRODUCTION", "EXPERIENCE", "BIO"];

const MobileNavList = () => {
  return (
    <div className="flex flex-col gap-2 border-t-[1px] border-[#444] p-4 lg:hidden">
      {sections.map((section) => (
        <p
          key={section}
          className="text-md font-sans font-semibold text-[#444]"
        >
          {section}
        </p>
      ))}
    </div>
  );
};

export default MobileNavList;
