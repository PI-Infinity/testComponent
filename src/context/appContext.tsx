"use client";
import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

/**
 * App state context
 */

const AppContext = createContext<any>(null);

export const useAppContext = () => useContext(AppContext);

interface contextProps {
  children: ReactNode;
}

export const AppContextWrapper: React.FC<contextProps> = ({ children }) => {
  // Navigator items
  const navigatorItems = [
    {
      value: "small",
      label: "Small Business",
    },
    {
      value: "medium",
      label: "Medium Business",
    },
    {
      value: "enterprise",
      label: "Enterprise",
    },
  ];

  // helper to define device is mobile or desktop for using in outlines

  // activity state
  const [active, setActive] = useState({
    value: window.innerWidth < 768 ? "medium" : "small",
    items: [
      {
        name: "Sapling",
        description: "HR Managment",
        logo: "/sapling.png",
        layout: "left",
        businessSize: "medium",
      },
      {
        name: "Workday",
        description: "HR Managment",
        logo: "/workday.png",
        layout: "left",
        businessSize: "medium",
      },
      {
        name: "Xero",
        description: "Employeres Base",
        logo: "/xero.png",
        layout: "left",
        businessSize: "enterprise",
      },
      {
        name: "Rippling",
        description: "Salary Managment",
        logo: "/rippling.png",
        layout: "right",
        businessSize: "enterprise",
      },
      {
        name: "Expensify",
        description: "HR Managment",
        logo: "/expensify.png",
        layout: "right",
        businessSize: "enterprise",
      },
      {
        name: "Zenefits",
        description: "HR Managment",
        logo: "/zenefits.png",
        layout: "right",
        businessSize: "small",
      },
    ],
  });

  return (
    <AppContext.Provider value={{ navigatorItems, active, setActive }}>
      {children}
    </AppContext.Provider>
  );
};
