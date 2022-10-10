import { Link } from 'react-router-dom';

export const links: Array<{ name: string; path: string }> = [
    { name: 'Home', path: '/Home' },
    { name: 'Dashboard', path: '/Dashboard' },
    { name: 'SPA Config', path: '/' },
    { name: 'Network Config', path: '/' },
    { name: 'MQTT Config', path: '/' },
    { name: 'Directory', path: '/' },
    { name: 'File Uploader', path: '/' },
    { name: 'File Remover', path: '/' },
    { name: 'Restart ESP', path: '/' },
];

export function NavigationMenu({ onClick }: { onClick(): void }) {
    return (
        <nav className='grid grid-cols-1 gap-7'>
            {links.map((item) => (
                <Link key={item.name} to={item.path} className='-m-3 p-3 flex items-center rounded-lg hover:bg-gray-50' onClick={() => onClick()}>
                    <div className='flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-gradient-to-r from-purple-600 to-indigo-600 text-white'>
                        {/* <item.icon className='h-6 w-6' aria-hidden='true' /> */}
                    </div>
                    <div className='ml-4 text-base font-medium text-gray-900'>{item.name}</div>
                </Link>
            ))}
        </nav>
    );
}
