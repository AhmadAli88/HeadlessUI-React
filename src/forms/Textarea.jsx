import { Textarea } from "@headlessui/react";

function MyTextarea() {
  return (
    <div className="border-1 border-red-400 flex justify-center items-center">
      <Textarea name="description" rows={5} className="bg-lime-300 w-[300px]"></Textarea>
    </div>
  );
}

export default MyTextarea;
