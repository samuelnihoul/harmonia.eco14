import React from "react";


const SocialItem = ({ icon, link }: { icon: string, link: string }) => (
  <li>
    <a href={link}>
      <i className={`icofont-${icon}`}></i>
    </a>
  </li >
);

export default SocialItem;
