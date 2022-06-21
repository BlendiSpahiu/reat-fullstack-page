import { ReactElement } from 'react';
import { Navbar } from '../Navbar/Navbar';
import { AppLayoutProps } from './AppLayout.props';

export const AppLayout = ({ content }: AppLayoutProps): ReactElement => (
  <>
    <Navbar />
    <main className="mx-6 mt-16 md:mx-40">{content}</main>
  </>
);
