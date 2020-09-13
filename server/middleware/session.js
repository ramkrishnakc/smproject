import session from 'express-session';

const useSession = (app) => {
  app.use(
    session({
      secret: '5m@r-89-45op!9893-ch@ng@op0-908op-test',
      resave: false,
      saveUninitialized: false,
      cookie: {
        maxAge: 30 * 60 * 1000, // 30 minutes
        sameSite: true,
        secure: app.get('env') === 'production',
      },
    })
  );
};

export default useSession;
