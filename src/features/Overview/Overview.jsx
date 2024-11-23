function Overview({ children, content }) {
  return (
    <div className="w-full bg-gradient-to-br from-tamarillo/20 to-cello/50 py-4">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          <div className="text-center">
            <p className="text-lg md:text-xl text-gray-900">{content}</p>
            {children && children[0] && (
              <div className="mt-6">{children[0]}</div>
            )}
          </div>
          {children && children[1] && <div className="mt-8">{children[1]}</div>}
        </div>
      </div>
    </div>
  );
}

export default Overview;
