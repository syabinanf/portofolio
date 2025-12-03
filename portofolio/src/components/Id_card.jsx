import { motion } from "framer-motion";
import { icons } from "../assets/icons";

export default function HangingIDCard() {
  return (
    <div className="flex flex-col items-center mt-10 select-none">

      {/* TALI */}
      <div className="w-[2px] h-16 bg-pink-300"></div>

      {/* KLIP */}
      <div className="w-10 h-3 bg-pink-400 rounded-b-md mb-[-6px]"></div>

      {/* ID CARD */}
       {/* Hanging Strap */}
  <motion.div
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
    style={{
      width: "6px",
      height: "120px",
      backgroundColor: "#ffc1cc",
      marginBottom: "-10px",
      borderRadius: "4px",
    }}
  />

  {/* ID Card */}
  <motion.div
    initial={{ rotate: -2 }}
    animate={{ rotate: [ -3, 3, -3 ] }}
    transition={{
      repeat: Infinity,
      duration: 4,
      ease: "easeInOut"
    }}
    className="d-flex justify-content-center"
    style={{
      backgroundColor: "#ffffff",
      width: "240px",
      height: "330px",
      borderRadius: "16px",
      boxShadow: "0 10px 20px rgba(0,0,0,0.3)",
      border: "3px solid #ffc1cc",
      overflow: "hidden",
      position: "relative",
    }}
  >

    {/* Clip Holder */}
    <div
      style={{
        width: "60px",
        height: "25px",
        backgroundColor: "#ffc1cc",
        borderBottomLeftRadius: "10px",
        borderBottomRightRadius: "10px",
        position: "absolute",
        top: "-25px",
        left: "50%",
        transform: "translateX(-50%)",
      }}
    />

    {/* Photo */}
    <img
      src={icons.ina}
      alt="Syabina Nur Pajriyanti"
      style={{
        width: "100%",
        height: "100%",
        objectFit: "cover",
      }}
    />
  </motion.div>
    </div>
  );
}
