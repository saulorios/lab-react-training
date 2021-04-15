import Rating from './Rating';

function DriverCard(props) {
  return (
    <div className="driver-card">
      <img className="driver-image" src={props.img} />
      <div className="driver-info">
        <h1 className="driver-name">{props.name}</h1>
        <Rating>{props.rating}</Rating>
        <h3 className="car-info">
          {props.car.model} - {props.car.licensePlate}
        </h3>
      </div>
    </div>
  );
}

export default DriverCard;