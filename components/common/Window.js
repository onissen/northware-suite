/* jshint esversion:6 */
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { slugify } from "../../lib/slugify";
import design from "../../styles/components/Window.module.sass"

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
      console.log(initialTab);
    }
  }, []);

  useEffect(() => {
    router.push(`${router.pathname}?tab=${slugify(activeTab)}`, undefined, {shallow: true});
    console.log(activeTab)
  }, [activeTab])
  
  return(
    <div>
      <ul className={design.tabs}>
        {children.map((tabLabel) => {
          const label = tabLabel.props.label
          return (
            <li 
              className={slugify(label) == activeTab ? design.current : ''}
              key={label}
            >
              <a href="#" onClick={e => {handleClick(e, label)}}>{label}</a>
            </li>
          )
        })}
      </ul>
      {children.map((child) => {
        if (slugify(child.props.label) == activeTab)
          return (
            <div key={child.props.label} className={design.content}>
                {child.props.children}
            </div>
          )
      })}
    </div>
  )
};
