import Places from './Places';
import MountFujiImage from '../components/images/MountFujiImage';
import SydneyOperaHouseImage from '../components/images/SydneyOperaHouseImage';
import GeirangerjordImage from '../components/images/GeirangerjordImage';
import data from '../data';

const Body = () => {
  const places = data.map((item) => {
    let ImageComponent;

    switch (item.title) {
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
      <Places
        key={item.title}
        {...item}
        ImageComponent={ImageComponent} // Pass image component as prop
      />
    );
  });

  return (
    <body className="mt-10">
      <div className="container flex flex-col gap-y-10">
        {places}
      </div>
    </body>
  );
};

export default Body;
