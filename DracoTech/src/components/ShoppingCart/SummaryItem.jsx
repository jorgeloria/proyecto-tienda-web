const SummaryItem = ({name, value}) => {
  return (
    <>
      <tr className="border-Footer_color">
        <td><strong>{name}</strong></td>
        <td className="lg:w-64"></td>
        <td>₡ {value}</td>
      </tr>
    </>
  );
}

export default SummaryItem;