import React from "react";
import { Link } from "react-router-dom";

export default function Button({ children, disabled, to, type, onClick }) {
  const base = `bg-violet-400 uppercase 
  font-semibold text-slate-800 text-sm 
  inline-block rounded-full tracking-wide 
  hover:bg-violet-500 hover:text-slate-200 hover:border-violet-700 transition-colors 
  duration-300 focus:outline-none focus:ring 
  focus:ring-violet-300 focus:ring-offset-2
  disabled:cursor-not-allowed disabled:opacity-50 
  md:text-base border-2 border-violet-400`;

  const styles = {
    primary: base + ` py-1.5 px-4 md:px-6 md:py-2.5`,
    small: base + ` text-xs px-4 py-2 md:px-5 md:py-2.5`,
    round: base + ` px-2.5 py-1 md:px-3.5 md:py-2 text-sm`,
    secondary: ` uppercase 
    font-semibold text-slate-500 text-sm 
    inline-block rounded-full tracking-wide 
    hover:bg-slate-200 hover:text-slate-800 hover:border-slate-600 transition-colors 
    duration-300 focus:outline-none focus:ring 
    focus:ring-slate-300 focus:ring-offset-2
    disabled:cursor-not-allowed disabled:opacity-50 
    md:text-base border-2 border-slate-300 px-4 py-1.5 md:px-6 md:py-2.5`,
  };

  if (to)
    return (
      <Link to={to} className={styles[type]}>
        {children}
      </Link>
    );

  if (onClick)
    return (
      <button disabled={disabled} className={styles[type]} onClick={onClick}>
        {children}
      </button>
    );

  return (
    <button disabled={disabled} className={styles[type]}>
      {children}
    </button>
  );
}
