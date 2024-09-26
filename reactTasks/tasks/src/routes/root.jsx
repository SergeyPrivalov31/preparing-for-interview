import { useEffect, useRef, useState } from "react";

let allTabs = [
  {
    id: "notes",
    name: "Справочник",
    href: `/tasks/notes`,
  },
  {
    id: "counter",
    name: "Счётчик",
    href: `/tasks/counter`,
  },
  {
    id: "ex",
    name: "ex",
    href: `/tasks/ex`,
  },
  {
    id: "portal",
    name: "portal",
    href: `/tasks/createPortal`,
  },
  {
    id: "inputFocus",
    name: "inputFocus",
    href: `/tasks/inputFocus`,
  },
  {
    id: "fetchTodos",
    name: "fetchTodos",
    href: `/tasks/fetchTodos`,
  },
  {
    id: "IntervalEx",
    name: "IntervalEx",
    href: `/tasks/IntervalEx`,
  },
  {
    id: "FlagEx",
    name: "FlagEx",
    href: `/tasks/FlagEx`,
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
    <div className="flex justify-center">
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
    </div>
  );
};
