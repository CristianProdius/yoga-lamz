import { FC } from "react";

interface TeamMember {
  name: string;
  image: string;
  role?: string;
}

interface CoachingCard {
  title: string;
  description: string;
}

const OurTeam: FC = () => {
  const coachingInfo: CoachingCard = {
    title: "Personalized Coaching",
    description:
      "One-on-one sessions with our fitness and yoga experts. Get personalized guidance and encouragement to reach your specific goals.",
  };

  const teamMembers: TeamMember[] = [
    {
      name: "Clare Ford",
      image: "/girl1.png",
      role: "Fitness Expert",
    },
    {
      name: "Alicia Regis",
      image: "/girl2.png",
      role: "Yoga Instructor",
    },
  ];

  return (
    <section className="bg-[#f4f6ef] py-16 px-4">
      {/* Header */}
      <div className="max-w-7xl mx-auto">
        <p className="text-sm uppercase tracking-wide mb-2">OUR TEAM</p>
        <h2 className="text-4xl md:text-5xl font-light mb-12">Meet Our Team</h2>

        {/* Cards Container */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Coaching Card */}
          <div className="bg-[#1B392A] rounded-3xl p-8 text-white">
            <div className="h-full flex flex-col justify-between">
              <div>
                <p className="text-sm uppercase tracking-wide mb-4">
                  JOIN THE TEAM
                </p>
                <h3 className="text-2xl md:text-3xl font-light mb-4">
                  {coachingInfo.title}
                </h3>
                <p className="text-sm leading-relaxed opacity-90 mb-8">
                  {coachingInfo.description}
                </p>
              </div>
              <button className="bg-[#c9d1c3] text-[#1B392A] px-6 py-2 rounded-full text-sm hover:bg-opacity-90 transition-all w-fit">
                View more
              </button>
            </div>
          </div>

          {/* Team Member Cards */}
          {teamMembers.map((member, index) => (
            <div key={index} className="relative group">
              <div className="aspect-[3/4] rounded-3xl overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="mt-4 flex justify-between items-center">
                <h3 className="text-lg">{member.name}</h3>
                <button className="text-sm flex items-center gap-2 hover:opacity-80 transition-all">
                  More
                  <svg
                    className="w-4 h-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
