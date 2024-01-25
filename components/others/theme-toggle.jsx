import { Toggle } from "@/components/ui/toggle";
import SunIcon from "@/assets/svg/SunIcon";
import MoonIcon from "@/assets/svg/MoonIcon";

export function ThemeToggle() {
  return (
    <div className="bg-white dark:bg-inherit dark:border-white rounded-3xl p-2 space-y-6 border w-max">
      <button
        type="button"
        className="block bg-[#34CAA5]  p-2 rounded-full w-max"
      >
        <SunIcon />
      </button>
      <button type="button" className="rounded-full block w-max mx-auto">
        <MoonIcon />
      </button>
    </div>
    //  <div className="flex items-center justify-center h-screen bg-gray-100 dark:bg-gray-900">
    //     <Toggle aria-label="Toggle dark mode" variant="outline">
    //       <SunIcon className="mr-2 h-4 w-4 dark:hidden" />
    //       <MoonIcon className="mr-2 h-4 w-4 hidden dark:block" />
    //       <span className="dark:hidden">Light Mode</span>
    //       <span className="hidden dark:block">Dark Mode</span>
    //     </Toggle>
    //   </div>
  );
}
