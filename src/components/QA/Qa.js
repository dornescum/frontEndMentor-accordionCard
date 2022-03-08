import React, {useState} from 'react';
import questions from "./questions";
import SingleQuestion from "./SingleQuestion";

console.log(questions);


const Qa = () => {
	const [data, setData] = useState(questions);
	return (
		// flex flex-col items-start justify-center
		<div className="h-full w-full pt-20">
			<h1 className='px-4 lg:px-0 text-3xl font-bold'>FAQ</h1>
			{data.map((item)=>{
				return <SingleQuestion question={item.question} answer={item.answer} key={item.id} id={item.id}/>
			})}
		</div>
	);
};

export default Qa;
