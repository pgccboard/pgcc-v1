function Banner({ title, subTitle }) {
  return (
    <div className="w-full bg-gradient-to-bl from-cello/50 to-tamarillo/20 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-4xl lg:text-5xl text-cello font-bold mb-6">
            {title}
          </h1>
          <p className="text-lg md:text-xl text-burgundy max-w-3xl">
            {subTitle}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Banner;
