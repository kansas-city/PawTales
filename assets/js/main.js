/* ==========================================================================
   PawTales Rescue & Pet Care — Main JavaScript
   Lightweight, dependency-free interactivity
   ========================================================================== */
(function () {
  'use strict';

  document.addEventListener('DOMContentLoaded', function () {

    /* ---------- Mobile Navigation ---------- */
    var toggle = document.querySelector('.nav-toggle');
    var nav = document.querySelector('.main-nav');

    if (toggle && nav) {
      toggle.addEventListener('click', function () {
        var isOpen = nav.classList.toggle('is-open');
        toggle.setAttribute('aria-expanded', String(isOpen));
      });

      // Close on link click
      nav.querySelectorAll('a').forEach(function (link) {
        link.addEventListener('click', function () {
          nav.classList.remove('is-open');
          toggle.setAttribute('aria-expanded', 'false');
        });
      });

      // Close on Escape
      document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && nav.classList.contains('is-open')) {
          nav.classList.remove('is-open');
          toggle.setAttribute('aria-expanded', 'false');
          toggle.focus();
        }
      });
    }

    /* ---------- Dynamic copyright year ---------- */
    document.querySelectorAll('[data-year]').forEach(function (el) {
      el.textContent = new Date().getFullYear();
    });

    /* ---------- Newsletter form (demo handler) ---------- */
    document.querySelectorAll('form[data-newsletter]').forEach(function (form) {
      form.addEventListener('submit', function (e) {
        e.preventDefault();
        var email = form.querySelector('input[type="email"]');
        var note = form.querySelector('[data-note]');
        if (email && email.value) {
          if (note) {
            note.textContent = 'Thanks! Please check your inbox to confirm your subscription.';
            note.style.color = '#9fe6c8';
          }
          form.reset();
        }
      });
    });

    /* ---------- Contact form (demo handler) ---------- */
    document.querySelectorAll('form[data-contact]').forEach(function (form) {
      form.addEventListener('submit', function (e) {
        e.preventDefault();
        var note = form.querySelector('[data-note]');
        if (note) {
          note.textContent = 'Thank you! Your message has been received. We will reply within 1–2 business days.';
          note.style.color = 'var(--color-primary-dark)';
        }
        form.reset();
      });
    });

    /* ---------- Smooth close of details (accordion UX, optional) ---------- */
    var accordions = document.querySelectorAll('[data-accordion]');
    accordions.forEach(function (group) {
      var items = group.querySelectorAll('details');
      items.forEach(function (item) {
        item.addEventListener('toggle', function () {
          if (item.open) {
            items.forEach(function (other) {
              if (other !== item) other.open = false;
            });
          }
        });
      });
    });

    /* ---------- Reading progress bar (article pages) ---------- */
    var progress = document.querySelector('[data-progress]');
    if (progress) {
      var updateProgress = function () {
        var h = document.documentElement;
        var scrollTop = h.scrollTop || document.body.scrollTop;
        var height = h.scrollHeight - h.clientHeight;
        var pct = height > 0 ? (scrollTop / height) * 100 : 0;
        progress.style.width = pct + '%';
      };
      window.addEventListener('scroll', updateProgress, { passive: true });
      updateProgress();
    }

    /* ---------- Reveal on scroll ---------- */
    if ('IntersectionObserver' in window) {
      var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'none';
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.08 });

      document.querySelectorAll('.card, .feature, .reveal').forEach(function (el) {
        el.style.opacity = '0';
        el.style.transform = 'translateY(18px)';
        el.style.transition = 'opacity .5s ease, transform .5s ease';
        observer.observe(el);
      });
    }
  });
})();
