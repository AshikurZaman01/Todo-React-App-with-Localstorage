import { Outlet } from 'react-router-dom';

const Roots = () => {
    return (
        <div className='bg-purple-800'>
            <div className='container mx-auto'>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Roots;