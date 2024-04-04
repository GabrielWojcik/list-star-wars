"use client"
import { fetchData } from "@/routes/data";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export function CardCharacter() {
    const [useData, setUseData] = useState<any>([]);

    async function respData() {
        const data = await fetchData();
        setUseData(data.results)
    }

    useEffect(() => {
        respData()
    },[])

    return (
        <div className="flex flex-wrap items-center justify-center gap-5 p-5 bg-black">
        {
            useData?.map((value: { url: string; name: string; birth_year: string; 
            height: string; mass: string }) => {
                const urlParts = value.url.split('/');
                const personId = urlParts[urlParts.length - 2];
                const imagePath = `/${personId}.webp`;
                return(
                    <Link href={`/people/${personId}`}>
                    <div key={value.name} className="flex flex-col justify-center items-center md:flex-row bg-white text-black rounded border-yellow-500 border-2 cursor-pointer hover:scale-105">
                    <div className="w-[150px] h-[200px] relative">
                        <Image 
                            src={imagePath} 
                            alt="" 
                            layout="fill"
                            objectFit="cover"                            
                            className="rounded"
                         />
                    </div>
                    <div className="flex flex-col justify-center items-center p-5">
                        <div className="flex">
                            <div className="w-20">
                                <p>Nome:</p>
                            </div>
                            <p className="w-40">{value.name}</p> 
                        </div>
                        <div className="flex">
                            <div className="w-20">
                                <p>Idade:</p>
                            </div>
                            <p className="w-40">{value.birth_year}</p> 
                        </div>
                        <div className="flex">
                            <div className="w-20">
                                <p>Altura:</p>
                            </div>
                            <p className="w-40">{value.height}</p> 
                        </div>
                        <div className="flex">
                            <div className="w-20">
                                <p>Peso (g):</p>
                            </div>
                            <p className="w-40">{value.mass}g</p> 
                        </div>
                    </div>
                    </div>
                </Link>
                )
            })
        }
        </div>
     
    );
}