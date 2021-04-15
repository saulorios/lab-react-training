const greetings = {
    de: 'Hallo',
    en: 'Hello',
    es: 'Hola',
    fr: 'Bonjour',
  };
  
  function Greetings(props) {
    let greeting;
    switch (props.lang) {
      case 'de':
        greeting = greetings.de;
        break;
      case 'en':
        greeting = greetings.en;
        break;
      case 'es':
        greeting = greetings.es;
        break;
      case 'fr':
        greeting = greetings.fr;
        break;
    }
  
    return (
      <div class="box">
        {greeting} {props.children}
      </div>
    );
  }
  
  export default Greetings;