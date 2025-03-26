import React, { Component } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import '../styles/card.css';

class CardComponent extends Component {
  render() {
    const { name, address, phone, email, image } = this.props;
    
    return (
      <Box className="card-container">
        <Card className="card-element" variant="outlined">
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
            <Typography variant="h5" component="div">
              🎥 {name}
            </Typography>
            <Typography className="card-address">
              {address}
            </Typography>
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