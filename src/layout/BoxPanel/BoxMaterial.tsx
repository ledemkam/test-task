import { material } from "../../constant"

const BoxMaterial = () => {
  return (
    <div>
        <h1>Material</h1>
        {
          material.map((material) => (
            <div key={material.id} className="w-[300px] h-[50px] border border-gray-300 my-2 flex justify-between items-center px-4">
              {material.unit}
            </div>
          ))
        }
    </div>
  )
}

export default BoxMaterial
