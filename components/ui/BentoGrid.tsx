import { cn } from "@/lib/utils";
import { AuroraBackground } from "./GradientBg";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  id,
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  className?: string;
  title?: string;
  description?: string;
  id: number;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {
  return (
    <div
      className={cn(
        "row-span-1 relative overflow-hidden rounded-3xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4 border border-white/[0.1]",
        className
      )}
      style={{
        background: "rgb(2,0,36)",
        backgroundColor:
          "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(13,35,69,1) 62%, rgba(0,50,96,1) 100%)",
      }}
    >
      <div className={cn(`${id === 3} && 'flex justify-center h-full'`)}>
        <div className={cn("w-full h-full absolute", id === 2 && "mt-10")}>
          {img && (
            <img
              src={img}
              alt={img}
              className={cn(imgClassName, "object-cover")}
            />
          )}
        </div>
        {id === 3 && (
          <AuroraBackground>
            <div></div>
          </AuroraBackground>
        )}
        <div
          className={cn(
            titleClassName,
            "group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col  px-5 p-5 lg:p-10"
          )}
        >
          <div
            className="font-sans font-bold text-lg text-neutral-600 dark:text-neutral-200 lg:text-3xl max-w-96 z-10"
            style={{ WebkitTextStroke: "1px black" }}
          >
            {title}
          </div>
          <div className="font-sans font-bold text-lg text-neutral-600 opacity-70 dark:text-neutral-200 lg:text-xl max-w-96 z-10">
            {description}
          </div>
        </div>
      </div>
    </div>
  );
};
