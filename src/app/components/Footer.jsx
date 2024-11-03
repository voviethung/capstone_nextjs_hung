import styles from '../../app/styles/scss/_Footer.module.scss'; // Import SCSS

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.column}>
          <h4>Categories</h4>
          <ul>
            <li>Graphics & Design</li>
            <li>Digital Marketing</li>
            <li>Writing & Translation</li>
            <li>Video & Animation</li>
            <li>Music & Audio</li>
            <li>Programming & Tech</li>
            <li>AI Services</li>
            <li>Consulting</li>
            <li>Data</li>
            <li>Business</li>
            <li>Personal Growth & Hobbies</li>
            <li>Photography</li>
            <li>Finance</li>
            <li>End-to-End Projects</li>
            <li>Service Catalog</li>
          </ul>
        </div>

        <div className={styles.column}>
          <h4>For Clients</h4>
          <ul>
            <li>How Fiverr Works</li>
            <li>Customer Success Stories</li>
            <li>Trust & Safety</li>
            <li>Quality Guide</li>
            <li>Fiverr Learn</li>
            <li>Fiverr Guides</li>
            <li>Fiverr Answers</li>
          </ul>
        </div>

        <div className={styles.column}>
          <h4>For Freelancers</h4>
          <ul>
            <li>Become a Fiverr Freelancer</li>
            <li>Become an Agency</li>
            <li>Kickstart</li>
            <li>Community Hub</li>
            <li>Forum</li>
            <li>Events</li>
          </ul>
        </div>

        <div className={styles.column}>
          <h4>Business Solutions</h4>
          <ul>
            <li>Fiverr Pro</li>
            <li>Project Management Service</li>
            <li>ClearVoice</li>
            <li>Working Not Working</li>
            <li>AutoDS</li>
            <li>Fiverr Logo Maker</li>
            <li>Contact Sales</li>
          </ul>
        </div>

        <div className={styles.column}>
          <h4>Company</h4>
          <ul>
            <li>About Fiverr</li>
            <li>Help & Support</li>
            <li>Social Impact</li>
            <li>Careers</li>
            <li>Terms of Service</li>
            <li>Privacy Policy</li>
            <li>Partnerships</li>
            <li>Affiliates</li>
            <li>Invite a Friend</li>
            <li>Press & News</li>
            <li>Investor Relations</li>
          </ul>
        </div>
      </div>
      
      <div className={styles.footerBottom}>
        <p>© Fiverr International Ltd. 2024</p>
        <div className={styles.socialIcons}>
          {/* Các biểu tượng mạng xã hội */}
          <span className="icon">TikTok</span>
          <span className="icon">Instagram</span>
          <span className="icon">Facebook</span>
          <span className="icon">Twitter </span>
          <span className="icon">LinkedIn</span>
        </div>
      </div>
    </footer>
  );
}

