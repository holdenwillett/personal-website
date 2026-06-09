export default function About (props) {
  return (
    <div id={props.id} className="bg-sky-white h-auto md:px-24 md:py-12">
    <div className="flex flex-col md:flex-row-reverse">
      <div className="mt-10 mb-5">
        <img src="/pfp.jpg" className="rounded-full scale-75 md:scale-100 shadow-2xl"/>
      </div>
      <div className="text-gray-800 text-center font-mono px-6 md:text-left">
              <h1 className="mb-5 text-4xl">
              About <span className="font-bold">Me</span>
              </h1> 
              <p className="my-5 text-lg lg:pr-24">Hey! I'm Holden Willett, an Electrical Engineering student on the computer track with a Minor in Computer Science at <span className="font-bold">The University of Iowa</span>. I have experience through software development internships and a co-op in electrical and manufacturing engineering, giving me both programming and hands-on technical problem-solving skills. I'm eager to keep building experience in software, embedded systems, and technology-driven engineering.</p>
              <p className="my-5 text-lg lg:pr-24">I'm currently a <span className="font-bold">Product Engineering Intern at John Deere</span> (May 2026–present). Previously, I completed a co-op at <span className="font-bold">Collins Aerospace</span> as a Manufacturing Electrical Engineer (Jan–Aug 2025) and internships at <span className="font-bold">Casey's</span> as a Software Engineer (May–Aug 2024) and <span className="font-bold">Republic Electric</span> as an IT Intern (Jun–Aug 2023).</p>
              <h3 className="mb-2 text-l">Looking to reach me for work, research, or just to chat? I dont mind! Feel free to <a className="underline" href="#contact">contact</a> me!</h3>
              <h3 className="mb-2 italic text-[0.9rem]">What about my resume? <a className="underline" href="#contact">click me!</a></h3>
          </div>
        </div>
      </div>
  )   
}