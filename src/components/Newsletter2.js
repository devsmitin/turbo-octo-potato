const Newsletter = () => {
  return (
    <div className="py-20 bg-indigo-600 px-2">
      <div className="mx-auto md:max-w-xl">
        <h2 className="text-2xl md:text-3xl font-bold text-white text-center md:text-left">
          Want product news and updates?
        </h2>
        <p className="text-white mt-2 text-opacity-50">
          Sign up for our newsletter to stay up to date.
        </p>
        <div className="md:flex mt-6">
          <div className="w-full">
            <div className="relative">
              <input
                type="text"
                className="bg-white h-14 w-full px-4 pr-20 rounded-md focus:outline-none hover:cursor-pointer"
                name=""
              />
              <button className="h-10 rounded bg-black md:absolute mt-6 md:mt-0 md:top-2 md:right-2 text-sm px-3 text-white hover:bg-gray-800 ">
                Subscribe Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
