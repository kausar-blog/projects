import React from 'react';
import { Facebook, Twitter, Instagram } from '@mui/icons-material';
import {
  Box,
  Container,
  Grid,
  Typography,
  Link,
  IconButton,
} from '@mui/material';

function Footer() {
  const footerData = [
    {
      title: 'Home',
      links: ['Become Affiliate', 'Go Unlimited', 'Services'],
    },
    {
      title: 'Products',
      links: [
        'Design Systems',
        'Themes & Templates',
        'Mockups',
        'Presentations',
        'Wireframes Kits',
        'UI Kits',
      ],
    },
    {
      title: 'Legals',
      links: ['License', 'Refund Policy', 'About Us', 'Contacts'],
    },
    {
      title: 'Blog',
      links: ['Business Stories', 'Digital Store', 'Learning', 'Social Media'],
    },
  ];

  const socialIcons = [
    { icon: <Facebook />, href: '#' },
    { icon: <Twitter />, href: '#' },
    { icon: <Instagram />, href: '#' },
  ];

  return (
    <Box sx={{ bgcolor: '#000', color: '#fff', py: 12 }}>
      <Container maxWidth="lg">
        {/* Top: Logo + Links */}
        <Grid container spacing={6} sx={{ mb: 10 }}>
          <Grid item xs={12} md={3}>
            <Box>
              <img
                src="/logo.png"
                alt="Logo"
                style={{ height: 50, marginBottom: 16 }}
              />
            </Box>
          </Grid>

          {footerData.map((section, idx) => (
            <Grid item xs={6} md={2} key={idx}>
              <Typography
                variant="h6"
                sx={{ mb: 2, fontWeight: 600, color: '#fff' }}
              >
                {section.title}
              </Typography>
              {section.links.map((link, linkIdx) => (
                <Link
                  key={linkIdx}
                  href="#"
                  underline="none"
                  sx={{
                    display: 'block',
                    my: 0.5,
                    color: '#aaa',
                    fontSize: 14,
                    '&:hover': { color: '#1da1f2' },
                  }}
                >
                  {link}
                </Link>
              ))}
            </Grid>
          ))}
        </Grid>

        {/* Bottom: Text + Social */}
        <Grid container alignItems="center" justifyContent="space-between">
          <Grid item xs={12} md={6}>
            <Typography variant="body2" sx={{ color: '#aaa' }}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Reprehenderit maiores consectetur aut autem unde exercitationem
              quidem soluta fuga quo natus.
            </Typography>
          </Grid>

          <Grid
            item
            xs={12}
            md={6}
            sx={{
              display: 'flex',
              justifyContent: { xs: 'flex-start', md: 'flex-end' },
              mt: { xs: 2, md: 0 },
              gap: 2,
            }}
          >
            {socialIcons.map((social, idx) => (
              <IconButton
                key={idx}
                href={social.href}
                sx={{ color: '#fff', '&:hover': { color: '#1da1f2' } }}
              >
                {social.icon}
              </IconButton>
            ))}
          </Grid>
        </Grid>

        {/* Footer bottom */}
        <Box sx={{ mt: 10, textAlign: 'center', color: '#555' }}>
          <Typography variant="body2">
            &copy; {new Date().getFullYear()} Your Company. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

export default Footer;
