import { Tabs, TabList, Tab, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import JFKToDAC from '../FlightDetails/JFKToDAC';

const Tabs2 = () => {
    return (
        <Tabs>
            <TabList className="flex justify-between px-5">
                <Tab className="bg-green-400 hover:bg-green-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                    FLIGHT DETAILS
                </Tab>
                <Tab className="bg-green-400 hover:bg-green-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                    FARE SUMMARY
                </Tab>
                <Tab className="bg-green-400 hover:bg-green-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                    FARE POLICY
                </Tab>
                <Tab className="bg-green-400 hover:bg-green-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                    BAGGAGE
                </Tab>
            </TabList>

            <TabPanel>
                <JFKToDAC></JFKToDAC>
            </TabPanel>
            <TabPanel>
                <h2>Content 2</h2>
            </TabPanel>
            <TabPanel>
                <h2>Content 3</h2>
            </TabPanel>
            <TabPanel>
                <h2>Content 4</h2>
            </TabPanel>
        </Tabs>
    );
};

export default Tabs2;