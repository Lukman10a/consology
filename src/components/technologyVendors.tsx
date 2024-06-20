import Image from "next/image";
import React from "react";

export default function TechnologyVendors() {
  return (
    <div className="flex items-center justify-between p-4 rounded-md bg-[#0000004D] text-white">
      <p>Our Technologies and vendors:</p>
      <div className="flex gap-8">
        <Image src={require("../../public/assets/microsoft.svg")} alt="" />
        <Image src={require("../../public/assets/teams.svg")} alt="" />
        <Image src={require("../../public/assets/sharepoint.svg")} alt="" />
        <Image src={require("../../public/assets/azure.svg")} alt="" />
        <Image src={require("../../public/assets/onedrive.svg")} alt="" />
        <Image src={require("../../public/assets/powerapps.svg")} alt="" />
        <Image src={require("../../public/assets/msexchange.svg")} alt="" />
      </div>
    </div>
  );
}
