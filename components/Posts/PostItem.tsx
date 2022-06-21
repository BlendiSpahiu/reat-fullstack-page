/* eslint-disable @next/next/no-img-element */
import { Avatar, If, Link } from '@ornio-no/ds';
import { ReactElement } from 'react';
import { formatDate } from '../../utils/formatDate';
import { HighlightText } from '../HighlightText/HighlightText';
import { PostProps } from './Post.props';
import { getReadingTime } from '../../utils/getReadingTime';

export const PostItem = ({ post, query }: PostProps): ReactElement => {
  return (
    <div className="flex flex-col overflow-hidden rounded-lg shadow-lg">
      <div>
        <If condition={!!post?.imageUrl}>
          <Link className="w-full" href={`/post/${post?.id}`}>
            <img
              className="object-cover w-full h-48 "
              src={post?.imageUrl || ''}
              alt="Post Image"
            />
          </Link>
        </If>
      </div>
      <div className="flex flex-col justify-between flex-1 p-6 bg-white">
        <div className="flex-1">
          <Link href={`/post/${post?.id}`} className="block mt-2">
            <p className="text-xl font-semibold text-gray-900">
              {HighlightText(post?.title || '', query.search || '')}
            </p>
            <p className="mt-3 text-sm italic text-gray-400 line-clamp-4">
              {post?.description}
            </p>
            <p
              id="content"
              className="mt-3 text-base text-gray-500 line-clamp-4"
            >
              {post?.content}
            </p>
          </Link>
        </div>
        <div className="flex items-center mt-6">
          <div className="flex-shrink-0">
            <Link href={`/post/${post?.id}`}>
              <span className="sr-only">{post?.user?.name}</span>
              <Avatar src={post?.user?.profilePicture || ''} />

              {/* <img
                className="rounded-full"
                src={post?.user?.profilePicture || ''}
                alt="User profile"
                width={40}
                height={40}
              /> */}
            </Link>
          </div>
          <div className="ml-3">
            <p className="text-sm font-medium text-gray-900">
              <Link href={`/post/${post?.id}`} className="hover:underline">
                {HighlightText(post?.user?.name || '', query.search || '')}
              </Link>
            </p>
            <div className="flex space-x-1 text-sm text-gray-500">
              <p>{formatDate(post?.createdAt)}</p>
              <span aria-hidden="true">&middot;</span>
              <span id="reading-time">
                {getReadingTime(post?.content || '')} read
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
