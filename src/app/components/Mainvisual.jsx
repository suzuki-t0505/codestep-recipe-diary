import Image from "next/image";
import mainvisual from '../../../public/mainvisual.jpg';

export const Mainvisual = () => {
  return (
    <div id="mainvisual">
      <Image src={mainvisual} alt='mainvisual image' className='h-screen w-full object-cover' />
    </div>
  )
}