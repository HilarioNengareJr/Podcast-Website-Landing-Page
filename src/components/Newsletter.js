import React from 'react';
import './Newsletter.css';

const Newsletter = () => {
    return (
        <section className='newsletter' id='Newsletter'>
            <div className='newsletter-card'>
                <div className="card-content">
                    <h3 className="h3 card-title">Sign Up For Our Newsletter. It’s Free!</h3>

                    <p className="card-text">
                        Stay up-to-date with our latest news and updates. We'll send you valuable insights and tips on a regular basis.
                    </p>
                </div>
                <form action="" className="card-form" data-form="">
                    <div className="input-field-container">
                        <input type="email" name="email_address" placeholder="Your Email Address" required="" className="input-field" data-input="" />
                        <button type="submit" className="btn btn-primary" disabled="" data-submit="">Subscribe</button>
                    </div>
                </form>
            </div>
        </section>
    );
}

export default Newsletter;
