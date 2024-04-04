"use client"
import NavBar from "@/components/navBar";
import { fetchCaracter } from "@/routes/data";
import Image from "next/image";
import { useEffect, useState } from "react";

interface CharacterProps {
    params: {
      personId: string;
    };
  }

  export default function Character({ params }: CharacterProps) {

    const [useData, setUseData] = useState<any>([]);
    const [img, setImg] = useState<any>();

    useEffect(() => {
        async function respData() {
            const data = await fetchCaracter(params.personId);
            setUseData(data)
            const urlParts = data.url.split('/');
            const personId = urlParts[urlParts.length - 2];
            const imagePath = `/${personId}.webp`;
            setImg(imagePath)
        }
    
        respData(); 
    
    }, []);

    return(
        <>
        <NavBar />
        {/* <div className=" bg-[url('/R.jpg')]"> */}
        <div className=" bg-black">
            <div className="flex flex-col-reverse items-center justify-center bg-center bg-cove text-yellow-400 md:flex-row">
                <div className="flex flex-col md:items-start p-5  md:w-2/4 h-full">
                    <div className=" p-5">
                        <p className="text-yellow-300">Data de Nascimento</p>
                        <p className="text-3xl">{useData?.birth_year}</p>
                        <p className="text-yellow-300">Cor dos Olhos</p>
                        <p className="text-3xl">{useData?.eye_color}</p>
                        <p className="text-yellow-300">Cor da Roupa</p>
                        <p className="text-3xl">{useData?.skin_color}</p>
                        <p className="text-yellow-300">Cor do Cabelo</p>
                        <p className="text-3xl">{useData?.hair_color === 'n/a' ? 'Não definido' : useData?.hair_color}</p>
                        <p className="text-yellow-300">Genêro</p>
                        <p className="text-3xl">{useData?.gender === 'n/a' ? 'Não definido': useData?.gender}</p>
                    </div>
                </div>
                <div className="flex flex-col items-center justify-center w-screen md:w-2/4 h-screen relative">
                    <Image src={img || ''} alt=""  width={200} height={200} objectFit="cover" className="rounded-full" />
                    <strong className="p-2 text-3xl md:text-7xl text-yellow-400 text-center">
                         {useData?.name}
                    </strong>
                </div>
                    {/* <Image src={img || ''} alt="" width={400} height={400} objectFit="cover" /> */}
            </div>
        </div>
        </>
    )
}