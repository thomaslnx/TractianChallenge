const CompanyBranch = require('../schemas/CompanyBranch');
const AdminUser = require('../schemas/AdminUser');
const BranchAssets = require('../schemas/BranchAssets');

class BranchAssetsController {
  async store(req, res) {
    const { admin_user, name, description, branchOwner, model, status, healthscore } = req.body;
    let image;

    const isAdmin = await AdminUser.findOne({ name: admin_user });

    // check if user is admin
    if (isAdmin === null || isAdmin.position !== 'Manager') {
      return res.status(400).json({ error: 'Only admins can add new assets'});
    }

    // Check if company id is valid
    if (branchOwner.length !== 24) {
      return res.status(400).json({
        error: 'Id is not valid'
      })
    }
    const branchExists = await CompanyBranch.findById(branchOwner);

    // check if company exist based on id
    if (branchExists === null) {
      return res.status(400).json({ error: 'Branch not found!' });
    }

    if (req.file.path) {
      image = req.file.path;
    };

    const assets = await BranchAssets.create({
      name,
      image,
      description,
      branchOwner,
      model,
      status,
      healthscore,
    });

    return res.json(assets);
  }
}

module.exports = new BranchAssetsController();