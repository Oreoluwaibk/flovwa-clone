"use client"
import Image from "next/image";
import { motion } from "framer-motion";
import DashboardContainer from "@/components/containers/DashboardContainer";

export default function Loading() {
  return (
   <DashboardContainer active="" title="">
   <div className="md:h-[50vh] h-[88vh] flex items-center justify-center bg-white">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}   // start invisible and small
        animate={{ opacity: 1, scale: 1 }}     // animate to full size & visible
        transition={{ duration: 1, ease: "easeOut" }} // 1s smooth
      >
        <Image src="https://app.flowvahub.com/assets/flowva_logo-xVpZI3-U.png" width={100} height={100} alt="Logo" className="w-55!" />
      </motion.div>
    </div>
    
   </DashboardContainer>
  );
}
