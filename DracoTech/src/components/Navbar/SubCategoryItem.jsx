import {Link} from "react-router-dom";

const SubCategoryItem = ({subCategoryName, link}) => {
  return(
    <li><Link to={link} className="red-hat-display-subcategory bg-Black:200">{subCategoryName}</Link></li>
  );
}

export default SubCategoryItem;