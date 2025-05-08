import Link from "next/link";

export default function Roles() {
  const roles = [
    { title: "RESEARCH ENGINEER, RL", link: "/apply/research-engineer" },
    { title: "DATA ENGINEER, INFRASTRUCTURE", link: "/apply/data-engineer" },
    { title: "ML ENGINEER, TRAINING INFRASTRUCTURE", link: "/apply/ml-engineer" },
  ];

  return (
    <div className="max-w-2xl mx-auto mt-21 text-[15px]">
      {roles.map((role, idx) => (
        <div key={role.title} className="flex items-center justify-between py-6 border-b border-black">
          <span className="coda-font text-[17 px]">{role.title}</span>
          <Link href={role.link} className="coda-font text-[14px]">
            Apply Now
          </Link>
        </div>
      ))}
      <button className="mt-15 bg-black rounded hover:bg-white hover:text-black text-white border hover:border-black" style={{
        height: '34px',
        width: '101px',
        fontSize: '14px',
        letterSpacing: '0px',
      }}>
        See More
      </button>
    </div>
  );
}