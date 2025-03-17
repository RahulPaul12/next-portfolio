import Link from "next/link";
import routes from '@/public/data/routs.json'

export default function MobileLayout (){
    
    return (
        <nav className="lg:hidden block fixed bottom-8 sm:top-8 left-1/2 transform -translate-x-1/2">
          <ul className="flex items-center gap-x-10 bg-white/10 max-w-xs w-full p-4 rounded-full">
            {routes.map((item, index) => (
              <li key={index} className="list-none text-white opacity-40 hover:opacity-100 transition-opacity">
                <Link href={item.path} className="p-3">
                      <i className={`${item.icon}`}></i>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

    )
}