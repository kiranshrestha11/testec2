import React from "react";
import Image from "next/image";

const Footer2 = () => {
  return (
    <div className="flex flex-col items-center justify-center py-16">
      <Image
        src="/images/logo_white.jpg"
        alt="Waterflow technology"
        width="75"
        height="75"
      />
      <p className="mt-6 text-xs leading-none text-bold text-purple lg:text-sm dark:text-gray-50">
        2023 Waterflow Technology. All Rights Reserved.
      </p>
    </div>
  );
};

export default Footer2;
