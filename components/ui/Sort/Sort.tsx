interface ISortProp {
  children: React.ReactChild;
  title: string;
  open: boolean;
}
const Sort: React.FC<ISortProp> = ({ title, children }) => {
  return (
    <div>
      <div className="flex items-center gap-3">
        <h1 className="text-sm">{title}</h1>
        {children}
      </div>
    </div>
  );
};

export default Sort;
