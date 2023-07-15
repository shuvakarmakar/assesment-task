import { Tabs, TabList, Tab, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import DACToJFK from '../FlightDetails/DACToJFK';
import FareSummeryTable from '../FareSummeryTable/FareSummeryTable';
import Baggage from '../Baggage/Baggage';
import FarePolicy from '../FarePolicy/FarePolicy';

const Tabs1 = () => {
    return (
        <Tabs>
            <TabList className="flex flex-wrap justify-between px-5 mb-3">
                <Tab className="bg-green-400 hover:bg-green-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline cursor-pointer mb-2 md:mb-0 md:mr-2">
                    FLIGHT DETAILS
                </Tab>
                <Tab className="bg-green-400 hover:bg-green-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline cursor-pointer mb-2 md:mb-0 md:mr-2">
                    FARE SUMMARY
                </Tab>
                <Tab className="bg-green-400 hover:bg-green-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline cursor-pointer md:mr-2">
                    FARE POLICY
                </Tab>
                <Tab className="bg-green-400 hover:bg-green-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline cursor-pointer">
                    BAGGAGE
                </Tab>
            </TabList>

            <TabPanel>
                <DACToJFK />
            </TabPanel>
            <TabPanel>
                <FareSummeryTable></FareSummeryTable>
            </TabPanel>
            <TabPanel>
                <FarePolicy></FarePolicy>
            </TabPanel>
            <TabPanel>
                <Baggage></Baggage>
            </TabPanel>
        </Tabs>
    );
};

export default Tabs1;
