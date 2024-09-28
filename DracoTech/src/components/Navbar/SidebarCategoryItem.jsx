const SidebarCategoryItem = ({categoryName, subCategories}) => {
  return(
  <li className="my-2">
    <details>
      <summary><a href="">{categoryName}</a></summary>
      <ul className="p-2 [&>*]:my-3">
        {subCategories}
      </ul>
    </details>
  </li>
  );
}

export default SidebarCategoryItem;