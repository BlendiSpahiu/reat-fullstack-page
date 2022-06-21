import { useRouter } from 'next/router';
import Image from 'next/image';
import { ReactElement } from 'react';
import { useGetPostByPkQuery } from '../../gql/gen/graphql';
import { replaceURLs } from '../../utils/replaceURLs';
import { PostFooter } from './PostFooter';

export const Post = (): ReactElement => {
  // hooks
  const router = useRouter();
  const { id } = router.query;

  // graphql hooks
  const { data: { post = null } = {} } = useGetPostByPkQuery({
    variables: {
      id: Number(id),
    },
  });
  return (
    <div className="relative py-16 overflow-hidden bg-white">
      <div className="relative px-0 lg:px-8">
        <div className="mx-auto text-lg max-w-prose">
          <Image
            src={post?.imageUrl || '/'}
            alt="Post pic"
            width={988}
            height={555.75}
            className="object-fit"
          />
        </div>
        <div className="mt-10">
          <h1>
            <span className="block text-base font-semibold tracking-wide text-indigo-600 uppercase">
              Introducing
            </span>
            <span className="block mt-2 text-3xl font-extrabold leading-8 tracking-tight text-gray-900 sm:text-4xl">
              {post?.title}
            </span>
          </h1>
          <p className="mt-8 text-xl leading-8 text-gray-500">
            {post?.description}
          </p>
        </div>
        <div
          className="mx-auto mt-10 prose prose-lg text-gray-500 whitespace-pre-wrap prose-indigo"
          dangerouslySetInnerHTML={{ __html: replaceURLs(post?.content || '') }}
        />
      </div>

      <PostFooter post={post} />
    </div>
  );
};
