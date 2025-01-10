/** @jsx h */
import { h } from "preact";
import { useEffect } from "preact/hooks";

interface ClerkProviderProps {
  publishableKey: string;
}

declare global {
  interface Window {
    Clerk: {
      load: (options: { publishableKey: string }) => Promise<void>;
    };
  }
}

export default function ClerkProvider({ publishableKey }: ClerkProviderProps) {
  useEffect(() => {
    if (window.Clerk) {
      window.Clerk.load({
        publishableKey,
      });
    }
  }, [publishableKey]);

  return null;
} 