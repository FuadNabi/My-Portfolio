function headerLinks() {
  const headerLinksData = [
    {
      linkAdress: 'header-id',
      linkName: 'Hello',
    },
    {
      linkAdress: 'project-id',
      linkName: 'Project',
    },
    {
      linkAdress: 'about-id',
      linkName: 'About',
    },
    {
      linkAdress: 'contact-id',
      linkName: 'Contact',
    },
  ];

  let result = '';

  headerLinksData.forEach((link) => {
    result += `<li class="nav-cont-li"><a href="#${link.linkAdress}">${link.linkName}</a></li>\n`;
  });

  return result;
}

export default headerLinks;