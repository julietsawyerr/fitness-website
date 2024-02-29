import { Bar3Icon, XMarkIcon } from "@heroicons/react/24/solid";
type Props = {}



const Navbar = (props: Props) => {
  const flexBetween = 'flex items-center justify-between'
  return (
    <nav>
      <div 
        className={`${flexBetween} py-6 px-8 }bg-ind
      >navbar</div>
    </nav>
  )
}

export default Navbar;