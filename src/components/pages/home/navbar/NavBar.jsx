export default function NavBar() {
  return (
    <div className="h-24 flex justify-between items-center bg-fushia font-inter font-semibold text-lg	">
      <div className="logo ml-40 text-white">Logo</div>
      <div className="links mr-40 list-none flex gap-8 text-white">
        <li>Accueil</li>
        <li>Nos activités</li>
        <li>Nous connaître</li>
        <li>Nous rejoindre</li>
      </div>
    </div>
  );
}

