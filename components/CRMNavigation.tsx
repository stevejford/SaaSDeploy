import { JSX } from "preact";
import { 
  Dashboard, 
  Users, 
  List, 
  UserPlus,
  Calendar, 
  Receipt, 
  ChartBar,
  Settings 
} from "tabler_icons_tsx/";

interface NavItemProps {
  icon: JSX.Element;
  label: string;
  href: string;
  isOpen: boolean;
  children?: NavItemProps[];
}

function NavItem({ icon, label, href, isOpen, children }: NavItemProps) {
  return (
    <div class="mb-2">
      <a 
        href={href}
        class="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg"
      >
        <div class="w-6 h-6">
          {icon}
        </div>
        {isOpen && <span class="ml-3">{label}</span>}
      </a>
      {isOpen && children && (
        <div class="ml-8">
          {children.map((child) => (
            <NavItem {...child} isOpen={isOpen} />
          ))}
        </div>
      )}
    </div>
  );
}

interface CRMNavigationProps {
  isOpen: boolean;
}

export default function CRMNavigation({ isOpen }: CRMNavigationProps) {
  const menuItems: NavItemProps[] = [
    {
      icon: <Dashboard class="w-6 h-6" />,
      label: "Dashboard",
      href: "/dashboard",
      isOpen,
    },
    {
      icon: <Users class="w-6 h-6" />,
      label: "Customers",
      href: "/customers",
      isOpen,
      children: [
        {
          icon: <List class="w-6 h-6" />,
          label: "All Customers",
          href: "/customers/all",
          isOpen,
        },
        {
          icon: <UserPlus class="w-6 h-6" />,
          label: "Add Customer",
          href: "/customers/new",
          isOpen,
        },
      ],
    },
    {
      icon: <Calendar class="w-6 h-6" />,
      label: "Appointments",
      href: "/appointments",
      isOpen,
    },
    {
      icon: <Receipt class="w-6 h-6" />,
      label: "Invoices",
      href: "/invoices",
      isOpen,
    },
    {
      icon: <ChartBar class="w-6 h-6" />,
      label: "Reports",
      href: "/reports",
      isOpen,
    },
    {
      icon: <Settings class="w-6 h-6" />,
      label: "Settings",
      href: "/settings",
      isOpen,
    },
  ];

  return (
    <nav class="py-4">
      {menuItems.map((item) => (
        <NavItem {...item} />
      ))}
    </nav>
  );
} 