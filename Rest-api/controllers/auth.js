function register(req, res, next) {
    const { tel, email, username, password, repeatPassword } = req.body;

    // Check for mismatched passwords
    if (password !== repeatPassword) {
        return res.status(400).send({ message: 'Passwords do not match!' });
    }

    userModel.create({ tel, email, username, password })
        .then((createdUser) => {
            const user = bsonToJson(createdUser);
            const sanitizedUser = removePassword(user);

            try {
                const token = utils.jwt.createToken({ id: sanitizedUser._id });
                const isProduction = process.env.NODE_ENV === 'production';

                res.cookie(authCookieName, token, {
                    httpOnly: true,
                    sameSite: isProduction ? 'none' : 'lax',
                    secure: isProduction,
                });

                res.status(200).send(sanitizedUser);
            } catch (err) {
                next(err); // Handle token creation errors
            }
        })
        .catch(err => {
            if (err.code === 11000) { // Duplicate key error
                return res.status(409).send({ message: 'Email or username already registered!' });
            }
            next(err); // Pass other errors to the error handler
        });
}
