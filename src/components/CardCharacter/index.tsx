"use client"
import Image from "next/image";
import Link from "next/link";

interface CharacterData {
    url: string;
    name: string;
    birth_year: string;
    height: number;
    mass: string;
}

export function CardCharacter({ dadosFinais }: { dadosFinais: CharacterData[] }) {
    return (
        <div className="flex flex-wrap items-center justify-center gap-5 p-5 bg-black">
        {
            dadosFinais.length === 0 ? (
                <div>
                    <p>Loading...</p>
                </div>
            )
                :
                    dadosFinais?.map((value: { url: string; name: string; birth_year: string; 
                        height: any; mass: string }) => {
                            const urlParts = value.url.split('/');
                            const personId = urlParts[urlParts.length - 2];
                            const imagePath = `/${personId}.jpg`;
                            return(
                                <Link key={value.name} href={`/people/${personId}`}>
                                <div className="flex flex-col justify-center items-center md:flex-row bg-gray-400 text-white rounded border-yellow-500 border-2 cursor-pointer hover:scale-105">
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
                                    <div className="flex" data-testid={`value-${value.name}`}>
                                        <div className="w-20">
                                            <p>Name:</p>
                                        </div>
                                        <p className="w-40">{value.name}</p> 
                                    </div>
                                    <div className="flex">
                                        <div className="w-20">
                                            <p>Age:</p>
                                        </div>
                                        <p className="w-40">{value.birth_year}</p> 
                                    </div>
                                    <div className="flex">
                                        <div className="w-20">
                                            <p>Height:</p>
                                        </div>
                                        <p className="w-40">{value.height / 100} m</p> 
                                    </div>
                                    <div className="flex">
                                        <div className="w-20">
                                            <p>Weight:</p>
                                        </div>
                                        <p className="w-40">{value.mass} kg</p> 
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
