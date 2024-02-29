import { Bar3Icon, XMarkIcon } from "@heroicons/react/24/solid";
type Props = {}



const Navbar = (props: Props) => {
  const flexBetween = 'flex items-center justify-between'
  return (
    <nav>
      <div 
        className={`${flexBetween} fi py-6 px-8 `}
      >navbar</div>
    </nav>
  )
}

export default Navbar;