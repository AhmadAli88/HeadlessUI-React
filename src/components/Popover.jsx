import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react'

function MyPopover() {
  return (
    <Popover className="relative flex justify-center items-center mt-4">
      <PopoverButton className="bg-blue-300 mt-3 px-4 rounded-lg py-2">Solutions</PopoverButton>
      <PopoverPanel anchor="bottom" className="flex flex-col gap-3 mt-3 anchor_tags">
        <a href="/analytics">Analytics</a>
        <a href="/engagement">Engagement</a>
        <a href="/security">Security</a>
        <a href="/integrations">Integrations</a>
      </PopoverPanel>
    </Popover>
  )
}
export default MyPopover;
