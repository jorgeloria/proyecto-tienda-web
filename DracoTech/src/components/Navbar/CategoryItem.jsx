import Link from "react-router-dom";

const CategoryItem = ({categoryName, subCategories, link}) => {
  return(
    <li className="">
    <Link to={link} className="dropdown dropdown-hover dropdown-bottom red-hat-display-category">
      <strong className="hover:text-Primary_color">{categoryName}</strong>
      <ul className="dropdown-content menu bg-Footer_color w-52 z-20">
        {subCategories}
      </ul>
    </Link>
  </li>
  );
}

export default CategoryItem;