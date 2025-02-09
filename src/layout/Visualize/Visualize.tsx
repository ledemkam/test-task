import { useSelector } from "react-redux";
import { RootState } from "../../store";
import monitor from "../../assets/monitor.png";

export default function Visualize() {

   const boxState = useSelector((state: RootState) => state.boxReducer);
  return (
    <div className="flex ">
      <img  src={monitor} alt="monitor" 
      className="w-[250px] h-[250px]"
      style={{
        borderRadius:`${boxState[0].value}px`,
        height:`${boxState[1].value}px`,
        width:`${boxState[2].value}px`,
      }}
      />



    </div>
  )
}