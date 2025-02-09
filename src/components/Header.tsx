import { Apple, Search, ShoppingBag } from 'lucide-react';
import { header } from '../constant';

export default function Header() {
  return (
    <header className="text-white bg-primary flex justify-center p-3">
      <div>
      </div>
      <nav className='flex justify-between gap-6'>
        <Apple/>
        {
          header.map((item) => (
            <div key={item.id}>{item.label}</div>
          ))
        }
        <Search />
        <ShoppingBag />
      </nav>
  
    </header>
  )
}