import Image from "next/image";
import recipe1 from '../../../public/recipe1.jpg';
import recipe2 from '../../../public/recipe2.jpg';
import recipe3 from '../../../public/recipe3.jpg';

export const Recipes = () => {
  const images = [
    {
      src: recipe1,
      alt: 'recipe1'
    },
    {
      src: recipe2,
      alt: 'recipe2'
    },
    {
      src: recipe3,
      alt: 'recipe3'
    }
  ]

  return (
    <div id="recipes">
      <ul className='flex max-[834px]:flex-col'>
        {images.map(image => <li><Image src={image.src} alt={image.alt} className='h-[500px] object-cover' /></li>)}
      </ul>
    </div>
  )
}