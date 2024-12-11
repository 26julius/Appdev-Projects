export default function Developer() {
    return (
        <>
            <div className="developer-container">
                <div className="company-info">
                    <h1>Keystaxx</h1>
                    <p>
                        "Crafting Exceptional Typing Experiences: At Keystaxx, we design and sell artisan mechanical and regular keyboards,
                        blending functionality, personalization, and artistry to meet the needs of every user. Our commitment is to 
                        create high-quality, customizable typing experiences for both enthusiasts and professionals alike."
                    </p>
                </div>

                <div className="developer-profiles">
                    <h2>Meet the Developers</h2>
                    
                    <div className="developer-profile">
                        <h3>Philip</h3>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Portrait_of_Philip_II_of_Spain_by_Sofonisba_Anguissola_-_002b.jpg/220px-Portrait_of_Philip_II_of_Spain_by_Sofonisba_Anguissola_-_002b.jpg" alt="Philip" className="developer-photo"/>
                        <p>
                            Philip is a full-stack web developer with a passion for creating seamless and interactive user experiences. 
                            With years of experience in both front-end and back-end technologies, he specializes in React, Node.js, and database management, ensuring that web applications are both functional and user-friendly. 
                            Philip thrives on tackling complex problems and delivering innovative solutions.
                        </p>
                        <p>
                            <strong>Key Skills:</strong> React, JavaScript, Node.js, MongoDB, REST APIs, UX/UI Design
                        </p>
                        <p>
                            <strong>Passion Projects:</strong> Philip often contributes to open-source projects and loves experimenting with new technologies like GraphQL and serverless architectures. Outside of work, he enjoys coding for fun, learning new programming languages, and building side projects related to IoT and smart home technology.
                        </p>
                    </div>

                    <div className="developer-profile">
                        <h3>Julius</h3>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdeU2TicNj9qP4vJD127L2rMGZDOZF_xWyZA&s" alt="Julius" className="developer-photo"/>
                        <p>
                            Julius is a creative web designer with a keen eye for detail and a strong background in front-end development. 
                            He works closely with both designers and developers to ensure that web applications are not only functional but also visually captivating and user-friendly. Julius enjoys the challenge of turning complex ideas into elegant, intuitive designs.
                        </p>
                        <p>
                            <strong>Key Skills:</strong> HTML5, CSS3, JavaScript, React, Responsive Design, Adobe XD, Figma
                        </p>
                        <p>
                            <strong>Design Philosophy:</strong> Julius believes that design should serve the user. He focuses on creating clean, responsive, and accessible designs that enhance the overall user experience. When he's not designing, he's diving into typography, animation, and web accessibility best practices.
                        </p>
                    </div>
                </div>

                <div className="skills-technologies">
                    <h2>Our Skills and Technologies</h2>
                    <p>At Keystaxx, we are constantly evolving with the latest technologies and best practices to ensure we deliver the best results. Our tech stack includes:</p>
                    <ul>
                        <li><strong>Front-end:</strong> HTML5, CSS3, JavaScript, React.js</li>
                        <li><strong>Back-end:</strong> Node.js, Express, MongoDB</li>
                        <li><strong>Version Control:</strong> Git, GitHub</li>
                        <li><strong>Design:</strong> Figma, Adobe XD, Photoshop</li>
                        <li><strong>APIs:</strong> RESTful APIs, GraphQL</li>
                        <li><strong>Testing:</strong> Jest, Mocha, Cypress</li>
                        <li><strong>DevOps:</strong> Docker, Kubernetes</li>
                    </ul>
                </div>

                <div className="contact-info">
                    <h2>Contact Us</h2>
                    <p>We'd love to hear from you! Whether you're interested in collaborating, have a project idea, or just want to chat about tech, feel free to contact us:</p>
                    <ul>
                        <li>Email: <a href="mailto:info@keystaxx.com">info@keystaxx.com</a></li>
                        <li>LinkedIn: <a href="https://linkedin.com/in/philip" target="_blank" rel="noopener noreferrer">Philip</a>, 
                            <a href="https://linkedin.com/in/julius" target="_blank" rel="noopener noreferrer">Julius</a></li>
                    </ul>
                    <p>Follow us on social media for the latest updates:</p>
                    <ul>
                        <li>Twitter: <a href="https://twitter.com/keystaxx" target="_blank" rel="noopener noreferrer">@Keystaxx</a></li>
                        <li>Instagram: <a href="https://instagram.com/keystaxx" target="_blank" rel="noopener noreferrer">@Keystaxx</a></li>
                    </ul>
                </div>
            </div>
        </>
    );
}
