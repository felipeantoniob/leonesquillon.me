import RailContainer from "~/components/common/RailContainer";
import RailNav from "~/components/common/RailNav";
import { cn } from "~/lib/utils";

const SECTION = ["Introduction", "Experience", "Bio"] as const;

interface DesktopNavListProps {
  selectedSectionIndex: number;
  scrollToSection: (index: number) => void;
}

const DesktopNavList = ({
  selectedSectionIndex,
  scrollToSection,
}: DesktopNavListProps) => {
  return (
    <RailContainer disableGradient>
      <RailNav href="/" isActive className="hidden flex-row gap-4 lg:flex">
        {/* TODO: Refactor inline svg  */}
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          className="text-foreground"
        >
          <path
            d="M14.0723 18.6041C12.1632 17.8735 10.1996 17.7611 8.39965 18.2669C7.14513 18.6042 5.94515 19.2786 4.85426 20.1217L4.09062 20.7962L3.87245 21.021L4.36335 21.4707C4.41789 21.4707 4.4179 21.5269 4.47244 21.5831C4.58153 21.6955 4.69063 21.7517 4.85426 21.8641L5.18151 22.0889L5.50878 21.8079C5.56333 21.7517 5.67242 21.6393 5.78151 21.5831C6.76331 20.74 7.85419 20.1779 8.99963 19.8969C10.4723 19.5035 12.0541 19.5597 13.6359 20.1779C14.945 20.6838 17.6177 21.3021 20.8358 19.8969L20.9449 19.8407L21.1085 19.6721C21.1085 19.6159 21.1631 19.6159 21.2176 19.5597C21.4903 19.2224 21.7631 18.8852 21.9812 18.4917L23.0721 16.7493L21.3267 17.7611C18.7631 19.2224 16.4177 19.5034 14.0723 18.6041Z"
            fill="currentColor"
          />
          <path
            d="M6.59989 12.5341C8.07259 12.1406 9.65438 12.1968 11.2362 12.8151C12.9816 13.4896 17.4543 14.4451 22.4723 9.77995L23.5632 8.65583L23.4541 8.37479C23.3996 8.14997 23.2905 7.86894 23.1814 7.58791L22.9087 6.80101L22.3633 7.36307C22.3087 7.47548 22.1996 7.53169 22.0905 7.6441C19.6906 10.1734 15.9815 12.7589 11.7271 11.1851C9.81801 10.4544 7.85441 10.342 6.05444 10.8479C4.30902 11.3537 2.78177 12.3092 1.36361 13.6582V13.602L0.545446 14.5013C0.545446 14.5575 0.490911 14.5575 0.436367 14.6137L0.272723 14.7823L0.327271 15.0071C0.381815 15.2882 0.490901 15.5692 0.545446 15.8502L0.872716 16.7495L1.41816 16.0188C1.47271 15.9064 1.58179 15.8502 1.63634 15.7378C2.78177 14.6699 4.36357 13.1523 6.59989 12.5341Z"
            fill="currentColor"
          />
          <path
            d="M1.30908 11.5222C2.56361 10.1733 3.98175 9.33016 5.509 8.88051C6.9817 8.48707 8.56349 8.54327 10.1453 9.16154C15.0543 11.0163 19.3088 7.98121 21.1633 6.35123L21.8724 5.62055L22.1451 5.39572L21.9269 5.05849C21.7633 4.88987 21.6542 4.66505 21.4906 4.44022L21.1633 3.99056L20.7815 4.38401C20.7269 4.44022 20.6178 4.55263 20.5633 4.60883C18.2724 6.85708 14.727 9.16155 10.6907 7.58777C8.78167 6.85709 6.81807 6.74468 5.0181 7.25053C3.87267 7.58777 2.78177 8.14983 1.69088 8.88051L0.545445 9.83602C0.436356 9.94843 0.381812 10.0046 0.272723 10.1171L0.163644 10.2295V10.3981C0.109099 10.7915 0.109092 11.185 0.0545479 11.5222L0 12.9274L0.927263 11.9156C1.03635 11.8032 1.14545 11.6346 1.30908 11.5222Z"
            fill="currentColor"
          />
          <path
            d="M15.6545 22.4262C15.4909 22.37 15.3818 22.3138 15.2181 22.2576C13.3091 21.5269 11.3455 21.4145 9.54549 21.9204C9.16368 22.0328 8.78188 22.1452 8.40007 22.3138L7.09099 22.9321L6.76373 23.1007L7.85462 23.4942C8.18189 23.6066 8.50915 23.719 8.83642 23.8314L9.00005 23.8876L9.16369 23.8314C9.32732 23.7752 9.49095 23.6628 9.65459 23.6628C9.76368 23.6628 9.87277 23.6066 9.98186 23.5504C11.2909 23.2131 12.7091 23.2131 14.2363 23.719C14.4 23.7752 14.5091 23.8314 14.6727 23.8876L14.9454 24L15.109 23.9438C15.4909 23.8314 15.9272 23.719 16.2545 23.5504L17.7817 22.9883L16.1999 22.5948C16.0363 22.5386 15.8181 22.4824 15.6545 22.4262Z"
            fill="currentColor"
          />
          <path
            d="M24 10.7916L23.1818 11.6347C23.0727 11.7471 22.9637 11.8595 22.8546 11.9719C20.6183 14.1639 17.0183 16.5246 12.982 14.9508C11.073 14.2201 9.10936 14.1077 7.30939 14.6136C5.61851 15.1195 4.09125 16.0188 2.72764 17.3677L2.01857 18.1546L1.8004 18.4356L2.01857 18.7729C2.1822 18.9977 2.2913 19.1663 2.40039 19.3911L2.72764 19.897L3.10946 19.3911C3.164 19.3349 3.27309 19.2225 3.32763 19.1663C4.6367 17.7049 6.05486 16.8056 7.6912 16.356C9.1639 15.9625 10.7457 16.0187 12.3275 16.637C13.6911 17.1429 15.1093 17.3115 16.5274 17.1429C19.0365 16.8619 21.5455 15.4005 23.4 13.7705C23.5091 13.6581 23.6182 13.6019 23.7273 13.4895L23.8909 13.3208V13.1522C23.8909 12.815 23.9455 12.4216 23.9455 12.0843L24 10.7916Z"
            fill="currentColor"
          />
          <path
            d="M3.27224 5.62071C3.59951 5.45209 3.98133 5.33967 4.3086 5.22726C5.7813 4.83382 7.36309 4.89002 8.94488 5.50829C9.98123 5.90173 11.0176 6.07035 12.163 6.07035C14.4539 6.07035 16.7447 5.22726 18.872 3.59728L19.9629 2.69798L19.472 2.30453C19.3083 2.13591 19.0902 1.9673 18.872 1.85488L18.5447 1.63006L18.272 1.85488C18.1629 1.91109 18.1083 2.0235 17.9993 2.07971C15.1084 4.32796 12.2176 4.94623 9.49033 3.87831C7.52672 3.14763 5.56311 2.97901 3.59951 3.59728C3.43588 3.65349 3.27224 3.70969 3.05406 3.76589L2.94498 3.8221L2.78134 3.99071C2.78134 4.04692 2.72681 4.04693 2.67226 4.10313C2.45408 4.44037 2.18135 4.72141 1.96317 5.05865L0.926831 6.68862L2.61771 5.78932C2.89044 5.78932 3.1086 5.67692 3.27224 5.62071Z"
            fill="currentColor"
          />
          <path
            d="M7.74533 1.79859L7.90896 1.8548C8.61803 2.13583 9.70893 2.41686 11.0725 2.41686C12.4907 2.41686 13.8543 2.07962 15.2179 1.51756L16.9088 0.674464L15.7634 0.281031C15.4361 0.168619 15.1088 0.0562062 14.727 0H14.5634L14.3998 0.0561925C14.2361 0.112399 14.0725 0.224825 13.9089 0.281031C12.2725 0.8993 10.6362 1.01171 9.05439 0.562062C8.89076 0.505856 8.72713 0.44964 8.5635 0.393433L8.39987 0.337224L8.23623 0.393433C7.90896 0.505846 7.5817 0.618265 7.25443 0.786884L5.9999 1.34895L7.30898 1.74238C7.41807 1.68617 7.5817 1.74238 7.74533 1.79859Z"
            fill="currentColor"
          />
        </svg>
        LEON ESQUILLON
      </RailNav>
      <div className={cn("mt-10 flex w-full flex-col items-start gap-5")}>
        {SECTION.map((section, index) => {
          return (
            <button
              onClick={() => scrollToSection(index)}
              key={section}
              className="w-full"
            >
              <p
                className={cn(
                  "text-left font-sans text-base font-medium text-muted-foreground transition hover:text-foreground",
                  index === selectedSectionIndex && "text-foreground",
                )}
              >
                {section}
              </p>
            </button>
          );
        })}
      </div>
    </RailContainer>
  );
};

export default DesktopNavList;
