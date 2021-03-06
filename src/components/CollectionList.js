const CollectionList = (props) => {
  return (
    <div className="mt-6 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-6">
      {props.collections.map((callout) => (
        <div key={callout.name} className="group relative">
          <div className="relative w-full h-80 bg-white rounded-lg overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
            <img
              src={callout.imageSrc}
              alt={callout.imageAlt}
              className="w-full h-full object-center object-cover"
            />
          </div>
          <h3 className="mt-6 text-sm text-gray-500">
            <a href={callout.href}>
              <span className="absolute inset-0" />
              {callout.name}
            </a>
          </h3>
          <p className="text-base font-semibold text-gray-900">
            {callout.description}
          </p>
        </div>
      ))}
    </div>
  );
};

export default CollectionList;
