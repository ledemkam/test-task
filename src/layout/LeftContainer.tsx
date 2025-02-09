import BoxMaterial from "./BoxPanel/BoxMaterial"
import BoxPanel from "./BoxPanel/BoxPanel"

export default function LeftContainer() {


  return (
    <div className=" border-gray-300 bg-gray-50">
       <BoxPanel />
       <BoxMaterial />
    </div>
  )
}