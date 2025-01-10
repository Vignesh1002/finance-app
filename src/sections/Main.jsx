const Main = () => {
    return (
        <main className="bg-stock-pattern bg-cover bg-no-repeat bg-center px-[6rem] md:px-[8rem] below-450:px-[3rem] mt-[8rem]">
            <div className="md:grid grid-cols-2 items-start flex flex-col items-center gap-8">
                <div className="flex flex-col md:items-start items-center">
                    <p className="text-[4rem] md:text-start text-center font-semibold below-450:leading-[5rem]">Your shortcut to find <span className="text-primary">winning stocks</span></p>
                    <p className="bg-[#D6F3E8] w-fit italic text-[1.25rem] mt-6">The secret is… there is no secret!</p>
                    <p className="text-[1.5rem] md:text-start text-center mt-6">Check out our <span className="font-semibold">FREE WEBINAR</span> on how to find winning stocks 👉🏻</p>
                </div>
                <div className="flex h-[100%] items-center">
                    <img className="w-[33rem] h-[18rem] rounded-lg"src="/assets/main.jpg" alt="main"></img>
                </div>
            </div>
            <div className="text-center md:text-start">
                <button className="mt-6 align-start px-6 py-2 text-center rounded-lg text-nowrap bg-[rgb(22,32,85)] bg-opacity-100 text-white font-medium ">Try ValueGlance for free</button>
            </div>
            <p className="mt-6 text-[1.25rem]">Want to find <span className="font-semibold">high-quality</span> stocks with the <span className="font-semibold">push of a button</span>?</p>
            <p className="text-[1.25rem]">Then start compounding with <span className="text-[#233489] text-semibold">Value</span><span className="text-semibold">Glance!</span></p>
        </main>
    )
}

export default Main;