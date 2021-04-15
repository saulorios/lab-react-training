function Random(props) {
    function randomIntFromInterval(min, max) {
      return Math.floor(Math.random() * (max - min + 1) + min);
    }
  
    return (
      <div className="box">
        Random value between {props.min} and {props.max} {'=> '}
        {randomIntFromInterval(props.min, props.max)}
      </div>
    );
  }
  
  export default Random;