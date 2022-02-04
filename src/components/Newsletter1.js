const Newsletter = () => {
  return (
    <div className="w-full bg-gray-100">
      <div className="container flex flex-col flex-wrap content-center justify-center p-4 py-16 mx-auto">
        <h2 className="text-2xl font-bold leading-none text-center md:text-4xl">
          Get Latest Updates
        </h2>
        <p className="pt-2 pb-8 text-xl text-center">
          Sign up for our newsletter to stay up to date.
        </p>
        <div className="flex flex-row border rounded-lg">
          <input
            type="text"
            placeholder="example@email.com"
            className="w-3/5 p-3 rounded-l-lg sm:w-2/3"
          />
          <button
            type="button"
            className="w-2/5 p-3 font-semibold rounded-r-lg sm:w-1/3 bg-black text-white"
          >
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
