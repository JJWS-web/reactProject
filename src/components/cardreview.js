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

  getStoredRating = () => {
    const storedRating = localStorage.getItem(`rating-${this.props.title}`);
    return storedRating ? parseFloat(storedRating) : null;
  };

  getStoredReview = () => {
    const storedReview = localStorage.getItem(`review-${this.props.title}`);
    return storedReview || '';
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleRatingChange = (event, newValue) => {
    this.setState({ rating: newValue });
    localStorage.setItem(`rating-${this.props.title}`, newValue);

    if (this.props.onRatingUpdate) {
      this.props.onRatingUpdate(this.props.title, newValue);
    }
  };

  handleReviewChange = (event) => {
    const newReview = event.target.value;
    this.setState({ reviewText: newReview });
    localStorage.setItem(`review-${this.props.title}`, newReview);
  };

  render() {
    const { title, description, image } = this.props;
    const { open, rating, reviewText } = this.state;

    return (
      <Box>
        <Card
          className="card-container"
          onClick={this.handleOpen}
        >
          <CardMedia component="img" image={image} alt={title} />
        </Card>

        <Modal
          open={open}
          onClose={this.handleClose}
          className="modal-boxs"
        >
          <Box className="modal-contents">
            <CardMedia
              component="img"
              className="card-image"
              image={image}
              alt={title}
            />
            <Typography variant="h5" component="div" className="title-typography">
              {title}
            </Typography>
            <Typography variant="body2" className="description-typography">
              {description}
            </Typography>

            <Box className="rating-box">
              <Rating
                name="user-rating"
                value={rating}
                precision={0.5}
                onChange={this.handleRatingChange}
              />
            </Box>

            <TextField
              label="Your Review"
              multiline
              rows={3}
              value={reviewText}
              onChange={this.handleReviewChange}
              className="review-textfield"
            />

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
