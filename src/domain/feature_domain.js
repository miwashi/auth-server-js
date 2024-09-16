const features = {
    featureX: false,
    featureY: true
};

const listAllFeatures = () => {
    return features;
};

const toggleFeature = (featureName, isEnabled) => {
    if (features.hasOwnProperty(featureName)) {
        features[featureName] = isEnabled;
    }
    return { featureName, isEnabled: features[featureName] };
};

module.exports = {
    listAllFeatures,
    toggleFeature
};
