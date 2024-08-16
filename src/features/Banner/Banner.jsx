function Banner({ title, subTitle, content }) {
  return (
    <>
      <div className="flex flex-col items-center bg-gradient-to-bl from-cello/50 to-tamarillo/20">
        <div className="flex flex-col lg:flex-row items-center lg:justify-center p-8 md:p-12 max-w-screen-xl">
          <div className="text-center lg:text-left lg:mr-8 mb-8 lg:mb-0">
            <h1 className="text-5xl lg:text-4xl text-cello font-bold mb-4 text-center">
              {title}
            </h1>
            <p className="text-lg md:text-xl text-burgundy">{subTitle}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Banner;
