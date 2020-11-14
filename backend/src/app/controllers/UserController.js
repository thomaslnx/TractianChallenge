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

  async index(req, res) {
    const userData = await User.find();

    return res.json({userData});
  };

  async update(req, res) {
    const { name, email } = req.body;
    const { _id } = req.params;

    if (!email) {
      await User.findByIdAndUpdate(_id, { name }, { new: true }, function(err, result) {
        if(err) {
          return res.json(err);
        } else {
          return res.json(result);
        }
      });
    } else if (!name) {
      await User.findByIdAndUpdate(_id, { email }, { new: true }, function(err, result) {
        if(err) {
          return res.json(err);
        } else {
          return res.json(result);
        }
      })
    } else if (name && email) {
      await User.findByIdAndUpdate(_id, { name, email }, { new: true }, function(err, result) {
        if(err) {
          return res.json(err);
        } else {
          return res.json(result);
        }
      })
    }
    return;
  };

  async delete() {};
}

export default new UserController();