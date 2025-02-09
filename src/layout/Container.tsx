import LeftContainer from "./LeftContainer"
import Visualize from "./Visualize/Visualize"

const Container = () => {
  return (
    <div className="flex mx-auto gap-2">
       <Visualize />
       <LeftContainer />
    </div>
  )
}

export default Container
