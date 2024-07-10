import "outstatic/outstatic.css";
import { Outstatic, OstSSP } from "outstatic";

export default Outstatic;

export const getServerSideProps = OstSSP;

// import "outstatic/outstatic.css";
// import { Outstatic, OutstaticData } from "outstatic";
// import { OstClient } from "outstatic/client";

// export default async function Page({
//   ostData,
//   params,
// }: {
//   ostData: OutstaticData;
//   params: { ost: string[] };
// }) {
//   return <OstClient ostData={ostData} params={params} />;
// }

// // Fetch data server-side
// export async function getServerSideProps(context) {
//   const { params } = context;
//   const ostData = await Outstatic();

//   return {
//     props: {
//       ostData,
//       params,
//     },
//   };
// }
