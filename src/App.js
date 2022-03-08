import Animations from "./components/Animation/Animations";
import Qa from "./components/QA/Qa";
import Box from "./components/Animation/Box";

function App() {
  return (
    <main className='min-h-screen flex items-center justify-center bg-gradient-to-b from-violet to-myBlue-200
    font-kumbh text-sm z-10'>
        <Box />
        <section className='bg-white mx-2 lg:mx-0 w-full h-full  lg:w-[1280px] lg:h-[640px] drop-shadow-2xl hover:drop-shadow-lg
         duration-300 ease-in-out rounded-2xl flex flex-col md:flex-row items-center justify-center overflow-hidden'>

            <Animations />
            <Qa />
        </section>
    </main>
  );
}

export default App;
