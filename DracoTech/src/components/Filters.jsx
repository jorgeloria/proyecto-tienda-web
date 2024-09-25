import React, { useState } from "react";

const Filters = () => {
  const [isNvidiaOpen, setIsNvidiaOpen] = useState(false);
  const [isAmdOpen, setIsAmdOpen] = useState(false);

  const toggleNvidia = () => setIsNvidiaOpen(!isNvidiaOpen);
  const toggleAmd = () => setIsAmdOpen(!isAmdOpen);

  return (
    <aside className="bg-Card_color text-white w-[300px] p-4 rounded-md shadow-lg mb-10">
      <h1 className="text-center text-2xl font-bold mb-4">Tarjetas Gráficas</h1>
      <div className="mb-6">
        <div
          className="flex justify-between cursor-pointer mb-2"
          onClick={toggleNvidia}
        >
          <h2 className="font-bold">GPU NVIDIA</h2>
          <span className="">
            {isNvidiaOpen ? (
              <box-icon name="down-arrow-alt" color="#ffffff"></box-icon>
            ) : (
              <box-icon name="up-arrow-alt" color="#ffffff"></box-icon>
            )}
          </span>
        </div>
        {isNvidiaOpen && (
          <ul className="space-y-2 ml-2">
            <li>
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                GeForce RTX 4090
              </label>
            </li>
            <li>
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                GeForce RTX 4080 SUPER
              </label>
            </li>
            <li>
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                GeForce RTX 4080
              </label>
            </li>
            <li>
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                GeForce RTX 4070 TI SUPER
              </label>
            </li>
            <li>
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                GeForce RTX 4070 TI
              </label>
            </li>
            <li>
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                GeForce RTX 4070 SUPER
              </label>
            </li>
            <li>
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                GeForce RTX 4070
              </label>
            </li>
          </ul>
        )}
      </div>

      <div className="mb-6">
        <div
          className="flex justify-between cursor-pointer mb-2"
          onClick={toggleAmd}
        >
          <h2 className="font-bold">GPU AMD</h2>
          <span>{isAmdOpen ? (
              <box-icon name="down-arrow-alt" color="#ffffff"></box-icon>
            ) : (
              <box-icon name="up-arrow-alt" color="#ffffff"></box-icon>
            )}</span>
        </div>
        {isAmdOpen && (
          <ul className="space-y-2 ml-2">
            <li>
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                Radeon RX 7900 XTX
              </label>
            </li>
            <li>
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                Radeon RX 7900 XT
              </label>
            </li>
            <li>
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                Radeon RX 7600
              </label>
            </li>
            <li>
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                Radeon RX 6950 XT
              </label>
            </li>
            <li>
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                Radeon RX 6900 XT
              </label>
            </li>
            <li>
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                Radeon RX 6750 XT
              </label>
            </li>
            <li>
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                Radeon RX 6700 XT
              </label>
            </li>
          </ul>
        )}
      </div>
    </aside>
  );
};

export default Filters;
