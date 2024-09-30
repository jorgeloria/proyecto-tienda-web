import { Link } from "react-router-dom";

const SidebarCategoryItem = ({categoryName, link, subCategories}) => {
  return(
  <li className="my-2">
    <details>
      <summary><Link to={link}>{categoryName}</Link></summary>
      <ul className="p-2 [&>*]:my-3">
        {subCategories}
      </ul>
    </details>
  </li>
  );
}

export default SidebarCategoryItem;