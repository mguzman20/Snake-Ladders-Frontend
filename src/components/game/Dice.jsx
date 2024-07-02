const RouteDice = ({ number }) => {
    let route;
  
    switch (number) {
      case 1:
        route = "/imgs/dice/dice_1.png";
        break;
      case 2:
        route = "/imgs/dice/dice_2.png";
        break;
      case 3:
        route = "/imgs/dice/dice_3.png";;
        break;
      case 4:
        route = "/imgs/dice/dice_4.png";
        break;
      case 5:
        route = "/imgs/dice/dice_5.png";
        break;
      case 6:
        route = "/imgs/dice/dice_6.png";
        break;
      default:
        route = "/imgs/dice/dice_1.png";
        break;
    }
  
    return (
      <div>
        <img src={route} alt={number} />
      </div>
    );
  };
  
  export default function Dice({number}) {
    return (
          <RouteDice number={number} />
    );
  }