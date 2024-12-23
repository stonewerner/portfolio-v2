import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CanvasRevealEffect } from "./ui/CanvasRevealEffect";

const Education = () => {
  return (
    <section id="education" className="w-full py-20">
      <h1 className="heading text-white">
        My <span className="text-purple">education</span>
      </h1>
      <div className="my-20 w-full">
        <Card
          title="University of California, Berkeley"
          icon={<AceternityIcon order="Cal" />}
          des="Graduated with a degree in Computer Science. Gained comprehensive knowledge in Artifical Intelligence, Computer Security, and Efficient Algorithms, preparing me for a successful career in web development and software engineering."
        >
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-gradient-to-r from-[#010133] to-[#FC9313] rounded-3xl overflow-hidden"
            colors={[
              [0, 38, 118], // Darker blue
              [253, 181, 21], // Gold
            ]}
            dotSize={2}
          />
        </Card>
      </div>
    </section>
  );
};

export default Education;

const Card = ({
  title,
  icon,
  children,
  des,
}: {
  title: string;
  icon: React.ReactNode;
  children?: React.ReactNode;
  des: string;
}) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="border border-[#FC9313]/[0.2] group/canvas-card flex items-center justify-center
 dark:border-[#FC9313]/[0.2] w-full mx-auto p-4 relative h-[35rem] rounded-3xl"
      style={{
        background: "#010133",
        backgroundImage: "linear-gradient(90deg, #010133 0%, #010122 100%)",
    }}
    >

      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="h-full w-full absolute inset-0"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-20 px-10 max-w-3xl">
        <div className="text-center group-hover/canvas-card:-translate-y-4 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] 
        group-hover/canvas-card:opacity-0 transition duration-200 w-full flex items-center justify-center">
          {icon}
        </div>
        <h2 className="text-[#FC9313] text-center text-4xl opacity-0 group-hover/canvas-card:opacity-100
            relative z-10 mt-4 font-bold group-hover/canvas-card:-translate-y-2 transition duration-200">
          {title}
        </h2>
        <p className="text-lg opacity-0 group-hover/canvas-card:opacity-100
         relative z-10 mt-4 text-white text-center
         group-hover/canvas-card:-translate-y-2 transition duration-200">
          {des}
        </p>
      </div>
    </div>
  );
};

const AceternityIcon = ({ order }: { order: string }) => {
  return (
    <div>
      <button className="relative inline-flex overflow-hidden rounded-full p-[1px]">
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite]
            bg-[conic-gradient(from_90deg_at_50%_50%,#FC9313_0%,#010133_50%,#FC9313_100%)]" />
        <span className="inline-flex h-full w-full cursor-pointer items-center 
            justify-center rounded-full bg-[#010133] px-5 py-2 text-[#FC9313] backdrop-blur-3xl font-bold text-2xl">
          {order}
        </span>
      </button>
    </div>
  );
};

export const Icon = ({ className, ...rest }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};