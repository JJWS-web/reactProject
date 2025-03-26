import React, { Component } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import '../styles/cardimage.css';

class CardComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { title, description, image } = this.props;
    const { open } = this.state;

    return (
      <Box className="card-wrapper">
        <Card className="card-element" variant="outlined" onClick={this.handleOpen}>
          <CardMedia component="img" className="card-thumbnail" image={image} alt={title} />
        </Card>

        <Modal open={open} onClose={this.handleClose} className="modal-wrapper">
          <Box className="modal-box">
            <CardMedia component="img" className="modal-thumbnail" image={image} alt={title} />

            {/* Modal Content */}
            <Box className="modal-content">
              <Typography variant="h5" component="div" className="modal-title">
                {title}
              </Typography>
              <Typography variant="body2" className="modal-description">
                {description}
              </Typography>
            </Box>

            {/* Separate Close Button */}
            <Box className="modal-footer">
              <Button onClick={this.handleClose} variant="contained" className="modal-close-button">
                Close
              </Button>
            </Box>
          </Box>
        </Modal>
      </Box>
    );
  }
}

export default CardComponent;
