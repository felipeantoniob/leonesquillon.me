import hamburgerIconSvg from "~/assets/hamburger-icon.svg";
import leonLogoWhiteSvg from "~/assets/leon-logo-white.svg";
import leonLogoSvg from "~/assets/leon-logo.svg";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
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
        <p className="whitespace-nowrap font-sans text-xl font-bold text-foreground">
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

        <DialogContent className="min-w-screen max-w-screen max-h-screen min-h-screen rounded-none border-0 bg-background sm:rounded-none">
          <DialogHeader>
            <DialogTitle className="sr-only">Navigation Modal</DialogTitle>
            <DialogDescription className="sr-only">
              A full-screen menu allowing you to navigate to different sections
              of the site
            </DialogDescription>
          </DialogHeader>
          <div className="flex h-full flex-1 flex-col items-center justify-center gap-8 font-sans text-xl font-bold text-muted-foreground">
            <a
              aria-label="Navigate to the Home page"
              href={
                title.includes("WORK") || title.includes("CONTACT")
                  ? "/"
                  : undefined
              }
              className={cn(
                "flex flex-row items-center gap-3",
                title.includes("WORK") || title.includes("CONTACT")
                  ? ""
                  : "text-foreground",
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
              aria-label="Navigate to the Work page"
              href={title.includes("WORK") ? undefined : "/work"}
              className={cn(title.includes("WORK") && "text-foreground")}
            >
              WORK
            </a>

            <a
              aria-label="Navigate to the Contact page"
              href={title.includes("CONTACT") ? undefined : "/contact"}
              className={cn(title.includes("CONTACT") && "text-foreground")}
            >
              CONTACT
            </a>
          </div>

          <DialogFooter className="mx-auto mb-4 self-end font-sans text-xs font-medium text-muted-foreground">
            © LEON ESQUILLON
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </header>
  );
};

export default MobileHeader;
