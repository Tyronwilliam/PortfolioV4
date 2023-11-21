import Logo from "../../../assets/Logo.svg";

const NavBar = () => {
  return (
    <nav className="container__navigation">
      <div className="container__logo">
        <img src={Logo} alt="Logo" className="logo" />
      </div>
      <MenuItem />
      {/* <SelectItem /> */}
    </nav>
  );
};

export default NavBar;

const menuItem = ["A propos", "Portfolio", "Contact"];
const MenuItem = () => {
  const scrollTo = (sectionName: string) => {
    const contactSection = document.getElementById(sectionName);

    if (contactSection) {
      contactSection.scrollIntoView({
        behavior: "smooth", // Fait défiler en douceur
      });
    }
  };
  return (
    <ul className="container__list-navigation">
      {menuItem.map((item) => (
        <li key={item} onClick={() => scrollTo(item)}>
          {item}
        </li>
      ))}
    </ul>
  );
};
// const options = [
//   { value: "Particulier", label: "Particulier" },
//   { value: "Entreprise", label: "Entreprise" },
// ];
// const SelectItem = () => {
//   return (
//     <select className="select__navigation">
//       {options.map((item) => (
//         <option value={item.value} key={item.value}>
//           {item.label}
//         </option>
//       ))}
//     </select>
//   );
// };
