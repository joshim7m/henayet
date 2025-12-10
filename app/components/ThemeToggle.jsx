import useTheme from "@/hooks/useTheme";
import { Sun, Moon } from "lucide-react";

export const  ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
            onClick={toggleTheme}
            className="w-11 h-11 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center transition-colors"
          >
            {theme === "dark" ? (
              <Sun size={20} className="text-white" />
            ) : (
              <Moon size={20} className="text-gray-800" />
            )}
          </button>
  );
}