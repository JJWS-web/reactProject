import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import CardComponent from '../components/cardimage.js';
import '../styles/fotogallery.css';

/**
 * List of movies to be displayed in the gallery.
 * Each movie includes a title, description, and an image URL.
 */
const theaters = [
  {
    title: 'Marvel Movie',
    description: 'Een actievolle film vol superhelden die de wereld redden. Bekijk deze visueel indrukwekkende en spannende film!',
    image: '/images/550x825.jpg',
  },
  {
    title: 'Black Widow',
    description: 'Beleef het meeslepende verhaal van Black Widow in deze spannende film vol actie en intrige.',
    image: '/images/black.jpg',
  },
  {
    title: 'Captain Marvel',
    description: 'Captain Marvel neemt je mee op een episch avontuur vol spanning en actie in de ruimte.',
    image: '/images/captain.jpg',
  },
  {
    title: 'Civil War',
    description: 'Een intens gevecht tussen superhelden die verdeeld zijn door hun overtuigingen.',
    image: '/images/civilwar.jpeg',
  },
  {
    title: 'Doomsday',
    description: 'Een dystopische film vol spanning, overleving en onverwachte wendingen.',
    image: '/images/doomsday.jpg',
  },
  {
    title: 'Guardians of the Galaxy',
    description: 'Een groep buitenbeentjes moet samenwerken om het universum te redden in deze humorvolle en actievolle film.',
    image: '/images/guardians.jpg',
  },
  {
    title: 'Guardians of the Galaxy Vol. 3',
    description: 'De helden keren terug in dit emotionele en spectaculaire vervolg.',
    image: '/images/guardians3.jpg',
  },
  {
    title: 'Ant-Man',
    description: 'Volg het verhaal van een onwaarschijnlijke held met de kracht om te krimpen.',
    image: '/images/antman.jpg',
  },
  {
    title: 'Spider-Man',
    description: 'Een jongeman ontdekt zijn krachten en neemt het op tegen iconische schurken.',
    image: '/images/spiderman.jpg',
  },
  {
    title: 'Black Panther',
    description: 'De koning van Wakanda vecht voor zijn volk en toekomst in deze baanbrekende film.',
    image: '/images/blackpanther.jpg',
  },
  {
    title: 'Guardians of the Galaxy Vol. 2',
    description: 'De Guardians beleven opnieuw een episch avontuur in de ruimte.',
    image: '/images/guadians2.jpg',
  },
];

/**
 * Fotogallery component that displays a searchable gallery of movies.
 * Users can search for movies by title, and the gallery dynamically updates based on the search term.
 * @returns {JSX.Element} - The JSX content for the Fotogallery component.
 */
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

  return (
    <main className="fotogallery-container">
      {/* Page Title and Description */}
      <header>
        <Typography variant="h4" className="fotogallery-title">
          FotoGallerij - Ontdek de Beste Films
        </Typography>
        <Typography variant="h6" className="fotogallery-description">
          Blader door onze collectie van topfilms en ontdek nieuwe favorieten.
        </Typography>
      </header>

      {/* Search Functionality */}
      <section aria-labelledby="search-title" className="fotogallery-search">
        <Typography variant="h5" id="search-title">
          Zoek een film
        </Typography>
        <Box className="fotogallery-search-bar">
          <TextField
            label="Zoek een film"
            placeholder="Typ een filmtitel..."
            variant="outlined"
            fullWidth
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="fotogallery-search-input"
            aria-label="Zoek een film"
          />
        </Box>
      </section>

      {/* Movie Grid */}
      <section aria-labelledby="movies-title" className="fotogallery-movies">
        <Typography variant="h4" id="movies-title">
          Filmcollectie
        </Typography>
        <Box className="fotogallery-grid">
          {filteredMovies.length > 0 ? (
            filteredMovies.map((theater, index) => (
              <article key={index} className="fotogallery-movie">
                <CardComponent
                  title={theater.title}
                  description={theater.description}
                  image={theater.image}
                  alt={`Filmposter van ${theater.title}`}
                />
              </article>
            ))
          ) : (
            <Typography variant="body1" className="fotogallery-no-results">
              Geen films gevonden. Probeer een andere zoekterm.
            </Typography>
          )}
        </Box>
      </section>
    </main>
  );
}