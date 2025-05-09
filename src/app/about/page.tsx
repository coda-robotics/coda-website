export default function Careers_Section() {
  return (

    <section className="px-4 sm:px-6 lg:px-32">
      <div className="items-start px-[22px] sm:px-[20px] lg:px-[105px]">
        {/* Left: Heading and Description */}
        <div>
          <h1 className="coda-font text-[40px] mb-8 mt-8">ABOUT US</h1>
          <div
            style={{
              fontFamily: 'Inter, sans-serif',
              fontWeight: 400,
              fontSize: 16,
              lineHeight: '35px',
              letterSpacing: 0,
              verticalAlign: 'middle',
              wordWrap: 'break-word',
              overflowWrap: 'break-word',
              maxWidth: '100%', // or remove for full width of column
              color: '#000',
            }}
            className="space-y-5"
          >
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.<br/><br/>
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<br/><br/>
            Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris.<br/><br/>
            Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper.<br/><br/>
            </p>
         </div>
        </div>
        {/* Right: Roles */}
      </div>
    </section>
  );
}