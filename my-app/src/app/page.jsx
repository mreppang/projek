import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React from "react";

export default function Page() {
  return (
    <form className="flex flex-col gap-4 p-4 h-screen justify-center items-center">
      <Input placeholder="Usn" />
      <Input placeholder="Pass" />

      <Button className="cursor-pointer">Submit</Button>
    </form>
  );
}
