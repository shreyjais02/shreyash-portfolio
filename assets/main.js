/* Builds the page from content.js. You normally don't need to edit this file. */
(function () {
  var s = window.SITE;
  var $ = function (id) { return document.getElementById(id); };

  // Escape text so content.js can't accidentally break the page
  function esc(str) {
    return String(str == null ? "" : str).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  function btn(label, url, primary, external) {
    if (!url) return "";
    var ext = external ? ' target="_blank" rel="noopener"' : "";
    return '<a class="btn' + (primary ? " primary" : "") + '" href="' + esc(url) + '"' + ext + ">" + esc(label) + "</a>";
  }

  // Header / hero
  document.title = s.name + " | " + s.tagline;
  $("brand").textContent = s.name;
  $("hero-name").textContent = s.name;
  $("tagline").textContent = s.tagline;
  $("headline").textContent = s.headline;
  $("footer-name").textContent = s.name;
  $("year").textContent = new Date().getFullYear();

  var c = s.contact;
  $("hero-actions").innerHTML =
    btn("Get in touch", "#contact", true) +
    btn("Download resume", s.resume ? encodeURI(s.resume) : "", false, true) +
    btn("LinkedIn", c.linkedin, false, true) +
    btn("GitHub", c.github, false, true);

  // About
  $("about-text").innerHTML = s.about.map(function (p) { return "<p>" + esc(p) + "</p>"; }).join("");
  $("facts").innerHTML = s.facts.map(function (f) {
    return "<li><span>" + esc(f.label) + "</span><span>" + esc(f.value) + "</span></li>";
  }).join("");

  // Experience
  $("experience-list").innerHTML = s.experience.map(function (j) {
    return '<div class="job"><h3>' + esc(j.role) + "</h3>" +
      '<div class="meta">' + esc(j.company) + " · " + esc(j.place) + " · " + esc(j.period) + "</div>" +
      "<ul>" + j.points.map(function (p) { return "<li>" + esc(p) + "</li>"; }).join("") + "</ul></div>";
  }).join("");

  // Projects
  $("project-list").innerHTML = s.projects.map(function (p) {
    return '<article class="card"><h3>' + esc(p.title) + "</h3>" +
      '<div class="meta">' + esc(p.type) + " · " + esc(p.period) + "</div>" +
      "<p>" + esc(p.description) + "</p>" +
      "<ul>" + p.points.map(function (x) { return "<li>" + esc(x) + "</li>"; }).join("") + "</ul>" +
      '<ul class="tags">' + p.tags.map(function (t) { return '<li class="tag">' + esc(t) + "</li>"; }).join("") + "</ul>" +
      btn(p.linkLabel || "View project", p.link, false, true) + "</article>";
  }).join("");

  // Skills
  $("skill-list").innerHTML = s.skills.map(function (g) {
    return '<div class="skill-group"><h3>' + esc(g.group) + '</h3><ul class="tags">' +
      g.items.map(function (i) { return '<li class="tag">' + esc(i) + "</li>"; }).join("") + "</ul></div>";
  }).join("");

  // Education & certifications
  $("education-list").innerHTML = "<h3>Education</h3>" + s.education.map(function (e) {
    return '<div class="item"><strong>' + esc(e.degree) + "</strong><span>" +
      esc(e.school) + " · " + esc(e.place) + "<br>" + esc(e.period) + (e.note ? " · " + esc(e.note) : "") + "</span></div>";
  }).join("");
  $("cert-list").innerHTML = "<h3>Certifications</h3>" + s.certifications.map(function (e) {
    return '<div class="item"><strong>' + esc(e.name) + "</strong><span>" + esc(e.issuer) + " · " + esc(e.date) + "</span></div>";
  }).join("");

  // Contact
  var others = (c.other || []).map(function (o) { return btn(o.label, o.url, false, true); }).join("");
  $("contact-links").innerHTML =
    btn(c.email, c.email ? "mailto:" + c.email : "", true) +
    btn("LinkedIn", c.linkedin, false, true) +
    btn("GitHub", c.github, false, true) +
    (c.phone ? btn(c.phone, "tel:" + c.phone.replace(/\s/g, ""), false) : "") + others;

  // Theme toggle (remembers choice; defaults to system preference)
  var root = document.documentElement;
  var saved = localStorage.getItem("theme");
  var dark = saved ? saved === "dark" : window.matchMedia("(prefers-color-scheme: dark)").matches;
  root.setAttribute("data-theme", dark ? "dark" : "light");
  $("theme-toggle").addEventListener("click", function () {
    var next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
  });
})();
