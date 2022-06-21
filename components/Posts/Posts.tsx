/* eslint-disable @next/next/no-img-element */
import { useRouter } from 'next/router';
import { ChangeEvent, ReactElement, useEffect, useRef, useState } from 'react';
import { Order_By, useGetPostsQuery } from '../../gql/gen/graphql';
import { PostItem } from './PostItem';
import { PostsHeader } from './PostsHeader';

export const Posts = (): ReactElement => {
  // local state
  const [searchResult, setSearchResult] = useState<string | string[] | null>(
    null
  );
  const [sortQuery, setSortQuery] = useState<string | string[] | null>(null);

  // hooks
  const { push, query } = useRouter();

  // search params
  const searchParams = { _ilike: `%${query.search}%` };

  // graphql order by enums
  const { Desc } = Order_By;

  // or
  const or = {
    _or: [{ title: searchParams }, { user: { name: searchParams } }],
  };

  // graphql hooks
  const { data: { posts = null } = {} } = useGetPostsQuery({
    variables: {
      where: {
        status: { _eq: 1 },
        ...(query.search ? { ...or } : {}),
      },
      orderBy:
        query.sort === 'author'
          ? { user: { name: Desc } }
          : { created_at: Desc },
    },
  });

  // handlers
  const handleSearch = ({
    target: { value },
  }: ChangeEvent<HTMLInputElement>) => {
    setSearchResult(value);
    push({ search: `?search=${value}` });
  };
  const handleSort = ({
    target: { value },
  }: ChangeEvent<HTMLSelectElement>) => {
    setSortQuery(value);
    push({ search: `?sort=${value}` });
  };

  // use effect
  useEffect(() => {
    if (!query.search && searchResult) setSearchResult(null);
    if (query.search) setSearchResult(query.search);
  }, [query.search, searchResult]);

  return (
    <div className="px-4 pt-16 pb-20 bg-white sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
      <div className="relative mx-auto divide-y-2 divide-gray-200">
        <PostsHeader
          searchResult={searchResult}
          handleSearch={handleSearch}
          sortQuery={sortQuery}
          handleSort={handleSort}
        />
        <div className="grid gap-16 pt-10 mt-6 lg:grid-cols-2 lg:gap-x-5 lg:gap-y-12">
          {posts?.map((post) => (
            <PostItem key={post.id} post={post} query={query} />
          ))}
        </div>
      </div>
    </div>
  );
};
