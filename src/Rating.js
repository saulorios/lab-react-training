function Rating(props) {
    let stars = Math.round(props.children);
  
    function generateStars() {
      let list = [];
      for (let i = 0; i < stars; i++) {
        list.push('★');
      }
      if (list.length < 5) {
        for (let i = list.length; i < 5; i++) {
          list.push('☆');
        }
      }
      return list;
    }
  
    return <div className="stars">{generateStars()}</div>;
  }
  
  export default Rating;