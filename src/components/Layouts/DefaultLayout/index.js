import Header from '~/components/Layouts/components/Header';
import Sidebar from '~/components/Layouts/components/SideBar';

function DefaultLayout({ children }) {
    return (
        <div>
            <Header />
            <Sidebar />
            {children}
        </div>
    );
}

export default DefaultLayout;
