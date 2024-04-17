const Places = (place) => {
  return (
    <div className="flex gap-[1.25rem] px-6">
        <img src={place.imageUrl} alt={`an image of ${place.imageUrl}`} className="w-[7.875rem] h-[10.5rem]"/>
      <div className="flex flex-col justify-center">

        <div className="flex gap-1">
          <img src="../../public/assets/Fill 219.png" alt="" className="w-[12px] h-[15.55px] mt-1"/>
          <p className="text-regular tracking-wider ml-2 mr-5">{place.location} </p>
          <a href={place.googleMapsUrl} className="text-gray underline">View on Google Maps</a>
        </div>
      
      <div>
      <h1 className="font-bold text-[1.5625rem] mb-3">{place.title}</h1>
      <p>
        <span className="font-bold">
          {place.startDate} - {place.endDate}
        </span>
      </p>
      <p className="text-xs mt-2">{place.description}</p>
      </div>
      </div>
    </div>
  );
};

export default Places;
