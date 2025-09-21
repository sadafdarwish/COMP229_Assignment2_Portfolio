/* 
  File: index.js
  Student Name: Sadaf Darwish
  StudentID: 301493791
  Date: 2025-09-21
*/
const express = require('express');
const router = express.Router();

/* GET pages */
router.get('/',        (req, res) => res.render('index',   { title: 'Home',     active: 'home' }));
router.get('/about',   (req, res) => res.render('about',   { title: 'About',    active: 'about' }));
router.get('/projects',(req, res) => res.render('projects',{ title: 'Projects', active: 'projects' }));
router.get('/services',(req, res) => res.render('services',{ title: 'Services', active: 'services' }));
router.get('/contact', (req, res) => res.render('contact', { title: 'Contact',  active: 'contact' }));

/* POST /contact: capture fields then redirect to Home */
router.post('/contact', (req, res) => {
  const { firstName, lastName, phone, email, message } = req.body;
  console.log('Contact submission:', { firstName, lastName, phone, email, message });
  return res.redirect('/'); // meets “capture + redirect” requirement
});

module.exports = router;
