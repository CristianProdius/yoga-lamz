interface StatProps {
  value: string;
  label: string;
}

const Stat: React.FC<StatProps> = ({ value, label }) => (
  <div className="flex flex-col items-center">
    <span className="text-4xl font-bold text-white">{value}</span>
    <span className="text-sm text-white/80 mt-2">{label}</span>
  </div>
);

const Statistics: React.FC = () => {
  return (
    <div className="bg-[#1B392A] py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center">
            <Stat value="3.2k" label="World champions" />
            <div className="mx-8 h-12 w-px bg-white/20" />
            <Stat value="1.8%" label="Runner up champions" />
            <div className="mx-8 h-12 w-px bg-white/20" />
            <Stat value="4.5M" label="Sea games participation" />
          </div>

          <div className="max-w-xs">
            <p className="text-white/90 text-sm leading-relaxed">
              Once we receive your consult request we match you up with a
              trainer. This is to ensure that your unique goals, needs, and
              personalities align.
            </p>
            <button className="mt-4 text-[#C5A05E] hover:text-[#D4B06F] font-medium">
              Join Member
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
