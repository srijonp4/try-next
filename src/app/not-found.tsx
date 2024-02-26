import Link from 'next/link';
const NotFound = () => {
  return (
    <div>
      <h1>404 - Page Not Found</h1>
      <p>Sorry, the page you are looking for could not be found.</p>
      <p>
        Go back to the <Link href="/">HomePage</Link>
      </p>
    </div>
  );
};

export default NotFound;
