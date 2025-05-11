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
    <nav className="fixed left-8 pt-8">
      <ul className="space-y-4">
        {nav_items
          .filter(item => !item.hidden)
          .map(item => (
            <li key={item.name}>
              <Link
                href={item.href}
                className={`block coda-font text-sm hover:text-gray-600 ${
                  path_name === item.href
                    ? 'font-semibold'
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