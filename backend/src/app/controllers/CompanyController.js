import Company from '../schemas/Company';
import AdminUser from '../schemas/AdminUser';

class CompanyController {
  async index(req, res) {
    const companies = await Company.find();

    return res.json(companies);
  }

  async store(req, res) {
    const { admin_user, name, business_type, city, state, state_initials, subsidiaries } = req.body;

    const adminExists = await AdminUser.findOne({ name: admin_user });

    if (adminExists === null || adminExists.position !== 'Manager') {
      return res.status(400).json({ error: 'Only admins can add new companies'});
    }

    const company = await Company.create({
      admin_user,
      name,
      business_type,
      subsidiaries,
      city,
      state,
      state_initials,
    }).catch((error) => {
      return res.status(400).json({ message: 'As iniciais do estado devem ter apenas duas letras!'})
    });

    return res.json(company);
  }
}

export default new CompanyController();