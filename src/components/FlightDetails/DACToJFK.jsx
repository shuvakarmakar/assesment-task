import { FaPlane } from 'react-icons/fa';
import icon from '../../assets/BG-Logo-R.png';

const DACToJFK = () => {
    return (
        <div className='h-[450px] bg-slate-100 rounded-2xl'>
            <div className="mx-auto flex ">
                <div className="w-2/6 p-5">
                    <img src={icon} className="h-10 w-10" alt="" />
                    <h1 className="">Biman Bangladesh Airlines</h1>
                    <p className="text-green-400 font-semibold mt-4">BG 617</p>
                    <p>Operated By: BG</p>
                    <p>Economy: G</p>
                </div>
                <div className="flex flex-1 p-5 w-4/6">
                    {/* Left Text */}
                    <div className="flex-1">
                        <p>Depart</p>
                        <h1 className="text-3xl my-1">DAC</h1>
                        <p>Dhaka, BD | 15.00</p>
                        <p>Terminal, Hazrat Shajalal International Airport</p>
                        <p>Sun, 3rd June 2022</p>
                    </div>
                    {/* Icon */}
                    <div className="flex flex-col items-center">
                        <FaPlane className="h-16 w-16"></FaPlane>
                    </div>
                    {/* Right Text */}
                    <div className="flex-1 text-right">
                        <p>Depart</p>
                        <h1 className="text-3xl">DXB</h1>
                        <p>Dhaka, BD | 15.00</p>
                        <p>Terminal, Hazrat Shajalal International Airport</p>
                        <p>Sun, 3rd June 2022</p>
                    </div>
                </div>
            </div>
            {/* Middle Text */}
            <div className='bg-green-300 w-3/4 text-center mx-auto'>
                <h2>Change  planes at Internatinal | Kuwait | KW | Kuwait(KWI), Connecting Time: 04h:10m</h2>
            </div>
            {/* Last Details */}
            <div className="mx-auto flex ">
                <div className="w-2/6 p-5">
                    <img src={icon} className="h-10 w-10" alt="" />
                    <h1 className="">Biman Bangladesh Airlines</h1>
                    <p className="text-green-400 font-semibold mt-4">BG 617</p>
                    <p>Operated By: BG</p>
                    <p>Economy: G</p>
                </div>
                <div className="flex flex-1 p-5 w-4/6">
                    {/* Left Text */}
                    <div className="flex-1">
                        <p>Depart</p>
                        <h1 className="text-3xl my-1">DXB</h1>
                        <p>Dhaka, BD | 15.00</p>
                        <p>Terminal, Hazrat Shajalal International Airport</p>
                        <p>Sun, 3rd June 2022</p>
                    </div>
                    {/* Icon */}
                    <div className="flex flex-col items-center">
                        <FaPlane className="h-16 w-16"></FaPlane>
                    </div>
                    {/* Right Text */}
                    <div className="flex-1 text-right">
                        <p>Depart</p>
                        <h1 className="text-3xl">JFK</h1>
                        <p>Dhaka, BD | 15.00</p>
                        <p>Terminal, Hazrat Shajalal International Airport</p>
                        <p>Sun, 3rd June 2022</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DACToJFK;