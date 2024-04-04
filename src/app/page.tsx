import { CardCharacter } from "@/components/CardCharacter";
import NavBar from "@/components/navBar";
export default async function Initial() {

  return (
    <>
    <NavBar />
    <div className="flex flex-col gap-5 items-center justify-center h-screen w-screen  bg-black text-yellow-400">
        <header>
          <h1 className="text-3xl">
            Star Wars Characters
          </h1>
        </header>
      <div className="flex flex-wrap items-center justify-center h-3/6 bg-black">
      <main>
          <CardCharacter />
      </main>
      </div>
    </div>
    </>
   );
}

