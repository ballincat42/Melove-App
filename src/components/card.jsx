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
import Magnolia3 from './assets/mp3s/Magnolia.mp3'
import GlueSong3 from './assets/mp3s/GlueSong.mp3'
import LoversRock3 from './assets/mp3s/LoversRock.mp3'
import Valentine3 from './assets/mp3s/Valentine.mp3'
import Mesmerizer3 from './assets/mp3s/Mesmerizer.mp3'
import LikeTheMovies3 from './assets/mp3s/LikeTheMovies.mp3'
import Pasilyo3 from './assets/mp3s/Pasilyo.mp3'
import BestFriend3 from './assets/mp3s/BestFriend.mp3'
import ThePerfectPair3 from './assets/mp3s/ThePerfectPair.mp3'
import ForLovers3 from './assets/mp3s/ForLovers.mp3'
import HirogaruNamida3 from './assets/mp3s/HirogaruNamida.mp3'
import HatachiNoKoi3 from './assets/mp3s/HatachiNoKoi.mp3'

function Card() {

  const Songs = [
    { id: 0, name: 'Magnolia', artist: 'Laufey', img: MagnoliaG, mp3:Magnolia3 },
    { id: 1, name: 'Glue Song', artist: 'Beabadoobee', img: GlueSongG, mp3:GlueSong3 },
    { id: 2, name: 'Lovers Rock', artist: 'TV Girl', img: LoversRockG, mp3:LoversRock3 },
    { id: 3, name: 'Valentine', artist: 'Laufey', img: ValentineG, mp3:Valentine3 },
    { id: 4, name: 'Mesmerizer', artist: 'Hatsune Miku & Teto', img: MesmerizerG, mp3:Mesmerizer3 },
    { id: 5, name: 'Like The Movies', artist: 'Laufey', img: LikeTheMoviesG, mp3:LikeTheMovies3 },
    { id: 6, name: 'Pasilyo', artist: 'Sunkissed Lola', img: PasilyoG, mp3:Pasilyo3 },
    { id: 7, name: 'Best Friend', artist: 'Laufey', img: BestFriendG, mp3:BestFriend3 },
    { id: 8, name: 'The Perfect Pair', artist: 'Beabadoobee', img: ThePerfectPairG, mp3:ThePerfectPair3 },
    { id: 9, name: 'For Lovers', artist: 'Lamp', img: ForLoversG, mp3:ForLovers3 },
    { id: 10, name: 'Hirogaru-Namida', artist: 'Lamp', img: HirogaruNamidaG, mp3:HirogaruNamida3 },
    { id: 11, name: 'Hatachi No Koi', artist: 'Sunkissed Lola', img: HatachiNoKoiG, mp3:HatachiNoKoi3 },
  ]

  return (
    <>
      {Songs.map((song) => (
        <div key={song.id} className="group  flex flex-col hover:bg-hover p-4 justify-center rounded-md cursor-pointer duration-150">
          <span 
          className={`w-[12rem] h-[9rem] bg-cover bg-center group-hover:brightness-75 duration-150 rounded-[5px]`}
          style={{ backgroundImage: `url(${song.img})` }}
          >
          </span> 
          <div className="flex justify-between items-center gap-4 pt-3">
            <div className=''>
              <h3 className='font-medium text-md text-[#FFFFFF] duration-150 group-hover:text-secondary'>
                {song.name}
              </h3>
              <p className='text-sm text-[rgb(255,255,255,0.66)] duration-150 group-hover:text-secondary'>
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
