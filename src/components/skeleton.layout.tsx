import { Header } from './header.layout';
import { Footer } from './footer.layout';
import { ReactNode } from 'react';

interface Props {
    children: ReactNode;
}

export const Skeleton = ({ children }: Props): JSX.Element => {



    return (
        <>
            <Header />
            <main>

                {children}

            </main>
            <Footer />
        </>
    );
};