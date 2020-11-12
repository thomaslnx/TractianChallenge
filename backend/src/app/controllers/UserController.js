import User from '../schemas/User';
import AdminUser from '../schemas/AdminUser';

class UserController {
  async store(req, res) {
    const { admin_user, name, email } = req.body;

    const adminExists = await AdminUser.findOne({ name: admin_user });

    if (adminExists === null || adminExists.position !== 'Manager') {
      return res.status(400).json({ error: 'Only admins can add new users'});
    }

    const user = await User.create({
      name,
      email
    })

    return res.json(user);
  }
}

export default new UserController();