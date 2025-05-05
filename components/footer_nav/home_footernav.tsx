// components/home_footernav.js
import ExternalLinks from './external_links';
import StayUpdated from './stay_update';
export function FooterNav() {
  return (
    <footer className="px-60">
       <div className="grid grid-cols-2 w-full items-start">
        <div className="flex justify-start">
          <StayUpdated />
        </div>
        <div className="flex justify-start">
          <ExternalLinks />
        </div>
      </div>
    </footer>
  );
}
