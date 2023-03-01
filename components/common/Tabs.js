/* jshint esversion:6 */
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { slugify } from "../../lib/slugify";
import design from "../../styles/components/Tabs.module.sass"

const TabIndex = 0;
export const Tabs = ({children, initialTab}) => {
  const [activeTab, setActiveTab] = useState(children[0].props.label);
  const router = useRouter();
  const handleClick = (e, newActiveTab) => {
    e.preventDefault();
    setActiveTab(slugify(newActiveTab));
  };

  useEffect(() => {
    if(initialTab.tab){
      setActiveTab(initialTab.tab);
    }
  }, []);

  useEffect(() => {
    router.push(`${router.pathname}?tab=${slugify(activeTab)}`, undefined, {shallow: true});
  }, [activeTab])
  
  return(
    <div>
      <ul className={design.TabList}>
        {children.map((tab) => {
          const label = tab.props.label
          return (
            <a href="#" onClick={e => {handleClick(e, label)}}>
              <li 
                className={slugify(label) == slugify(activeTab) ? design.TabCurrent : ''}
                key={label}
              >
                {label}
              </li>
            </a>
          )
        })}
      </ul>
      {children.map((panel) => {
        if (slugify(panel.props.label) == slugify(activeTab))
          return (
            <div key={panel.props.label} className={design.TabPanel}>
                {panel.props.children}
            </div>
          )
      })}
    </div>
  )
};
