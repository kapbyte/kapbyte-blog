const getContactHref = (name: string, contact: string) => {
  const hrefs: { [key: string]: string } = {
    email: `mailto:${contact}`,
    line: `line://ti/p/${contact}`,
    telegram: `https://t.me/${contact}`,
    vkontakte: `https://vk.com/${contact}`,
    medium: `${contact}`,
    github: `${contact}`,
    weibo: `https://www.weibo.com/${contact}`,
    gitlab: `https://www.gitlab.com/${contact}`,
    codepen: `${contact}`,
    twitter: `${contact}`,
    soundcloud: `https://soundcloud.com/${contact}`,
    facebook: `${contact}`,
    instagram: `${contact}`,
    linkedin: `${contact}`,
    youtube: `${contact}`,
    hashnode: `${contact}`
  };

  return hrefs[name] ?? contact;
};

export default getContactHref;
