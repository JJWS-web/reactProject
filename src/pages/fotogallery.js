import React, { Component } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import CardComponent from '../components/cardimage.js';
import { Helmet } from 'react-helmet';

import '../styles/fotogallery.css';

export default class Fotogallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
    };
  }

  // Moved theaters into the class
  theaters = [
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

  handleSearchChange = (e) => {
    this.setState({ searchTerm: e.target.value });
  };

  getFilteredMovies() {
    const { searchTerm } = this.state;
    return this.theaters.filter((theater) =>
      theater.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }

  render() {
    const filteredMovies = this.getFilteredMovies();

    return (
      
      <main className="fotogallery-container">
        <helmet>
        <Helmet>
  <title>FotoGallerij - Ontdek de Beste Films</title>
  <meta
    name="description"
    content="Blader door onze visuele galerij van populaire films zoals Marvel, Black Panther, Spider-Man en meer. Zoek je favoriete films en ontdek nieuwe toppers."
  />
</Helmet>

          <Typography variant="h4" className="fotogallery-title">
            FotoGallerij - Ontdek de Beste Films
          </Typography>
          <Typography variant="h6" className="fotogallery-description">
            Blader door onze collectie van topfilms en ontdek nieuwe favorieten.
          </Typography>
        </helmet>

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
              value={this.state.searchTerm}
              onChange={this.handleSearchChange}
              className="fotogallery-search-input"
              aria-label="Zoek een film"
            />
          </Box>
        </section>

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
}
