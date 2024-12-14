import hamburgerIconSvg from "~/assets/hamburger-icon.svg";
import leonLogoSvg from "~/assets/leon-logo-white.svg";

interface MobileHeaderProps {
  title: string;
}

const MobileHeader = ({ title }: MobileHeaderProps) => {
  return (
    <div className="mt-4 flex w-full flex-row justify-between px-4 py-2 lg:hidden">
      <div className="flex flex-row items-center gap-4">
        <img
          src={leonLogoSvg.src}
          alt="logo"
          width="24"
          height="24"
          className="max-w-fit py-1"
        />
        <p className="whitespace-nowrap font-sans text-xl font-bold text-white">
          {title}
        </p>
      </div>
      <img
        src={hamburgerIconSvg.src}
        alt="hamburger-icon"
        width="20"
        height="20"
        className="max-w-fit"
      />
    </div>
  );
};

export default MobileHeader;
