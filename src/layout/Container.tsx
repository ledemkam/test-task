import LeftContainer from "./LeftContainer"
import Visualize from "./Visualize/Visualize"

const Container = () => {
  return (
    <div className="flex">
       <Visualize />
       <LeftContainer />
    </div>
  )
}

export default Container
