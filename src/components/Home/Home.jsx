import icon from '../../assets/BG-Logo-R.png';
import './Home.css';
import { FaPlane } from 'react-icons/fa';

const Home = () => {
    return (
        <div id="home" className='w-5/6 flex mx-auto gap-0.5'>
            <div className="w-5/6 bg-slate-100 mx-auto mt-16 h-[260px] flex rounded-2xl">
                <div className="w-2/6 p-5">
                    <img src={icon} className="h-10 w-10" alt="" />
                    <h1 className="">Biman Bangladesh <br />Airlines</h1>
                    <p className="text-green-400 font-semibold mt-4">BG 178 | W & BG 671 | E</p>
                </div>
                <div className="flex flex-1 p-5 w-4/6">
                    {/* Left Text */}
                    <div className="flex-1">
                        <h1 className="text-4xl">DAC</h1>
                        <p>Hazrat Shajalal Intl Airport</p>
                        <p>19:05</p>
                        <p>SUN 4TH JUL 2022</p>
                        <div className='flex justify-between'>
                            <p className='mt-10 text-green-400 font-semibold'>Refundable</p>
                            <p className='mt-10 text-green-400 font-semibold'>Class - W</p>
                        </div>
                    </div>
                    {/* Icon */}
                    <div className="flex flex-col items-center">
                        <FaPlane className="h-16 w-16"></FaPlane>
                        <FaPlane className="h-16 w-16 transform rotate-180"></FaPlane>
                    </div>
                    {/* Right Text */}
                    <div className="flex-1 text-right"> {/* Added text-right class */}
                        <h1 className="text-4xl">JFK</h1>
                        <p>JF Kennedy Intl Airport</p>
                        <p>19:05</p>
                        <p>SUN 4TH JUL 2022</p>
                        <p className='mt-10 text-green-400 font-semibold'>Baggage: 45 KG</p>
                    </div>
                </div>
            </div>
            {/* Order Card */}
            <div className="card mt-16 w-1/6 bg-slate-100">
                <div className="card-body">
                    <h2 className="text-4xl font-bold mb-10 text-right">1850</h2>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Book Now</button>
                    </div>
                    <button className='btn'>View Details</button>
                </div>
            </div>
        </div>
    );
};

export default Home;
