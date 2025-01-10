import { JSX } from "preact";
import { useState } from "preact/hooks";
import Drawer from "./Drawer.tsx";
import CRMNavigation from "./CRMNavigation.tsx";

interface CRMLayoutProps {
  children: JSX.Element | JSX.Element[];
}

export default function CRMLayout({ children }: CRMLayoutProps) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div class="min-h-screen bg-gray-50">
      <Drawer onToggle={(open) => setIsOpen(open)}>
        <CRMNavigation isOpen={isOpen} />
      </Drawer>
      <main class={`transition-all duration-300 ${isOpen ? "ml-64" : "ml-16"} p-6`}>
        {children}
      </main>
    </div>
  );
} 