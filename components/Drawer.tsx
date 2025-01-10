import { useState } from "preact/hooks";
import { JSX } from "preact";
import { ChevronLeft, ChevronRight } from "tabler_icons_tsx/";
import IconButton from "./IconButton.tsx";

interface DrawerProps {
  children: JSX.Element | JSX.Element[];
  onToggle?: (isOpen: boolean) => void;
}

export default function Drawer({ children, onToggle }: DrawerProps) {
  const [isOpen, setIsOpen] = useState(true);

  const handleToggle = () => {
    const newState = !isOpen;
    setIsOpen(newState);
    onToggle?.(newState);
  };

  return (
    <div class={`fixed left-0 top-0 h-full bg-white shadow-lg transition-all duration-300 ${isOpen ? "w-64" : "w-16"}`}>
      <div class="flex justify-end p-2">
        <IconButton
          onClick={handleToggle}
          title={isOpen ? "Collapse menu" : "Expand menu"}
        >
          {isOpen ? <ChevronLeft class="w-6 h-6" /> : <ChevronRight class="w-6 h-6" />}
        </IconButton>
      </div>
      <div class="overflow-y-auto h-[calc(100vh-4rem)]">
        {children}
      </div>
    </div>
  );
} 