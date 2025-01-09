import React, { useEffect, useState, useRef } from "react";
import { Excalidraw } from "@excalidraw/excalidraw";
import InitialData from "../utils/initialData";
//import { SketchField, Tools } from "react-sketch";

export default function WhiteBoard() {
  const [messagesWidth, setMessagesWidth] = useState(window.innerWidth - 300); // Default width of the messages section
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768); // Check if mobile

  const handleDrag = (e) => {
    // Adjust the width of the messages section
    const newWidth = Math.max(
      100,
      Math.min(window.innerWidth - e.clientX, window.innerWidth - 100)
    );
    setMessagesWidth(newWidth);
  };

  const stopDragging = () => {
    // Remove event listeners when dragging stops
    window.removeEventListener("mousemove", handleDrag);
    window.removeEventListener("mouseup", stopDragging);
  };

  const startDragging = () => {
    // Add event listeners for dragging
    window.addEventListener("mousemove", handleDrag);
    window.addEventListener("mouseup", stopDragging);
  };

  // Update on window resize
  React.useEffect(() => {
    const updateView = () => {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth > 768) {
        setMessagesWidth(window.innerWidth - 300); // Reset layout on desktop
      }
    };
    window.addEventListener("resize", updateView);
    return () => window.removeEventListener("resize", updateView);
  }, []);
  // const [excalidrawAPI, setExcalidrawAPI] = useState(null);
  // const excalidrawRef = useRef(null);
  // const excalidrawWrapperRef = useRef(null);
  // const [dimensions, setDimensions] = useState({
  //   width: undefined,
  //   height: undefined,
  // });

  // const [viewModeEnabled, setViewModeEnabled] = useState(false);
  // const [zenModeEnabled, setZenModeEnabled] = useState(false);
  // const [gridModeEnabled, setGridModeEnabled] = useState(false);
  // useEffect(() => {
  //   setDimensions({
  //     width: excalidrawWrapperRef.current.getBoundingClientRect().width,
  //     height: excalidrawWrapperRef.current.getBoundingClientRect().height,
  //   });
  //   const onResize = () => {
  //     setDimensions({
  //       width: excalidrawWrapperRef.current.getBoundingClientRect().width,
  //       height: excalidrawWrapperRef.current.getBoundingClientRect().height,
  //     });
  //   };

  //   window.addEventListener("resize", onResize);

  //   return () => window.removeEventListener("resize", onResize);
  // }, [excalidrawWrapperRef]);

  // const updateScene = () => {
  //   const sceneData = {
  //     elements: [
  //       {
  //         type: "rectangle",
  //         version: 141,
  //         versionNonce: 361174001,
  //         isDeleted: false,
  //         id: "oDVXy8D6rom3H1-LLH2-f",
  //         fillStyle: "hachure",
  //         strokeWidth: 1,
  //         strokeStyle: "solid",
  //         roughness: 1,
  //         opacity: 100,
  //         angle: 0,
  //         x: 100.50390625,
  //         y: 93.67578125,
  //         strokeColor: "#c92a2a",
  //         backgroundColor: "transparent",
  //         width: 186.47265625,
  //         height: 141.9765625,
  //         seed: 1968410350,
  //         groupIds: [],
  //       },
  //     ],
  //     appState: {
  //       viewBackgroundColor: "#edf2ff",
  //     },
  //   };
  //   excalidrawRef.current.updateScene(sceneData);
  // };
  return isMobile ? (
    <MobileView />
  ) : (
    <>
      <div>
        <div className="flex h-screen">
          {/* Code Hierarchy Section */}
          <div className="flex-1 bg-blue-500">
            <Excalidraw
              onChange={(props) => {
                console.log("Change happened", props);
              }}
            />
          </div>

          {/* Draggable Divider */}
          <div
            className="w-1 cursor-col-resize bg-gray-400"
            onMouseDown={startDragging}
          ></div>

          {/* Editor Section */}
          <div
            style={{ width: `${messagesWidth}px` }}
            className="bg-gray-100 flex flex-col"
          >
            <div className="overflow-y-auto flex-1 p-4">
              {/* Example Messages UI */}
              <div>
                <p className="font-bold">Jan</p>
                <p>yo</p>
                <p className="text-sm text-gray-500">1:10:28 PM</p>
              </div>
              <div className="mt-4">
                <p className="font-bold">Peter pan</p>
                <p>Yo people</p>
                <p className="text-sm text-gray-500">1:27:13 PM</p>
              </div>
              <div className="mt-4">
                <p className="font-bold">Edi</p>
                <p>Hey this is shittttt</p>
                <p className="text-sm text-gray-500">1:27:23 PM</p>
              </div>
            </div>

            {/* Input Box */}
            <div className="border-t p-4 flex items-center space-x-2">
              <input
                type="text"
                placeholder="Type a message..."
                className="flex-1 border rounded-lg px-4 py-2"
              />
              <button className="px-4 py-2 bg-blue-500 text-white rounded-lg">
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

const MobileView = () => {
  const [activeTab, setActiveTab] = useState("hierarchy");

  return (
    <div className="h-screen flex flex-col">
      {/* Tabs */}
      <div className="flex border-b">
        <button
          className={`flex-1 p-4 ${
            activeTab === "hierarchy" ? "bg-blue-500 text-white" : "bg-gray-100"
          }`}
          onClick={() => setActiveTab("hierarchy")}
        >
          Code Hierarchy
        </button>
        <button
          className={`flex-1 p-4 ${
            activeTab === "messages" ? "bg-blue-500 text-white" : "bg-gray-100"
          }`}
          onClick={() => setActiveTab("messages")}
        >
          Messages
        </button>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto">
        {activeTab === "hierarchy" ? (
          //  <div className="flex-1 bg-blue-500">
          <Excalidraw
            onChange={(props) => {
              console.log("Change happened", props);
            }}
          />
        ) : (
          // </div>
          <div className="bg-gray-100 h-full flex flex-col">
            {/* Messages */}
            <div className="overflow-y-auto flex-1 p-4">
              <div>
                <p className="font-bold">Jan</p>
                <p>yo</p>
                <p className="text-sm text-gray-500">1:10:28 PM</p>
              </div>
              <div className="mt-4">
                <p className="font-bold">Peter pan</p>
                <p>Yo people</p>
                <p className="text-sm text-gray-500">1:27:13 PM</p>
              </div>
            </div>

            {/* Input Box */}
            <div className="border-t p-4 flex items-center space-x-2">
              <input
                type="text"
                placeholder="Type a message..."
                className="flex-1 border rounded-lg px-4 py-2"
              />
              <button className="px-4 py-2 bg-blue-500 text-white rounded-lg">
                Send
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
