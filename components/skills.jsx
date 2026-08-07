export default function Skills (props) {
    return (
        <div id={props.id} className="bg-hue-gray text-sky-white font-mono h-auto md:px-24 md:py-12">
            <div className="flex flex-col items-center justify-center">
                <h1 data-aos="zoom-out" className="mt-10 md:mt-0 mb-8 text-4xl font-medium">
                    Skills
                </h1>
                <div className="flex flex-col items-center md:items-stretch xl:space-x-5 xl:flex-row">
                    <div className="card w-11/12 md:w-72 bg-mist-black my-3 shadow-xl">
                        <div className="card-body">
                            <h2 className="card-title">
                            📜 Languages
                            </h2>
                            <div className="card-actions justify-start">
                                <div className="badge badge-outline badge-info">Java</div>
                                <div className="badge badge-outline badge-info">C++</div>
                                <div className="badge badge-outline badge-info">SQL</div>
                                <div className="badge badge-outline badge-info">C#</div>
                            </div>
                        </div>
                    </div>
                    <div className="card w-11/12 md:w-72 bg-mist-black my-3 shadow-xl">
                        <div className="card-body">
                            <h2 className="card-title">
                            🔧 Developer Tools
                            </h2>
                            <div className="card-actions justify-start">
                                <div className="badge badge-outline badge-info">MATLAB</div>
                                <div className="badge badge-outline badge-info">Simulink</div>
                                <div className="badge badge-outline badge-info">Git</div>
                                <div className="badge badge-outline badge-info">Jira</div>
                                <div className="badge badge-outline badge-info">Azure DevOps</div>
                                <div className="badge badge-outline badge-info">Visual Studio</div>
                            </div>
                        </div>
                    </div>
                    <div className="card w-11/12 md:w-72 bg-mist-black my-3 shadow-xl">
                        <div className="card-body">
                            <h2 className="card-title">
                            ⚙️ Hardware Tools
                            </h2>
                            <div className="card-actions justify-start">
                                <div className="badge badge-outline badge-info">Multimeter</div>
                                <div className="badge badge-outline badge-info">Oscilloscope</div>
                                <div className="badge badge-outline badge-info">Power Supply</div>
                            </div>
                        </div>
                    </div>
                    <div className="card w-11/12 md:w-72 bg-mist-black my-3 shadow-xl">
                        <div className="card-body">
                            <h2 className="card-title">
                            🖥️ Other
                            </h2>
                            <div className="card-actions justify-start">
                                <div className="badge badge-outline badge-info">Microsoft 365</div>
                                <div className="badge badge-outline badge-info">SAP</div>
                                <div className="badge badge-outline badge-info">PDM</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
      </div>
    )
}