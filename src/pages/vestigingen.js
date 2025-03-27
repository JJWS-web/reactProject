import React, { Component } from 'react';
import CardComponent from '../components/card.js';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { Helmet } from 'react-helmet';
import '../styles/vestigingen.css';

class Vestigingen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
    };

    /**
     * Predefined list of theaters containing details such as name, address, phone, and email.
     * This data is used to display the list of theaters and filter them based on user input.
     */
    this.theaters = [
      { name: 'Cinema Amsterdam', address: '123 Filmstraat, Amsterdam', phone: '+31 20 123 4567', email: 'info@cinemaamsterdam.nl' },
      { name: 'Rotterdam Movie Palace', address: '456 Movieplein, Rotterdam', phone: '+31 10 987 6543', email: 'contact@rotterdammovies.nl' },
      { name: 'Utrecht Cineplex', address: '789 Theaterlaan, Utrecht', phone: '+31 30 555 6789', email: 'utrecht@cineplex.nl' },
      { name: 'The Hague Cinema', address: '101 Cineboulevard, The Hague', phone: '+31 70 123 4567', email: 'contact@thehaguecinema.nl' },
      { name: 'Eindhoven Filmhouse', address: '202 Light Square, Eindhoven', phone: '+31 40 678 1234', email: 'info@eindhovenfilm.nl' },
      { name: 'Maastricht CineCity', address: '303 Vrijthof, Maastricht', phone: '+31 43 876 5432', email: 'info@cinecitymaastricht.nl' },
      { name: 'Groningen ScreenCity', address: '404 Filmplein, Groningen', phone: '+31 50 234 5678', email: 'contact@groningenscreen.nl' },
      { name: 'Leiden MovieHouse', address: '505 University Square, Leiden', phone: '+31 71 345 6789', email: 'leiden@moviehouse.nl' },
      { name: 'Nijmegen CineWorld', address: '606 Old Town Theater, Nijmegen', phone: '+31 24 456 7890', email: 'nijmegen@cineworld.nl' },
    ];
  }

  /**
   * Handles changes to the search input field.
   * Updates the state with the new search term entered by the user.
   * This state is then used to filter the displayed theaters dynamically.
   * @param {object} e - The event object containing the input value.
   */
  handleSearchChange = (e) => {
    this.setState({ searchTerm: e.target.value });
  };

  /**
   * Filters the list of theaters based on the search term entered by the user.
   * The search term is matched against the name, address, or email of the theaters in a case-insensitive manner.
   * @returns {Array} - The filtered list of theaters.
   */
  getFilteredTheaters = () => {
    const { searchTerm } = this.state;
    return this.theaters.filter(
      (theater) =>
        theater.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        theater.address.toLowerCase().includes(searchTerm.toLowerCase()) ||
        theater.email.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  /**
   * Renders the component's UI.
   * Includes a title, description, search bar, and a grid of theater cards.
   * The grid dynamically updates based on the filtered list of theaters from getFilteredTheaters().
   * If no theaters match the search term, a fallback message is displayed.
   * @returns {JSX.Element} - The JSX to be rendered by the component.
   */
  render() {
    const filteredTheaters = this.getFilteredTheaters();

    return (
      <>
        {/* SEO Meta tags */}
        <Helmet>
          <title>Bioscopen Vestigingen - Zoek je favoriete bioscopen</title>
          <meta name="description" content="Ontdek bioscopen in Nederland, zoek op locatie, naam of e-mail en vind jouw ideale theater." />
          <meta name="robots" content="index, follow" />
        </Helmet>

        <Box className="vestigingen-container">
          {/* Title and Description */}
          <Typography variant="h3" className="vestigingen-title">
            Vestigingen
          </Typography>
          <Typography variant="body1" className="vestigingen-description">
            Ontdek onze bioscopen en hun locaties.
          </Typography>

          {/* Search Bar */}
          <Box className="vestigingen-search-bar">
            <TextField
              label="Zoek bioscoop"
              placeholder="Typ een plaatsnaam, bioscoopnaam of email"
              variant="outlined"
              fullWidth
              value={this.state.searchTerm}
              onChange={this.handleSearchChange}
              className="vestigingen-search-input"
              aria-label="Zoek bioscoop"
            />
          </Box>

          {/* Cards Grid */}
          <Box className="vestigingen-grid">
            {filteredTheaters.length > 0 ? (
              filteredTheaters.map((theater, index) => (
                <CardComponent
                  key={index}
                  name={theater.name}
                  address={theater.address}
                  phone={theater.phone}
                  email={theater.email}
                  aria-label={`Theater: ${theater.name}, located at ${theater.address}`}
                />
              ))
            ) : (
              <Typography variant="body1" className="vestigingen-no-results">
                Geen bioscopen gevonden.
              </Typography>
            )}
          </Box>
        </Box>
      </>
    );
  }
}

export default Vestigingen;