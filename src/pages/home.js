import React, { Component } from 'react';
import { Card, CardHeader, CardContent } from '../components/babycard.js';
import '../styles/home.css';

export default class Home extends Component {
  render() {
    return (
      <main className="home">

        <header>
          <h1>Welcome to Our Website</h1>
          <p>Explore our features and learn more about what we offer.</p>
        </header>

        <section className="cardGrid">
          <Card className="card">
            <CardHeader>
              <h2>Feature 1</h2>
            </CardHeader>
            <CardContent>
              <p>Learn about our amazing first feature that will make your experience better.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum.</p>
            </CardContent>
          </Card>

          <Card className="card">
            <CardHeader>
              <h2>Feature 2</h2>
            </CardHeader>
            <CardContent>
              <p>Discover how our second feature can help you achieve your goals.</p>
              <p>Quisque placerat metus et est feugiat, sed ultricies dolor tincidunt. Fusce suscipit tortor eget felis.</p>
            </CardContent>
          </Card>

          <Card className="card">
            <CardHeader>
              <h2>Feature 3</h2>
            </CardHeader>
            <CardContent>
              <p>Check out our third feature, designed with you in mind.</p>
              <p>Nam ac libero suscipit, facilisis elit nec, dictum augue. Integer vel sapien ut lectus volutpat.</p>
            </CardContent>
          </Card>

          <Card className="card">
            <CardHeader>
              <h2>Feature 4</h2>
            </CardHeader>
            <CardContent>
              <p>Experience the benefits of our fourth feature, tailored for efficiency.</p>
              <p>Curabitur auctor, ligula sit amet feugiat tincidunt, nunc lacus tempor massa, ut venenatis nisl dolor at metus.</p>
            </CardContent>
          </Card>

          <Card className="card">
            <CardHeader>
              <h2>Feature 5</h2>
            </CardHeader>
            <CardContent>
              <p>Our fifth feature brings you the best performance enhancements.</p>
              <p>Donec tincidunt quam sit amet justo feugiat, eget laoreet justo laoreet. Proin accumsan nunc et velit vestibulum.</p>
            </CardContent>
          </Card>
        </section>

        <footer>
          <p>&copy; TOANO Builder. All rights reserved.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </footer>

      </main>
    );
  }
}
