import Image from "next/image";
import React from "react";

export default function TechnologyVendors() {
  return (
    <div className="flex items-center justify-between gap-6 rounded-md bg-[#0000004D] p-4 text-white md:flex-col md:items-center">
      <p className="text-xl md:text-lg">Our Technologies and Vendors:</p>
      <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 lg:gap-8">
        <div className="w-12">
          <Image
            src={require("../../public/assets/microsoft.svg")}
            alt="Microsoft"
            className="h-auto w-full"
          />
        </div>
        <div className="w-12">
          <Image
            src={require("../../public/assets/teams.svg")}
            alt="Teams"
            className="h-auto w-full"
          />
        </div>
        <div className="w-12">
          <Image
            src={require("../../public/assets/sharepoint.svg")}
            alt="SharePoint"
            className="h-auto w-full"
          />
        </div>
        <div className="w-12">
          <Image
            src={require("../../public/assets/azure.svg")}
            alt="Azure"
            className="h-auto w-full"
          />
        </div>
        <div className="w-12">
          <Image
            src={require("../../public/assets/onedrive.svg")}
            alt="OneDrive"
            className="h-auto w-full"
          />
        </div>
        <div className="w-12">
          <Image
            src={require("../../public/assets/powerapps.svg")}
            alt="PowerApps"
            className="h-auto w-full"
          />
        </div>
        <div className="w-12">
          <Image
            src={require("../../public/assets/vmware.png")}
            alt="Exchange"
            className="h-auto w-full"
          />
        </div>
        <div className="w-12">
          <Image
            src={require("../../public/assets/hp.png")}
            alt="Exchange"
            className="h-auto w-full"
          />
        </div>
        <div className="w-12">
          <Image
            src={require("../../public/assets/icons_cisco.png")}
            alt="Exchange"
            className="h-auto w-full"
          />
        </div>
      </div>
    </div>
  );
}
