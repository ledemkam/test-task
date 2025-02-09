import Footer from "./components/Footer";
import Header from "./components/Header";
import LeftContainer from "./layout/LeftContainer";
import Visualize from "./layout/Visualize/Visualize";

export default function App() {

  
  return (
    <div className="min-h-screen flex flex-col">
    <Header />
    <main className="flex flex-wrap justify-center items-center flex-grow bg-gray-100 px-10 md:flex-nowrap">
      <Visualize />
      <LeftContainer />
    </main>
    <Footer />
  </div>
  )
}

