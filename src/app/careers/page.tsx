import { FooterNav } from '../../../components/footer_nav/home_footernav';
import { TopNav } from '../../../components/home_topnav';
import Roles from "./components/roles";

export default function Careers_Section() {
  return (

    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <TopNav/>
      <div className="grid grid-cols-1 md:grid-cols-2 items-start px-[22px] sm:px-[20px] lg:px-[105px]">
        {/* Left: Heading and Description */}
        <div>
          <h1 className="coda-font text-[40px] mb-8 mt-8">CAREERS</h1>
          <div
            style={{
              fontFamily: 'Inter, sans-serif',
              fontWeight: 400,
              fontSize: 17,
              lineHeight: '35px',
              letterSpacing: 0,
              verticalAlign: 'middle',
              wordWrap: 'break-word',
              overflowWrap: 'break-word',
              maxWidth: '80%', // or remove for full width of column
              color: '#000',
            }}
            className="space-y-5"
          >
            <p>
              We are a small group of researchers and engineers working to provide robust data infrastructure to power the future of embodied intelligence.
            </p>
            <p>
              We’re hiring cross-domain researchers & engineers, who are determined to make an impact to the future of intelligent robots, at our headquarters in San Francisco, CA.
            </p>
            <p>
              The opportune moment to build the next generation of robotics is now. JOIN US!
            </p>
          </div>
        </div>
        {/* Right: Roles */}
        <div>
          <Roles />
        </div>
      </div>
        <FooterNav />
    </section>
  );
}