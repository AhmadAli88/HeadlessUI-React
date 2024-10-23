import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'

function MyTabs() {
  return (
    <TabGroup>
      <TabList className="flex justify-center items-center mt-5 gap-x-5">
        <Tab>Tab 1</Tab>
        <Tab>Tab 2</Tab>
        <Tab>Tab 3</Tab>
      </TabList>
      <TabPanels className="flex justify-center items-center  mt-5 ">
        <TabPanel>Content 1</TabPanel>
        <TabPanel>Content 2</TabPanel>
        <TabPanel>Content 3</TabPanel>
      </TabPanels>
    </TabGroup>
  )
}
export default MyTabs;