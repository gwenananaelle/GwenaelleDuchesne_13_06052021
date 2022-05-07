import PropTypes from 'prop-types'

function FeatureItem({ icon, altText, title, description }) {
    return (
        <div className="feature-item">
            <img src={icon} alt={altText} className="feature-icon" />
            <h3 className="feature-item-title">{title}</h3>
            <p>{description}</p>
        </div>
    )
}
export default FeatureItem

FeatureItem.propTypes = {
    icon: PropTypes.string,
    altText: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
}
