import Logo from "../../../assets/Logo.svg";
const scrollTo = (sectionName: string) => {
  const contactSection = document.getElementById(sectionName);

  if (contactSection) {
    contactSection.scrollIntoView({
      behavior: "smooth", // Fait défiler en douceur
    });
  }
};
const NavBar = () => {
  return (
    <nav className="navigation">
      <div className="container__navigation">
        <div className="container__logo" onClick={() => scrollTo("home")}>
          <img src={Logo} alt="French W Logo" className="logo" />
        </div>
        <MenuItem />
        {/* <SelectItem /> */}
      </div>
    </nav>
  );
};

export default NavBar;

const menuItem = [
  { label: "A propos", anchor: "#Apropos" },
  { label: "Portfolio", anchor: "#Portfolio" },
  { label: "Contact", anchor: "#Contact" },
];
const MenuItem = () => {
  return (
    <ul className="container__list-navigation">
      {menuItem.map((item) => (
        <li key={item.label}>
          <a href={item.anchor}>{item.label}</a>
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
