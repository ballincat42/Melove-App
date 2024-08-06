//pics
import MesmerizerG from './assets/pics/Mesmerizer.svg'
import LikeTheMoviesG from './assets/pics/LikeTheMovies.svg'
import PasilyoG from './assets/pics/Pasilyo.svg'
import BestFriendG from './assets/pics/BestFriend.svg'
import ThePerfectPairG from './assets/pics/ThePerfectPair.svg'
import ForLoversG from './assets/pics/ForLovers.svg'
import HirogaruNamidaG from './assets/pics/HirogaruNamida.svg'
import HatachiNoKoiG from './assets/pics/HatachiNoKoi.svg'
//mp3
import Mesmerizer3 from './assets/mp3s/Mesmerizer.mp3'
import LikeTheMovies3 from './assets/mp3s/LikeTheMovies.mp3'
import Pasilyo3 from './assets/mp3s/Pasilyo.mp3'
import BestFriend3 from './assets/mp3s/BestFriend.mp3'
import ThePerfectPair3 from './assets/mp3s/ThePerfectPair.mp3'
import ForLovers3 from './assets/mp3s/ForLovers.mp3'
import HirogaruNamida3 from './assets/mp3s/HirogaruNamida.mp3'
import HatachiNoKoi3 from './assets/mp3s/HatachiNoKoi.mp3'
//icons
import Love from './assets/icons/Love.svg'
import Dots from './assets/icons/3dots.svg'
function Picks(){
    const Songs = [
        { id: 0, name: 'Mesmerizer', artist: 'Hatsune Miku & Teto', img: MesmerizerG, mp3:Mesmerizer3 },
        { id: 1, name: 'Like The Movies', artist: 'Laufey', img: LikeTheMoviesG, mp3:LikeTheMovies3 },
        { id: 2, name: 'Pasilyo', artist: 'Sunkissed Lola', img: PasilyoG, mp3:Pasilyo3 },
        { id: 3, name: 'Best Friend', artist: 'Laufey', img: BestFriendG, mp3:BestFriend3 },
        { id: 4, name: 'The Perfect Pair', artist: 'Beabadoobee', img: ThePerfectPairG, mp3:ThePerfectPair3 },
        { id: 5, name: 'ForLovers', artist: 'Laufey', img: ForLoversG, mp3:ForLovers3 },
        { id: 6, name: 'HirogaruNamida', artist: 'Laufey', img: HirogaruNamidaG, mp3:HirogaruNamida3 },
        { id: 7, name: 'HatachiNoKoi', artist: 'Laufey', img: HatachiNoKoiG, mp3:HatachiNoKoi3 },

    ];

    return(
        <>
        <div className='bg-primary flex  items-center rounded-md pr-10 w-[48rem] pl-12 h-[25rem]'>
         <div className='w-full'>
            <h1 className='text-3xl font-medium'>Quick pick</h1>

            <div className='flex pt-4 gap-5 justify-between w-full'>
                <div className='flex flex-col w-[99%]'>
                    {Songs.slice(0,4).map((song) => (
                    <div className='flex gap-4 hover:bg-hover rounded-md cursor-pointer  pl-2 py-2 pr-0 duration-150' key={song.id}>
                        <img src={song.img} className='w-[3.5rem] rounded-sm' alt="" />
                        <div className='flex justify-between w-full'>
                            <div>
                                <p className='text-md font-normal'>{song.name}</p>
                                <p className='text-sm text-trans'>{song.artist}</p>
                            </div>
                            <div className='flex items-center ml-8 justify-center  gap-2'>
                                <span className='cursor-pointer w-[1.5rem] h-[2rem] flex justify-center items-center'><img src={Love} className=' w-[1.2rem]' alt="" /></span>
                                <span className='cursor-pointer w-[1.5rem] h-[2rem] flex justify-center items-center'><img src={Dots} className='' alt="" /></span>
                            </div>
                        </div>

                    </div>
                ))}
                </div>

                <div className='bg-hover w-2 rounded-lg'></div>

                <div className='flex flex-col w-[99%]'>
                {Songs.slice(3,7).map((song) => (
                     <div className='flex gap-4 hover:bg-hover rounded-md cursor-pointer pl-2 py-2 pr-0 duration-150' key={song.id}>
                     <img src={song.img} className='w-[3.5rem] rounded-sm' alt="" />
                     <div className='flex justify-between w-full'>
                         <div>
                             <p className='text-md font-normal'>{song.name}</p>
                             <p className='text-sm text-trans'>{song.artist}</p>
                         </div>
                         <div className='flex items-center ml-8 justify-center gap-2'>
                             <span className='cursor-pointer w-[1.5rem] h-[2rem] flex justify-center items-center'><img src={Love} className=' w-[1.2rem]' alt="" /></span>
                             <span className='cursor-pointer w-[1.5rem] h-[2rem] flex justify-center items-center'><img src={Dots} className='' alt="" /></span>
                         </div>
                     </div>
                    </div>
                ))}
                        </div>
                    </div>                
                </div>
                </div>
        </>
    )
}
export default Picks