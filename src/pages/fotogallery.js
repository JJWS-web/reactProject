import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import CardComponent from '../components/cardimage.js';
import '../styles/fotogallery.css';

// List of movies including their title, description, and associated image
const theaters = [
  {
    title: 'Marvel Movie',
    description: 'An action-packed adventure featuring your favorite superheroes. Watch as they save the world in stunning visuals and gripping storytelling.',
    image: '/images/550x825.jpg',
  },
  {
    title: 'Black Widow',
    description: 'A great place for movies, offering an immersive cinematic experience with top-tier facilities and sound systems.',
    image: '/images/black.jpg',
  },
  {
    title: 'Captian Marvel',
    description: 'A heartwarming love story that will take you on an emotional rollercoaster.',
    image: '/images/captain.jpg',
  },
  {
    title: 'Civil War',
    description: 'Explore the far reaches of space in this thrilling science fiction adventure.',
    image: '/images/civilwar.jpeg',
  },
  {
    title: 'Doomsday',
    description: 'Laugh out loud with this collection of hilarious comedy sketches and stand-up performances.',
    image: '/images/doomsday.jpg',
  },
  {
    title: 'Guardians of the Galaxy',
    description: 'Get ready to be scared with this collection of spine-chilling horror movies.',
    image: '/images/guardians.jpg',
  },
  {
    title: 'Guardians of the Galaxy Vol. 3',
    description: 'Learn about the world around you with this series of informative and engaging documentaries.',
    image: '/images/guardians3.jpg',
  },
  {
    title: 'Ant Man',
    description: 'Join your favorite animated characters on a fun-filled adventure.',
    image: '/images/antman.jpg',
  },
  {
    title: 'Spiderman',
    description: 'Revisit the golden age of cinema with these timeless classics.',
    image: '/images/spiderman.jpg',
  },
  {
    title: 'Black Panther',
    description: 'Discover hidden gems from independent filmmakers around the world.',
    image: '/images/blackpanther.jpg',
  },
  {
    title: 'Guardians of the Galaxy Vol. 2',
    description: 'Experience non-stop action and excitement with these high-octane movies.',
    image: '/images/guadians2.jpg',
  },
];

export default function Fotogallery() {
  const [searchTerm, setSearchTerm] = useState('');

  /**
   * Filters the list of movies based on the search term entered by the user.
   * The search term is matched against the titles of the movies in a case-insensitive manner.
   * @returns {Array} - The filtered list of movies.
   */
  const filteredMovies = theaters.filter(theater =>
    theater.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  /**
   * Renders the Fotogallery component which includes a title, description, a search bar, 
   * and a grid of movie cards dynamically filtered based on the user's search term.
   * If no movies match the search term, a fallback message is displayed.
   * @returns {JSX.Element} - The JSX content for the Fotogallery component.
   */
  return (
    <Box className="fotogallery-container">
      {/* Page Title and Description */}
      <Typography variant="h3" className="fotogallery-title">
        FotoGallerij
      </Typography>
      <Typography variant="body1" className="fotogallery-description">
        Hier vind je een overzicht van films.
      </Typography>

      {/* Search Bar */}
      <Box className="fotogallery-search-bar">
        <TextField
          label="Zoek film"
          placeholder="Typ een filmtitel"
          variant="outlined"
          fullWidth
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="fotogallery-search-input"
        />
      </Box>

      {/* Movie Cards Grid */}
      <Box className="fotogallery-grid">
        {filteredMovies.length > 0 ? (
          filteredMovies.map((theater, index) => (
            <CardComponent
              key={index}
              title={theater.title}
              description={theater.description}
              image={theater.image}
            />
          ))
        ) : (
          <Typography variant="body1" className="fotogallery-no-results">
            Geen films gevonden.
          </Typography>
        )}
      </Box>
    </Box>
  );
}