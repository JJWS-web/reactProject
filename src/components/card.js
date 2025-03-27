import React, { Component } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import '../styles/card.css';

class CardComponent extends Component {
  /**
   * Renders a card component that displays information about a theater.
   * Includes the theater's name, address, phone number, email, and an optional image.
   * @returns {JSX.Element} - The JSX content for the card component.
   */
  render() {
    const { name, address, phone, email, image } = this.props;

    return (
      <Box className="card-container">
        <Card className="card-element" variant="outlined">
          {/* Displays the theater's image if provided */}
          {image && (
            <CardMedia
              component="img"
              height="200"
              image={image}
              alt={name}
              className="card-image"
            />
          )}
          <CardContent>
            {/* Displays the theater's name */}
            <Typography variant="h5" component="div">
              🎥 {name}
            </Typography>

            {/* Displays the theater's address */}
            <Typography className="card-address">
              {address}
            </Typography>

            {/* Displays the theater's phone number and email */}
            <Typography variant="body2">
              📞 {phone}
              <br />
              ✉️ {email}
            </Typography>
          </CardContent>
        </Card>
      </Box>
    );
  }
}

export default CardComponent;