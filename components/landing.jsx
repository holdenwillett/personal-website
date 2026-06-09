import { motion } from "framer-motion"

export default function Landing (props) {
    return (
        <div id={props.id} className="bg-navy-blue text-white relative min-h-screen w-full items-center flex flex-col justify-center">
            <div className="pb-36 sm:mt-28 font-mono flex flex-col sm:flex-row">
                <motion.img 
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                        duration: 0.8,
                        delay: 0.125,
                        ease: [0, 0.71, 0.2, 1.01]
                        }}
                        src="/hand.png" className="object-contain h-32 max-w-sm rounded-lg pr-32 pb-5 sm:mr-0 sm:pb-0 sm:h-20 sm:pr-5"></motion.img>
                <div className="flex flex-col">
                    <motion.h2
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                        duration: 0.8,
                        delay: 0.25,
                        ease: [0, 0.71, 0.2, 1.01]
                        }}
                        className="text-l sm:text-xl">Hi! My <span className="font-bold">name</span> is</motion.h2>
                    <motion.h1 
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                        duration: 0.8,
                        delay: 0.5,
                        ease: [0, 0.71, 0.2, 1.01]
                        }}
                        className="typewriter reveal text-2xl font-bold sm:text-5xl">Holden Willett</motion.h1>
                    <motion.nav 
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                        duration: 0.8,
                        delay: 1.75,
                        ease: [0, 0.71, 0.2, 1.01]
                        }}
                        className="pt-2 flex z-10 flex-row space-x-5">
                        <a href="https://www.linkedin.com/in/holdenwillett" target="_blank" rel="noopener noreferrer" className="transition ease-in-out delay-150 hover:scale-110 duration-300">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                <path fill="#f3f4f5" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                            </svg>
                        </a>
                        <a href="https://github.com/holdenwillett" target="_blank" rel="noopener noreferrer" className="transition ease-in-out delay-150 hover:scale-110 duration-300">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                <path fill="#f3f4f5" d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                            </svg>
                        </a>
                    </motion.nav> 
                </div>
            </div>   
            <motion.svg 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                duration: 0.4,
                delay: 2,
                }}
                xmlns="http://www.w3.org/2000/svg" className="sm:mt-8 h-8 w-8" viewBox="0 0 32 32" aria-hidden="true">
                <path fill="#f3f4f5" d="M16.003 18.626l7.081-7.081L25 13.46l-8.997 8.998-9.003-9 1.917-1.916z"/>
            </motion.svg>
        </div>
      )
    }