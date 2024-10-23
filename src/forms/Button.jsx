import { Button } from "@headlessui/react";

function MyButton() {
  return (
    <div className="flex justify-center items-center">
      <Button className="rounded bg-sky-600 py-2 px-4 text-sm text-white data-[hover]:bg-sky-500 data-[active]:bg-sky-700">
        Save changes
      </Button>
    </div>
  );
}
export default MyButton;
