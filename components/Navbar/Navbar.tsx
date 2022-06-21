import { Link } from '@ornio-no/ds';
import { ReactElement } from 'react';
import { Logo } from '../Icons';

export const Navbar = (): ReactElement => {
  return (
    <nav className="fixed top-0 z-10 w-screen px-12 bg-indigo-600 sm:px-40">
      <div className="flex items-center text-white">
        <Logo className="w-20 h-20 text-white" />
        <Link className="text-lg" href="/">
          Posts
        </Link>
      </div>
    </nav>
  );
};
