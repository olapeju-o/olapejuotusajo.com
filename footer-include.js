(function () {
    var mount = document.getElementById('site-footer-mount');
    if (!mount) return;

    mount.outerHTML =
        '<footer class="site-footer" role="contentinfo">' +
        '<div class="site-footer__inner">' +
        '<div class="site-footer__brand">' +
        '<a href="index.html" class="site-footer__name">Olapeju Otusajo</a>' +
        '<p class="site-footer__line site-footer__line--accent">Let&rsquo;s build something meaningful together.</p>' +
        '<p class="site-footer__line site-footer__line--meta">MHCI @ CMU</p>' +
        '</div>' +
        '<nav class="site-footer__nav" aria-label="Footer">' +
        '<a href="index.html">Home</a>' +
        '<a href="projects.html">Projects</a>' +
        '<a href="about.html">About Me</a>' +
        '<a href="resume.pdf" target="_blank" rel="noopener noreferrer">Resume</a>' +
        '</nav>' +
        '<div class="site-footer__icons">' +
        '<a href="https://www.linkedin.com/in/olapejuotusajo/" class="site-footer__icon site-footer__icon--labeled" target="_blank" rel="noopener noreferrer"><i class="fab fa-linkedin" aria-hidden="true"></i><span class="site-footer__icon-text">LinkedIn</span></a>' +
        '<a href="resume.pdf" class="site-footer__icon site-footer__icon--labeled" target="_blank" rel="noopener noreferrer"><i class="fas fa-file-alt" aria-hidden="true"></i><span class="site-footer__icon-text">Resume</span></a>' +
        '</div>' +
        '</div>' +
        '<div class="site-footer__bar">' +
        '<p class="site-footer__copy">&copy; 2026 <a href="index.html">Olapeju Otusajo</a>. All rights reserved.</p>' +
        '</div>' +
        '</footer>';
})();
