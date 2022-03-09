import React, {useState} from 'react';
import arrow from '../../images/icon-arrow-down.svg';
import {useResultContext} from "../../context/ActiveContextProvider";

const SingleQuestion = ({question, answer, id}) => {
	const {toggleBox} = useResultContext();
	const [showQuestion, setShowQuestion] = useState(false);

	function handleQuestion() {
		setShowQuestion(!showQuestion);
		toggleBox();
	}

	return (
		<article id={id} className="px-1 py-2   w-full lg:w-[470px] border-b-[1px] border-b-stone-300"
				 data-testid={id + '-article'}>
			<div className="flex items-center justify-between px-4 lg:pl-0 lg:pr-2 mx-2">
				<p className={`${showQuestion ? "font-bold py-2" : "text-stone-500 py-6"} px-0 hover:text-softOrange 
				cursor-pointer duration-300 ease-out  `} onClick={handleQuestion}>{question}</p>
				<div onClick={handleQuestion} className="flex items-center justify-center">
					{showQuestion ? (
						<div>
							<img src={arrow} alt="arrow down" className="rotate-180 cursor-pointer"/>
						</div>
					) : (
						<div>
							<img src={arrow} alt="arrow up" className="cursor-pointer"/>
						</div>
					)}
				</div>
			</div>
			{showQuestion && <div className="px-4 lg:px-0 pl-2 text-stone-400 ">
				<p className='px-2 mx-2 lg:px-2 lg:mx-0'>
					{answer}
				</p>
			</div>}
		</article>
	);
};

export default SingleQuestion;
