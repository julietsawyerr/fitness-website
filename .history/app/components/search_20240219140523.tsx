'use client'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

type Props = {}

const Search = (props: Props) => {
    
    function handleSearch(term: string) {
        console.log(term);
      }

  return (
    <>
    <div className="relative flex flex-1 flex-shrink-0 my-10">
      <label htmlFor="search" className="sr-only">
        Search
      </label>
      <input
        type='search'
        className="peer block w-full rounded-md border border-gray-500 py-[9px] pl-10 pr-5 text-base outline-0 focus:ring-gray-500 focus:border-2 focus:border-gray-500 "
        placeholder='Search...'
        onChange={(e) => {
          handleSearch(e.target.value);
        }}
        required
      />
      <MagnifyingGlassIcon className="absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
    </div>

<button type="submit" class="inline-flex items-center py-2.5 px-3 ms-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
<svg class="btn P">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
</svg>Search
</button>
</>
    
 )
}

export default Search