import { ParsedUrlQuery } from 'querystring';
import { ChangeEvent } from 'react';
import { PostFieldsFragment } from '../../gql/gen/graphql';

export interface PostFooterProps {
  post: PostFieldsFragment | null;
}

export interface PostsHeaderProps {
  searchResult: string | string[] | null;
  sortQuery: string | string[] | null;
  handleSearch: (value: ChangeEvent<HTMLInputElement>) => void;
  handleSort: (value: ChangeEvent<HTMLSelectElement>) => void;
}

export interface PostProps extends PostFooterProps {
  query: ParsedUrlQuery;
}
