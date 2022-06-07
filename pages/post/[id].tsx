import { ReactElement } from 'react';
import { Post } from '../../components/Posts/Post';
import { AppLayout } from '../../components/templates/AppLayout';

const PostPage = (): ReactElement => <AppLayout content={<Post />} />;

export default PostPage;
