// export default function Root() {
//   return (
//     <>
//       <div id="sidebar">
//         <h1>ЗАДАЧИ</h1>

import { useEffect, useRef, useState } from "react";

//         <nav>
//           <ul>
//             <li>
//               <a href={`/tasks/counter`}>Your Name</a>
//             </li>
//             <li>
//               <a href={`/tasks/useMemo`}>Your Friend</a>
//             </li>
//           </ul>
//         </nav>
//       </div>
//     </>
//   );
// }

let allTabs = [
  {
    id: "counter",
    name: "Счётчик",
    href: `/tasks/counter`,
  },
  {
    id: "useMemo",
    name: "useMemo",
    href: `/tasks/useMemo`,
  },
  {
    id: "portal",
    name: "portal",
    href: `tasks/createPortal`,
  },
];

export const Root = () => {
  //@ts-ignore
  const tabsRef = useRef([]);
  const [activeTabIndex, setActiveTabIndex] = useState(null);
  const [tabUnderlineWidth, setTabUnderlineWidth] = useState(0);
  const [tabUnderlineLeft, setTabUnderlineLeft] = useState(0);

  useEffect(() => {
    if (activeTabIndex === null) {
      return;
    }

    const setTabPosition = () => {
      const currentTab = tabsRef.current[activeTabIndex];
      setTabUnderlineLeft(currentTab?.offsetLeft ?? 0);
      setTabUnderlineWidth(currentTab?.clientWidth ?? 0);
    };

    setTabPosition();
  }, [activeTabIndex]);

  return (
    <div className="flew-row relative mx-auto flex h-12 rounded-3xl border border-black/40 bg-neutral-800 px-2 backdrop-blur-sm">
      <span
        className="absolute bottom-0 top-0 -z-10 flex overflow-hidden rounded-3xl py-2 transition-all duration-300"
        style={{ left: tabUnderlineLeft, width: tabUnderlineWidth }}
      >
        <span className="h-full w-full rounded-3xl bg-gray-200/30" />
      </span>
      {allTabs.map((tab, index) => {
        const isActive = activeTabIndex === index;

        return (
          <button
            key={index}
            ref={(el) => (tabsRef.current[index] = el)}
            className={`${
              isActive ? `` : `hover:text-neutral-300`
            } my-auto cursor-pointer select-none rounded-full px-4 text-center font-light text-white`}
            onClick={() => setActiveTabIndex(index)}
          >
            <a href={tab.href}>{tab.name}</a>
          </button>
        );
      })}
    </div>
  );
};
