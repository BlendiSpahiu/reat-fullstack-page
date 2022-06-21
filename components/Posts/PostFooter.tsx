import { Avatar, Link } from '@ornio-no/ds';
import Image from 'next/image';
import { ReactElement } from 'react';
import { getMembership } from '../../utils/getMembership';
import { Logo } from '../Icons';
import { PostFooterProps } from './Post.props';

export const PostFooter = ({ post }: PostFooterProps): ReactElement => {
  return (
    <footer className="flex items-center justify-between w-full pt-6 mt-16 border-t">
      <div className="flex items-center">
        <Avatar src={post?.user?.profilePicture || ''} />
        <div className="ml-4 text-sm">
          <p className="text-gray-600">{post?.user?.name}</p>
          <p className="font-medium text-gray-400">
            {getMembership(post?.user?.createdAt)}
          </p>
        </div>
      </div>
      <Link href="/">
        <Logo fill="#000" />
      </Link>
    </footer>
  );
};
