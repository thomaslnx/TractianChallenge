import User from '../schemas/User';
import AdminUser from '../schemas/AdminUser';

class UserController {
  async store(req, res) {
    const { admin_user, name, email } = req.body;

    const isAdmin = await AdminUser.findOne({ name: admin_user });

    if (isAdmin === null || isAdmin.position !== 'Manager') {
      return res.status(400).json({ error: 'Only admins can add new users'});
    }

    const user = await User.create({
      name,
      email
    })

    return res.json(user);
  }

  async index(req, res) {
    const userData = await User.find();

    return res.json(userData);
  };

  async update(req, res) {
    const userData = req.body;
    const { _id } = req.params;

    await User.findByIdAndUpdate(_id, userData, { new: true }, function(err, result) {
      if(err) {
        return res.json(err);
      } else {
        return res.json(result);
      }
    });

    return;
  };

  async delete(req, res) {
    const { _id } = req.params;

    const deletedUser = await User.deleteOne({ _id });

    if (deletedUser.ok === 1) {
      return res.json({ message: 'User removed successfuly' })
    } else {
      return res.json({ message: 'Error during deletion'});
    }

  };
}

export default new UserController();