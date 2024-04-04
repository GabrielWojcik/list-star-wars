"use client"
import { CardCharacter } from "@/components/CardCharacter";
import NavBar from "@/components/navBar";
import Pagination from "@mui/material/Pagination";
import { SetStateAction, useEffect, useState } from "react";
import people from "@/service/people"
import Head from 'next/head'

export default function Initial() {
  const [page, setPage] = useState(1)
  const [useData, setUseData ] = useState<any>([]);

  async function handleChange (e: any, p: SetStateAction<number>) {

    const response = await people.listCharacterPage(p)
    setPage(p)
    setUseData(response.results)
  }

  useEffect(() => {
    handleChange('', 1)
  },[])


  return (
    <>
    <Head>
      <title>Star Wars</title>
    </Head>
    <NavBar />
    <div className="flex flex-col p-5 gap-5 items-center justify-center w-screen  bg-black text-yellow-400">
        <header>
          <h1 className="text-3xl">
            Star Wars Characters
          </h1>
        </header>
      <div className="flex flex-wrap items-center justify-center h-3/6 bg-black">
      <main>
        <div className="flex  flex-col justify-center items-center">
          <CardCharacter dadosFinais={useData} />
          <div className="bg-white">
          <Pagination
            data-testid="pagination"
            count={9} 
            color="primary"
            onChange={handleChange}
          />
          </div>
        </div>
      </main>
      </div>
    </div>
    </>
   );
}

