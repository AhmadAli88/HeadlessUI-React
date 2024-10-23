import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'

function MyDisclosure() {
  return (
    <Disclosure>
      <DisclosureButton className="py-2 bg-slate-400 mx-4 rounded-lg mt-4" style={{width: '-webkit-fill-available'}}>Is team pricing available?</DisclosureButton>
      <DisclosurePanel className="text-gray-500 mx-4 ">
        Yes! You can purchase a license that you can share with your entire team.
      </DisclosurePanel>
    </Disclosure>
  )
}
export default MyDisclosure;