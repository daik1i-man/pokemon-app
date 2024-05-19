import React, { useContext } from 'react'
import { Hash, Heart, Leaf } from 'lucide-react'
import { Link, useSearchParams } from 'react-router-dom'
import { DatasContext } from '../../Provider/DatasContextComponent/DatasContextComponent';
import { useNavigate } from 'react-router-dom';


export default function PokemonCard({ pokemonImg, pokemonId, pokemonName, pokemonTypes }) {
    let navigate = useNavigate();

    const { setPokemonData } = useContext(DatasContext);

    const newDatas = {
        pokemonImg,
        pokemonId,
        pokemonName,
        pokemonTypes,
    }

    const GettingDatasHandler = () => {
        setPokemonData(newDatas);
        navigate(`/pokemon/${pokemonName}`, { newDatas });
    }

    return (
        <Link to={`/pokemon/${pokemonName}`}>
            <div className='w-72 h-60 my-5 border border-solid border-green-400 rounded-md cursor-pointer' onClick={GettingDatasHandler}>
                <div className="max-w-68 mx-auto relative">
                    <div className="">
                        <div className="w-36 h-40 absolute z-10 right-0 rounded-l-[75px] bg-green-400">
                            <img className='w-20 absolute right-6 top-10' src={pokemonImg} alt="" />
                        </div>
                        <div className="max-w-68 p-3 flex justify-between mx-auto relative">
                            <div className="flex items-center space-x-2">
                                <Hash />
                                <p>{pokemonId}</p>
                            </div>
                            <div className="absolute right-4 z-20">
                                <Heart className='' />
                            </div>
                        </div>
                        <div className="max-w-68 p-3 mt-10">
                            <h1 className='text-2xl font-semibold'>{pokemonName}</h1>
                        </div>
                    </div>
                </div>
                <div className="max-w-64 h-10 space-x-3 justify-between flex mx-auto items-center relative top-10">
                    {pokemonTypes.map((type) => (
                        <div key={type.slot} className="w-1/2 bg-green-400 h-full space-x-3 p-3 rounded-full flex items-center">
                            <Leaf />
                            <h1>{type.type.name}</h1>
                        </div>
                    ))}
                </div>
            </div>
        </Link>
    )
}

