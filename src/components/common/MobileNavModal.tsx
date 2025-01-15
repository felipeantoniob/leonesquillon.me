import hamburgerIconSvg from "~/assets/svgs/hamburger-icon.svg";
import leonLogoWhiteSvg from "~/assets/svgs/leon-logo-white.svg";
import leonLogoSvg from "~/assets/svgs/leon-logo.svg";
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

interface MobileNavModalProps {
  title: string;
}

const MobileNavModal = ({ title }: MobileNavModalProps) => {
  const isHomePage = !title.includes("WORK") && !title.includes("CONTACT");
  const isWorkPage = title.includes("WORK");
  const isContactPage = title.includes("CONTACT");

  return (
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

      <DialogContent className="min-w-screen max-w-screen h-full rounded-none border-0 bg-background sm:rounded-none">
        <DialogHeader>
          <DialogTitle className="sr-only">Navigation Modal</DialogTitle>
          <DialogDescription className="sr-only">
            A full-screen menu allowing you to navigate to different sections of
            the site
          </DialogDescription>
        </DialogHeader>
        <div className="flex h-full flex-1 flex-col items-center justify-center gap-8 font-sans text-xl font-bold text-muted-foreground">
          <a
            aria-label="Navigate to the Home page"
            href={isHomePage ? undefined : "/"}
            className={cn(
              "flex flex-row items-center gap-3",
              isHomePage && "text-foreground",
            )}
          >
            <img
              src={isHomePage ? leonLogoWhiteSvg.src : leonLogoSvg.src}
              alt="logo"
              width="24"
              height="24"
              className="max-w-fit py-1"
            />
            LEON ESQUILLON
          </a>
          <a
            aria-label="Navigate to the Work page"
            href={isWorkPage ? undefined : "/work"}
            className={cn(isWorkPage && "text-foreground")}
          >
            WORK
          </a>

          <a
            aria-label="Navigate to the Contact page"
            href={isContactPage ? undefined : "/contact"}
            className={cn(isContactPage && "text-foreground")}
          >
            CONTACT
          </a>
        </div>

        <DialogFooter className="mx-auto mb-4 self-end font-sans text-xs font-medium text-muted-foreground">
          © LEON ESQUILLON
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default MobileNavModal;
