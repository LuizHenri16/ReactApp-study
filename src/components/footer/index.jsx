import "./style.css"

export function Footer() {
    return (
        <>
            <footer>

            <div className="links-section">

                <ul className="Company-section">
                    <h2>Company</h2>
                    <li><a href="#" target="_blank">Team</a></li>
                    <li><a href="#" target="_blank">History</a></li>
                    <li><a href="#" target="_blank">Contact us</a></li>
                    <li><a href="#" target="_blank">Locations</a></li>
                </ul>

                <ul className="Features-section">
                    <h2>Features</h2>
                    <li><a href="#" target="_blank">Cool stuff</a></li>
                    <li><a href="#" target="_blank">Random feature</a></li>
                    <li><a href="#" target="_blank">Team feature</a></li>
                    <li><a href="#" target="_blank">Developer stuff</a></li>
                    <li><a href="#" target="_blank">Another one</a></li>
                </ul>

                <ul className="Recourses-section">
                    <h2>Recourses</h2>
                    <li><a href="#" target="_blank">Resource</a></li>
                    <li><a href="#" target="_blank">Resource name</a></li>
                    <li><a href="#" target="_blank">Another resource</a></li>
                    <li><a href="#" target="_blank">Final resource</a></li>
                </ul>

                <ul className="Legal-section">
                    <h2>Legal</h2>
                    <li><a href="http://" target="_blank">Privacy policy</a></li>
                    <li><a href="http://" target="_blank">Terms of use</a></li>
                </ul>
            </div>

            <div className="copyright-section">
                <p>Copyright © Your Website 2022.</p>
            </div>

            </footer>
        </>
    )
}