// components/home_footernav.js
import StayUpdated from './stay_update';
import ExternalLinks from './external_links';

export function FooterNav() {
  return (
    <footer className="px-6 md:px-28 text-black pt-20">
      <div className="flex flex-col md:flex-row justify-between items-start gap-10 space-x-30">
        {/* Email subscription section */}
        <div className="w-full md:w-1/2 flex md:justify-end">
          <StayUpdated />
        </div>

        {/* Navigation section */}
        <nav className="w-full md:w-1/2 flex flex-col sm:flex-row space-x-[70px] pt-4">
          <ExternalLinks />
        </nav>
      </div>
    </footer>
  );
}