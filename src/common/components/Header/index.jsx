import { Outlet } from 'react-router-dom';

export function Header() {
    return (
        <>
            <h1>Header Only</h1>
            <Outlet />
        </>
    )
}