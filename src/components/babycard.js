import React, { Component } from 'react';
import '../styles/babycard.css';

/**
 * a seductive wrapper for your juicy content.
 * Wrap your content in luxury with shadows, padding, and curves that don’t quit.
 */
export class Card extends Component {
  render() {
    return (
      <div className="bg-white rounded-2xl shadow-lg p-4">
        {this.props.children}
      </div>
    );
  }
}

/**
 *  where your content flirts with attention.
 * This top section knows how to tease with a subtle border and spacing.
 */
export class CardHeader extends Component {
  render() {
    return (
      <div className="mb-2 border-b pb-2">
        {this.props.children}
      </div>
    );
  }
}

/**
 * the body that holds it all together.
 * Innocent on the outside, but ready to deliver the goods within.
 */
export class CardContent extends Component {
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}
