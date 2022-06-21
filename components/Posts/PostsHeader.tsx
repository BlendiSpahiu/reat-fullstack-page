import { SearchIcon } from '@heroicons/react/outline';
import { TextInput } from '@ornio-no/ds';
import { ReactElement } from 'react';
import { SortEnums } from '../../enums/Sort/Sort.enum';
import { PostsHeaderProps } from './Post.props';

export const PostsHeader = ({
  sortQuery,
  handleSort,
  searchResult,
  handleSearch,
}: PostsHeaderProps): ReactElement => {
  // enums
  const { DATE, AUTHOR } = SortEnums;

  return (
    <div className="mt-3 sm:mt-4 lg:grid lg:grid-cols-4 lg:gap-5 lg:items-center">
      <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
        Poster
      </h2>
      <form className="flex items-center col-start-4 mt-6 lg:mt-0">
        <TextInput
          id="search"
          addonClassName="bg-white"
          className="mb-4 md:mb-0"
          defaultValue={searchResult || ''}
          onChange={handleSearch}
          inlineAddon={<SearchIcon className="w-5 h-5 text-gray-500" />}
          select
          selectPosition="right"
          selectProps={{
            onChange: handleSort,
            className: 'bg-transparent pl-3 text-black',
            ...(sortQuery ? { value: sortQuery } : { defaultValue: 'Sort' }),
          }}
          options={[
            { value: DATE, label: 'Date' },
            { value: AUTHOR, label: 'Author' },
          ]}
          inputClassName="rounded-none border-r w-[200px]"
          placeholder="Search posts"
        />
      </form>
    </div>
  );
};
