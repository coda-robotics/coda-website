import Link from 'next/link';

interface NavLink {
  path: string;
  label: string;
}

interface NavLinksProps {
  links: NavLink[];
  on_link_click?: () => void;
  is_mobile?: boolean;
}

export const NavLinks = ({ links, on_link_click, is_mobile = false }: NavLinksProps) => {
  const link_classes = is_mobile
    ? "text-black text-xl font-medium hover:underline"
    : "text-black hover:text-gray-600 text-[14px] transition";

  return (
    <nav className={is_mobile ? "flex flex-col space-y-6 mt-12" : "hidden md:flex space-x-8"}>
      {links.map(({ path, label }) => (
        <Link
          key={path}
          href={path}
          className={link_classes}
          onClick={on_link_click}
        >
          {label}
        </Link>
      ))}
    </nav>
  );
}; 