import LikeTheMoviesG from './assets/pics/LikeTheMovies.svg'
import Love from './assets/icons/Love.svg'
import Dots from './assets/icons/3dots.svg'
import Volume from './assets/icons/Volume.svg'
import Prev from './assets/icons/Prev.svg'
import Play from './assets/icons/Play.svg'
import Next from './assets/icons/Next.svg'


function Playercard(){

    return(
        <>
            <div className="w-[20rem] h-[25rem] bg-primary rounded-md px-3">
                <div className='flex flex-col mx-auto w-full pt-5  items-center h-full'>
                <div className="bg-cover w-[88%] h-[12rem] bg-center rounded-md"
                style={{backgroundImage:`url(${LikeTheMoviesG})`}}>
                </div>

                <div className='w-full flex justify-between pt-2 pl-5 pr-2'>
                    <span className='flex justify-center items-center gap-2'> 
                        <p className='text-sm'>Magnolia</p>
                        <p className='text-xs text-trans'>Laufey</p>
                    </span>
                    <span className='flex'>
                        <span className='cursor-pointer w-[2rem] h-[2rem] hover:bg-hover rounded-full flex justify-center items-center'>
                            <img src={Love} alt="" />
                        </span>
                        <span className='cursor-pointer w-[2rem] h-[2rem] hover:bg-hover rounded-full flex justify-center items-center'>
                            <img src={Dots} className='h-[1rem]' alt="" />
                        </span>
                    </span>
                </div>

                <div className='flex justify-between w-full px-5 mt-2 cursor-pointer'>
                    <span className='flex justify-center items-center w-[1.2rem]'>
                        <img src={Volume} alt="" />
                    </span>
                    <div className='flex'>
                        <p className='text-xs text-trans mt-auto'>0.00 / 2.32</p>
                    </div>
                </div>

                <div className='px-5 w-full pt-3'>
                  <div className='w-full bg-trans h-[0.30rem] cursor-pointer rounded-md'></div>
                  <div className='flex items-center justify-evenly pt-3'>
                    <span className='flex items-center cursor-pointer justify-center w-[3rem] h-[3rem]'>
                        <img src={Prev} alt="" />
                    </span>
                    <span className='flex items-center cursor-pointer justify-center w-[3rem] h-[3rem]'>
                        <img src={Play} alt="" />
                    </span>
                    <span className='flex items-center cursor-pointer justify-center w-[3rem] h-[3rem]'>
                        <img src={Next} alt="" />
                    </span>
                  </div>
                </div>
                </div>
            </div>
        </>
    )
}
export default Playercard