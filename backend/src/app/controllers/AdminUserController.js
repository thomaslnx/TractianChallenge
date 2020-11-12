import AdminUser from '../schemas/AdminUser';

class AdminUserController {
  async store(req, res) {
    const { name, position, company } = req.body;

    const adminUser = await AdminUser.create({
      name,
      position,
      company
    })

    return res.json(adminUser);
  }
}

export default new AdminUserController();