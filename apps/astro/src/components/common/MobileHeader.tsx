import hamburgerIconSvg from "~/assets/hamburger-icon.svg";
import leonLogoWhiteSvg from "~/assets/leon-logo-white.svg";
import leonLogoSvg from "~/assets/leon-logo.svg";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTrigger,
} from "~/components/ui/dialog";
import { cn } from "~/lib/utils";

interface MobileHeaderProps {
  title: string;
}

const MobileHeader = ({ title }: MobileHeaderProps) => {
  return (
    <header className="flex w-full flex-row justify-between px-4 py-4 lg:hidden">
      <div className="flex flex-row items-center gap-4">
        <img
          src={leonLogoWhiteSvg.src}
          alt="logo"
          width="24"
          height="24"
          className="max-w-fit py-1"
        />
        <p className="whitespace-nowrap font-sans text-xl font-bold text-white">
          {title}
        </p>
      </div>
      <Dialog>
        <DialogTrigger asChild>
          <img
            src={hamburgerIconSvg.src}
            alt="hamburger-icon"
            width="20"
            height="20"
            className="max-w-fit"
          />
        </DialogTrigger>

        <DialogContent className="min-w-screen max-w-screen max-h-screen min-h-screen rounded-none border-0 bg-[#0F0F0F] sm:rounded-none">
          <DialogHeader className="items-end self-start pt-2">
            <DialogClose>
              <img
                src={hamburgerIconSvg.src}
                alt="hamburger-icon"
                width="20"
                height="20"
                className="max-w-fit"
              />
            </DialogClose>
          </DialogHeader>
          <div className="flex h-full flex-1 flex-col items-center justify-center gap-8 font-sans text-xl font-bold text-white/10">
            <a
              href={
                title.includes("WORK") || title.includes("CONTACT")
                  ? "/"
                  : undefined
              }
              className={cn(
                "flex flex-row items-center gap-3",
                title.includes("WORK") || title.includes("CONTACT")
                  ? ""
                  : "text-white",
              )}
            >
              {title.includes("WORK") || title.includes("CONTACT") ? (
                <img
                  src={leonLogoSvg.src}
                  alt="logo"
                  width="24"
                  height="24"
                  className="max-w-fit py-1"
                />
              ) : (
                <img
                  src={leonLogoWhiteSvg.src}
                  alt="logo"
                  width="24"
                  height="24"
                  className="max-w-fit py-1"
                />
              )}
              LEON ESQUILLON
            </a>
            <a
              href={title.includes("WORK") ? undefined : "/work"}
              className={cn(title.includes("WORK") && "text-white")}
            >
              WORK
            </a>

            <a
              href={title.includes("CONTACT") ? undefined : "/contact"}
              className={cn(title.includes("CONTACT") && "text-white")}
            >
              CONTACT
            </a>
          </div>

          <DialogFooter className="mx-auto mb-4 self-end font-sans text-xs font-medium text-[#888]">
            © LEON ESQUILLON
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </header>
  );
};

export default MobileHeader;
