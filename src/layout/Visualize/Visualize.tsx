import { useSelector } from "react-redux";
import { RootState } from "../../store";

export default function Visualize() {

   const boxState = useSelector((state: RootState) => state.boxReducer);
  return (
    <div className="flex flex-col p-5 ml-10 lg:ml-28">
      <div 
      className="w-[250px] h-[250px] bg-white rounded-xl mb-20 lg:mb-40"
      style={{
        borderRadius:`${boxState[0].value}px`,
        height:`${boxState[1].value}px`,
        width:`${boxState[2].value}px`,
      }}
      >

      </div>
    </div>
  )
}