import Age from "./Age";
import Calculatrice from "./Calculatrice";
import GalerieFiltree from "./GalerieFiltree";
import Messagerie from "./Messagerie";


export default () => {
  const showMsg = (msg) => {
    console.log(msg);
  }

  return (
    <div>
      <Age/>
      <br/>
      <br/>
      <Calculatrice/>
      <br/>
      <br/>
      <Messagerie showMsg={showMsg}/>
      <br/>
      <br/>
      <GalerieFiltree/>
    </div>
  );
}