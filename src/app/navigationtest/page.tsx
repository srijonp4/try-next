'use client';
import {
  useRouter,
  useParams,
  usePathname,
  useSearchParams,
} from 'next/navigation';
import Link from 'next/link';
const NavigationTest = () => {
  /* client side navigation */

  const router = useRouter();
  const pathName = usePathname();
  const searchParameters = useSearchParams(); //also known as query parameters

  /* 
  ### In the context of URLs, "search parameter" and "query parameters" are often used interchangeably to refer to the key-value pairs that come after the ? in a URL. These parameters are used to pass data to a web server, typically in the form of a query string. For example, in the URL https://example.com/search?q=term&page=1, q and page are query parameters.
  */
  console.log(pathName);
  const q = searchParameters.get('q');
  console.log(searchParameters);
  console.log(q);

  return (
    <>
      <div>
        <Link href="/" prefetch={false}>
          click here
        </Link>
      </div>
      <div>
        <button
          onClick={() => {
            console.log('clicked');
          }}
        >
          clickme
        </button>
        <button
          onClick={() => {
            router.push('/');
          }}
        >
          goto home
        </button>
        <button
          onClick={() => {
            router.forward();
          }}
        >
          forward
        </button>
        <button
          onClick={() => {
            router.back();
          }}
        >
          Backward
        </button>

        <button
          onClick={() => {
            router.refresh();
          }}
        >
          refresh page
        </button>
      </div>
    </>
  );
};

export default NavigationTest;
