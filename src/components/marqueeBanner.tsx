export const MarqueeBannerComp = ({}) => {
  return (
    <section className="pt-12 sm:pt-0">
      <OtherMarquee>
        <div className="inline-flex items-center">
          <span>#TOTHEMOUN</span>
        </div>
        <div className="inline-flex items-center">
          <span>#TOTHEMOUN</span>
        </div>
        <div className="inline-flex items-center">
          <span>#TOTHEMOUN</span>
        </div>
        <div className="inline-flex items-center">
          <span>#TOTHEMOUN</span>
        </div>
        <div className="inline-flex items-center">
          <span>#TOTHEMOUN</span>
        </div>
        <div className="inline-flex items-center">
          <span>#TOTHEMOUN</span>
        </div>
        <div className="inline-flex items-center">
          <span>#TOTHEMOUN</span>
        </div>
        <div className="inline-flex items-center">
          <span>#TOTHEMOUN</span>
        </div>
      </OtherMarquee>
    </section>
  );
};

const OtherMarquee = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-fit flex font-bebas font-extrabold items-center whitespace-nowrap overflow-hidden gap-10 lg:gap-20 relative animate-fasterMarquee text-7xl xl:text-9xl text-black uppercase tracking-tighter">
      {children}
    </div>
  );
};
