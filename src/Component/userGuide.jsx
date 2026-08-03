import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Theme from "../assets/Theme/Theme";
import onBoardScreen from "../assets/userGuide/onBoard.png"

import onBoardVideo from "../assets/userGuide/onBoard.mp4"
import inventory from "../assets/userGuide/inventory.mp4"
import referral from "../assets/userGuide/referral.mp4"

const UserGuide = () => {
  const [activeVideo, setActiveVideo] = useState(null);

  const userGuideVideo = [
    {
      id: 1,
      thumbnail:
        onBoardScreen,
      video: onBoardVideo,
      title: "Vendor Dashboard Guide",
      description: "Learn how to manage your vendor dashboard easily.",
    },
    {
      id: 2,
      thumbnail:
        onBoardScreen,
      video: inventory,
      title: "Add Products",
      description: "Upload and manage your products smoothly.",
    },
    {
      id: 3,
      thumbnail:
        onBoardScreen,
      video: referral,
title: "Earn by Referring",
description: "Refer friends, get rewards — it's that simple."
    },
  ];

  return (
    <section
      className="py-20 px-6"
      style={{ background: Theme.mainAreaBgColor }}
    >
      <div className="text-center mb-14">
        <h1 className="text-4xl font-bold">
          Watch How to Get Started as a Vendor
        </h1>

        <p
          className="mt-3 max-w-2xl mx-auto"
          style={{ color: Theme.grayTitle }}
        >
          Learn how to use the vendor platform step by step through short
          guided videos.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {userGuideVideo.map((item) => (
          <motion.div
            key={item.id}
            whileHover={{ y: -8, scale: 1.02 }}
            className="relative rounded-md overflow-hidden cursor-pointer shadow-xl group"
            onClick={() => setActiveVideo(item)}
          >
            <img
              src={item.thumbnail}
              alt=""
              className="w-full h-[420px] object-contain group-hover:scale-110 transition duration-500"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

            <div className="absolute bottom-0 p-6 text-white">
              <h3 className="text-xl font-semibold mb-2">
                {item.title}
              </h3>

              <p className="text-sm opacity-90 mb-4">
                {item.description}
              </p>

              <button
                className="px-6 py-2 rounded-full font-medium"
                style={{
                  background: "#fff",
                  color: Theme.primary,
                }}
              >
                Watch Video
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {activeVideo && (
          <motion.div
            className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveVideo(null)}
          >
            <motion.div
              className="bg-black rounded-2xl overflow-hidden max-w-4xl w-full"
              initial={{ scale: 0.8, y: 40 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.8 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                className="absolute top-5 right-6 text-white text-3xl"
                onClick={() => setActiveVideo(null)}
              >
                ✕
              </button>

              {/* Video */}
              <video
                src={activeVideo.video}
                controls
                autoPlay
                className="w-full h-125 object-contain"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default UserGuide;