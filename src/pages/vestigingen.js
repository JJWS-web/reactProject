import React, { Component } from 'react';
import CardComponent from '../components/card.js';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import '../styles/vestigingen.css';

class Vestigingen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
    };

    // Predefined list of theaters containing details such as name, address, phone, and email
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
   * This method handles changes to the search input field.
   * It updates the state with the new search term entered by the user.
   * This state is then used to filter the displayed theaters dynamically.
   * @param {object} e - The event object containing the input value.
   */
  handleSearchChange = (e) => {
    this.setState({ searchTerm: e.target.value });
  };

  /**
   * This method filters the list of theaters based on the current search term.
   * It checks if the search term matches any part of the theater name, address, or email.
   * The filtered list is then used to display the appropriate cards.
   * @returns {Array} - The filtered list of theater objects.
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
   * The render method is responsible for rendering the component's UI.
   * It includes a title, a description, a search bar for filtering theaters, and a grid of theater cards.
   * The grid dynamically updates based on the filtered list of theaters from getFilteredTheaters().
   * If no theaters match the search term, a fallback message is displayed.
   * @returns {JSX.Element} - The JSX to be rendered by the component.
   */
  render() {
    const filteredTheaters = this.getFilteredTheaters();

    return (
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
              />
            ))
          ) : (
            <Typography variant="body1" className="vestigingen-no-results">
              Geen bioscopen gevonden.
            </Typography>
          )}
        </Box>
      </Box>
    );
  }
}

export default Vestigingen;