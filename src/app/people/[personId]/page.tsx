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
        <div className=" bg-black h-screen">
            <div className="flex flex-col-reverse items-center justify-center bg-center bg-cove text-yellow-400">
                <div className="bg-black h-screen w-screen flex flex-col justify-center items-center p-5">
                    <div className="h-screen p-5 bg-black">
                        <div className="flex">
                            <div className="w-40">
                                <p className="text-yellow-300">Birth Data</p>
                            </div>
                            <p>{useData?.birth_year}</p>
                        </div>
                        <div className="flex">
                            <div className="w-40">
                                <p className="text-yellow-300">Eye color</p>
                            </div>
                            <p>{useData?.eye_color}</p>
                        </div>
                        <div className="flex">
                            <div className="w-40">
                                <p className="text-yellow-300">Hair color</p>
                            </div>
                            <p>{useData?.hair_color === 'n/a' || useData?.hair_color === 'none' ? 'Not defined' : useData?.hair_color}</p>
                        </div>
                        
                        <div className="flex">
                            <div className="w-40">
                                <p className="text-yellow-300">Gender</p>
                            </div>
                            <p>{useData?.gender === 'n/a' ? 'Not defined': useData?.gender}</p>
                        </div>
                        
                    </div>
                </div>
                <div className="flex flex-col py-2 items-center justify-center w-screen   relative">
                    <Image src={img || ''} alt=""  width={200} height={200} objectFit="cover" className="rounded-full" />
                    <strong className="p-2 text-3xl md:text-6xl text-yellow-400 text-center">
                         {useData?.name}
                    </strong>
                </div>
            </div>
        </div>
        </>
    )
}