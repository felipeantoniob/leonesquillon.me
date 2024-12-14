import BioImage from "~/assets/bio.png";

const BioSection = () => {
  return (
    <div className="flex max-w-screen-lg flex-col gap-10 px-10 pt-16">
      <img src={BioImage.src} className="aspect-[720/479] w-full" />
      <div className="font-sans font-medium text-white">
        <p>I am Leon, a product designer based in Manila.</p>
        <br />
        <p>
          In my most recent role, I designed and maintained design system files
          for Toki, focusing on crafting user-centered solutions that align with
          business goals. My career has primarily centered on designing for
          retail and e-commerce companies, where I’ve tackled complex problems
          and created innovative products. Some of my notable projects include
          Spotify Replay, a platform for visualizing and tracking music
          listening activity, and Onthago, a mobile app for food pickups and
          deliveries designed for university students.
        </p>
        <br />
        <p>
          Before transitioning fully into design, I developed strong
          customer-facing skills as a retail store manager, working directly
          with clients and corporate teams. This experience taught me the value
          of empathy and problem-solving, ultimately inspiring me to pursue a
          career in UI and UX design to impact user experiences on a broader
          scale.
        </p>
        <br />
        <p>
          Outside of work, I’m a music nerd who enjoys producing tracks in my
          free time. Whether creating soundscapes or designing user experiences,
          I’m always exploring ways to connect creativity and functionality.
        </p>
      </div>
    </div>
  );
};

export default BioSection;
