function Overview({ children }) {
  return (
    <>
      <div className="flex flex-col items-center justify-center bg-gradient-to-br from-tamarillo/20 to-cello/50 h-56">
        <div className="flex flex-col lg:flex-row items-center lg:justify-center p-8 md:p-12 max-w-screen-xl">
          <div className="text-center lg:text-left lg:mr-8 mb-8 lg:mb-0">
            <p className="text-lg md:text-xl text-gray-900">{children}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Overview;
