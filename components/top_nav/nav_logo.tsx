import Link from 'next/link';

interface NavLogoProps {
  logo_url: string;
  company_name: string;
}

export const NavLogo = ({ logo_url, company_name }: NavLogoProps) => {
  return (
    <Link href="/" className="flex items-center cursor-pointer">
      <img src={logo_url} alt={`${company_name} Logo`} className="w-7 h-7 mr-5" />
      <span className="text-[30px] text-black font-[400]">{company_name}</span>
    </Link>
  );
}; 