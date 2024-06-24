import Image from "next/image";
import React from "react";

export default function TechnologyVendors() {
  return (
    <div className="flex items-center justify-between p-4 rounded-md bg-[#0000004D] text-white md:flex-col md:items-center gap-6">
      <p className="md:text-lg text-xl">Our Technologies and Vendors:</p>
      <div className="flex flex-wrap gap-4 md:gap-6 lg:gap-8 justify-center items-center">
        <div className="w-12">
          <Image
            src={require("../../public/assets/microsoft.svg")}
            alt="Microsoft"
            className="w-full h-auto"
          />
        </div>
        <div className="w-12">
          <Image
            src={require("../../public/assets/teams.svg")}
            alt="Teams"
            className="w-full h-auto"
          />
        </div>
        <div className="w-12">
          <Image
            src={require("../../public/assets/sharepoint.svg")}
            alt="SharePoint"
            className="w-full h-auto"
          />
        </div>
        <div className="w-12">
          <Image
            src={require("../../public/assets/azure.svg")}
            alt="Azure"
            className="w-full h-auto"
          />
        </div>
        <div className="w-12">
          <Image
            src={require("../../public/assets/onedrive.svg")}
            alt="OneDrive"
            className="w-full h-auto"
          />
        </div>
        <div className="w-12">
          <Image
            src={require("../../public/assets/powerapps.svg")}
            alt="PowerApps"
            className="w-full h-auto"
          />
        </div>
        <div className="w-12">
          <Image
            src={require("../../public/assets/vmware.png")}
            alt="Exchange"
            className="w-full h-auto"
          />
        </div>
        <div className="w-12">
          <Image
            src={require("../../public/assets/hp.png")}
            alt="Exchange"
            className="w-full h-auto"
          />
        </div>
        <div className=" w-12">
          <Image
            src={require("../../public/assets/icons_cisco.png")}
            alt="Exchange"
            className="w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
}
