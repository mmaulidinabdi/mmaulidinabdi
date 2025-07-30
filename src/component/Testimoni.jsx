
const Testimoni = () => {
    return (
        <div className='mb-20'>
            <div className="mb-20">
                <h2 className="scroll-m-20 text-3xl text-center font-semibold tracking-tight mb-10 text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-emerald-300">
                    What Others Say
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-gray-900/50 p-6 rounded-lg border border-gray-800">
                        <p className="text-gray-300 italic mb-4">"awowo"</p>
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-gray-800"></div>
                            <div>
                                <h4 className="text-white font-medium">Pinto</h4>
                                <p className="text-gray-400 text-sm">Hebat</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Testimoni;