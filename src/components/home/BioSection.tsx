import bioImage from "~/assets/images/bio.png";

const BioSection = () => {
  return (
    <div className="flex h-full min-h-fit max-w-screen-lg flex-col justify-center gap-4 p-4 lg:gap-10 lg:p-8">
      <img
        src={bioImage.src}
        alt="Picture of Leon Esquillon"
        className="mx-auto w-full max-w-screen-sm object-cover lg:max-w-screen-xl"
      />
      <div className="flex flex-col gap-2 font-sans text-sm font-medium text-foreground">
        <p>
          I'm Leon, a product designer focusing on user-centered design and
          design systems. I've worked on projects like Toki and Onthago,
          specializing in retail and e-commerce.
        </p>
        <p>
          Before design, I managed a retail store, which sparked my passion for
          solving problems and improving user experiences. Now, I bring that
          same mindset to UI/UX design.
        </p>
        <p>
          Outside of work, I enjoy making music, blending creativity and
          functionality in both tracks and designs.
        </p>
      </div>
    </div>
  );
};

export default BioSection;
