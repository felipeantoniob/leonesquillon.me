import useWindowDimensions from "~/hooks/useWindowDimensions";

const Frame = () => {
  const { width, height } = useWindowDimensions();

  return (
    <>
      <div className="pointer-events-none z-50 absolute hidden h-screen w-screen overflow-hidden border-[16px] border-[#A3BDED] lg:block" />
      <div
        className={`pointer-events-none z-50 absolute inset-2 hidden overflow-hidden lg:block h-[${height - 8}px] w-[${width - 8}px] rounded-md border-8 border-[#0F0F0F]`}
      />
    </>
  );
};

export default Frame;
