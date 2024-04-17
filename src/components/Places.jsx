import MountFujiImage from '../components/images/MountFujiImage';
import SydneyOperaHouseImage from '../components/images/SydneyOperaHouseImage';
import GeirangerjordImage from '../components/images/GeirangerjordImage';
import LocationPointer from '../../public/assets/Fill 219.png'


const Places = (place) => {

    let ImageComponent;

  // Determine which image component to use based on place title
  switch (place.title) {
    case 'Mount Fuji':
      ImageComponent = MountFujiImage;
      break;
    case 'Sydney Opera House':
      ImageComponent = SydneyOperaHouseImage;
      break;
    case 'Geirangerjord':
      ImageComponent = GeirangerjordImage;
      break;
    default:
      ImageComponent = null;
      break;
  }
  return (
    <div className="flex gap-[1.25rem] px-6">
         <div >
        {ImageComponent && <ImageComponent />}
      </div>
      <div className="flex flex-col justify-center">

        <div className="flex gap-1">
          <img src={LocationPointer} alt="" className="w-[12px] h-[15.55px] mt-1"/>
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
