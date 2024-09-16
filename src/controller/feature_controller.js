const featureDomain = require('../domain/feature_domain');

exports.getAllFeatures = (req, res) => {
    const features = featureDomain.listAllFeatures();
    res.json(features);
};

exports.toggleFeature = (req, res) => {
    const { featureName, isEnabled } = req.body;
    const updatedFeature = featureDomain.toggleFeature(featureName, isEnabled);
    res.json(updatedFeature);
};
