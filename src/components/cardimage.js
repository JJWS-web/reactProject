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

  /**
   * Opens the modal when the card is clicked.
   */
  handleOpen = () => {
    this.setState({ open: true });
  };

  /**
   * Closes the modal when the close button is clicked or the modal is dismissed.
   */
  handleClose = () => {
    this.setState({ open: false });
  };

  /**
   * Renders a card component that displays an image and opens a modal with more details when clicked.
   * The modal includes the title, description, and a close button.
   * @returns {JSX.Element} - The JSX content for the card component.
   */
  render() {
    const { title, description, image } = this.props;
    const { open } = this.state;

    return (
      <Box className="card-wrapper">
        {/* Card Element */}
        <Card className="card-element" variant="outlined" onClick={this.handleOpen}>
          <CardMedia component="img" className="card-thumbnail" image={image} alt={title} />
        </Card>

        {/* Modal Element */}
        <Modal open={open} onClose={this.handleClose} className="modal-wrapper">
          <Box className="modal-box">
            {/* Modal Image */}
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

            {/* Close Button */}
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