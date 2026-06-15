"use client";

import { useState } from "react";
import { experiences } from "@/data/experience";
import { motion } from "framer-motion";

export function Experience() {
  const [selectedExp, setSelectedExp] = useState<any>(null);

  return (
    <section id="experience" className="py-16 px-6 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          Experience
        </h2>

        <div className="relative border-l-2 border-gray-300 dark:border-gray-700">
          {experiences.map((exp, index) => {
            const isLeft = index % 2 === 0;

            return (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: isLeft ? -80 : 80 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true }}
                className={`mb-10 ml-6 relative ${
                  isLeft ? "md:ml-6 md:mr-[50%]" : "md:ml-[50%] md:mr-6"
                }`}
              >
                {/* Timeline dot */}
                <span className="absolute -left-3 flex items-center justify-center w-6 h-6 bg-blue-500 rounded-full ring-8 ring-gray-100 dark:ring-gray-900"></span>

                {/* Card */}
                <motion.div
                  whileHover={{
                    scale: 1.03,
                    boxShadow: "0 12px 25px rgba(59, 130, 246, 0.3)",
                  }}
                  transition={{ type: "spring", stiffness: 200, damping: 12 }}
                  className="p-6 rounded-2xl shadow-md bg-white dark:bg-gray-800 cursor-pointer"
                  onClick={() => setSelectedExp(exp)}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                        {exp.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        {exp.company} • {exp.location}
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {exp.startDate} - {exp.current ? "Present" : exp.endDate}
                      </p>
                    </div>
                    <span
                      className={`px-3 py-1 text-sm rounded-full ${
                        exp.type === "work"
                          ? "bg-blue-100 text-blue-700 dark:bg-blue-800 dark:text-blue-200"
                          : exp.type === "internship"
                          ? "bg-green-100 text-green-700 dark:bg-green-800 dark:text-green-200"
                          : exp.type === "project"
                          ? "bg-purple-100 text-purple-700 dark:bg-purple-800 dark:text-purple-200"
                          : "bg-yellow-100 text-yellow-700 dark:bg-yellow-800 dark:text-yellow-200"
                      }`}
                    >
                      {exp.type}
                    </span>
                  </div>

                  <ul className="list-disc list-inside mt-4 text-gray-700 dark:text-gray-300 space-y-2">
                    {exp.description.slice(0, 2).map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                  {exp.description.length > 2 && (
                    <p className="mt-2 text-blue-500 text-sm">Click to view more →</p>
                  )}
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Modal */}
      {selectedExp && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 150, damping: 15 }}
            className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-xl max-w-lg w-full relative"
          >
            <button
              className="absolute top-3 right-3 text-gray-500 hover:text-red-500 text-xl"
              onClick={() => setSelectedExp(null)}
            >
              ✕
            </button>

            <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">
              {selectedExp.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-1">
              {selectedExp.company} • {selectedExp.location}
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
              {selectedExp.startDate} - {selectedExp.current ? "Present" : selectedExp.endDate}
            </p>

            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
              {selectedExp.description.map((point: string, i: number) => (
                <li key={i}>{point}</li>
              ))}
            </ul>

            {selectedExp.technologies && (
              <div className="mt-4 flex flex-wrap gap-2">
                {selectedExp.technologies.map((tech: string, i: number) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-xs rounded-full bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}
