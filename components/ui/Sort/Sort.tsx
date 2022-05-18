interface ISortProp {
  children: React.ReactChild;
  title: string;
}
const Sort: React.FC<ISortProp> = ({ title, children }) => {
  return (
    <div>
      <div className="flex items-center gap-3">
        <h1 className="text-sm">{title}</h1>
        {children}
      </div>

      {/* component to experiment filter dropdown on desktop */}
    </div>
  );
};

export default Sort;
