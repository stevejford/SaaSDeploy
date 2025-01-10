import { JSX } from "preact";
import { ChevronLeft, ChevronRight } from "tabler_icons_tsx/";

interface IconButtonProps extends JSX.HTMLAttributes<HTMLButtonElement> {
  title: string;
  children?: JSX.Element | JSX.Element[] | string;
}

export default function IconButton({ title, children, ...props }: IconButtonProps) {
  return (
    <button
      type="button"
      title={title}
      class="p-2 hover:bg-gray-100 rounded-full transition-colors"
      {...props}
    >
      {children}
    </button>
  );
} 