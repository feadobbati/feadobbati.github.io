fetch('data/color.json')
  .then(r => r.json())
  .then(c => {
    if (c.accent) document.documentElement.style.setProperty('--accent', c.accent);
  });

fetch('data/profile.json')
  .then(r => r.json())
  .then(p => {
    document.title = p.first_name + ' ' + p.last_name;
    document.getElementById('profile-name').textContent = p.first_name + ' ' + p.last_name;
    document.getElementById('profile-position').textContent = p.position;
    document.getElementById('bio').textContent = p.bio;
    document.getElementById('profile-photo').alt = p.first_name + ' ' + p.last_name;

    const year = new Date().getFullYear();
    document.getElementById('copyright').textContent = '© ' + p.first_name + ' ' + p.last_name + ' ' + year;

    setLink('link-github', p.github);
    setLink('link-linkedin', p.linkedin);
    setLink('link-orcid', p.orcid);
    setLink('link-scholar', p.scholar);
    setLink('link-email', p.email);

    if (p.cv_last_modified) {
      document.getElementById('cv-modified').textContent = '(last modified: ' + p.cv_last_modified + ')';
    }
  });

fetch('data/publication.json')
  .then(r => r.json())
  .then(pubs => {
    const container = document.getElementById('publications');
    pubs.forEach((pub, i) => {
      container.appendChild(buildCard(pub, i + 1));
    });
  });

function setLink(id, url) {
  const el = document.getElementById(id);
  if (el && url) el.href = url;
}

function buildCard(pub, num) {
  const card = document.createElement('div');
  card.className = 'pub-card';

  const rank = document.createElement('span');
  rank.className = 'pub-number';
  rank.textContent = '#' + num;

  const title = document.createElement('div');
  title.className = 'pub-title';
  title.textContent = pub.title;

  const authors = document.createElement('div');
  authors.className = 'pub-authors';
  authors.textContent = pub.authors;

  const venue = document.createElement('div');
  venue.className = 'pub-venue';
  venue.textContent = pub.venue;

  const buttons = document.createElement('div');
  buttons.className = 'pub-buttons';
  [
    buildBtn('Paper',  pub.paper_url,  'fas fa-file-alt'),
    buildBtn('GitHub', pub.github_url, 'fab fa-github'),
    buildBtn('GitLab', pub.gitlab_url, 'fab fa-gitlab'),
  ].forEach(btn => { if (btn) buttons.appendChild(btn); });

  card.append(rank, title, authors, venue, buttons);
  return card;
}

function buildBtn(label, url, iconClass) {
  if (!url) return null;
  const a = document.createElement('a');
  a.className = 'btn';
  a.href = url;
  a.target = '_blank';
  a.rel = 'noopener noreferrer';
  a.innerHTML = `<i class="${iconClass}"></i> ` + label;
  return a;
}
