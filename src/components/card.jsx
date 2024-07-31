import Background from 'three/examples/jsm/renderers/common/Background.js'
import icon from './assets/icons/3dots.svg'
import MagnoliaG from './assets/pics/Magnolia.svg'
import GlueSongG from './assets/pics/GlueSong.svg'
import LoversRockG from './assets/pics/LoversRock.svg'
import ValentineG from './assets/pics/Valentine.svg'
import MesmerizerG from './assets/pics/Mesmerizer.svg'
import LikeTheMoviesG from './assets/pics/LikeTheMovies.svg'
import PasilyoG from './assets/pics/Pasilyo.svg'
import BestFriendG from './assets/pics/BestFriend.svg'
import ThePerfectPairG from './assets/pics/ThePerfectPair.svg'
import ForLoversG from './assets/pics/ForLovers.svg'
import HirogaruNamidaG from './assets/pics/HirogaruNamida.svg'
import HatachiNoKoiG from './assets/pics/HatachiNoKoi.svg'

function Card() {

  const Songs = [
    { id: 0, name: 'Magnolia', artist: 'Laufey', img: MagnoliaG },
    { id: 1, name: 'Glue Song', artist: 'Beabadoobee', img: GlueSongG },
    { id: 2, name: 'Lovers Rock', artist: 'TV Girl', img: LoversRockG },
    { id: 3, name: 'Valentine', artist: 'Laufey', img: ValentineG },
    { id: 4, name: 'Mesmerizer', artist: 'Hatsune Miku & Teto', img: MesmerizerG },
    { id: 5, name: 'Like The Movies', artist: 'Laufey', img: LikeTheMoviesG },
    { id: 6, name: 'Pasilyo', artist: 'Sunkissed Lola', img: PasilyoG },
    { id: 7, name: 'Best Friend', artist: 'Laufey', img: BestFriendG },
    { id: 8, name: 'The Perfect Pair', artist: 'Beabadoobee', img: ThePerfectPairG },
    { id: 9, name: 'For Lovers', artist: 'Lamp', img: ForLoversG },
    { id: 10, name: 'Hirogaru-Namida', artist: 'Lamp', img: HirogaruNamidaG },
    { id: 11, name: 'Hatachi No Koi', artist: 'Sunkissed Lola', img: HatachiNoKoiG },
  ]

  return (
    <>
      {Songs.map((song) => (
        <div key={song.id} className="group flex flex-col hover:bg-hover p-4 justify-center rounded-md cursor-pointer h-[100%] duration-150"> 
          <img 
            src={song.img} 
            className='bg-slate-400 object-cover group-hover:brightness-75 duration-150 min-w-[15rem] min-h-[11rem] max-h-[11rem] rounded-[5px]' 
            alt="Album img" 
          />
          <div className="flex justify-between items-center gap-4 pt-3">
            <div>
              <h3 className='font-medium text-[1em] text-[#FFFFFF] duration-150 group-hover:text-secondary'>
                {song.name}
              </h3>
              <p className='text-[1em] text-[rgb(255,255,255,0.66)] duration-150 group-hover:text-secondary'>
                {song.artist}
              </p>
            </div>
            <span>
              <img src={icon} className='w-[2px]' alt="" />
            </span>
          </div>
        </div>
      ))}
</>
  )
}

export default Card
