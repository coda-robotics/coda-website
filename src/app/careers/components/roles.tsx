import Link from "next/link";

export default function Roles() {
  const roles = [
    { title: "RESEARCH ENGINEER, RL", link: "/hiring" },
    { title: "DATA ENGINEER, INFRASTRUCTURE", link: "/hiring" },
    { title: "ML ENGINEER, INFRASTRUCTURE", link: "/hiring" },
  ];

  return (
    <div className="max-w-2xl mx-auto mt-21 text-[15px]">
      {roles.map((role, idx) => (
        <div key={role.title} className="flex items-center justify-between py-6 border-b border-black">
          <span className="coda-font text-[17 px] 2">{role.title}</span>
          <Link href={role.link} className="coda-font text-[14px]">
            Apply Now
          </Link>
        </div>
      ))}
      <Link href="/hiring">
        <button className="mt-15 bg-black rounded hover:bg-white hover:text-black text-white border mb-4 hover:border-black" style={{
          height: '34px',
          width: '101px',
          fontSize: '14px',
          letterSpacing: '0px',
        }}>
          See More
        </button>
      </Link>
    </div>
  );
}