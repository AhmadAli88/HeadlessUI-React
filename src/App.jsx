import { useState } from 'react'
import './App.css'
import DropdownMenu from './components/DropdownMenu'
import MyDisclosure from './components/Disclosure'
import MyDialog from './components/Dialog'
import MyPopover from './components/Popover'
import MyTabs from './components/Tabs'
import MyTransition from './components/Transition'
import MyButton from './forms/Button'
import MyCheckbox from './forms/Checkbox'
import MyComboBox from './forms/ComboBox.'
import MyRadioGroup from './forms/RadioGroup'
import MyListBox from './forms/ListBox'
import MySelect from './forms/Select'
import MySwitch from './forms/Switch'
import MyTextarea from './forms/Textarea'

function App() {
  const [count, setCount] = useState(0)

  return (
   <div>
    {/* <DropdownMenu/> */}
    {/* <MyDisclosure/> */}
    {/* <MyDialog/> */}
    {/* <MyPopover/> */}
    {/* <MyTabs/> */}
    {/* <MyTransition/> */}
    {/* <MyButton/> */}
    {/* <MyCheckbox/> */}
    <MyComboBox/>
    <MyListBox/>
    <MyRadioGroup/>
    <MySelect/>
    <MySwitch/>
    <MyTextarea/>
   </div>
  )
}

export default App
