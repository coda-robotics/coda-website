import Link from 'next/link';
import { usePathname } from 'next/navigation';

const nav_items = [
  { name: 'HOME', href: '/' },
  { name: 'INFRASTRUCTURE', href: '/infrastructure' },
  { name: 'NEWS', href: '/news' },
  { name: 'STORIES', href: '/stories' },
  { name: 'COMPANY', href: '/company' },
];

export default function SideNav() {
  const path_name = usePathname();

  return (
    <nav className="side-nav">
      <ul>
        {nav_items.map(item => (
          <li key={item.name}>
            <Link
              href={item.href}
              className={`block py-2 px-2${
                path_name === item.href
                  ? 'font-semibold underline'
                  : ''
              }`}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
