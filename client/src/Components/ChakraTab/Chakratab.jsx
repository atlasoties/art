import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/core'
import React from 'react'
//import { useColorModeValue } from '@chakra-ui/hooks'
import ChatContainer from '../container/ChatContainer';
import Posts from '../../Pages/post/post';
import { MDBIcon } from 'mdb-react-ui-kit';

export default function ChakraTab() {
    return (<>
        <Tabs>
            <TabList>
                <Tab>Red</Tab>
                <Tab>Teal</Tab>
                <Tab>Blue</Tab>
            </TabList>
            <TabPanels p='2rem'>
                <TabPanel>The Primary Colors</TabPanel>
                <TabPanel>Are 1, 2, 3</TabPanel>
                <TabPanel>Red, yellow and blue.</TabPanel>
            </TabPanels>
        </Tabs>
    </>)
}