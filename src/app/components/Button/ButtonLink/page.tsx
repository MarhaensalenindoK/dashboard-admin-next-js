'use client'

import Link from "next/link";
import React from "react";
import FontAwesomeIcon from "@/app/components/FontAwesome/page";
import { usePathname } from "next/navigation";

interface ButtonLinkProps {
  label?: string;
  link: string;  // Assuming link should be a string URL
  className?: string;
  icon?: string;  // If icon is a string representing icon names
}

const ButtonLink = ({
  label,
  link,
  className,
  icon,
} : ButtonLinkProps) => {

  const pathname = usePathname();

  return (
    <Link
      href={link}
      className={`p-3 ${
        pathname === link
          ? "text-white bg-blue-500"
          : "text-gray-400 hover:text-gray-500"
      }
      rounded-xl flex gap-2 ${className}`}
    >
      {icon && (
        <div className={`${!label && "mx-auto" }`}>
          <FontAwesomeIcon icon={["fas", icon]} />
        </div>
      )}
      {label && <p>{label}</p>}
    </Link>
  );
};

export default React.memo(ButtonLink);
