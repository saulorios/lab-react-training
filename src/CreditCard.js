import visaLogo from './img/visa.png';
import mastercardLogo from './img/master-card.svg';

function CreditCard(props) {
  let style = {
    backgroundColor: `${props.bgColor}`,
    color: `${props.color}`,
  };

  function replaceCardNumbers(number){
    let count = number.length;
    let n = [];
    for (let i = 0; i < count; i++) {
        if(i < 12){
            n[i] = number[i].replace(/^\d+$/, "*");
        }
        else{
            n[i] = number[i];
        }
    }
    
    let totalNumbers = "";
    for (let i = 0; i < count; i++) {
        totalNumbers += n[i];
    }
    return totalNumbers;
}
let num = replaceCardNumbers(props.number).match(/.{1,4}/g)

  return (
    
      <div className="credit-card" style={style}>
        <div className="logo">
          <img
            className="logo-image"
            src={props.type === 'Visa' ? visaLogo : mastercardLogo}
          />
        </div>
        <div className="number">{num[0]} {num[1]} {num[2]} {num[3]}</div>
        <div className="info">
          Expires: {props.expirationMonth}/
          {props.expirationYear.toString().slice(2, 4)} {props.bank}
          <br />
          {props.owner}
        </div>
      </div>

  );
}

export default CreditCard;
