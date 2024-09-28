const CategoryItem = ({categoryName, subCategories}) => {
  return(
    <li className="">
    <a className="dropdown dropdown-hover dropdown-bottom">
      <strong className="hover:text-Primary_color">{categoryName}</strong>
      <ul className="dropdown-content menu bg-Footer_color w-52">
        {subCategories}
      </ul>
    </a>
  </li>
  );
}

export default CategoryItem;