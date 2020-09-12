import userModel from '../../model/user';

const createUser = (req, res) => {
  const {name} = req.body;
  const {role} = req.body;
  console.log('BODY :: ', req.body, req.params);

  return userModel
    .post({
      data: {
        s_name: name,
        s_role: role,
      },
    })
    .then(() => res.status(200).send('Success..'))
    .catch((err) => {
      console.log(err);
      res.status(500).send('Failure.......');
    });
};

export default {
  createUser,
};
