'use client'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import {FetchData, options } from '../utils/fetchData';

type Props = {
    url: string;
    options: {
        method: string;
        headers: {
            'X-RapidAPI-Key': string;
            'X-RapidAPI-Host': string;
        };
    }
}

const Search = (props: Props) => {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();
  
    const url:Props[] = 'https://work-out-api1.p.rapidapi.com/search?Muscles=biceps';
   
    

    async function handleSearch(term: string) {
       const params = new URLSearchParams(searchParams);

        if (term) {
            params.set('query', term);
          } else {
            params.delete('query');
          }

          replace(`${pathname}?${params.toString()}`);
        console.log(term);

        if (term){
            const data = await FetchData(url, options); 
            console.log(data)
        }
      }

  return (
    <>

    <div className="relative flex gap-2 flex-1 flex-shrink-0 my-10 mx-auto md:w-1/2">
      <label htmlFor="search" className="sr-only">
        Search
      </label>
      <input
        type='search'
        className="peer block w-full rounded-md border border-gray-500 py-[9px] pl-10 pr-2 text-base outline-0 focus:ring-gray-500 focus:border-2 focus:border-gray-500 "
        placeholder='Search Exercises...'
        onChange={(e) => {
          handleSearch(e.target.value);
        }}
        defaultValue={searchParams.get('query')?.toString()}
        required
      />
      <MagnifyingGlassIcon className="absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />

      {/* <button type="submit" className="btn-primary">
      Search
     </button> */}
    </div>



</>
    
 )
}

export default Search