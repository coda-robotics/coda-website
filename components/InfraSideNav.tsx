import Link from 'next/link';
import { usePathname } from 'next/navigation';

const nav_items = [
  { name: 'HOME', href: '/', hidden: false },
  { name: 'INFRASTRUCTURE', href: '/infrastructure', hidden: false },
  { name: 'NEWS', href: '/infrastructure/news', hidden: true },
  { name: 'CASE STUDIES', href: '/stories', hidden: true },
  { name: 'COMPANY', href: '/company', hidden: false },
];

export default function SideNav() {
  const path_name = usePathname();

  return (
    <nav className="side-nav">
      <ul>
        {nav_items
          .filter(item => !item.hidden)
          .map(item => (
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