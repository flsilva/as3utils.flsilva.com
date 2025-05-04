import { twMerge } from "tailwind-merge";

import { textClassName } from "./typography/textClassName";
import { A } from "./typography/Typography";

interface MainMenuProps {
  readonly onItemClick?: () => void;
}

export const MainMenu = ({ onItemClick }: MainMenuProps) => {
  const menuItemClassName =
    "flex justify-center w-full border-b border-primary-text mt-1 pt-4 pb-4 lg:border-b-0 lg:justify-normal lg:ml-8 lg:p-0 lg:w-auto";
  const menuItemLinkClassName = "font-bold hover:underline";
  const dynamicProps = onItemClick ? { onClick: onItemClick } : {};

  return (
    <nav className="w-full overflow-hidden mt-8 lg:mt-0">
      <ul className="flex flex-col items-center m-0 p-0 lg:flex-row lg:items-start lg:m-[-0.375rem_0_0_4rem]">
        <li className={menuItemClassName}>
          <A
            href="/docs/asdoc"
            className={twMerge(textClassName, menuItemLinkClassName)}
            {...dynamicProps}
          >
            ASDOC
          </A>
        </li>
        <li className={menuItemClassName}>
          <A
            href="https://github.com/flsilva/as3utils"
            className={twMerge(textClassName, menuItemLinkClassName)}
            target="_blank"
          >
            Source
          </A>
        </li>
        <li className={menuItemClassName}>
          <A
            href="/download/as3utils-1.0-distribution.zip"
            className={twMerge(textClassName, menuItemLinkClassName)}
            target="_blank"
          >
            Download
          </A>
        </li>
      </ul>
    </nav>
  );
};
