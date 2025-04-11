import Link from "next/link";
import routes from '@/public/data/routs.json'

export default function HeaderLayout (){
    
    return (
        <nav className="container hidden lg:flex items-center justify-between">
      <li className="list-none font-bold text-lg cursor-pointer">
        <Link href="/">
          <span className="font-black text-4xl flex items-center">
            <img
              className="mr-2 transform hover:rotate-360 hover:scale-75 transition-transform duration-500"
              src="/images/logo.png"
              width="100"
            />
            <div>
                {"Rahul".split("").map((letter, index) => {
                  return (
                    <span key={index} className="hover:text-fun-pink hover:-mt-2 transition-all duration-500 hover:duration-100">
                      {letter}
                    </span>
                  );
                })}
            </div>
          </span>
        </Link>
      </li>
      <ul className="flex items-center space-x-10">
        {routes.map((item, index) => {
          return (
            <li
              key={index}
              className="list-none pb-2 text-white opacity-40 hover:opacity-100 transition-opacity hover:text-white  relative after:bg-white after:absolute after:h-0.5 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300"
            >
              <Link href={item.path}>{item.title}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
    
    )
}
