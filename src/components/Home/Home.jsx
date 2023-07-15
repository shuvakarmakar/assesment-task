import { useState } from 'react';
import icon from '../../assets/BG-Logo-R.png';
import Tabs1 from '../Tabs/Tabs1';
import Tabs2 from '../Tabs/Tabs2';
import './Home.css';
import { FaPlane } from 'react-icons/fa';
import Steps from './Steps';

const Home = () => {
    const [selectedTab, setSelectedTab] = useState(null);
    const [showDetails, setShowDetails] = useState(false);
    const [isIconSwapped, setIsIconSwapped] = useState(false);

    const handleTabSelection = (tab) => {
        setSelectedTab(tab);
        setIsIconSwapped(!isIconSwapped);
    };

    const handleViewDetails = () => {
        setShowDetails(true);
        setSelectedTab(isIconSwapped ? 'Tabs2' : 'Tabs1');
    };

    const handleHideDetails = () => {
        setShowDetails(false);
        setSelectedTab(null);
    };

    return (
        <div id="home" className="lg:w-5/6 lg:flex md:flex mx-auto gap-0.5">
            <div className="md:w-5/6 bg-slate-100 mx-auto md:mt-10 lg:mt-16 lg:h-[310px] md:h-[290px] rounded-2xl">
                <div className="md:flex">
                    <div className="md:w-2/6 p-5">
                        <img src={icon} className="h-10 w-10" alt="" />
                        <h1 className="text-lg md:text-xl lg:text-2xl">Biman Bangladesh <br />Airlines</h1>
                        <p className="text-green-400 font-semibold mt-2 text-xs md:text-sm">BG 178 | W & BG 671 | E</p>
                        <Steps></Steps>
                    </div>
                    <div className="flex flex-1 p-5 md:w-4/6">
                        {/* Left Text */}
                        <div className={isIconSwapped ? 'flex-1 text-left' : 'flex-1 text-left'}>
                            <h1 className="text-3xl md:text-4xl lg:text-4xl">{isIconSwapped ? 'JFK' : 'DAC'}</h1>
                            <p className="text-sm md:text-base">{isIconSwapped ? 'JF Kennedy Intl Airport' : 'Hazrat Shajalal Intl Airport'}</p>
                            <p className="text-sm md:text-base">19:05</p>
                            <p className="text-sm md:text-base">SUN 4TH JUL 2022</p>
                            {isIconSwapped ? (
                                <div className="flex justify-between">
                                    <p className="mt-4 md:mt-10 text-green-400 font-semibold">Refundable</p>
                                    <p className="mt-4 md:mt-10 text-green-400 font-semibold">Class - W</p>
                                </div>
                            ) : (
                                <p className="mt-4 md:mt-10 text-green-400 font-semibold">Baggage: 45 KG</p>
                            )}
                        </div>
                        {/* Icon */}
                        <div className="flex flex-col items-center">
                            <FaPlane
                                className={`h-12 md:h-16 lg:h-16 w-12 md:w-16 lg:w-16 ${isIconSwapped ? 'transform rotate-180 text-slate-300' : ''}`}
                                onClick={() => handleTabSelection('Tabs1')}
                            />
                            <FaPlane
                                className={`h-12 md:h-16 lg:h-16 w-12 md:w-16 lg:w-16 ${isIconSwapped ? '' : 'transform rotate-180 text-slate-300'}`}
                                onClick={() => handleTabSelection('Tabs2')}
                            />
                        </div>
                        {/* Right Text */}
                        <div className={isIconSwapped ? 'flex-1 text-left' : 'flex-1 text-right'}>
                            <h1 className="text-3xl md:text-4xl lg:text-4xl">{isIconSwapped ? 'DAC' : 'JFK'}</h1>
                            <p className="text-sm md:text-base">{isIconSwapped ? 'Hazrat Shajalal Intl Airport' : 'JF Kennedy Intl Airport'}</p>
                            <p className="text-sm md:text-base">19:05</p>
                            <p className="text-sm md:text-base">SUN 4TH JUL 2022</p>
                            {isIconSwapped ? (
                                <p className="mt-4 md:mt-10 text-green-400 font-semibold">Baggage: 45 KG</p>
                            ) : (
                                <div className="flex justify-between">
                                    <p className="mt-4 md:mt-10 text-green-400 font-semibold">Refundable</p>
                                    <p className="mt-4 md:mt-10 text-green-400 font-semibold">Class - W</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
                {showDetails && selectedTab === 'Tabs1' && <Tabs1 />}
                {showDetails && selectedTab === 'Tabs2' && <Tabs2 />}
            </div>
            {/* Order Card */}
            <div className="card lg:mt-16 md:mt-10 lg:w-1/6 mb:5 bg-slate-100">
                <div className="card-body">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 md:mb-10 text-right">৳1850</h2>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary bg-green-400">Book Now</button>
                    </div>
                    {!showDetails && (
                        <button className="btn mt-4 md:mt-6" onClick={handleViewDetails}>
                            Show Details
                        </button>
                    )}
                    {showDetails && (
                        <button className="btn mt-4 md:mt-6" onClick={handleHideDetails}>
                            Hide Details
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Home;
