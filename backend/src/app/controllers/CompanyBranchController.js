const Company = require('../schemas/Company');
const CompanyBranch = require('../schemas/CompanyBranch');
const AdminUser = require('../schemas/AdminUser');

class CompanyBranchController {
  async store(req, res) {
    const { admin_user, name, business_type, headquarters, city, state, state_initials } = req.body;

    const isAdmin = await AdminUser.findOne({ name: admin_user });

    if (headquarters.length !== 24) {
      return res.status(400).json({
        error: 'Id is not valid'
      })
    }
    const companyExists = await Company.findById(headquarters);

    if (companyExists === null) {
      return res.status(400).json({ error: 'Company not found!' });
    }

    if (isAdmin === null || isAdmin.position !== 'Manager') {
      return res.status(400).json({ error: 'Only admins can add new companies'});
    }

    const companyBranch = await CompanyBranch.create({
      admin_user,
      name,
      business_type,
      headquarters,
      city,
      state,
      state_initials,
    }).catch((error) => {
      return res.status(400).json({ message: 'As iniciais do estado devem ter apenas duas letras!'})
    });

    return res.json(companyBranch);
  }

  async index(req, res) {
    const units = await CompanyBranch.find();

    return res.json(units);
  }
}

module.exports = new CompanyBranchController();