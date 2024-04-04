import { CardCharacter } from "@/components/home";
export default async function Initial() {

  return (
    <div className="flex flex-col gap-5 items-center justify-center h-screen w-screen  bg-black text-yellow-400">
      <div className="">
        <strong className="text-3xl">
          Star Wars Characters
        </strong>
      </div>
      <div className="flex flex-wrap items-center justify-center h-3/6 bg-black">
          <CardCharacter />
      </div>
    </div>
  );
}

