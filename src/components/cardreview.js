import React, { Component } from 'react';
import '../styles/cardreview.css';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Rating from '@mui/material/Rating';
import TextField from '@mui/material/TextField';

class CardComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      rating: this.getStoredRating() || 0,
      reviewText: this.getStoredReview() || '',
    };
  }

  /**
   * Retrieves the stored rating for the current card from localStorage.
   * @returns {number|null} - The stored rating value or null if not found.
   */
  getStoredRating = () => {
    const storedRating = localStorage.getItem(`rating-${this.props.title}`);
    return storedRating ? parseFloat(storedRating) : null;
  };

  /**
   * Retrieves the stored review text for the current card from localStorage.
   * @returns {string} - The stored review text or an empty string if not found.
   */
  getStoredReview = () => {
    const storedReview = localStorage.getItem(`review-${this.props.title}`);
    return storedReview || '';
  };

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
   * Handles changes to the rating value.
   * Updates the state and stores the new rating in localStorage.
   * Notifies the parent component about the rating update if a callback is provided.
   * @param {object} event - The event object.
   * @param {number} newValue - The new rating value.
   */
  handleRatingChange = (event, newValue) => {
    this.setState({ rating: newValue });
    localStorage.setItem(`rating-${this.props.title}`, newValue);

    if (this.props.onRatingUpdate) {
      this.props.onRatingUpdate(this.props.title, newValue);
    }
  };

  /**
   * Handles changes to the review text.
   * Updates the state and stores the new review text in localStorage.
   * @param {object} event - The event object containing the new review text.
   */
  handleReviewChange = (event) => {
    const newReview = event.target.value;
    this.setState({ reviewText: newReview });
    localStorage.setItem(`review-${this.props.title}`, newReview);
  };

  /**
   * Renders the card component.
   * Displays an image, title, description, rating, and review input inside a modal.
   * @returns {JSX.Element} - The JSX content for the card component.
   */
  render() {
    const { title, description, image } = this.props;
    const { open, rating, reviewText } = this.state;

    return (
      <Box>
        {/* Card Element */}
        <Card className="card-container" onClick={this.handleOpen}>
          <CardMedia component="img" image={image} alt={title} />
        </Card>

        {/* Modal Element */}
        <Modal open={open} onClose={this.handleClose} className="modal-boxs">
          <Box className="modal-contents">
            {/* Modal Image */}
            <CardMedia component="img" className="card-image" image={image} alt={title} />

            {/* Modal Title */}
            <Typography variant="h5" component="div" className="title-typography">
              {title}
            </Typography>

            {/* Modal Description */}
            <Typography variant="body2" className="description-typography">
              {description}
            </Typography>

            {/* Rating Input */}
            <Box className="rating-box">
              <Rating
                name="user-rating"
                value={rating}
                precision={0.5}
                onChange={this.handleRatingChange}
              />
            </Box>

            {/* Review Input */}
            <TextField
              label="Your Review"
              multiline
              rows={3}
              value={reviewText}
              onChange={this.handleReviewChange}
              className="review-textfield"
            />

            {/* Close Button */}
            <Button onClick={this.handleClose} className="close-button" variant="contained" fullWidth>
              Close
            </Button>
          </Box>
        </Modal>
      </Box>
    );
  }
}

export default CardComponent;