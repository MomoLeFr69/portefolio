import { cn } from "../utils/cn";

const btnClass =
  "hover:bg-secondary hover:text-black text-white duration-200 p-2 rounded";

const Header = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn(
        className,
        "flex justify-between bg-blue-400 rounded-b p-3"
      )}
    >
      <div className="font-bold text-white text-3xl cursor-pointer">
        MD Portefolio
      </div>
      <div className="flex space-x-8 align-center">
        <a href="#" className={btnClass}>
          Home
        </a>
        <a href="#" className={btnClass}>
          Projet
        </a>
        <a href="#" className={btnClass}>
          Skills
        </a>
        <a href="#" className={btnClass}>
          Contact
        </a>
      </div>
    </div>
  );
};

export default Header;
