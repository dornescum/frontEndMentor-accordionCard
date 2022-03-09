import Animations from "./components/Animation/Animations";
import Qa from "./components/QA/Qa";
import Box from "./components/Animation/Box";
import {useResultContext} from "./context/ActiveContextProvider";
import MobileWoman from "./components/Animation/MobileWoman";
import MobilePattern from "./components/Animation/MobilePattern";

function App() {
	const {showInfo, toggleBox} = useResultContext();


	return (
		<main className="min-h-screen flex items-center justify-center bg-gradient-to-b from-violet to-myBlue-200
    font-kumbh text-sm z-10">
			<div onClick={toggleBox} data-testid='box'
				 className={`${showInfo ? "absolute lg:-left-[4rem] lg:top-[24rem] xl:top-[31rem] xl:-left-4 2xl:top-[29rem]  2xl:left-44 z-10 duration-300 ease-in-out z-10" :
					 "absolute lg:-left-[2rem] lg:top-[24rem] xl:top-[31rem] xl:-left-8 2xl:top-[29rem]  2xl:left-48 z-10 duration-300 ease-in-out"}`}>
				<Box />
			</div>
			<MobileWoman />
			<MobilePattern />

			<section className="bg-white mx-4 md:mx-6 md:mx-2  lg:mx-4 w-full h-full lg:w-[1280px] lg:h-[640px] drop-shadow-2xl hover:drop-shadow-lg
         duration-300 ease-in-out rounded-2xl flex flex-col lg:flex-row items-center justify-center overflow-hidden
         mb-4 mt-28 md:mb-0 md:mt-0">
				<Animations/>
				<Qa/>
			</section>
		</main>
	);
}

export default App;
