import { Outlet } from 'react-router-dom';

export function Footer() {
    return (
        <>
            <Outlet />
            <h1>Footer Only</h1>
        </>
    )
}