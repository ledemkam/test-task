import { useSelector } from "react-redux";
import { RootState } from "../../store";
import BoxRange from "./BoxRange";

export default function BoxPanel() {
   const boxState = useSelector((state: RootState) => state.boxReducer);

   

  
  return (
    <div className="bg-gray-50 w-full px-6 py-4 border-b border-gray-300">
      <p className="font-bold text-lg my-2">Box properties</p>
      {boxState?.map((input) => (
        <BoxRange key={input.id} inputData={input} />
      ))}
    </div>
  )
}
