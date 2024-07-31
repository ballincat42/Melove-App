import Background from 'three/examples/jsm/renderers/common/Background.js'
import icon from './assets/icons/3dots.svg'
function Card(props){

const Songs = [
    //A default data
 {id:0,  name:'Magnolia',         artist:'Laufey',              /*img:{MagnoliaG},       mp3:{Magnolia3}*/},
 {id:1,  name:'Glue Song',        artist:'Beabadoobee',         /*img:{GlueSongG},       mp3:{GlueSong3}*/},
 {id:2,  name:'Lovers Rock',      artist:'TV Girl',             /*img:{LoversRockG},     mp3:{LoversRock3}*/},
 {id:3,  name:'Valentine',        artist:'Laufey',              /*img:{ValentineG},      mp3:{Valentine3}*/},
 {id:4,  name:'Mesmerizer',       artist:'Hatsune Miku & Teto', /*img:{MesmerizerG},     mp3:{Mesmerizer3}*/},
 {id:5,  name:'Like The Movies',  artist:'Laufey',              /*img:{LikeTheMoviesG},  mp3:{LikeTheMovies3}*/},
 {id:6,  name:'Pasilyo',          artist:'Sunkissed Lola',      /*img:{PasilyoG},        mp3:{Pasilyo3}*/},
 {id:7,  name:'Best Friend',      artist:'Laufey',              /*img:{BestFriendG},     mp3:{BestFriend3}*/},
 {id:8,  name:'The Perfect Pair', artist:'Beabadoobee',         /*img:{ThePerfectPairG}, mp3:{ThePerfectPair3}*/},
 {id:9,  name:'For Lovers',       artist:'Lamp',                /*img:{ForLoversG},      mp3:{ForLovers3}*/},
 {id:10, name:'Hirogaru-Namida',  artist:'Lamp',                /*img:{HirogaruNamidaG}, mp3:{HirogaruNamida3}*/},
 {id:11, name:'Hatachi No Koi',   artist:'Sunkissed Lola',      /*img:{HatachiNoKoiG},   mp3:{HatachiNoKoi3}*/},
    //It will goes on!!
]

    return(
        <>
            <div className="group flex flex-col hover:bg-hover p-4 justify-center rounded-md cursor-pointer h-[100%] duration-150"> 
                <img src={props.img} className='bg-slate-400 w-[15rem] h-[10rem] rounded-md' alt="Album img" />
                <div className="flex justify-between items-center gap-4 pt-3">
                    <div>
                        <h3 className='font-medium text-[1em] text-[#FFFFFF] duration-150 group-hover:text-secondary'>{props.name}</h3>
                        <p className='text-[1em] text-[rgb(255,255,255,0.66)] duration-150 group-hover:text-secondary'>{props.artist}</p>
                    </div>
                    <span>
                        <img src={icon} className='w-[2px]' alt="" />
                    </span>
                </div>
            </div>
        </>
    )
}
export default Card