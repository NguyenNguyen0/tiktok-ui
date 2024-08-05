import Header from '~/components/Layouts/components/Header';

function DefaultLayout({ children }) {
    return (
        <div>
            <Header />
            {children}
        </div>
    );
}

export default DefaultLayout;
