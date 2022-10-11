import React from "react";
import Image from "next/image";
import { Text, Spacer, useTheme } from "@nextui-org/react";

function Navbar() {
  return (
    <div className="flex w-full items-center justify-center px-[20px] bg-slate-900">
      <Image src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png" width={70} height={70} />
      <Text color="white" h2>
        P
      </Text>
      <Text color="white" h3>
        okemon
      </Text>
      <Spacer css={{ flex: 1 }} />
      <Text color="white">favoritos</Text>
    </div>
  );
}

export default Navbar;
