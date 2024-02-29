import { Bar3Icon, XMarkIcon } from "@heroicons/react/24/solid";
type Props = {}



const Navbar = (props: Props) => {
  const flexBetween = 'flex items-center justify-between'
  return (
    <nav>
      <div 
        className={`${flexBetween} fixed z-30 top-0 w-full py-6 bg-red-300 border-2 border-gray-500`}
      >
          <div
      </div>
    </nav>
  )
}

export default Navbar;