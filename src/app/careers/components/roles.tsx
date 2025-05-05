import Link from "next/link";

export default function Roles() {
  const roles = [
    { title: "RESEARCH ENGINEER, RL", link: "/apply/research-engineer" },
    { title: "DATA ENGINEER, INFRASTRUCTURE", link: "/apply/data-engineer" },
    { title: "ML ENGINEER, TRAINING INFRASTRUCTURE", link: "/apply/ml-engineer" },
  ];

  return (
    <div className="max-w-2xl mx-auto mt-12">
      {roles.map((role, idx) => (
        <div key={role.title} className="flex items-center justify-between py-6 border-b border-black">
          <span className="coda-font text-[17 px]">{role.title}</span>
          <Link href={role.link} className="coda-font text-[11 px]">
            Apply Now
          </Link>
        </div>
      ))}
      <button className="mt-15 bg-black rounded" style={{
        height: '34px',
        width: '101px',
        color: '#fff',
        fontSize: '14px',
        letterSpacing: '0px',
      }}>
        SEE MORE
      </button>
    </div>
  );
}