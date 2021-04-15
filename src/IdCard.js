function IdCard(props) {
    return (
      <div className="box">
        <img src={props.picture} className="id-image" alt="profile picture" />
        <div className="user-data">
          <span>
            <strong>First Name:</strong> {props.firstName}
          </span>
          <span>
            <strong>Last Name:</strong> {props.lastName}
          </span>
          <span>
            <strong>Genrer:</strong> {props.gender}
          </span>
          <span>
            <strong>Height:</strong> {props.height}
          </span>
          <span>
            <strong>Birth:</strong> {props.birth}
          </span>
        </div>
      </div>
    );
  }
  
  export default IdCard;