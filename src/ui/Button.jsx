import React from "react";
import { Link } from "react-router-dom";

export default function Button({ children, disabled, to, type, onClick }) {
  const base = `  uppercase 
  font-semibold text-slate-800 text-sm  border-slate-300
  inline-block rounded-full tracking-wide 
    hover:border-slate-400  transition-colors 
  duration-300 focus:outline-none focus:ring 
  focus:ring-slate-300 focus:ring-offset-2
  disabled:cursor-not-allowed disabled:opacity-50 
  md:text-base border-2 active:scale-95`;

  const primary = `  border-violet-400 bg-violet-400 py-1.5 px-4 md:px-6 md:py-2.5
    hover:border-violet-700 hover:bg-violet-300 
  duration-300 focus:outline-none focus:ring 
  focus:ring-violet-300 focus:ring-offset-2`;

  const styles = {
    primary: base + primary,

    small: base + primary + `   text-xs px-2 py-2 md:px-3 md:py-2.5`,

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
