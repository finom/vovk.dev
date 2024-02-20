const Title = () => {
  return (
    <div
      className={`
      bg-gradient-to-br from-[#f2f2fd] to-[#f7f7ff]
      dark:bg-gray-950 dark:text-white dark:[background-image:none]
      p-[3px] flex items-center justify-between w-full py-1`}
    >
      <div className="flex gap-[4px] ml-[8px] py-1">
        <div className="rounded-full h-[0.7rem] w-[0.7rem] bg-[#EB6B5E] dark:bg-white/20" />
        <div className="rounded-full h-[0.7rem] w-[0.7rem] bg-[#F3BD50] dark:bg-white/20" />
        <div className="rounded-full h-[0.7rem] w-[0.7rem] bg-[#62C454] dark:bg-white/20" />
      </div>
      <div className="w-[45px]" />
    </div>
  );
};

export default Title;
