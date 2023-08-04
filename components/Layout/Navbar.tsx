import { FC } from "react";

export const Navbar: FC = () => {
  return (
    <div className="flex h-[50px] sm:h-[60px] border-b border-neutral-300 py-2 px-2 sm:px-8 items-center justify-between">
      <div className="font-bold text-3xl flex items-center">
      <a
          className="ml-2 hover:opacity-100"
          href="https://beyondterra.org/"
        >
          Beyond Terra |
        </a>

        <a
          className="ml-2 hover:opacity-50"
          href="https://terrabot-five.vercel.app/"
        >
          Terra AI 🌲
        </a>
      </div>
      <p>This is an initial prototype — links and information may be inaccurate. Please email <a href="mailto:rishi@beyondterra.org" style={{ color: 'green' }}>rishi@beyondterra.org</a> with any feedback.</p>
    </div>
  );
};
