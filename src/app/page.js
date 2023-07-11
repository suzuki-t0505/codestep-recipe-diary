import { Footer } from './components/Footer';
import { Mainvisual } from './components/Mainvisual';
import { RecipeButton } from './components/RecipeButton';
import { Recipes } from './components/Recipes';
import { Title } from './components/Title';

export default function Home() {
  return (
    <div className='text-[#2b2a27]'>
      <main>
        <Mainvisual />
        <Title />
        <Recipes />
        <RecipeButton />
      </main>
      <Footer />
    </div>
  )
}
