import React, {useState} from 'react';
import questions from "./questions";
import SingleQuestion from "./SingleQuestion";

// console.log(questions);


const Qa = () => {
	const [data, setData] = useState(questions);
	return (
		<div className="h-full w-full  pt-8 pb-12 md:pt-20 md:pb-12">
			<h1 className='px-4 pl-6  lg:pl-2 text-3xl font-bold'>FAQ</h1>
			{data.map((item)=>{
				return <SingleQuestion question={item.question} answer={item.answer} key={item.id} id={item.id}/>
			})}
		</div>
	);
};

export default Qa;
