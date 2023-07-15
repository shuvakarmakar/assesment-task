
const Home = () => {
    return (
        <div>

            <div className="w-5/6 bg-gray-500 mx-auto mt-16 h-[280px] grid grid-cols-2">

                <div>
                    <h1 className="">Biman Bangladesh</h1>
                </div>
                <div className="grid grid-cols-3">
                    {/* Left Text */}
                    <div>
                        <h1>DAC</h1>
                        <p>Hazrat Shajalal Intl Airport</p>
                        <p>19:05</p>
                        <p>SUN 4TH JUL 2022</p>
                    </div>
                    {/* Icon */}
                    <div>

                    </div>
                    {/* Right Text */}
                    <div>
                        <h1>JFK</h1>
                        <p>JF Kennedy Intl Airport</p>
                        <p>19:05</p>
                        <p>SUN 4TH JUL 2022</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;