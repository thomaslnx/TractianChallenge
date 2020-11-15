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

  async update(req, res) {
    const adminData = req.body;
    const { _id } = req.params;

    await AdminUser.findByIdAndUpdate(_id, adminData, { new: true }, function(err, result) {
    if(err) {
      return res.json(err);
    } else {
      return res.json(result);
    } 
  });

    return ;
  };

  async index(req, res) {
    const adminData = await AdminUser.find();

    return res.json(adminData);
  };

  async delete(req, res) {
    const { _id } = req.params;

    const deletedAdminUser = await AdminUser.deleteOne({ _id });

    if (deletedAdminUser.ok === 1) {
      return res.json({ message: 'User removed successfuly' })
    } else {
      return res.json({ message: 'Error during deletion'});
    }
  };
}

export default new AdminUserController();