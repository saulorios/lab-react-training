function BoxColor(props) {
    const style = {
      backgroundColor: `rgb(${props.r}, ${props.g}, ${props.b})`,      
    };

    function rgbToHex(r, g, b) {
      return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
    }
    
    let hex = rgbToHex(128, 255, 0)
  
    return (
      <div className="box box-color t-a" style={style}>
        rgb({props.r},{props.g},{props.b}) <br />{hex}
      </div>
    );
  }
  
  export default BoxColor;
  