import { AnnotationIcon } from '@heroicons/react/outline';
import { Link } from '@ornio-no/ds';
import { ReactElement } from 'react';

export const Navbar = (): ReactElement => {
  // constants
  const classNames = (...classes: string[]) => {
    return classes.filter(Boolean).join(' ');
  };

  return (
    <nav className="flex justify-center w-full px-12 py-6 bg-indigo-600 sm:px-40">
      <div className="flex items-center space-x-5 text-white">
        <AnnotationIcon className="w-6 h-6 text-white" />
        <Link href="/">Posts</Link>
      </div>
    </nav>
  );
};
