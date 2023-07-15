import { useState } from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const Tabs1 = () => {
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                    <Tab label="FLIGHT DETAILS" {...a11yProps(0)} />
                    <Tab label="FARE SUMMARY" {...a11yProps(1)} />
                    <Tab label="FARE POLICY" {...a11yProps(2)} />
                    <Tab label="BAGGAGE" {...a11yProps(3)} />
                </Tabs>
            </Box>
            <CustomTabPanel value={value} index={0}>
                FLIGHT DETAILS
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
                FARE SUMMARY
            </CustomTabPanel>
            <CustomTabPanel value={value} index={2}>
                FARE POLICY
            </CustomTabPanel>
            <CustomTabPanel value={value} index={3}>
                BAGGAGE
            </CustomTabPanel>
        </Box>
    );
};

export default Tabs1;
