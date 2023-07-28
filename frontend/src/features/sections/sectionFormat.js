import { Link } from "react-router-dom"

const SectionFormat = () => {
    const content = (
        <div className="section-format">
            <Link to="/customers/update">
                {/* section.sectionName */}
            </Link>
        </div>
    )
    return content
}

export default SectionFormat